import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import {
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

import AppLogo from "assets/images/Logo.svg";
import { tabs } from "layout/HomeLayout";

const HomeHeader = (): JSX.Element => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

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
      {showMenu && (
        <div className="md:hidden  pb-4 w-[100%] flex gap-4">
          {tabs.map((tab) => (
            <Link
              key={tab.index}
              to={tab.link}
              onClick={() => handleTabClick(tab.index)}
              className={`block mt-4 md:inline-block md:mt-0 md:ml-6 ${
                activeTab === tab.index
                  ? "font-[700] text-[12px]"
                  : "font-normal text-[12px]"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      )}

      <FiSearch className="hidden sm:block" />
      {/* <GiHamburgerMenu
        className="sm:hidden"
        onClick={() => setShowMenu(!showMenu)}
      /> */}
         <div className="md:hidden">
              <button
                onClick={() => setShowMenu(!showMenu)}
                type="button"
                className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
              >
                {showMenu ? (
                  <AiOutlineClose className="w-[30px] h-[30px]" />
                ) : (
                  <AiOutlineMenu className="w-[30px] h-[30px]" />
                )}
              </button>
            </div>
    </header>
  );
};

export default HomeHeader;
