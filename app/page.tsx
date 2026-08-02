"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

const message = encodeURIComponent("你好，我哋會所想查詢健身課程合作方案。");
const whatsapp = `https://wa.me/85296803500?text=${message}`;
const assetPath = process.env.GITHUB_PAGES === "true" ? "/proartcompany" : "";

type Chapter = {
  no: string; kicker: string; title: string; text: string; image: string;
  transition: string; transitionLabel: string; badge?: string; align?: "left" | "right";
};

const chapters: Chapter[] = [
  { no:"01", kicker:"WELCOME TO PRO ART", title:"踏進一個\n更有活力的社區。", text:"Pro Art Company — 香港私人屋苑會所嘅專業健身課程夥伴。", image:"/images/hero-clubhouse.png", transition:"push", transitionLabel:"鏡頭推進" },
  { no:"02", kicker:"THE STUDIO AWAITS", title:"五種節奏，\n一個專業夥伴。", text:"瑜伽・普拉提・健康舞・Zumba・排舞，由策劃、導師到行政，一站式妥善處理。", image:"/images/hero-clubhouse.png", transition:"door", transitionLabel:"開門過場", align:"right" },
  { no:"03", kicker:"YOGA · 瑜伽", title:"由一呼一吸，\n找回身心平衡。", text:"配合不同程度，以呼吸、伸展與穩定練習，讓住戶建立持續的健康習慣。", image:"/images/course-yoga.png", transition:"fly", transitionLabel:"穿越門框", badge:"每週人氣課程" },
  { no:"04", kicker:"LINE DANCE · 排舞", title:"一步一拍，\n舞出社區默契。", text:"由基本步法到完整舞序，兼顧協調、記憶與社交樂趣，適合恆常小班。", image:"/images/course-linedance.png", transition:"mirror", transitionLabel:"鏡面穿越", align:"right", badge:"輕鬆入門" },
  { no:"05", kicker:"PILATES · 普拉提", title:"核心穩定，\n動作更有力量。", text:"集中核心控制、姿勢與身體覺察，為不同體能住戶設計循序漸進的課堂。", image:"/images/course-yoga.png", transition:"elevator", transitionLabel:"電梯轉場", badge:"小班指導" },
  { no:"06", kicker:"AEROBIC · 健康舞", title:"拉開布幕，\n讓活力登場。", text:"簡單易跟的帶氧動作配合熟悉節奏，提升心肺體能，讓運動變成每週期待。", image:"/images/course-linedance.png", transition:"curtain", transitionLabel:"布幕揭曉", align:"right", badge:"銀齡友善" },
  { no:"07", kicker:"ZUMBA · 尊巴", title:"音樂亮起，\n全身投入節奏。", text:"融合舞蹈與帶氧訓練，氣氛投入、動感十足，為會所注入最直接的快樂能量。", image:"/images/course-zumba.png", transition:"prism", transitionLabel:"稜鏡折射", badge:"高能量體驗" },
  { no:"08", kicker:"TRUSTED EXPERIENCE", title:"合作簡單，\n成效看得見。", text:"與香港多間私人屋苑會所長期合作。靈活分成、毋須固定成本，開班與行政都更省心。", image:"/images/hero-clubhouse.png", transition:"ripple", transitionLabel:"漣漪擴散", align:"right" },
  { no:"09", kicker:"OUR VISION", title:"將健康與快樂，\n帶到每一個屋苑會所。", text:"住戶落樓，就能享受專業而愉快的運動體驗。讓每一座屋苑會所，都成為社區的活力中心。", image:"/images/hero-clubhouse.png", transition:"pull", transitionLabel:"鏡頭拉遠" },
];

function WorldCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !window.WebGLRenderingContext || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:false, powerPreference:"low-power" }); }
    catch { document.documentElement.classList.add("no-webgl"); return; }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.4));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, .1, 100);
    camera.position.z = 7;
    const geo = new THREE.IcosahedronGeometry(2.25, innerWidth < 800 ? 1 : 2);
    const mat = new THREE.MeshBasicMaterial({ color:0xc8a45d, wireframe:true, transparent:true, opacity:.17 });
    const orb = new THREE.Mesh(geo, mat); scene.add(orb);
    const dotsGeo = new THREE.BufferGeometry();
    const count = innerWidth < 800 ? 80 : 180;
    const points = new Float32Array(count * 3);
    for(let i=0;i<points.length;i++) points[i]=(Math.random()-.5)*13;
    dotsGeo.setAttribute("position",new THREE.BufferAttribute(points,3));
    scene.add(new THREE.Points(dotsGeo,new THREE.PointsMaterial({color:0xf7f4ee,size:.025,transparent:true,opacity:.45})));
    const resize=()=>{ camera.aspect=innerWidth/innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth,innerHeight,false); };
    resize(); addEventListener("resize",resize);
    let id=0;
    const frame=()=>{ const s=scrollY/Math.max(1,document.body.scrollHeight-innerHeight); orb.rotation.x=s*Math.PI*3; orb.rotation.y=s*Math.PI*5; orb.scale.setScalar(.75+s*1.4); renderer.render(scene,camera); id=requestAnimationFrame(frame); };
    frame();
    return()=>{cancelAnimationFrame(id);removeEventListener("resize",resize);geo.dispose();mat.dispose();dotsGeo.dispose();renderer.dispose();};
  },[]);
  return <canvas ref={ref} className="world-canvas" aria-hidden="true"/>;
}

export default function Home() {
  const [active,setActive]=useState(1);
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis=reduce?null:new Lenis({duration:1.05,smoothWheel:true,wheelMultiplier:.9});
    let raf=0;
    const tick=(t:number)=>{lenis?.raf(t);raf=requestAnimationFrame(tick)}; if(lenis) raf=requestAnimationFrame(tick);
    const sections=gsap.utils.toArray<HTMLElement>(".chapter");
    sections.forEach((section,i)=>{
      ScrollTrigger.create({trigger:section,start:"top 55%",end:"bottom 55%",onEnter:()=>setActive(i+1),onEnterBack:()=>setActive(i+1)});
      if(reduce)return;
      const scene=section.querySelector(".scene-image"); const copy=section.querySelector(".chapter-copy");
      gsap.fromTo(copy,{y:70,opacity:0},{y:0,opacity:1,ease:"power3.out",scrollTrigger:{trigger:section,start:"top 72%",end:"top 33%",scrub:1}});
      if(section.dataset.transition==="push") gsap.fromTo(scene,{scale:1},{scale:1.28,scrollTrigger:{trigger:section,start:"top top",end:"bottom top",scrub:true}});
      if(section.dataset.transition==="fly") gsap.fromTo(scene,{scale:1.25,filter:"blur(8px)"},{scale:1,filter:"blur(0px)",scrollTrigger:{trigger:section,start:"top bottom",end:"top 20%",scrub:true}});
      if(section.dataset.transition==="mirror") gsap.fromTo(scene,{scaleX:-1,filter:"brightness(1.8)"},{scaleX:1,filter:"brightness(1)",scrollTrigger:{trigger:section,start:"top bottom",end:"top 25%",scrub:true}});
      if(section.dataset.transition==="prism") gsap.fromTo(scene,{filter:"hue-rotate(80deg) saturate(2) brightness(2)"},{filter:"hue-rotate(0deg) saturate(1) brightness(.82)",scrollTrigger:{trigger:section,start:"top bottom",end:"top 25%",scrub:true}});
      if(section.dataset.transition==="pull") gsap.fromTo(scene,{scale:1.4},{scale:.94,scrollTrigger:{trigger:section,start:"top bottom",end:"bottom bottom",scrub:true}});
    });
    return()=>{cancelAnimationFrame(raf);lenis?.destroy();ScrollTrigger.getAll().forEach(t=>t.kill());};
  },[]);

  return <main id="top">
    <WorldCanvas/>
    <header className="nav">
      <a href="#top" className="brand" aria-label="Pro Art Company 首頁"><span className="brand-disc">PA</span><span>PRO ART<small>COMPANY</small></span></a>
      <div className="nav-world" aria-hidden="true"><i style={{"--p":`${active/9}`} as React.CSSProperties}/><span>{String(active).padStart(2,"0")} / 09</span></div>
      <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">查詢合作 <span>↗</span></a>
    </header>
    <aside className="rail" aria-label="章節進度">{chapters.map((c,i)=><a key={c.no} href={`#chapter-${c.no}`} className={active===i+1?"active":""} aria-label={`前往第 ${i+1} 章`}><i/><span>{c.no}</span></a>)}</aside>

    {chapters.map((c,i)=><section key={c.no} id={`chapter-${c.no}`} className={`chapter chapter-${c.transition} ${c.align==="right"?"copy-right":""}`} data-transition={c.transition}>
      <div className="scene" aria-hidden="true"><Image className="scene-image" src={`${assetPath}${c.image}`} alt="" fill priority={i<2} sizes="100vw" unoptimized/><div className="scene-grade"/></div>
      {c.transition==="door"&&<div className="door-panels" aria-hidden="true"><i/><i/></div>}
      {c.transition==="elevator"&&<div className="elevator-panels" aria-hidden="true"><i/><i/><b>05</b></div>}
      {c.transition==="curtain"&&<div className="curtains" aria-hidden="true"><i/><i/></div>}
      {c.transition==="ripple"&&<div className="ripples" aria-hidden="true"><i/><i/><i/></div>}
      <div className="chapter-copy">
        <p className="kicker"><span>{c.no}</span>{c.kicker}</p>
        <h1>{c.title.split("\n").map((line,n)=><span key={n}>{line}</span>)}</h1>
        <p className="chapter-text">{c.text}</p>
        {c.badge&&<p className="badge"><i/> {c.badge}</p>}
        {i===7&&<div className="trust-grid"><div><strong>4<sup>+</sup></strong><span>合作會所</span></div><div><strong>15<sup>+</sup></strong><span>每週班次</span></div><div><strong>5</strong><span>課程類別</span></div><div className="share"><strong>60<small>/40</small></strong><span>靈活分成模式</span></div></div>}
        {i===8?<div className="final-actions"><a className="cta primary" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp 與我哋合作 <span>↗</span></a><a className="cta secondary" href="mailto:proartcompanyhk@gmail.com">Email 查詢</a></div>:<a className="chapter-cta" href={whatsapp} target="_blank" rel="noreferrer">{i<2?"開始規劃會所課程":"想喺你嘅會所開辦呢個課程？"}<span>↗</span></a>}
      </div>
      <div className="chapter-foot"><span>{c.no} / 09</span><span>{c.transitionLabel}</span><i/></div>
    </section>)}

    <section className="team-note" aria-label="導師團隊"><span>INSTRUCTOR NETWORK · COMING SOON</span><h2>專業導師團隊資料準備中</h2><p>我們按每項課程需要配對合適的專業導師；個人簡介與專長將於稍後公開。</p></section>
    <footer><div className="footer-brand"><span className="brand-disc">PA</span><div><strong>Pro Art Company</strong><span>香港私人屋苑會所嘅專業健身課程夥伴</span></div></div><div className="footer-links"><a href="tel:+85296803500">+852 9680 3500</a><a href="mailto:proartcompanyhk@gmail.com">proartcompanyhk@gmail.com</a></div><address>Flat S, 10/F, Block 3, Kwun Tong Industrial Centre,<br/>472–484 Kwun Tong Road, Kwun Tong, Kowloon</address><small>© {new Date().getFullYear()} Pro Art Company. All rights reserved.</small></footer>
    <a className="wa-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp 查詢合作"><span>WA</span><i>查詢合作</i></a>
  </main>;
}
