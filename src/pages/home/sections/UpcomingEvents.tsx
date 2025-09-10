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
    <section className="bg-darkblue py-20 font-comforta">
      <div className="responsive-padx-container">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Upcoming <span className="text-appYellow200">Events</span>
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {upcomingEvents.map((event, index) => (
            <EventsCard event={event} key={index} />
          ))}
        </ul>
        {upcomingEvents.length > 3 && (
          <div className="text-center mt-16">
            <Link
              className="inline-block px-8 py-4 bg-appYellow200 text-appBlack hover:bg-appYellow100 transition-all font-poppins font-bold rounded-full text-lg"
              to="/events"
            >
              View More Events
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
