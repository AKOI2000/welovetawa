import WordAnimation from "../_components/WordAnimation";

function Intro() {
  return (
    <section className="container">
      <div className="intro-box">
        <WordAnimation
          value={
            "Some people deserve more than a simple wish, they deserve to be felt, remembered, and celebrated"
          }
          centre={true}
        />
      </div>
    </section>
  );
}

export default Intro;
