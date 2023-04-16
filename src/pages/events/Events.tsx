import flyer1 from "assets/images/flyer1.png";
import flyer2 from "assets/images/flyer2.png";
import flyer3 from "assets/images/flyer3.png";
import flyer4 from "assets/images/flyer4.png";
import gradient from "assets/images/gradient.png";
import image18 from "assets/images/image 18.png";
import image52 from "assets/images/image 52.png";
import image53 from "assets/images/image 53.png";
import image56 from "assets/images/image 56.png";
import circle from "assets/images/circle.png";
import HomeLayout from "layout/HomeLayout";
import EventCard from "./components/EventCard";
// import ResponsiveVoice from "responsivevoice";
function Events() {
  // function speak() {
  //   ResponsiveVoice.speak("Hello World")
  // }
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
      <main className="font-comfort p-0 m-0">
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
            return <EventCard key={index + 1} {...details} />;
          })}
          <br />
          <br />
        </section>
        {/* End of Grids*/}
        <br />
        <br />
        <br />
        {/* <button onClick={speak}>Hello World!</button> */}
        <br />
        <section className="w-full bg-[#1D1D21] p-0 overflow-hidden relative">
          <img
            src={circle}
            alt="Top Circle"
            className="absolute top-0 right-0 mr-0"
          />
          <p className="font-extrabold text-white text-center font-comforta text-size-48 pt-1">
            Past Events
          </p>
          <div className=" gap-10 sm:gap-0 text-center sm:text-start responsive-padx-container mx-auto max-w-[66rem] py-9 flex flex-wrap sm:flex-nowrap">
            <br />
            <img
              src={flyer1}
              className="mx-auto w-[150px] h-[100px] rounded-xl border-[5px] border-darkbtn sm:w-[50px]h-[50px]"
              alt="flyer 1"
            />
            <p className="pl-[20px] text-white font-extrabold font-poppins">
              Feb 23, 2023 - Virtual (Google meet)
              <br />
              <h3 className="text-xl font-comforta">Introduction to tech</h3>
              <div className="flex flex-row flex-wrap p-3 ml-8 md:ml-0 lg:ml-0 font-extralight whitespace-nowrap overflow-hidden overflow-ellipsis">
                <p className="border rounded-full p-2">Career Talks</p>
                <p className="border rounded-full p-2">Product Manaegment</p>
                &nbsp;<p className="border rounded-full p-2">Mobile App Dev.</p>
                <p className="border rounded-full p-2">Software Engineering</p>
                <br />
                <br />
              </div>
              <p className="font-light flex-wrap">
                Lorem ipsum dolor sit amet consectetur. Felis eu feugiat
                tincidunt lacus vitae sit. Mollis adipiscing orci ut donec
                porttitor nulla cursus at. Venenatis cras ullamcorper adipiscing
                risus leo lobortis non. In purus laoreet at imperdiet tempus
                auctor magna. Turpis mi purus vivamus diam tortor mi lacinia
                integer at. Massa tincidunt sit cum mattis habitasse duis risus.
              </p>
            </p>
          </div>
          <br />
          <div className=" gap-10 z-20 relative sm:gap-0 text-center sm:text-start responsive-padx-container mx-auto max-w-[66rem] py-9 flex flex-wrap sm:flex-nowrap">
            <br />
            <img
              src={flyer2}
              className="mx-auto w-[150px] h-[100px] rounded-xl border-[5px] border-darkbtn sm:w-[50px]h-[50px]"
              alt="flyer 1"
            />
            <p className="pl-[20px] text-white font-extrabold font-poppins">
              Feb 23, 2023 - Virtual (Google meet)
              <br />
              <h3 className="text-xl font-comforta">Introduction to tech</h3>
              <div className="flex flex-row flex-wrap p-3 ml-8 md:ml-0 lg:ml-0 font-extralight whitespace-nowrap overflow-hidden overflow-ellipsis">
                <p className="border rounded-full p-2">Career Talks</p>
                <p className="border rounded-full p-2">Product Manaegment</p>
                &nbsp;<p className="border rounded-full p-2">Mobile App Dev.</p>
                <p className="border rounded-full p-2">Software Engineering</p>
                <br />
                <br />
              </div>
              <p className="font-light flex-wrap">
                Lorem ipsum dolor sit amet consectetur. Felis eu feugiat
                tincidunt lacus vitae sit. Mollis adipiscing orci ut donec
                porttitor nulla cursus at. Venenatis cras ullamcorper adipiscing
                risus leo lobortis non. In purus laoreet at imperdiet tempus
                auctor magna. Turpis mi purus vivamus diam tortor mi lacinia
                integer at. Massa tincidunt sit cum mattis habitasse duis risus.
              </p>
            </p>
          </div>
          <div className="relative z-0 h-1/5 p-0">
            <img
              className="absolute bottom-0 right-0"
              src={gradient}
              alt="Gradient"
            />
          </div>
        </section>
        <h3 className="p-12 font-extrabold text-5xl text-darkbtn text-center">
          Event Photos
        </h3>
        <section className="ml-12 p-0 overflow-hidden mb-8">
        <figure className=" grid grid-cols-2 md:grid-cols-3 p-12 gap-x-4">
        <div className="grid grid-cols-1 gap-y-4">
          <img className="rounded-md object-cover w-full" src={image18} alt="" />
          <img className="rounded-md object-cover w-full" src={image18} alt="" />
        </div>

        <img
          className="h-full object-cover rounded-md md:rounded-xl md:-mt-10"
          src={image52}
          alt=""
        />

        <div className=" flex md:grid grid-cols-1 gap-4 mt-4 md:mt-0 ">
          <img className="rounded-md" src={image53} alt="" />
          <img className="rounded-md" src={image56} alt="" />
          <img className="rounded-md hidden md:hidden lg:block" src={image56} alt="" />
        </div>
      </figure>
      </section>
      </main>
    </HomeLayout>
  );
}

export default Events;
