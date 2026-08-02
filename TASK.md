# Pro Art Company — Website Build (Codex Task v3)

You are the DESIGN OWNER and BUILDER. The client wants a **2026-grade scroll world website**. Read `DESIGN.md` in this directory — it is the approved experience spec (client confirmed the 9-chapter Scroll World structure, CTA system, bottom bar, mobile-first strategy). You have full creative/technical autonomy on everything else: visual design, animation, tech implementation. Do not ask for permission — build it, verify it, report.

## Hard constraints (non-negotiable)

1. **Scroll World format** — immersive scroll-driven journey, 9 chapters as specified in DESIGN.md (會所大門 → 舞蹈室大門 → 瑜伽課 → 鏡面穿越排舞 → 普拉提 → 健康舞 → Zumba → 大堂全景/數字信任 → 俯瞰願景). Each chapter uses a DIFFERENT transition technique (push-in, door open, fly-through, mirror portal, elevator, curtain reveal, prism flash, ripple, pull-out). This is the #1 requirement.
2. **Modern 2026 style** — the previous version was rejected as "not 2026". Go premium: smooth scrolling (Lenis), scroll-driven 3D (Three.js / React Three Fiber or equivalent WebGL), GSAP ScrollTrigger, kinetic typography, generous motion. Must feel like an award-winning scrollytelling site, not a brochure.
3. **Visuals: Pixar-style 3D renders** — AI-generated image style: warm, stylized, cinematic (emerald green #1E5B41 × gold #C8A45D palette). 4 images already exist in `public/images/` (hero-clubhouse.png, course-yoga.png, course-linedance.png, course-zumba.png) — reuse them; generate more yourself if needed (you have image generation tools) for the remaining chapters (Pilates, Aerobic, etc.). No stock photos.
4. **CTA everywhere** — floating WhatsApp button fixed bottom-right at all times (prefilled message: 「你好，我哋會所想查詢健身課程合作方案。」), per-chapter CTA at chapter ends, big CTA in chapter 9, "查詢合作" in nav. WhatsApp first, phone +852 9680 3500, email proartcompanyhk@gmail.com.
5. **Bottom bar** — site footer with: company name Pro Art Company, Tel +852 9680 3500, Email proartcompanyhk@gmail.com, Office address (Flat S, 10/F, Block 3, Kwun Tong Industrial Centre, 472–484 Kwun Tong Road, Kwun Tong, Kowloon), copyright.
6. **NO partner clubhouse names or logos anywhere** — privacy decision (a section framed as 「與香港多間私人屋苑會所長期合作」 + numbers 4+ clubhouses / 15+ classes per week is fine; never name them).
7. **NO instructor names** — reserve the team section as placeholder for future profiles.
8. **Mobile-first** — readers open the link on phones (70%+ traffic). Content/CTA sized for mobile; desktop gets enhanced 3D. Keep 60fps on mid-range phones (low-poly, compressed images, prefers-reduced-motion respected).
9. **Company intro copy** — `company-intro-draft.md` has approved direction (short/medium/long versions). Use them; refine the wording naturally.
10. **Free hosting preview** — no paid domain yet. Make the site statically deployable to free hosting (GitHub Pages / Cloudflare Pages / Vercel free tier) and produce a preview URL. Document how to redeploy.

## Stack

Existing scaffold: Next.js 16 + Tailwind 4 + vinext (Cloudflare). You may keep it, swap it, or restructure — your call, as long as it deploys free and the 3D scroll world works. Node deps are installed; `npm run dev` serves on localhost.

## Deliverables

- Working scroll world site (all 9 chapters, transitions, CTA system, bottom bar)
- Verified: run it, check console errors, check mobile viewport, check WebGL works
- Deploy to a free preview URL and give it to the client
- Git commits as you go; report: what you built, stack, preview URL, what remains placeholder
