"use client";
import { useScroll } from "motion/react";
import MemoryCard from "./MemoryCard";
import { useEffect, useRef } from "react";
import Wishes from "../_section/Wishes";

function MemoryMotion() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  //   useEffect(() => {
  //   return scrollYProgress.on("change", (v) => {
  //     console.log(v);
  //   });

  //   // console.log(scrollYProgress);
  // }, [scrollYProgress]);

  return (
    <>
      <div ref={ref} className="memory-wall">
        {cards.map((card, index) => {
          const targetScale = 1 - (cards.length - index) * 0.15;
          return (
            <MemoryCard
              key={index}
              card={card}
              index={index}
              range={[(index * (100 / cards.length)) / 100, 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
              // length={(100 / memories.length) / 100}
            />
          );
        })}
      </div>
    </>
  );
}

export default MemoryMotion;

const cards = [
  {
    url: "/Salam.png",
    name: "Salam",
    message: `Happy birthday Tawakalt, my love, wishing you the very best life has to offer

You are such an amazing person... May almighty Allah continue to guide and protect you.. Amin

Cheers to a new age
`,
    id: 1,
  },
  {
    url: "/francis.jpg",
    name: "Francis David",
    message: `Happy Birthday Tawakalitu, I wish you more good life and good health`,
    id: 2,
  },
  {
    url: "/Zeey.jpg",
    name: "Zeeeyy",
    message: `Happy birthday T!
Live long and prosper in good health, endless happiness and wealth!
I pray God blesses you, may you get all the beautiful things you deserve things you deserve, may your smile never fade, and may every step you take lead you closer to greatness.

May Almighty Allah's Rahmah, Sakeenah, Idayah, Barakah, Rizq, wa Noor be with you in this Dunya and in the Akhirah!`,
    id: 3,
  },
  {
    url: "/brother.jpg",
    name: "Brother",
    message: `Happy birthday to my dearest, loving and caring sister. Thank you for always standing by me, I pray you find someone who stands by you just as you do for everyone. May Almighty Allah bless, protect and guide you through all times.

Have a wonderful day 💕`,
    id: 4,
  },
  {
    url: "/moriam.jpg",
    name: "Mariam",
    message: `Happiest birthday, my dearest sis, my twin, my pretty Unnie. I wish you a long, prosperous life in good health and wealth. May Allah’s Rahma and Ni‘mah be upon you, forgive your sins, and bless you always.

Even though we argue, you know I love you deeply. Thank you for your patience with me. I pray Allah grants all your heart’s desires, accepts your duas. Ameen.

Enjoy your day to the fullest, This lawyer always has your back. Mwah`,
    id: 5,
  },
  {
    url: "/mom.jpg",
    name: "Mom 💕",
    message:
      "Happiest birthday, my beautiful daughter. May your day be filled with joy and all good things. I pray Almighty Allah grants you good health, knowledge, and understanding, and blesses you with a long, fulfilling life. Enjoy your day to the fullest.",
    id: 6,
  },
];
