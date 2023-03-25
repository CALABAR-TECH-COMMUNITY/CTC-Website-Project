import routes from "navigation/routes";
import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { ILogo } from "utils/icons.utils";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";


interface Tab {
    name: string;
    link: string;
    index: number;
  }
  
  const tabs: Tab[] = [
    { name: "Home", link: routes.HOME_PAGE, index: 0 },
    { name: "About Us", link: "", index: 1 },
    { name: "Events", link: "", index: 2 },
    { name: "Projects", link: routes.PROJECTS_PAGE, index: 3 },
    { name: "Contact", link: "", index: 4 },
  ];

interface LayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: LayoutProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleToggleMenu = (toggle?: boolean) => {
    setShowMenu(toggle !== undefined ? toggle : !showMenu);
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col h-screen" style={{ backgroundColor: "transparent" }}>
      <nav className=" text-white bg-[#271B0A] pt-8 px-4 md:flex md:justify-between"  >
        <div className="container md:mx-14 mx-auto py-2 flex justify-between md:justify-start items-center ">
          <img className="text-xl font-bold " src={ILogo} alt=""/>
          <div className="md:hidden">
            <button
              onClick={() => handleToggleMenu()}
              type="button"
              className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
            >
                {showMenu ? (
                    <AiOutlineClose className="w-[30px] h-[30px]"/>
                ) : (
                  <AiOutlineMenu className="w-[30px] h-[30px]"/>
                )}
            </button>
          </div>
          <div className="hidden md:block ml-[15%] md:pl-0 md:pb-0">
          {tabs.map((tab) => (
                <Link
                  key={tab.index}
                  to={tab.link}
                  onClick={() => handleTabClick(tab.index)}
                  className={`block mt-4 md:inline-block md:mt-0 md:ml-6 ${
                    activeTab === tab.index ? "font-bold border-b-2" : "font-normal"
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
                    activeTab === tab.index ? "font-bold text-[12px]" : "font-normal text-[12px]"
                  }`}
                >
                  {tab.name}
                  </Link>
          ))}
          </div>
        )}
        <div className="hidden md:block mt-7 mr-16">
        <AiOutlineSearch className="w-[30px] h-[30px]"/>
        </div>

      </nav>
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-2 text-black">
          &copy; 2023 My Website
        </div>
      </footer>
    </div>
  );
};

export default HomeLayout;
