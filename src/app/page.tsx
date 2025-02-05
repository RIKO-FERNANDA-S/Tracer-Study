"use client"
import dynamic from "next/dynamic";
import { useEffect } from "react";
import Lenis from "lenis"

const Hero = dynamic(() => import("@/components/layouts/hero"))

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any){
      lenis.raf(time)
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf)
  })
  return (
    <main>
      <Hero />
    </main>
  );
}
