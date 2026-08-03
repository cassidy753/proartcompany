import Image from "next/image";
import { ContactCta, InstructorPlaceholder, PageHero, TrustNumbers } from "../components/site";

const assetPath = process.env.GITHUB_PAGES === "true" ? "/proartcompany" : "";

export default function AboutPage() {
  return <main>
    <PageHero word="TOGETHER" title="把專業課程，帶進住戶日常" intro="我們專注為香港私人屋苑會所策劃及營運健身與興趣課程。" />
    <section className="about-story"><div className="about-image"><Image src={`${assetPath}/images/hero-clubhouse.png`} alt="充滿活力的屋苑會所空間" fill priority sizes="(max-width: 767px) 100vw, 46vw" unoptimized /></div><div className="about-copy"><h2>由社區需要出發</h2><p>Pro Art Company 自成立以來，一直專注為香港私人屋苑會所提供高質素嘅健身及興趣課程。我哋嘅服務涵蓋瑜伽、普拉提、健康舞、Zumba 與排舞，按每個屋苑住戶嘅年齡、興趣同需要，度身設計最合適嘅課程組合。</p><p>作為課程承辦商，我哋明白會所營運嘅挑戰。我哋以靈活嘅分成合作模式，令會所毋須承擔固定成本；由課程規劃、導師安排、宣傳到行政結算，一站式處理，讓會所專注服務住戶。</p><p>我哋嘅團隊由經驗豐富嘅專業導師組成，以用心、穩定同專業見稱，現時每週於多間屋苑會所營運恆常課程，深受住戶歡迎。</p></div></section>
    <section className="vision"><span>OUR VISION</span><h2>讓每一座屋苑嘅會所，<br />都成為社區嘅活力中心。</h2></section>
    <TrustNumbers />
    <InstructorPlaceholder />
    <ContactCta />
  </main>;
}
