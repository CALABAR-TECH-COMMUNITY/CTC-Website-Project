import React from "react";
import "./App.css";

function Events() {
  return (
    <>
      <header className="h-32 md:h-36 lg:h-40 bg-[url(assets/images/header.svg)] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center ">
        <h1 className="text-6xl font-bold leading-80 text-left font-comfort sm:text-3xl md:text-5xl font-bold ml-11 md:ml-12 lg:ml-14 ">
          Events
        </h1>
      </header>

      <div className="text-center text-size-48 leading-lineh-54 tracking-custom1 font-weight-700 font-comfort h-[54px] top-[110px] py-20 text-darkbtn">
        Upcoming Events
      </div>

      <div className="p-[100px]">
        <div className="grids my-8 w-fit cursor-pointer items-center justify-items-center rounded-2xl border  bg-transparent text-center text-white shadow-lg shadow-darkbtn transition duration-500 ease-in-out hover:scale-105">
          <img
            src={`/flyer1.png`}
            className="w-full h-auto left-0 rounded-t-xl overflow-hidden"
            alt="flyer1"
          />
          <br />
          <div className="flex">
            <p className="text-darkbtn text-left text-3xl p-[20px] mb-[20px]">
              FEB
              <br />
              <p className="font-custom font-custom4 text-black font-custom mt-[10px]">15<sup className="font-[5px]">th</sup></p>
			  </p>
			  <div className="font-reemh-full border-r border-black w-2 mb-[20px]"></div>



            <div className="text-black px-[20px] w-auto">
              <h2 className=""></h2>
              <h3>Info</h3>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Events;
