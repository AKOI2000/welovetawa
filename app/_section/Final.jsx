import Image from "next/image";
import WordAnimation from "../_components/WordAnimation";
import FinalMessage from "../_components/FinalMessage";

function Final() {
  return (
    <section className="container">
      <div className="final-message">
        <div className="" style={{ height: "25vh" }}></div>
        <WordAnimation value={words} centre={true} />
        <div className="" style={{ height: "25vh" }}></div>
      </div>

      <FinalMessage />
    </section>
  );
}

export default Final;

const words =
  `Tawakalt, Today is a celebration of the beautiful person you are and the joy you bring to everyone around you. You have a way of making people feel seen, heard, and loved, and that is such a rare gift. Every memory with you carries laughter, warmth, and something unforgettable. I hope this new year brings you peace in the hard moments, joy in the little things, and love that surrounds you always. You deserve every beautiful thing life has to offer. Thank you for being you. Happy Birthday, my bestfriend`;
