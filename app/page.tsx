"use client";

import { useEffect, useState } from "react";

const courses = [
  { no: "01", zh: "瑜伽", en: "Yoga", note: "呼吸・伸展・身心平衡" },
  { no: "02", zh: "普拉提", en: "Pilates", note: "核心・姿勢・穩定訓練" },
  { no: "03", zh: "健康舞", en: "Aerobic", note: "帶氧・節奏・活力體能" },
  { no: "04", zh: "尊巴", en: "Zumba", note: "音樂・舞動・全身燃動" },
  { no: "05", zh: "排舞", en: "Line Dance", note: "步法・協調・社交樂趣" },
];

const benefits = [
  ["01", "到會式教學", "導師按課程時間到達會所授課，善用現有場地，毋須另設專用設施。"],
  ["02", "度身訂造", "按屋苑住戶年齡、興趣及時段規劃課程組合，提升參與度。"],
  ["03", "一站式行政", "由課程建議、宣傳素材、開班協調至每月賬單，流程清晰省心。"],
  ["04", "專業導師配對", "按課程需要安排合適合約導師，確保教學質素與課堂體驗。"],
];

const steps = [
  ["01", "洽談", "了解會所場地、住戶需要及營運安排"],
  ["02", "規劃", "建議課程組合、時段、收費及招生活動"],
  ["03", "開班", "達到最低報名人數後安排導師到會授課"],
  ["04", "結算", "按實收學費分賬，承辦方每月發出賬單"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.16 }
    );
    nodes.forEach((node) => observer.observe(node));

    const onScroll = () => {
      document.documentElement.style.setProperty("--scroll", `${window.scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)}`);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); removeEventListener("scroll", onScroll); };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="progress" aria-hidden="true" />
      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="Pro Art Company 首頁" onClick={closeMenu}>
          <span className="brand-mark">PA</span><span>PRO ART <small>COMPANY</small></span>
        </a>
        <button className="menu-button" aria-label="開啟導覽選單" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i /><i /></button>
        <nav className={menuOpen ? "open" : ""} aria-label="主要導覽">
          <a href="#courses" onClick={closeMenu}>課程</a><a href="#services" onClick={closeMenu}>服務</a><a href="#model" onClick={closeMenu}>合作模式</a><a href="#team" onClick={closeMenu}>導師團隊</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>查詢合作</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow" data-reveal>HONG KONG · CLUBHOUSE FITNESS</p>
          <h1 data-reveal>讓會所課程，<br />成為住戶生活的<br /><em>活力日常。</em></h1>
          <p className="hero-lead" data-reveal>為香港私人屋苑會所策劃及承辦專業健身與興趣課程。由規劃、導師到行政結算，一站式妥善處理。</p>
          <div className="hero-actions" data-reveal>
            <a className="button button-primary" href="#contact">查詢合作 <span>↗</span></a>
            <a className="text-link" href="#courses">探索課程 <span>↓</span></a>
          </div>
        </div>
        <div className="hero-card" data-reveal>
          <span className="card-kicker">PROFESSIONAL COURSE PARTNER</span>
          <strong>專業策劃<br />靈活營運</strong>
          <span className="card-line" />
          <p>為每一個社區，設計合適的運動節奏。</p>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span>SCROLL</span><i /></div>
      </section>

      <section className="marquee" aria-label="課程種類">
        <div>YOGA · PILATES · AEROBIC · ZUMBA · LINE DANCE · YOGA · PILATES · AEROBIC · ZUMBA · LINE DANCE ·</div>
      </section>

      <section className="courses section-pad" id="courses">
        <div className="section-intro" data-reveal><p className="eyebrow">OUR COURSES</p><h2>五種課程，<br />多元生活節奏。</h2><p>配合不同年齡、體能與興趣，為住戶建立恆常而有吸引力的會所活動。</p></div>
        <div className="course-list">
          {courses.map((course) => <article className="course-row" key={course.no} data-reveal><span>{course.no}</span><h3>{course.zh}</h3><p>{course.en}</p><small>{course.note}</small><i>↗</i></article>)}
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="services-sticky" data-reveal><p className="eyebrow light">WHY PRO ART</p><h2>把複雜的營運，<br />變成簡單的合作。</h2><p>會所毋須承擔固定成本；課程達到足夠報名人數才開班，讓資源運用更具彈性。</p></div>
        <div className="benefit-stack">{benefits.map(([no, title, body]) => <article className="benefit-card" key={no} data-reveal><span>{no}</span><div className="benefit-icon" aria-hidden="true">+</div><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="proof section-pad" aria-label="合作規模">
        <div className="proof-copy" data-reveal><p className="eyebrow">TRUSTED EXPERIENCE</p><h2>與香港多間私人屋苑會所長期合作</h2><p>憑穩定教學、清晰溝通與靈活安排，持續為不同社區營運恆常課程。</p></div>
        <div className="stats">
          <div data-reveal><strong>4<span>+</span></strong><p>合作會所</p><small>PARTNER CLUBHOUSES</small></div>
          <div data-reveal><strong>15<span>+</span></strong><p>每週課堂</p><small>CLASSES EVERY WEEK</small></div>
          <div data-reveal><strong>5</strong><p>課程類別</p><small>COURSE CATEGORIES</small></div>
        </div>
        <p className="privacy-note">基於商業及私隱考慮，合作單位資料不作公開展示。</p>
      </section>

      <section className="model section-pad" id="model">
        <div className="model-head" data-reveal><p className="eyebrow light">HOW IT WORKS</p><h2>低風險、透明、<br />可持續的合作模式。</h2><div className="split"><strong>60<small>%</small></strong><span>承辦方</span><i /><strong>40<small>%</small></strong><span>會所</span></div><p>按每月實收課程費用分賬，承辦方發出月結賬單；不設會所固定成本。</p></div>
        <div className="process" aria-label="合作流程">{steps.map(([no, title, body]) => <article key={no} data-reveal><span>{no}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
      </section>

      <section className="team section-pad" id="team">
        <div data-reveal><p className="eyebrow">INSTRUCTOR NETWORK</p><h2>合適的課程，<br />由合適的專業導師帶領。</h2></div>
        <div className="team-placeholder" data-reveal><div className="team-rings" aria-hidden="true"><i /><i /><i /></div><div><span>COMING SOON</span><h3>導師團隊資料準備中</h3><p>我們按每項課程的需要配對合適合約導師。導師專頁已預留，稍後將加入個人簡介與專長。</p></div></div>
      </section>

      <section className="contact section-pad" id="contact">
        <p className="eyebrow light" data-reveal>LET&apos;S WORK TOGETHER</p><div className="contact-grid">
          <div data-reveal><h2>為您的會所，<br />規劃下一個<br /><em>人氣課程。</em></h2><p>歡迎會所管理團隊、物業管理公司及業主委員會與我們聯絡。</p><a className="button button-gold" href="mailto:proartcompanyhk@gmail.com">電郵查詢 <span>↗</span></a></div>
          <address data-reveal>
            <a href="tel:+85296803500"><small>電話 / WHATSAPP</small><strong>+852 9680 3500</strong></a>
            <a href="mailto:proartcompanyhk@gmail.com"><small>電郵 / EMAIL</small><strong>proartcompanyhk@gmail.com</strong></a>
            <div><small>辦公室 / OFFICE</small><strong>九龍觀塘觀塘道472–484號<br />觀塘工業中心第3期10樓S室</strong><span>Flat S, 10/F, Block 3, Kwun Tong Industrial Centre, 472–484 Kwun Tong Road, Kwun Tong, Kowloon</span></div>
          </address>
        </div>
      </section>

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">PA</span><span>PRO ART <small>COMPANY</small></span></a><p>私人屋苑會所課程承辦商</p><small>© {new Date().getFullYear()} Pro Art Company. All rights reserved.</small></footer>
    </main>
  );
}
