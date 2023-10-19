import HeroImage from "assets/images/landingPage/hero.svg";
import Header from "./HomeHeader";

const Hero = (): JSX.Element => {
  return (
    <section className="bg-[url('assets/images/landingPage/hero-bg.svg')] font-comforta  min-h-screen ">
      <Header />

      <hr className="border-appGray110" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-[85vh] responsive-padx-container  place-items-center ">
        <div className="flex justify-center flex-col">
          <h1 className="text-white text-center md:text-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Welcome to Calabar Tech Community
          </h1>

          <p className="my-8 text-base font-normal text-white max-w-[33.75rem]">
            Stay connected with the premier tech community in Nigeria, where you
            can engage with fellow tech enthusiasts, network with new
            individuals, exchange ideas, receive mentorship, and stay up-to-date
            with the latest technological advancements. Join us to foster a
            thriving community of techies who are passionate about continuous
            learning and growth in the ever-evolving field of technology.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScy4nFHFFml0N-BN6mxcctqKoqyIF4UwJ1Us-KfLZecn0MpIg/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="px-6 py-3 w-max bg-appYellow200 hover:scale-110 transition-all font-poppins font-medium rounded-lg"
            >
              Join Community
            </button>
          </a>

          <div className="flex items-center gap-16 mt-10">
            <dl>
              <dd className="font-bold text-3xl text-white">500+</dd>
              <dt className="text-lg font-light text-white">Members</dt>
            </dl>
            {/* <dl>
              <dd className="font-bold text-3xl text-white">7k+</dd>
              <dt className="text-lg font-light text-white">Online</dt>
            </dl> */}
          </div>
        </div>

        <img
          className="hidden md:block w-[27rem]"
          src={HeroImage}
          draggable={false}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
