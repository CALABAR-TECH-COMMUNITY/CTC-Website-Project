import routes from "navigation/routes";
import React, { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ILogo,
  ITwitter,
  IWhatsapp,
  ISlack,
  ILogoFooter,
  IArrowUp,
} from "utils/icons.utils";

import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import WrappedButton from "components/Button";

interface Tab {
  name: string;
  link: string;
  index: number;
}

const tabs: Tab[] = [
  { name: "Home", link: routes.HOME_PAGE, index: 0 },
  { name: "About Us", link: "", index: 1 },
  { name: "Events", link: routes.EVENTS_PAGE, index: 2 },
  { name: "Projects", link: routes.PROJECTS_PAGE, index: 3 },
  { name: "Contact", link: "", index: 4 },
];

interface LayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);


  const handleToggleMenu = (toggle?: boolean) => {
    setShowMenu(toggle !== undefined ? toggle : !showMenu);
  };

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.link === location.pathname);
    setActiveTab(currentTab?.index || 0);
  }, [location.pathname]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="flex flex-col"
      style={{ backgroundColor: "transparent" }}
    >
      {/* NAV BEGINS */}
      <nav className=" text-white bg-[var(--c-bg-color)] pt-8 px-4 md:flex md:justify-between">
        <div className="container md:mx-14 mx-auto py-2 flex justify-between md:justify-start items-center ">
          <Link to={routes.HOME_PAGE}>
          <img className="text-xl font-bold " src={ILogo} alt="" />
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => handleToggleMenu()}
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
          <div className="hidden md:block ml-[15%] md:ml-[6%] md:pl-0 md:pb-0">
            {tabs.map((tab) => (
              <Link
                key={tab.index}
                to={tab.link}
                onClick={() => handleTabClick(tab.index)}
                className={`block mt-4 md:inline-block md:mt-0 md:ml-6 ${
                  activeTab === tab.index
                    ? "font-bold border-b-2"
                    : "font-normal"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
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
        <div className="hidden md:block mt-7 mr-16">
          <AiOutlineSearch className="w-[30px] h-[30px]" />
        </div>
      </nav>
      {/* NAV ENDS */}

      {/* CONTENT BEGINS */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
      {/* CONTENT ENDS */}

      {/* FOOTER BEGINS */}
      <footer className="bg-[var(--c-bg-color-2)] text-white pt-8">
        <div className="w-[80%] m-auto pt-[3%] md:flex md:justify-around flex flex-col md:flex-row text-center md:text-start">
          <div className="md:mr-24">
            <Link to={routes.HOME_PAGE}>
            <img className="text-xl font-bold m-auto" src={ILogoFooter} alt="" />
            </Link>
          </div>
          <div className="text-[var(--cc-grey-3)] mt-8 md:mt-0">
            <h2 className="font-[700] text-[20px] mb-4">Quick Links</h2>
            <ul className="md:list-disc md:ml-5 font-[400] text-[16px]">
              <li>
                <Link to={""}>Contact Us</Link>
              </li>
              <li>
                <Link to={""}>Job Opportunities</Link>
              </li>
              <li>
                <Link to={""}>Request Mentor/Mentee</Link>
              </li>
              <li>
                <Link to={""}>Blog</Link>
              </li>
            </ul>
          </div>
          <div className="text-[var(--cc-grey-3)]">
            <h2 className="font-[700] text-[20px] mb-4 mt-8 md:mt-0">Social Media</h2>
            <div className="flex justify-center gap-4  m-auto w-[50%]">
              <img src={ITwitter} alt="twitter" />
              <img src={ISlack} alt="slack" />
              <img src={IWhatsapp} alt="whatsapp" />
            </div>
          </div>
        </div>
        <div className=" md:flex md:justify-around flex flex-col md:flex-row text-center md:text-start mt-14 mb-2 py-2 text-black  text-[var(--cc-grey-3)] ">
          <span className="md:ml-[7%] md:w-[10%] mb-4 md:mb-0 md:mt-6 font-[500] text-[12px]">&copy; 2023 </span>
          <span className="md:w-[60%] w-[90%] xl:ml-[25%] lg:ml-[15%] md:ml-[5%] m-auto mb-4 md:mb-0 font-[500] text-[12px] md:text-[15px]">
            Calabar Tech Community · Terms of Use · Privacy Policy
          </span>
          {scrollPosition > 100 && (
          <WrappedButton
            wrapperClass="my-wrapper-class pl-6 pr-8 md:pr-10 py-3 m-auto md:mr-10 bg-[var(--c-dark-2)]  rounded-3xl"
            value="Top"
            onClick={handleScrollToTop}
            icon={IArrowUp}
          />
          )}
        </div>
      </footer>
      {/* FOOTER ENDS */}
    </div>
  );
};

export default HomeLayout;
