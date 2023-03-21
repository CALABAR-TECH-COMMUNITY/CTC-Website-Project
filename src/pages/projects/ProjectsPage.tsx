import FindArtisanImage from "assets/images/find-artisans.svg";
import ProjectCard from "../../components/ProjectCard";
import ProjectsHeader from "../../components/ProjectsHeader";

const ProjectsPage = (): JSX.Element => {
  return (
    <main className="font-comforta">
      {/* HEADER */}
      <ProjectsHeader />

      {/* HERO PROJECT */}
      <section className=" flex flex-col items-center md:grid grid-cols-2 responsive-padx-container mx-auto gap-5 lg:gap-10 mt-20">
        <img className="max-h-80" src={FindArtisanImage} alt="find artisans" />

        <div>
          <p className=" text-center md:text-left font-bold text-xl md:text-2xl lg:text-3xl text-appGray200">
            Shopping Mami
          </p>
          <div className="h-1 mt-2 mb-5  bg-appGray300" />
          <article className=" text-base lg:text-lg font-normal text-appGray100">
            Lorem ipsum dolor sit amet consectetur. Cursus vestibulum ultricies
            libero sit sit vel faucibus diam. Porttitor faucibus diam ultrices
            tempus ridiculus ut ornare. Purus diam pharetra elementum ultrices
            arcu nisl risus tristique leo.
          </article>
          <p className="text-appGray200 font-medium font-poppins mt-3 mb-8">
            Lorem ipsum
          </p>
          <picture className="flex gap-3 flex-wrap items-center ">
            <img
              className=" h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="man"
            />
            <img
              className=" h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="woman"
            />
            <img
              className=" h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="man"
            />
            <img
              className=" h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="woman"
            />
            <img
              className=" h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="man"
            />
          </picture>
          <div className="text-base font-bold mt-5">Project Team</div>
        </div>
      </section>

      {/* PAST PROJECTS */}
      <p className="mt-32 text-appYellow100 font-bold text-2xl text-center mb-11">
        Past Projects
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-32 gap-x-4 gap-y-20 px-16">
        {[...Array(6)].map((item, index) => {
          return <div key={index+1}><ProjectCard/></div>
        })}
      </section>
    </main>
  );
};

export default ProjectsPage;
