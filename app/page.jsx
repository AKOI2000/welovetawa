"use client";

import Hero from "@/app/_section/Hero";
import Intro from "@/app/_section/Intro";
import MemoryWall from "@/app/_section/MemoryWall";
import Wishes from "@/app/_section/Wishes";
import Final from "@/app/_section/Final";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Hero />
      <Intro />
      <MemoryWall />
      <Wishes />
      <Final />
    </>
  );
}
