"use client";

import Hero from "@/app/_section/Hero";
import Intro from "@/app/_section/Intro";
import MemoryWall from "@/app/_section/MemoryWall";
import Wishes from "@/app/_section/Wishes";
import Final from "@/app/_section/Final";

export default function Home() {
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
