import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

import HeroImage from "assets/images/landingPage/hero.svg";
import AppLogo from "assets/images/Logo.svg";

const Hero = (): JSX.Element => {
  return (
    <section className="bg-[url('assets/images/landingPage/hero-bg.svg')] font-comforta  min-h-screen ">
      <header className="h-20 w-full  text-white flex justify-between items-center font-reem responsive-padx-container">
        <img className="h-12" src={AppLogo} alt="Logo" />
        <nav className=" gap-5 hidden sm:flex">
          <Link className="hover:text-appYellow100 hovered-parent " to={""}>
            Home
            <hr className="h-1 w-5 rounded-3xl bg-white  hovered-nav mx-auto" />
          </Link>
          <Link className="hover:text-appYellow100" to={""}>
            About Us
          </Link>
          <Link className="hover:text-appYellow100" to={""}>
            Events
          </Link>
          <Link className="hover:text-appYellow100" to={""}>
            Projects
          </Link>
          <Link className="hover:text-appYellow100" to={""}>
            Contacts
          </Link>
        </nav>

        <FiSearch className="hidden sm:block" />
        <GiHamburgerMenu className="sm:hidden" />
      </header>

      <hr className="border-appGray110" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-[85vh] responsive-padx-container  place-items-center ">
        <div className="flex justify-center flex-col">
          <h1 className="text-white text-center md:text-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Welcome to Calabar Tech Community
          </h1>

          <p className="my-8 text-base font-normal text-white max-w-[33.75rem]">
            Stay connected with the best tech community in Nigeria, meet new
            people, connect, share ideas, get mentorship and stay techie..
          </p>

          <button
            type="button"
            className="px-6 py-3 w-max bg-appYellow200 hover:scale-110 transition-all font-poppins font-medium rounded-lg"
          >
            Join Community
          </button>

          <div className="flex items-center gap-16 mt-10">
            <dl>
              <dd className="font-bold text-3xl text-white">20k+</dd>
              <dt className="text-lg font-light text-white">Members</dt>
            </dl>
            <dl>
              <dd className="font-bold text-3xl text-white">7k+</dd>
              <dt className="text-lg font-light text-white">Online</dt>
            </dl>
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
