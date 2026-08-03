import Link from "next/link";
import { whatsapp } from "../data";

const nav = [["/", "首頁"], ["/courses", "課程"], ["/partnership", "合作模式"], ["/about", "關於我們"], ["/contact", "聯絡"]] as const;

export function SiteHeader() {
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="Pro Art Company 首頁"><span className="brand-mark">PA</span><span>PRO ART<small>COMPANY</small></span></Link>
    <nav aria-label="主要導覽">{nav.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}</nav>
    <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">查詢合作 <span aria-hidden="true">↗</span></a>
  </header>;
}

export function Footer() {
  return <footer className="bottom-bar">
    <div className="footer-brand"><span className="brand-mark">PA</span><div><strong>Pro Art Company</strong><span>專業健身課程承辦商</span></div></div>
    <div><a href="tel:+85296803500">+852 9680 3500</a><a href="mailto:proartcompanyhk@gmail.com">proartcompanyhk@gmail.com</a></div>
    <address>Flat S, 10/F, Block 3, Kwun Tong Industrial Centre,<br />472–484 Kwun Tong Road, Kwun Tong, Kowloon</address>
    <small>© {new Date().getFullYear()} Pro Art Company. All rights reserved.</small>
  </footer>;
}

export function FloatingWhatsApp() { return <a className="wa-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp 查詢合作"><span>WA</span><b>查詢合作</b></a>; }

export function TrustNumbers() { return <section className="trust-band" aria-label="服務數字">
  <div><strong>4<sup>+</sup></strong><span>合作會所</span></div><div><strong>15<sup>+</sup></strong><span>每週班次</span></div><div><strong>5</strong><span>課程類別</span></div><div><strong>60<small>/40</small></strong><span>靈活分成</span></div>
</section>; }

export function InstructorPlaceholder() { return <section className="instructor-note"><div className="instructor-line" aria-hidden="true" /><div><h2>專業導師團隊資料準備中</h2><p>我們會按課程需要配對合適的專業導師，團隊簡介及專長將於稍後公開。</p></div></section>; }

export function ContactCta() { return <section className="contact-cta"><p>為您嘅會所，規劃下一堂好課。</p><a className="button button-gold" href={whatsapp} target="_blank" rel="noreferrer">查詢合作 <span aria-hidden="true">↗</span></a></section>; }

export function PageHero({ title, intro, word }: { title: string; intro: string; word: string }) { return <section className="page-hero"><span aria-hidden="true">{word}</span><div><h1>{title}</h1><p>{intro}</p></div></section>; }
