import { Link } from "react-router-dom";
import EventsCard from "../components/EventsCard";
import aiEEveentImage from "assets/images/events/ai_event.png";

const UpcomingEvents = (): JSX.Element => {
  const upcomingEvents = [
    {
      title: "Navigating your career as AI and MACHINE LEARNING Engineer",
      subTitle: "",
      poster: aiEEveentImage,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeJ-KI1e2DJFJZbdiMPySTsa0qb67aU_UWhGDY9vfV11ylb2Q/viewform?embedded=true",
      locatiion: "Virtual",
      month: "May",
      day: "20",
    },
  ];
  return (
    <section className="responsive-padx-container pt-16 pb-11 font-p">
      <h4 className="font-comforta text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-appGray200 font-weight-700 text-center ">
        Upcoming Events
      </h4>

      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center mt-14 gap-x-3 gap-y-12 ">
        {upcomingEvents.map((event, index) => {
          return (
            <EventsCard isLast={index + 1 === 3} event={event} key={index} />
          );
        })}
      </ul>

      {upcomingEvents.length > 3 && (
        <div className="flex">
          <Link
            className="mx-auto mt-16 bg-appYellow200 px-6 text-base py-3 rounded-md font-poppins font-medium text-appGray900 hover:scale-110 transition-all"
            to="/events"
          >
            More
          </Link>
        </div>
      )}
    </section>
  );
};

export default UpcomingEvents;
