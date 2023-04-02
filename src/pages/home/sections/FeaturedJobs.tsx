import JobsCard from "../components/JobsCard";
import LandingIcon from "assets/icons/landingPage/landing-1.svg";

const FeaturedJobs = (): JSX.Element => {
  return (
    <section className="pt-16 pb-14 responsive-padx-container relative">
      <img
        src={LandingIcon}
        className="absolute right-0 -top-20 hidden sm:block h-40 w-40 md:w-44 md:h-44 object-contain lg:h-48 lg:w-48"
        alt="icon"
        draggable={false}
      />
      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-appGray200 font-weight-700 text-center ">
        Featured Jobs
      </h4>

      <p className="max-w-[37.5rem] text-appGray100  font-poppins font-normal text-center mx-auto text-sm md:text-base lg:text-lg mt-10 mb-14">
        We share opportunities for the young talents in the community, you can
        view more opportunities here.{" "}
        <button className="text-appYellow100 underline font-bold" type="button">
          View more
        </button>
      </p>

      <ul className="grid  md:grid-cols-2 gap-y-12 gap-x-12  lg:gap-x-24">
        {[...Array(4)].map((_, index) => {
          return <JobsCard key={index} />;
        })}
      </ul>
    </section>
  );
};

export default FeaturedJobs;
