import JourneyImage from "assets/images/landingPage/journey.svg";

const Journey = (): JSX.Element => {
  return (
    <section className="bg-darkblue text-white py-24">
      <div className="responsive-padx-container grid md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <img
            className="select-none w-full max-w-md"
            src={JourneyImage}
            alt="Tech Journey"
            draggable={false}
          />
        </div>
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Start a Whole New <br/>
            <span className="text-appYellow200">Tech Journey With Us</span>
          </h2>
          <p className="text-lg text-lightash mb-8">
            Our community bridges the gap for tech talents in Calabar, connecting them with national and international opportunities. We provide the resources, networking, and mentorship needed to inspire innovation, creativity, and career growth in the tech industry.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScy4nFHFFml0N-BN6mxcctqKoqyIF4UwJ1Us-KfLZecn0MpIg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button
              type="button"
              className="px-8 py-4 bg-appYellow200 text-appBlack hover:bg-appYellow100 transition-all font-poppins font-bold rounded-full text-lg"
            >
              Join Us Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Journey;
