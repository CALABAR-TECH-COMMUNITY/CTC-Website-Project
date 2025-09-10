import HeroImage from "assets/images/landingPage/hero.svg";
import Header from "./HomeHeader";

const Hero = (): JSX.Element => {
  return (
    <section className="bg-darkblue text-white font-comforta min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center responsive-padx-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Welcome to the
              <br />
              <span className="text-appYellow200">Calabar Tech Community</span>
            </h1>
            <p className="my-8 text-lg font-light max-w-2xl mx-auto md:mx-0 text-lightash">
              Connect, learn, and grow with the most vibrant tech community in Nigeria. Join us to network with peers, find mentors, and stay ahead of the curve in the ever-evolving world of technology.
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
                Join Our Community
              </button>
            </a>
            <div className="mt-12 flex justify-center md:justify-start items-center gap-12">
              <div>
                <p className="font-bold text-4xl">500+</p>
                <p className="text-lg font-light text-lightash">Community Members</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              className="w-full max-w-md mx-auto"
              src={HeroImage}
              draggable={false}
              alt="Community illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
