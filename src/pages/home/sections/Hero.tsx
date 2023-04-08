import HeroImage1 from "assets/images/landingPage/hero1.svg";
import HeroImage2 from "assets/images/landingPage/hero2.svg";
import HeroImage3 from "assets/images/landingPage/hero3.svg";

const Hero = (): JSX.Element => {
  return (
    <section className="bg-[url('assets/images/landingPage/hero.svg')] font-comforta  min-h-screen responsive-padx-container">
      <header className="h-24 w-full bg-red">jlajkjkajk</header>

      <div className="grid grid-cols-2 bg-appYellow100 gap-5 h-[85vh] ">
        <div>
          <h1 className="text-white text-6xl">
            Welcome to Calabar Tech Community
          </h1>

          <p>
            Stay connected with the best tech community in Nigeria, meet new
            people, connect, share ideas, get mentorship and stay techie..
          </p>

          <button type="button" className="">
            Join Community
          </button>
        </div>

        <figure className="relative ">
          <img
            className="absolute left-[1vw] w-64 h-auto object-center"
            src={HeroImage1}
            alt="hero-1"
          />
          <img
            className="right-[2vw] absolute w-64 h-auto object-center"
            src={HeroImage2}
            alt="hero-2"
          />
          <img
            className="absolute bottom-0 w-64 h-auto object-center"
            src={HeroImage3}
            alt="hero-3"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
