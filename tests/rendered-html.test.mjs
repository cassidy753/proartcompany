import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

const routes = [
  ["/", /健康生活，由屋苑開始。/],
  ["/courses", /五種課程，總有一堂適合您嘅住戶/],
  ["/partnership", /低風險、透明、可持續的合作模式/],
  ["/about", /由社區需要出發/],
  ["/contact", /課程合作查詢/],
];

for (const [path, expected] of routes) test(`renders ${path}`, async () => {
  const response = await render(path);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<html lang="zh-Hant-HK">/);
  assert.match(html, expected);
  for (const label of ["首頁", "課程", "合作模式", "關於我們", "聯絡"]) assert.match(html, new RegExp(`>${label}<`));
  assert.match(html, /WhatsApp 查詢合作/);
  assert.match(html, /proartcompanyhk@gmail\.com/);
  assert.doesNotMatch(html, /—|第 [0-9] 幕|chapter-09|codex-preview|Your site is taking shape/);
});

test("home keeps the four-scene motion stack", async () => {
  const page = await readFile(new URL("../app/components/home-world.tsx", import.meta.url), "utf8");
  assert.match(page, /new Lenis/);
  assert.match(page, /ScrollTrigger/);
  assert.match(page, /WebGLRenderer/);
  assert.match(page, /world-stage/);
  assert.match(page, /scrub: 1\.15/);
  assert.match(page, /group-yoga\.png/);
  assert.match(page, /group-linedance\.png/);
  assert.match(page, /group-zumba\.png/);
  assert.equal((page.match(/title:/g) || []).length, 4);
});

test("ships brand assets and no named partners or instructors", async () => {
  const files = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/courses/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/partnership/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/about/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/site.tsx", import.meta.url), "utf8"),
  ]);
  const source = files.join("\n");
  assert.match(source, /專業導師團隊資料準備中/);
  assert.doesNotMatch(source, /會所名稱|導師姓名/);
  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../public/images/hero-clubhouse.png", import.meta.url));
  for (const image of ["group-yoga.png", "group-linedance.png", "group-zumba.png", "group-pilates.png"])
    await access(new URL(`../public/images/${image}`, import.meta.url));
});
