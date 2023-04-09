import flyer1 from "assets/images/flyer1.png";
import flyer2 from "assets/images/flyer2.png";
import flyer3 from "assets/images/flyer3.png";
import flyer4 from "assets/images/flyer4.png";
import gradient from "assets/images/gradient.png";
import HomeLayout from "layout/HomeLayout";
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
    <HomeLayout>
    <main className="font-comfort">
      <header className="h-32 md:h-36 lg:h-40 bg-[url(assets/images/header.svg)] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center ">
        <h1 className="text-6xl font-weight-700 text-left font-comfort sm:text-3xl md:text-5xl ml-11 md:ml-12 lg:ml-14 ">
          Events
        </h1>
      </header>

      <h2 className="text-center text-size-48 leading-lineh-54 tracking-custom1 font-weight-700 font-comfort h-[54px] top-[110px] py-20 text-darkbtn">
        Upcoming Events
      </h2>

      {/* Grids */}
      <section className="grid grid-cols-1 pt-20 pb-14 md:grid-cols-2 overflow-hidden lg:grid-cols-3 responsive-padx-container gap-10 place-content-center ml-11">
        {gridDetails.map((details, index) => {
          return <EventCard key={index+1} {...details} />;
        })}
        <br/>
        <br/>
      </section>
      {/* End of Grids*/}
      <br/>
      <br/>
      <br/>
      <br/>
      <section className="w-full bg-[#1D1D21] p-0 overflow-hidden relative">
        <p className="font-extrabold text-white text-center font-comforta text-size-48 pt-1">Past Events</p>
        <div className="px-[50px] py-9 lg:px-[200px] md:px-[20px] flex">
        <br/>
        <img src={flyer1} className="w-[150px] h-[100px] rounded-xl border-[5px] border-darkbtn sm:w-[50px]h-[50px]" alt="flyer 1"/>
        <p className="pl-[20px] text-white font-extrabold font-poppins">Feb 23, 2023 - Virtual (Google meet)<br/>
        <h3 className="text-xl font-comforta">Introduction to tech</h3>
        <div className="flex flex-row flex-wrap font-extralight whitespace-nowrap overflow-hidden overflow-ellipsis">
        <p className="border rounded-full p-2">Career Talks</p>&nbsp;<p className="border rounded-full p-2">Product Manaegment</p>&nbsp;<p className="border rounded-full p-2">Mobile App Dev.</p><p className="border rounded-full p-2">Software Engineering</p><br/><p></p><br/>
        </div>
        <p className="font-light flex-wrap">Lorem ipsum dolor sit amet consectetur. Felis eu feugiat tincidunt lacus vitae sit. Mollis adipiscing orci ut donec porttitor nulla cursus at. Venenatis cras ullamcorper adipiscing risus leo lobortis non. In purus laoreet at imperdiet tempus auctor magna. Turpis mi purus vivamus diam tortor mi lacinia integer at. Massa tincidunt sit cum mattis habitasse duis risus.</p>
        </p>
      </div>
      <br/>
      <div className="px-[50px] lg:px-[200px] py-9 flex">
        <br/>
        <img src={flyer2} className="w-[150px] h-[100px] rounded-xl border-[5px] border-darkbtn sm:w-[50px]h-[50px]" alt="flyer 1"/>
        <p className="pl-[20px] text-white font-extrabold font-poppins">Feb 23, 2023 - Virtual (Google meet)<br/>
        <h3 className="text-xl font-comforta">Introduction to tech</h3>
        <div className="flex flex-row flex-wrap font-extralight whitespace-nowrap overflow-hidden overflow-ellipsis">
        <p className="border rounded-full p-2">Career Talks</p>&nbsp;<p className="border rounded-full p-2">Product Manaegment</p>&nbsp;<p className="border rounded-full p-2">Mobile App Dev.</p><p className="border rounded-full p-2">Software Engineering</p><br/><p></p><br/>
        </div>
        <p className="font-light flex-wrap">Lorem ipsum dolor sit amet consectetur. Felis eu feugiat tincidunt lacus vitae sit. Mollis adipiscing orci ut donec porttitor nulla cursus at. Venenatis cras ullamcorper adipiscing risus leo lobortis non. In purus laoreet at imperdiet tempus auctor magna. Turpis mi purus vivamus diam tortor mi lacinia integer at. Massa tincidunt sit cum mattis habitasse duis risus.</p>
        </p>
      </div>
      <div className="relative h-1/5 p-0">
      <img
        className="absolute bottom-0 right-0"
        src={gradient}
        alt="Gradient"
      />
    </div>
      </section>
      <br/>
      <br/>
    </main>
    </HomeLayout>
  );
}

export default Events;
