import routes from "navigation/routes";
import { Link } from "react-router-dom";

const demoLogo =
  "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

const ProjectCard = (): JSX.Element => {
  return (
    <div className="shadow-projectCardShadow rounded-2xl p-6 relative ">
      {/* CARD IMAGE */}
      <img
        className=" h-16 w-20  md:h-20 md:w-24 rounded-lg object-cover absolute -top-10"
        draggable={false}
        src={demoLogo}
        alt="Find artisan"
      />

      {/* CARD TITLE */}
      <div className="flex mb-7 mt-3">
        <a
          href="https://artisan-fe-cal-tech.web.app"
          className="cursor-pointer ml-auto font-poppins font-semibold text-base md:text-xl"
          target="_blank"
          rel="noreferrer"
        >
          FindArtisan.com
        </a>
      </div>

      {/* CARD TECH STACKS */}
      <span className="flex gap-2 flex-wrap">
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

      {/* CARD DETAILS */}
      <article className="text-appGray100 text-sm font-normal mb-6 mt-3">
        Lorem ipsum dolor sit amet consectetur. Cursus vestibulum ultricies
        libero sit sit vel faucibus diam. Porttitor faucibus diam ultrices
        tempus ridiculus ut ornare. Purus diam pharetra elementum ultrices arcu
        nisl risus tristique leo. Fusce faucibus ullamcorper condimentum eget
        egestas.
      </article>

      {/* CARD VIEW DETAILS BUTTON  */}
      <div className="flex">
        <Link
          to={routes.PROJECT_DETAILS_PAGE}
          className="px-4 py-2 text-appYellow200 border border-appYellow200 rounded-lg font-roboto font-medium text-sm ml-auto hover:bg-appYellow200 hover:text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
