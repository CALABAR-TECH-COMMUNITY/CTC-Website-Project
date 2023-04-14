import { Link, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

import AppLogo from "assets/images/Logo.svg";
import { tabs } from "layout/HomeLayout";

const HomeHeader = (): JSX.Element => {
  const location = useLocation();

  return (
    <header className="h-20 w-full  text-white flex justify-between items-center font-reem responsive-padx-container">
      <img className="h-12" src={AppLogo} alt="Logo" />
      <nav className=" gap-5 hidden sm:flex">
        {tabs.map(({ link, name }, index) => {
          return (
            <Link
              key={index}
              className="hover:text-appYellow100 hovered-parent "
              to={link}
            >
              {name}
              {location.pathname === link && (
                <hr className="h-1 w-5 rounded-3xl bg-white  hovered-nav mx-auto" />
              )}
            </Link>
          );
        })}
      </nav>

      <FiSearch className="hidden sm:block" />
      <GiHamburgerMenu className="sm:hidden" />
    </header>
  );
};

export default HomeHeader;
