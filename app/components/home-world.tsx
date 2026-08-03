"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

const assetPath = process.env.GITHUB_PAGES === "true" ? "/proartcompany" : "";
const scenes = [
  { title: "健康生活，由屋苑開始。", text: "專業健身課程承辦商", image: "/images/hero-clubhouse.png", position: "center" },
  { title: "五種節奏，一個專業夥伴。", text: "一班人一齊郁，讓興趣成為鄰里日常。", image: "/images/group-linedance.png", position: "center" },
  { title: "一呼一吸，一齊找回平衡。", text: "住戶落樓，就能與社區伙伴一同練習。", image: "/images/group-yoga.png", position: "center" },
  { title: "讓會所，成為社區嘅活力中心。", text: "由相遇、同樂到恆常相聚，活力在社區延續。", image: "/images/group-zumba.png", position: "center" },
];

function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !window.WebGLRenderingContext || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "low-power" }); } catch { return; }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.25));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, .1, 100); camera.position.z = 6;
    const geometry = new THREE.BufferGeometry();
    const count = innerWidth < 768 ? 55 : 120; const points = new Float32Array(count * 3);
    for (let i = 0; i < points.length; i++) points[i] = (Math.random() - .5) * 12;
    geometry.setAttribute("position", new THREE.BufferAttribute(points, 3));
    const material = new THREE.PointsMaterial({ color: 0xc8a45d, size: .035, transparent: true, opacity: .55 });
    const field = new THREE.Points(geometry, material); scene.add(field);
    const resize = () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight, false); };
    resize(); addEventListener("resize", resize);
    let id = 0; const frame = () => { field.rotation.y += .0007; renderer.render(scene, camera); id = requestAnimationFrame(frame); }; frame();
    return () => { cancelAnimationFrame(id); removeEventListener("resize", resize); geometry.dispose(); material.dispose(); renderer.dispose(); };
  }, []);
  return <canvas className="world-particles" ref={ref} aria-hidden="true" />;
}

export function HomeWorld() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = reduce ? null : new Lenis({ duration: 1.35, smoothWheel: true, wheelMultiplier: .82, touchMultiplier: 1.05 });
    const update = () => ScrollTrigger.update();
    lenis?.on("scroll", update);
    const tick = (time: number) => lenis?.raf(time * 1000);
    if (lenis) { gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0); }
    const ctx = gsap.context(() => {
      if (reduce) return;
      const sceneEls = gsap.utils.toArray<HTMLElement>(".world-scene");
      gsap.set(sceneEls.slice(1), { autoAlpha: 0 });
      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 1.15, invalidateOnRefresh: true },
      });
      sceneEls.forEach((scene, index) => {
        const image = scene.querySelector<HTMLElement>(".world-image");
        const copy = scene.querySelector<HTMLElement>(".world-copy");
        const at = index * 1.45;
        timeline.fromTo(image, { scale: index === 3 ? 1.12 : 1.02, xPercent: index % 2 ? 1.5 : -1.5 }, { scale: index === 3 ? .98 : 1.14, xPercent: index % 2 ? -1.5 : 1.5, duration: 2.05 }, at);
        timeline.fromTo(copy, { y: 34, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .55, ease: "power2.out" }, at + .12);
        if (index < sceneEls.length - 1) {
          timeline.to(scene, { autoAlpha: 0, duration: .48 }, at + 1.16);
          timeline.to(image, { filter: "blur(5px)", duration: .38 }, at + 1.08);
          timeline.set(sceneEls[index + 1], { autoAlpha: 1 }, at + 1.14);
        }
      });
    }, root);
    return () => { gsap.ticker.remove(tick); lenis?.off("scroll", update); lenis?.destroy(); ctx.revert(); };
  }, []);
  return <section className="scroll-world" ref={root} aria-label="Pro Art Company 社區課程旅程">
    <div className="world-stage"><Particles />
      {scenes.map((scene, index) => <section className={`world-scene world-scene-${index + 1}`} key={scene.title}>
        <Image className="world-image" src={`${assetPath}${scene.image}`} alt={index === 0 ? "屋苑會所入口" : `${scene.title} 團體課堂情景`} fill priority={index === 0} sizes="100vw" unoptimized style={{ objectPosition: scene.position }} />
        <div className="world-scrim" />
        <div className="world-copy"><h1>{scene.title}</h1><p>{scene.text}</p>{index === 3 && <Link className="button button-gold" href="/contact">查詢合作</Link>}</div>
        <div className="scene-progress" aria-hidden="true"><i style={{ "--progress": `${(index + 1) * 25}%` } as React.CSSProperties} /></div>
      </section>)}
    </div>
  </section>;
}
