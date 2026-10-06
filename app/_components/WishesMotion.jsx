import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import wishTest from "@/public/wish-test.jpg";

const WishesMotion = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0.02, 1], ["1%", "-100%"]);

  return (
    <section ref={targetRef} className="wishes-container">
      <div className="wishes-wrapper">
        <motion.div style={{ x }} className="wishes-wrapper-wheel">
          {memories.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <motion.div className="wish-card">
      <Image src={card.imagelink} alt="tawakalt Adeshina" fill />
    </motion.div>
  );
};

export default WishesMotion;

const memories = [
  {
    imagelink: "/tawa-1.jpg",
  },
  {
    imagelink: "/tawa-2.jpg",
  },
  {
    imagelink: "/tawa-3.jpg",
  },
  {
    imagelink: "/tawa-4.jpg",
  },
  {
    imagelink: "/tawa-5.jpg",
  },
  {
    imagelink: "/tawa-6.jpg",
  },
  {
    imagelink: "/tawa-7.jpg",
  },
  {
    imagelink: "/memory-1.jpg",
  },
  {
    imagelink: "/memory-2.jpg",
  },
  {
    imagelink: "/memory-3.jpg",
  },
  {
    imagelink: "/memory-4.jpg",
  },
  {
    imagelink: "/memory-5.jpg",
  },
  {
    imagelink: "/memory-6.jpg",
  },
  {
    imagelink: "/memory-7.jpg",
  },
  {
    imagelink: "/memory-8.jpg",
  },
  {
    imagelink: "/memory-9.jpg",
  },
  {
    imagelink: "/memory-10.jpg",
  },
  {
    imagelink: "/memory-11.jpg",
  },
  {
    imagelink: "/memory-12.jpg",
  },
];
