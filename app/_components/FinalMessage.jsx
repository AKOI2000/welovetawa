// import Image from "next/image";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

function FinalMessage() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 35%", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  // useEffect(() => {
  //   return scrollYProgress.on("change", (v) => {
  //     // console.log(v);
  //     console.log(filterblur.current);
      
  //   });

  //   // console.log(scrollYProgress);
  // }, [scrollYProgress, filterblur]);

  return (
    <div ref={ref} className="final-final">
      <motion.div className="img-box">
        {/* <Image src="/flower.png" alt="" width={40} height={40} /> */}

        <motion.img
          src="/flower.png"
          style={{ opacity, scale, 
          }}
        />
      </motion.div>

      <h1 className="centre">Happy birthday Tawakalt. <br /> We love you</h1>
    </div>
  );
}

export default FinalMessage;
