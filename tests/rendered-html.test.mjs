import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the finished Pro Art site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<html lang="zh-Hant-HK">/);
  assert.match(html, /<title>Pro Art Company｜香港會所健身課程專業夥伴<\/title>/);
  assert.match(html, /將健康與快樂/);
  assert.match(html, /id="chapter-09"/);
  assert.equal((html.match(/data-transition=/g) || []).length, 9);
  assert.match(html, /4<sup>\+<\/sup>/);
  assert.match(html, /15<sup>\+<\/sup>/);
  assert.match(html, /導師團隊資料準備中/);
  assert.match(html, /proartcompanyhk@gmail\.com/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("ships finished assets and no starter preview", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);
  assert.match(page, /new Lenis/);
  assert.match(page, /ScrollTrigger/);
  assert.match(page, /WebGLRenderer/);
  assert.match(page, /transition:"push"/);
  assert.match(page, /transition:"pull"/);
  assert.match(layout, /og\.png/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await access(new URL("../public/og.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
