import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

import ProjectsHeader from "../../components/ProjectsHeader";
import FindArtisanImage from "assets/images/find-artisans.svg";

const ProjectDetailsPage = (): JSX.Element => {
  return (
    <main className="font-comforta">
      {/* HEADER */}
      <ProjectsHeader />

      {/* PROJECT DESCRIPTION */}
      <section className=" flex flex-col items-center md:grid grid-cols-2 place-items-center responsive-padx-container mx-auto gap-5 lg:gap-10 mt-20">
        <img className="max-h-80" src={FindArtisanImage} alt="find artisans" />

        <div>
          <p className=" text-center md:text-left font-bold text-xl md:text-2xl lg:text-3xl text-appGray200">
            Shopping Mami
          </p>
          <div className="h-1 mt-2 mb-5  bg-appGray300" />

          {/* PROJECT TECH STACKS */}
          <span className="flex my-5 gap-2">
            <data
              className="py-1 px-2 shadow-projectShadowPill border border-appGray400 rounded-full font-poppins text-sm text-appGray200"
              value="Nodejs"
            >
              React
            </data>
            <data
              className="py-1 px-2 shadow-projectShadowPill border border-appGray400 rounded-full font-poppins text-sm text-appGray200"
              value="TypeScript"
            >
              TypeScript
            </data>
            <data
              className="py-1 px-2 shadow-projectShadowPill border border-appGray400 rounded-full font-poppins text-sm text-appGray200"
              value="Tailwind"
            >
              Tailwind
            </data>
          </span>

          <article className=" text-base lg:text-lg font-normal text-appGray100">
            Lorem ipsum dolor sit amet consectetur. Cursus vestibulum ultricies
            libero sit sit vel faucibus diam. Porttitor faucibus diam ultrices
            tempus ridiculus ut ornare. Purus diam pharetra elementum ultrices
            arcu nisl risus tristique leo.
          </article>
          <p className="text-appGray200 font-medium font-poppins mt-3 mb-8">
            Lorem ipsum
          </p>
        </div>
      </section>

      {/* PROJECT TEAM MEMBERS */}
      <p className="mt-32 text-appYellow100 font-bold text-2xl text-center mb-11">
        Team Members
      </p>

      {/* PROJEC GALLERY */}
      <section className="responsive-padx-container mb-32">
        <picture className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-auto  place-items-center gap-3 rounded-2xl  overflow-hidden ">
          <img
            className="h-60 w-60 object-cover lg:rounded-tl-2xl"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="man"
          />
          <img
            className="h-60 w-60 object-cover"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="woman"
          />
          <img
            className="h-60 w-60 object-cover"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="woman"
          />
          <img
            className="h-60 w-60 object-cover lg:rounded-tr-2xl"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="man"
          />
          <img
            className="h-60 w-60 object-cover lg:rounded-bl-2xl"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="man"
          />
          <img
            className="h-60 w-60 object-cover"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="woman"
          />
          <img
            className="h-60 w-60 object-cover"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="woman"
          />
          <img
            className="h-60 w-60 object-cover lg:rounded-br-2xl"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="man"
          />
        </picture>

        <div className="flex">
          <span className="flex ml-auto h-8 w-28 border border-appGray200 rounded-3xl overflow-hidden mt-20 mr-5 ">
            <button
              className="border-appGray200 border-r-[1px] flex-1 flex items-center justify-center"
              type="button"
            >
              <BsChevronLeft />
            </button>
            <button
              className="border-appGray200 bg-appYellow100 border-l-[1px] flex-1 flex items-center justify-center"
              type="button"
            >
              <BsChevronRight />
            </button>
          </span>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailsPage;
