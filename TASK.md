# Pro Art Company — Taste Polish + Smooth Scroll World (Codex Task v6)

Continue from the hybrid architecture (ARCHITECTURE.md — still the structural spec). Client feedback on the current build:

1. **Direction is close** — keep the hybrid structure (4-scene scroll world home + multi-page).
2. **Apply the Taste skill hard.** Load `~/.agents/skills/design-taste-frontend/` and run the full anti-slop discipline + pre-flight check (Section 14) on the whole site. Declare your design read + dials (ARCHITECTURE.md provides them: VARIANCE 7 / MOTION 6 / DENSITY 3, premium-consumer wellness, deep green × gold). Fix anything the pre-flight flags.
3. **Scroll world must feel like a smooth customer experience, not choppy cuts.** The current 4-scene opening reads as disconnected stills. Make it feel like ONE continuous flight through the clubhouse world:
   - Smooth continuous motion between scenes (crossfades / continuous zoom / matching motion direction, no hard cuts)
   - Scene images should flow into each other (scale/blur/parallax continuity), transitions feel physical, not slapped together
   - Tune Lenis + GSAP scrubbing so scrolling feels weighty and fluid; no jank on mobile
   - Keep CSS scroll-driven animations and WebGL particles as enhancement, but prioritize the seamless journey feel
4. **Interest classes are GROUP activities.** The course imagery/copy must communicate 一群⼈一齊上堂 (community, togetherness), not solo practice:
   - NEW group images are in `public/images/`: `group-yoga.png`, `group-linedance.png`, `group-zumba.png`, `group-pilates.png` (all show groups of people practicing together). Use them in the scroll world scenes and/or course cards instead of the solo images where it improves the message.
   - Refresh course copy to emphasize group/community: 一班人一齊、社區、同樂、一齊郁 (keep the approved tone from ARCHITECTURE.md/company-intro-draft.md).

## Constraints (unchanged)
- NO clubhouse names/logos. NO instructor names (placeholders only).
- Palette: emerald #1E5B41 × gold #C8A45D × cream #F7F4EE. Traditional Chinese (HK).
- Mobile-first, 60fps mid-range phones, iOS must not blank, `prefers-reduced-motion` respected.
- CTA label「查詢合作」consistent; zero em-dashes; nav single line; WhatsApp float + bottom bar on every page.
- GitHub Pages export (`npm run build:github-pages` → `out/`); push fresh static build to `gh-pages`; commit source to `main`.

## Verify
- `npm run build:github-pages` + `npm test` (update tests if structure changed)
- Dev server: check all routes, console clean, mobile, and scroll through the world opening repeatedly — must feel fluid
- Rebuild + push `gh-pages`; confirm live URL
- Report: what you changed (design polish, scroll smoothness, group imagery/copy), URL
