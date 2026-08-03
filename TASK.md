# Pro Art Company — Hybrid Site Build (Codex Task v5)

Restructure the site from single-page scroll world to the **Hybrid architecture** (Scheme 3, approved by client): a **condensed Scroll World opening (4 scenes)** on the home page + **multi-page normal content** (Courses / Partnership / About / Contact). 

**PRIMARY SPEC: `ARCHITECTURE.md`** in this directory — read it fully and follow it exactly (page structure, per-page content, design direction, taste rules).

**DESIGN TASTE:** load and apply the `design-taste-frontend` skill (installed at `~/.agents/skills/design-taste-frontend/`). Declare your design read + dials (ARCHITECTURE.md gives them), then build anti-slop.

## What to build

1. **Navigation**: 5 items, single line, ≤80px: 首頁 · 課程 · 合作模式 · 關於我們 · 聯絡 + persistent「查詢合作」CTA (WhatsApp). Floating WhatsApp button bottom-right on every page.
2. **Home**: 4-scene scroll world opening (keep Lenis + GSAP + CSS scroll-driven animations + WebGL particles + Pixar images) → then normal content sections: course preview cards (→ courses page), trust numbers (4+ / 15+ / 5 / 60-40), partnership intro (→ partnership page), reserved instructor section, bottom bar.
3. **Courses page** `/courses`: 5 detailed course blocks (image + name + 2-3 line feature + suitable audience + badge), flexible arrangement note, CTA.
4. **Partnership page** `/partnership`: 60/40 split detail, 4-step process, why-us (4 points), trust numbers, privacy note («基於商業及私隱考慮，合作單位資料不作公開展示»), CTA.
5. **About page** `/about`: company intro (use `company-intro-draft.md` long version), vision, numbers, reserved instructor section, CTA.
6. **Contact page** `/contact`: phone +852 9680 3500 / WhatsApp (prefilled message「你好，我哋會所想查詢健身課程合作方案。」) / email proartcompanyhk@gmail.com / office address (Flat S, 10/F, Block 3, Kwun Tong Industrial Centre, 472–484 Kwun Tong Road, Kwun Tong, Kowloon) / enquiry form (WhatsApp or mailto).
7. **Bottom bar** on every page: company name, phone, email, address, copyright.

## Constraints (non-negotiable)

- NO partner clubhouse names/logos anywhere. NO instructor names (reserved placeholders only).
- Traditional Chinese (HK) primary; subtle English accents OK.
- Palette: deep emerald #1E5B41 × gold #C8A45D × cream #F7F4EE. Pixar-style images in `public/images/` (reuse; you may generate more with your image tool if needed for course/about pages).
- Mobile-first; 60fps on mid-range phones; iOS must not blank; respect `prefers-reduced-motion`.
- One CTA intent per label: use「查詢合作」consistently. Zero em-dashes in visible text. No section-number eyebrows. Nav single line.
- GitHub Pages static export must keep working (`npm run build:github-pages` → `out/`). After building, push the fresh static build to `gh-pages` branch so https://cassidy753.github.io/proartcompany/ updates. Commit source to `main`.

## Verify

- `npm run build:github-pages` passes, `npm test` passes (update tests for the new multi-page structure)
- Run dev server: check all 5 routes, console clean, mobile viewport
- Rebuild + push `gh-pages`; confirm live URL serves the new multi-page site
- Report: what you built, page routes, URL, what remains placeholder
