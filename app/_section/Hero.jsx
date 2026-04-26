"use client";
import { useScroll } from "motion/react";
import HeroMotion from "../_components/HeroMotion";
import { useRef } from "react";

function Hero() {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 15%"],
  });

  // useEffect(() => {
  //   return scrollYProgress.on("change", (v) => {
  //     console.log(v);
  //   });

  //   // console.log(scrollYProgress);
  // }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="hero">
      <HeroMotion progress={scrollYProgress} />
    </section>
  );
}

export default Hero;
