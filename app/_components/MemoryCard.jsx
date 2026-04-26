import { motion, px, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";

function MemoryCard({ index, card, range, targetScale, progress }) {
  const scale = useTransform(progress, range, [1, targetScale]);

  // const text = card?.message.replace(/\r\n/g, "\n").replace(/[ \t]+\n/g, "\n").trim()

  return (
    <motion.div
      className="memory-wall-wrapper"
      style={{
        scale,
        // top: `calc(-10% + ${index * 15}px)`,
      }}
    >
      <div
        className="memory-card"
        style={
          {
            // background: memory.background,
          }
        }
      >
        <div className="memory-card-img_box">
          <Image src={card?.url} alt={card?.message} fill />
        </div>
        <div className="memory-card-text_box">
          <motion.p
            // initial={{ filter: "blur(10px)" }}
            // whileInView={{ filter: "blur(0px)" }}
          >
            {/* <span>&ldquo;</span> */}
            {card.message}
            {/* {text} */}
          </motion.p>

          <h3>{card.name}</h3>
        </div>
      </div>
    </motion.div>
  );
}

export default MemoryCard;
