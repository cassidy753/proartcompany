import { ContactCta, PageHero, TrustNumbers } from "../components/site";

export default function PartnershipPage() {
  return <main>
    <PageHero word="60/40" title="低風險、透明、可持續的合作模式" intro="由策劃到每月結算，讓會所毋須承擔固定課程成本。" />
    <section className="split-model" aria-labelledby="split-title"><div className="split-figure"><span>承辦方</span><strong>60</strong></div><div className="split-copy"><h2 id="split-title">簡單清晰嘅分成安排</h2><p>承辦方佔課程收入 60%，會所佔 40%。我們每月結算並提供清晰帳單，讓合作雙方掌握實際報名及收入情況。</p><div className="club-share"><span>會所</span><strong>40</strong></div></div></section>
    <section className="process" aria-labelledby="process-title"><h2 id="process-title">由想法到開班，四步完成</h2><ol><li><span>01</span><strong>洽談</strong><p>了解住戶與場地需要</p></li><li><span>02</span><strong>規劃</strong><p>設計課程、時段及收費</p></li><li><span>03</span><strong>開班</strong><p>配對導師並處理行政</p></li><li><span>04</span><strong>結算</strong><p>每月提供清晰帳單</p></li></ol></section>
    <section className="why-us" aria-labelledby="why-title"><h2 id="why-title">點解揀我哋</h2><div><article><strong>到會式教學</strong><p>導師直接到會所授課，住戶落樓即可參與。</p></article><article><strong>度身訂造</strong><p>按住戶輪廓、場地及時段設計課程組合。</p></article><article><strong>一站式行政</strong><p>宣傳、報名、導師安排與結算統一跟進。</p></article><article><strong>專業導師配對</strong><p>根據課程需要安排合適而穩定的導師。</p></article></div></section>
    <TrustNumbers />
    <p className="privacy-note">基於商業及私隱考慮，合作單位資料不作公開展示</p>
    <ContactCta />
  </main>;
}
