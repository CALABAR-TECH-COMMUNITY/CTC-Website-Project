import JourneyImage from "assets/images/landingPage/journey.svg";

const Journey = (): JSX.Element => {
  return (
    <section className="grid responsive-padx-container grid-cols-1 md:grid-cols-2 gap-20 md:gap-5  blurr-hidden place-items-center py-28 ">
      <img
        className="select-none w-3/4 h-auto "
        src={JourneyImage}
        alt="journey"
        draggable={false}
      />

      <article>
        <h4 className="text-3xl md:text-4xl lg:text-5xl font-medium text-appYellow100 text-center md:text-start">
          A whole new tech journey...
        </h4>
        <p className="text-base md:text-lg lg:text-xl font-bold mt-5 mb-6 ">
          Bridging the gap between the tech talent in Calabar and talents
          outside this location to match the available opportunities in the tech
          market. As a Community we empower these talents by providing access to
          resources, opportunities, and a collaborative networking platform that
          inspires innovation, creativity, and inclusivity in the tech industry.
          Gaining access to mentors who can guide your path.
        </p>

        <div className="flex gap-10 flex-wrap font-poppins font-medium ">
          <button
            type="button"
            className="bg-appYellow200 hover:scale-110 px-6 py-3 rounded-lg transition-all"
          >
            Volunteer
          </button>
          <button
            type="button"
            className="border rounded-lg px-6 py-3 border-appYellow200 hover:scale-110 transition-all"
          >
            Sponsor
          </button>
        </div>
      </article>
    </section>
  );
};

export default Journey;
