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

  const x = useTransform(scrollYProgress, [0.1, 1], ["1%", "-100%"]);
  // const height = useTransform(scrollYProgress, [0.98, 1], ["100vh", "0vh"]);
  // const opacity = useTransform(scrollYProgress, [0.88, 1], [1, 0]);

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
    <motion.div key={card.id} className="wish-card">
      <Image src={card.imagelink} alt={card.imageAlt} fill />
    </motion.div>
  );
};

export default WishesMotion;

const memories = [
  {
    imagelink: "/tawa-1.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/tawa-2.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/tawa-3.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/tawa-4.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/tawa-5.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/tawa-6.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/tawa-7.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/memory-1.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/memory-2.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/memory-3.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/memory-4.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/memory-5.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/memory-6.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/memory-7.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/memory-8.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/memory-9.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/memory-10.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/memory-11.jpg",
    imageAlt: "JUST TESTING",
  },
  {
    imagelink: "/memory-12.jpg",
    imageAlt: "JUST TESTING",
  },
];
