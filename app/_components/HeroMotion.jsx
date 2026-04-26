import { motion, useTransform } from "motion/react";

import heroBg from "@/public/hero-bg.jpg";
import Image from "next/image";

function HeroMotion({ progress }) {
  const containerHeight = useTransform(
    progress,
    [0.5, 0.95],
    ["100dvh", "0dvh"],
  );
  const opacity = useTransform(progress, [0.3, 0.8], [1, 0]);
  return (
    <motion.div style={{ height: containerHeight }} className="hero-box">
      <Image src={heroBg} fill style={{ objectFit: "cover" }} alt="Hero-bg" />

      <div className="hero-overlay"></div>

      <motion.div style={{ opacity }} className="hero-text">
        {/* <p>to my dearest friend</p> */}
        <h1>
          You make <br /> ordinary moments unforgettable
        </h1>
      </motion.div>
    </motion.div>
  );
}

export default HeroMotion;
