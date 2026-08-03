# Pro Art Company — 2026 Free Upgrade (Codex Task v4)

Upgrade the existing scroll world site to a **2026-grade lifestyle/wellness design** using **FREE techniques only** (no paid AI video APIs — the paid scroll-world pipeline is deferred). The site already works (9 chapters, Lenis, GSAP ScrollTrigger, WebGL particles, Pixar images, WhatsApp float, bottom bar). This pass makes it look unmistakably 2026.

Read `DESIGN.md` for approved experience. Read `app/page.tsx` + `app/globals.css` before changing anything.

## What to implement (2026 trends, all free)

1. **CSS scroll-driven animations** — the 2026 "free win": use `animation-timeline: view()` / `scroll()` so chapters get Apple-style scroll-scrubbed motion with plain CSS (no JS). Chrome/Edge stable since 2025; keep the existing GSAP effects as enhancement/fallback where they already work.
2. **Kinetic typography** — oversized expressive headlines; type that animates/moves with scroll (letter reveal, line masking, scale). Text should feel like the design, not a caption.
3. **View Transitions API** — cinematic chapter transitions (crossfade/slide between chapter states) where it improves the journey.
4. **Textured backgrounds** — replace flat color blocks with subtle canvas/parchment/grain texture (CSS gradients + noise via inline SVG data-URI, no external assets).
5. **Wellness 2026 palette discipline** — keep deep emerald #1E5B41 × gold #C8A45D on warm cream #F7F4EE, but make it feel "natural, grounded, calming" (soften harsh edges, earthy neutrals, generous negative space).
6. **Micro-interactions (restraint)** — small purposeful touches: button ripples, hover reveals, progress bar polish. Motion must guide, not distract. Respect `prefers-reduced-motion`.
7. **2D + 3D mix** — keep the WebGL world canvas but integrate it with the 2D typographic sections so the mix feels deliberate (e.g. particles respond to scroll, orbs echo chapter themes).

## Constraints (unchanged from before — do not break)

- 9-chapter scroll world structure with distinct transitions (keep working)
- Pixar-style images in `public/images/` (reuse; don't regenerate paid assets)
- Floating WhatsApp CTA bottom-right, prefilled message, phone +852 9680 3500, email proartcompanyhk@gmail.com
- Bottom bar with company info + office address
- NO partner clubhouse names/logos anywhere
- NO instructor names (team section stays placeholder)
- Mobile-first; iOS must not blank out; keep 60fps on mid-range phones
- Static export to GitHub Pages must keep working (`npm run build:github-pages` → `out/`); after your changes, rebuild and push the fresh static build to the `gh-pages` branch so the live preview URL updates. Commit source to `main`.

## Verify

- `npm run build:github-pages` passes, `npm test` passes
- Run dev server, check console clean, check mobile viewport
- Rebuild + push `gh-pages` so https://cassidy753.github.io/proartcompany/ reflects the new design
- Report: what changed, verification evidence, updated URL
