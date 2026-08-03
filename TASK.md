# Pro Art Company — Giga-style Dark Rebrand (Codex Task v7)

Client wants the WHOLE site restyled to match the reference (Giga AI enterprise site — see client screenshot): **dark premium theme, warm ORANGE highlight accent (replacing gold), cinematic realistic imagery (replacing Pixar cartoon style)**. Structure stays Hybrid (ARCHITECTURE.md). Taste skill still applies (`~/.agents/skills/design-taste-frontend/`).

## What to change

1. **Imagery — ALL NEW Giga-style images are already in `public/images/`** (cinematic, dark moody, warm orange/gold lighting, group classes):
   - `hero-clubhouse.png` (clubhouse at dusk by lake — hero scene)
   - `group-yoga.png`, `group-linedance.png`, `group-zumba.png`, `group-pilates.png`, `group-aerobic.png`
   - Replace all Pixar-style usage (scroll world scenes, course cards, about) with these. Delete or stop referencing the old cartoon images (`course-yoga.png`, `course-linedance.png`, `course-zumba.png` etc. if unused).
2. **Accent color: gold → orange.** Swap the accent token (currently `#C8A45D` / gold family) for a warm orange (suggest `#FF7A3D` / `#F97316` family — pick a refined orange that stays premium, not neon). Keep deep emerald `#1E5B41` → evolve to a darker, moodier deep green/ink base if it improves the dark premium feel (client reference is dark navy/black-ish with orange — we keep our brand green but darker).
3. **Dark premium polish** matching the reference: deep dark backgrounds, generous negative space, thin hairlines, orange accents ONLY as highlights (buttons, links, key numbers), large confident typography. Keep it tasteful (Taste skill anti-slop: no neon glow, no AI-purple, contrast AA, zero em-dash, nav single line).
4. Keep everything else: hybrid structure, 5-item nav, floating WhatsApp, bottom bar, no clubhouse names, no instructor names (placeholders), mobile-first, reduced-motion.

## Verify
- `npm run build:github-pages` + `npm test` (update tests if image paths changed)
- Dev server: all routes, console clean, mobile, scroll world still smooth
- Rebuild + push `gh-pages`; confirm live URL
- Report: what changed (images, accent, dark polish), URL
