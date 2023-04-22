import JourneyImage from "assets/images/landingPage/journey.svg";

const Journey = (): JSX.Element => {
  return (
    <section className="grid responsive-padx-container grid-cols-1 md:grid-cols-2 gap-20 md:gap-5  blurr-hidden place-items-center py-28 ">
      <img
        className="select-none w-3/4 h-auto "
        src={JourneyImage}
        alt="journey"
        draggable={false}
      />

      <article>
        <h4 className="text-3xl md:text-4xl lg:text-5xl font-medium text-appYellow100 text-center md:text-start">
          A whole new tech journey...
        </h4>
        <p className="text-base md:text-lg lg:text-xl font-bold mt-5 mb-6 ">
          Our community aims to bridge the gap between tech talents in Calabar
          and those outside the location, by connecting them with the available
          opportunities in the tech market. We provide access to resources,
          opportunities, and a collaborative networking platform that inspires
          innovation, creativity, and inclusivity in the tech industry.
          Additionally, we offer mentorship programs that provide guidance to
          individuals on their career path.
        </p>

        <div className="flex gap-10 flex-wrap font-poppins font-medium ">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScy4nFHFFml0N-BN6mxcctqKoqyIF4UwJ1Us-KfLZecn0MpIg/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="bg-appYellow200 hover:scale-110 px-6 py-3 rounded-lg transition-all"
            >
              Join us now
            </button>
          </a>
          {/* <button
            type="button"
            className="bg-appYellow200 hover:scale-110 px-6 py-3 rounded-lg transition-all"
          >
            Volunteer
          </button>
          <button
            type="button"
            className="border rounded-lg px-6 py-3 border-appYellow200 hover:scale-110 transition-all"
          >
            Sponsor
          </button> */}
        </div>
      </article>
    </section>
  );
};

export default Journey;
