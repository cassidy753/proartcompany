# Pro Art Company — Corporate Website (Codex Task)

Build a complete, professional corporate website for **Pro Art Company**, a Hong Kong fitness course contractor serving private residential clubhouses. You have full autonomy over tech stack, structure, and design approach. Deliver a production-ready site in this directory (`/Users/ca/Documents/Ca_vault/proartcompany/website/`).

## Company facts (use these, don't invent others)

- **Name:** Pro Art Company (商業登記, sole proprietorship)
- **Business:** Fitness/interest class contractor for private residential estate clubhouses (私人屋苑會所課程承辦商)
- **Owner:** one person (the founder, also the lead instructor). Contract instructors are hired per course; when a class has too few enrolments it is cancelled and those instructors have no work that term.
- **Courses:** Yoga 瑜伽, Pilates 普拉提, Aerobic 健康舞, Zumba 尊巴, Line Dance 排舞
- **Current scale:** ~4 clubhouses partnered, ~15 classes per week
- **Commercial model:** revenue split with clubhouse (contractor takes 60% of collected class fees, clubhouse 40%). Contractor issues monthly invoices. No fixed costs for the clubhouse — classes only run when enough people enrol.
- **Contact:** Tel +852 9680 3500 · Email proartcompanyhk@gmail.com · Office: Flat S, 10/F, Block 3, Kwun Tong Industrial Centre, 472–484 Kwun Tong Road, Kwun Tong, Kowloon
- **Audience:** clubhouse management / estate management companies / owners' committees in Hong Kong. Site must feel professional and credible — this is the "calling card" when seeking clubhouse partnerships.
- **Language:** Traditional Chinese (Hong Kong) primary, English accents welcome.

## Client requirements (hard constraints from the owner's son)

1. **Do NOT display any partner clubhouse names or logos anywhere on the site** (no text names, no logo placeholders, no "合作會所" client lists, nothing that identifies partner estates). This is a privacy/commercial decision — respect it strictly. Build credibility instead through: scale numbers (4+ partner clubhouses, 15+ classes per week — these figures are approved), the professional service model, and clean corporate presentation. You may still have a section framed around "與香港多間私人屋苑會所長期合作" without naming any.
2. **Use the latest scroll-driven / scrollytelling presentation style** — modern scroll animations (progressive reveals, parallax/pin sections, count-up stats, animated flow lines). The site should feel current and premium, not a static brochure.
3. **Do NOT display instructor names yet** — but the site structure must reserve a dedicated instructors/team section (placeholder ready for names + bios to be added later).

## Research findings (from competitor analysis — use as design direction)

Similar HK suppliers structure their sites like this:
1. Hero — one-line positioning + CTA (查詢合作 / 索取報價)
2. Course list (Yoga/Pilates/Zumba etc.)
3. Service selling points: 到會式 (we teach at your venue, no facility needed), 度身訂造 (tailored to residents), 一站式行政 (posters, enrolment, billing handled), 專業導師團隊
4. Credibility block — partner logos / cooperation record (this is the "we are professional" proof)
5. Cooperation model + process steps (洽談 → 規劃 → 開班 → 結算)
6. Contact — phone + WhatsApp + email, prominent

Refs: FitnessU HK (corporate fitness to venue), SOU Stadium 團體包班, Hong Kong Curling Academy clubhouse page, IHFI (has 承辦商合作紀錄 pages).

## Reference

`reference/v1-freedom.html` is a first-draft single-page HTML version made by another agent. You may use it as a starting point, borrow from it, or start fresh — your call. The above requirements and research are the source of truth.

## Deliverables

- Complete website in this directory (any stack you choose — plain HTML, Vite/React, Astro, etc.)
- It must open/run locally without network dependencies where possible (or document required build steps)
- Mobile responsive (clubhouse managers browse on phones)
- Verify it yourself: open/preview it, check for console errors and broken layout before finishing
- Report: what you built, tech stack, file paths, how to preview it, and what's still placeholder (partner logos #3/#4, instructor names)
