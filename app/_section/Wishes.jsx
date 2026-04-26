import WishesMotion from "../_components/WishesMotion";

function Wishes() {
  // const ref = useRef();

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["10% start", "end end"],
  // });

  return (
    <>
      <section
        // ref={ref}
        className="wishes-section"
      >
        <WishesMotion />
      </section>
    </>
  );
}

export default Wishes;

