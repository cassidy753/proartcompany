import Image from "next/image";
import { ContactCta, PageHero } from "../components/site";
import { courses } from "../data";

const assetPath = process.env.GITHUB_PAGES === "true" ? "/proartcompany" : "";

export default function CoursesPage() {
  return <main>
    <PageHero word="MOVE" title="五種課程，總有一堂適合您嘅住戶" intro="按不同年齡、興趣與程度，組合真正適合社區的恆常課程。" />
    <section className="course-list" aria-label="課程詳情">
      {courses.map((course, index) => <article className="course-detail" key={course.name}>
        <div className="course-detail-image"><Image src={`${assetPath}${course.image}`} alt={`${course.name}課堂情景`} fill sizes="(max-width: 767px) 100vw, 50vw" priority={index === 0} unoptimized /></div>
        <div className="course-detail-copy"><span>{course.en}</span><h2>{course.name}</h2><p>{course.description}</p><dl><div><dt>適合對象</dt><dd>{course.audience}</dd></div><div><dt>課程特色</dt><dd>{course.badge}</dd></div></dl></div>
      </article>)}
    </section>
    <aside className="flex-note"><strong>度身設計，靈活安排</strong><p>課程內容、時段及收費，均可按會所住戶需要度身設計。</p></aside>
    <ContactCta />
  </main>;
}
