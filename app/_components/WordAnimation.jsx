import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function WordAnimation({ value, centre }) {
  const words = value.split(" ");
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.25"],
  });
  return (
    <p ref={ref} className={`word-animation ${centre ? "centre" : null}`}>
      {words?.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;

        return (
          <Word
            word={word}
            key={index}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}

function Word({ word, range, progress }) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="word">
      <span className="shadow">{word}</span>
      <motion.span style={{ opacity }}>{word}</motion.span>
    </span>
  );
}

export default WordAnimation;
