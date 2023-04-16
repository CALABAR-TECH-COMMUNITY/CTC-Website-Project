import { Link } from "react-router-dom";
import EventsCard from "../components/EventsCard";

const UpcomingEvents = (): JSX.Element => {
  return (
    <section className="responsive-padx-container pt-16 pb-11 font-p">
      <h4 className="font-comforta text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-appGray200 font-weight-700 text-center ">
        Upcoming Events
      </h4>

      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center mt-14 gap-x-3 gap-y-12 ">
        {[...Array(4)].map((_, index) => {
          return <EventsCard isLast={index + 1 === 3} key={index} />;
        })}
      </ul>

      <div className="flex">
        <Link
          className="mx-auto mt-16 bg-appYellow200 px-6 text-base py-3 rounded-md font-poppins font-medium text-appGray900 hover:scale-110 transition-all"
          to="/events"
        >
          More
        </Link>
      </div>
    </section>
  );
};

export default UpcomingEvents;
