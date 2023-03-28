import flyer1 from "assets/images/flyer1.png";
import flyer2 from "assets/images/flyer2.png";
import flyer3 from "assets/images/flyer3.png";
import flyer4 from "assets/images/flyer4.png";
import EventCard from "./components/EventCard";

function Events() {
  const gridDetails = [
    {
      image: flyer1,
      month: "FEB",
      date: "15",
      superscript: "th",
      title: "Navigating you way through tech (FREE)",
      desc: "Get to meet the professionals...",
      location: "Calabar, Nigeria",
    },
    {
      image: flyer2,
      month: "FEB",
      date: "15",
      superscript: "th",
      title: "Navigating you way through tech (FREE)",
      desc: "Get to meet the professionals...",
      location: "Calabar, Nigeria",
    },
    {
      image: flyer3,
      month: "FEB",
      date: "15",
      superscript: "th",
      title: "Pizza Hangout 3.0 (FREE)",
      desc: "Get to meet the best tech community in Nigeria",
      location: "Calabar, Nigeria",
    },
    {
      image: flyer3,
      month: "FEB",
      date: "15",
      superscript: "th",
      title: "Pizza Hangout 3.0 (FREE)",
      desc: "Get to meet the best tech community in Nigeria",
      location: "Calabar, Nigeria",
    },
    {
      image: flyer3,
      month: "FEB",
      date: "15",
      superscript: "th",
      title: "Pizza Hangout 3.0 (FREE)",
      desc: "Get to meet the best tech community in Nigeria",
      location: "Calabar, Nigeria",
    },
    {
      image: flyer4,
      month: "FEB",
      date: "15",
      superscript: "th",
      title: "Navigating you way through tech (FREE)",
      desc: "Get to meet the professionals...",
      location: "Calabar, Nigeria",
    },
  ];
  return (
    <main className="font-comforta">
      <header className="h-32 md:h-36 lg:h-40 bg-[url(assets/images/header.svg)] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center ">
        <h1 className="text-6xl  font-weight-700 text-left font-comfort sm:text-3xl md:text-5xl ml-11 md:ml-12 lg:ml-14 ">
          Events
        </h1>
      </header>

      <h2 className="text-center text-size-48 leading-lineh-54 tracking-custom1 font-weight-700 font-comfort h-[54px] top-[110px] py-20 text-darkbtn">
        Upcoming Events
      </h2>

      {/* Grids */}
      <section className="grid grid-cols-1 md:grid-cols-2 overflow-hidden lg:grid-cols-3 responsive-padx-container gap-10 place-content-center ml-11">
        {gridDetails.map((details, index) => {
          return <EventCard key={index} {...details} />;
        })}
      </section>
      {/* End of Grids*/}
    </main>
  );
}

export default Events;
