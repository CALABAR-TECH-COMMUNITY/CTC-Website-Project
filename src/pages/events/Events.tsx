import "../../App.css";
import Vector from "assets/images/Vector.png"
import flyer1 from "assets/images/flyer1.png"
import flyer2 from "assets/images/flyer2.png"
import flyer3 from "assets/images/flyer3.png"
import flyer4 from "assets/images/flyer4.png"
import HomeLayout from "layout/HomeLayout";

function Events() {
  let gridDetails = [
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
    <>
    <HomeLayout>
      <header className="h-32 md:h-36 lg:h-40 bg-[url(assets/images/header.svg)] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center ">
        <h1 className="text-6xl font-extrabold font-weight-700 text-left font-comfort sm:text-3xl md:text-5xl ml-11 md:ml-12 lg:ml-14 ">
          Events
        </h1>
      </header>
      <div className="text-center text-size-48 leading-lineh-54 tracking-custom1 font-weight-700 font-comfort h-[54px] top-[110px] py-20 text-darkbtn">
        Upcoming Events
      </div>
      {/* Grids */}
      <div className=" grid content-center grid-cols-1 text-center gap-2 overflow-hidden px-[100px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {gridDetails.map((gd) => (
          <div className="my-8 w-fit cursor-pointer items-center justify-items-center rounded-2xl border bg-transparent text-center text-white shadow-lg shadow-darkbtn transition duration-500 ease-in-out hover:scale-105">
            <img
              src={gd.image}
              className="w-full h-auto left-0 rounded-t-xl overflow-hidden"
              alt="flyer1"
            />
            <br />
            <div className="flex">
              <p className="text-darkbtn text-left text-3xl px-[20px] pt-0 mb-[20px]">
                {gd.month}
                <br />
                <p className="font-custom font-weight-400 text-black mt-[10px]">
                  {gd.date}
                  <sup className="font-[5px]">th</sup>
                </p>
              </p>
              <div className="border-r border-black w-2 mb-[5px]"></div>
              <div className="text-black px-[20px] w-auto">
                <h2 className=""></h2>
                <h3 className="font-custom font-weight-400 w-64 break-words text-size-18 leading-lineh-23">
                  {gd.title}
                </h3>
                <p
                  className="font-custom font-weight-300 p-[10px] w-60 break-words"
                  dangerouslySetInnerHTML={{ __html: gd.desc }}
                ></p>
                <br />
                <div className="flex text-center">
                  <img
                    src={Vector}
                    alt="location"
                    className="w-[14px] h-[17.5px]"
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>{gd.location}</p>
                </div>
              </div>
              <br />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-start">
              <a href="#"><p className="text-black text-left p-4 underline">
                  View Details
                </p></a>
              </div>
              <div className="flex items-center justify-end px-[10px] py-[10px]">
                <button className="text-black border rounded w-24 h-12 text-center font-bold py-2 px-4 mr-[10px] hover:border-darkbtn">
                  Register
                </button>
              </div>
            </div>

            <br />
          </div>
        ))}
      </div>
      {/* End of Grids*/}
      </HomeLayout>
    </>
  );
}

export default Events;
