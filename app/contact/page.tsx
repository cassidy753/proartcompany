import { PageHero } from "../components/site";
import { whatsapp } from "../data";

export default function ContactPage() {
  return <main>
    <PageHero word="HELLO" title="一齊規劃適合您會所嘅課程" intro="歡迎會所管理團隊、物業管理公司及業主委員會聯絡。" />
    <section className="contact-layout">
      <div className="contact-details"><h2>直接聯絡我哋</h2><dl><div><dt>電話</dt><dd><a href="tel:+85296803500">+852 9680 3500</a></dd></div><div><dt>WhatsApp</dt><dd><a href={whatsapp} target="_blank" rel="noreferrer">查詢合作</a></dd></div><div><dt>電郵</dt><dd><a href="mailto:proartcompanyhk@gmail.com">proartcompanyhk@gmail.com</a></dd></div><div><dt>辦公室</dt><dd>觀塘工業中心第 3 期 10 樓 S 室<br /><small>Flat S, 10/F, Block 3, Kwun Tong Industrial Centre, 472-484 Kwun Tong Road, Kwun Tong, Kowloon</small></dd></div></dl></div>
      <form className="enquiry-form" action={`mailto:proartcompanyhk@gmail.com`} method="post" encType="text/plain"><h2>課程合作查詢</h2><label>稱呼<input name="name" autoComplete="name" required /></label><label>會所或機構<input name="organisation" autoComplete="organization" required /></label><label>電話<input name="phone" type="tel" autoComplete="tel" required /></label><label>查詢內容<textarea name="message" rows={5} defaultValue="你好，我哋會所想查詢健身課程合作方案。" required /></label><button className="button button-gold" type="submit">查詢合作 <span aria-hidden="true">↗</span></button><p>提交後會開啟您裝置的電郵程式。</p></form>
    </section>
  </main>;
}
