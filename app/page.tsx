import Image from "next/image";
import Link from "next/link";
import { HomeWorld } from "./components/home-world";
import { ContactCta, InstructorPlaceholder, TrustNumbers } from "./components/site";
import { courses } from "./data";

const assetPath = process.env.GITHUB_PAGES === "true" ? "/proartcompany" : "";

export default function Home() {
  return <main>
    <HomeWorld />

    <section className="section course-preview" aria-labelledby="courses-title">
      <div className="section-heading">
        <p className="accent-word">MOVE WELL</p>
        <h2 id="courses-title">五種課程，配合每個社區嘅節奏</h2>
        <p>由安靜伸展到活力舞步，按住戶年齡、興趣及程度靈活組合。</p>
      </div>
      <div className="course-mosaic">
        {courses.map((course, index) => <Link href="/courses" className={`course-tile course-tile-${index + 1}`} key={course.name}>
          <Image src={`${assetPath}${course.image}`} alt={`${course.name}課堂`} fill sizes="(max-width: 767px) 86vw, 33vw" unoptimized />
          <span><strong>{course.name}</strong><small>{course.short}</small></span>
        </Link>)}
      </div>
      <Link className="text-link" href="/courses">瀏覽全部課程 <span aria-hidden="true">↗</span></Link>
    </section>

    <TrustNumbers />

    <section className="section partnership-teaser" aria-labelledby="partner-title">
      <div className="partner-orbit" aria-hidden="true"><span>60</span><i>/</i><span>40</span></div>
      <div className="partner-copy">
        <h2 id="partner-title">由規劃到開班，一個團隊處理</h2>
        <div className="partner-points">
          <article><strong>到會式</strong><p>專業導師直接到會所授課。</p></article>
          <article><strong>一站式行政</strong><p>課程、宣傳、報名及結算妥善跟進。</p></article>
          <article><strong>彈性分成</strong><p>毋須固定成本，合作清晰透明。</p></article>
        </div>
        <Link className="button button-outline" href="/partnership">了解合作模式</Link>
      </div>
    </section>

    <InstructorPlaceholder />
    <ContactCta />
  </main>;
}
