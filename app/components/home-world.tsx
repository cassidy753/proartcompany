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
  { title: "五種節奏，一個專業夥伴。", text: "瑜伽・普拉提・健康舞・Zumba・排舞", image: "/images/hero-clubhouse.png", position: "right" },
  { title: "一呼一吸，找回身心平衡。", text: "住戶落樓即享專業課程", image: "/images/course-yoga.png", position: "center" },
  { title: "讓會所，成為社區嘅活力中心。", text: "由規劃、導師到行政，一站式妥善處理。", image: "/images/hero-clubhouse.png", position: "left" },
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
    const lenis = reduce ? null : new Lenis({ duration: 1, smoothWheel: true, wheelMultiplier: .9 });
    let raf = 0; const tick = (time: number) => { lenis?.raf(time); raf = requestAnimationFrame(tick); }; if (lenis) raf = requestAnimationFrame(tick);
    const ctx = gsap.context(() => {
      if (reduce) return;
      gsap.utils.toArray<HTMLElement>(".world-scene").forEach((scene, index) => {
        const image = scene.querySelector(".world-image"); const copy = scene.querySelector(".world-copy");
        gsap.fromTo(copy, { y: 48, opacity: 0 }, { y: 0, opacity: 1, ease: "power3.out", scrollTrigger: { trigger: scene, start: "top 75%", end: "top 35%", scrub: .8 } });
        gsap.fromTo(image, { scale: index === 3 ? 1.22 : 1.02 }, { scale: index === 3 ? .96 : 1.18, ease: "none", scrollTrigger: { trigger: scene, start: "top bottom", end: "bottom top", scrub: true } });
      });
    }, root);
    return () => { cancelAnimationFrame(raf); lenis?.destroy(); ctx.revert(); };
  }, []);
  return <section className="scroll-world" ref={root} aria-label="Pro Art Company 品牌故事">
    <Particles />
    {scenes.map((scene, index) => <section className={`world-scene world-scene-${index + 1}`} key={scene.title}>
      <Image className="world-image" src={`${assetPath}${scene.image}`} alt="" fill priority={index === 0} sizes="100vw" unoptimized style={{ objectPosition: scene.position }} />
      <div className="world-scrim" />
      <div className="world-copy"><h1>{scene.title}</h1><p>{scene.text}</p>{index === 3 && <Link className="button button-gold" href="/contact">開始規劃課程</Link>}</div>
      <div className="scene-progress" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
    </section>)}
  </section>;
}
