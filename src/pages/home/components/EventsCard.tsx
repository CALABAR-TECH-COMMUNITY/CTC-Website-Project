import { IoIosPin } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

import { IoCloseCircleOutline } from "react-icons/io5";

const EventsCard = ({
  isLast,
  event,
}: {
  isLast: boolean;
  event: any;
}): JSX.Element => {
  const [isModalOpen, setModalVisibility] = useState(false);
  const handleModalToggle = () => {
    setModalVisibility(!isModalOpen);
  };
  return (
    <div>
      <li
        className={`event-list  shadow-eventCardShadow rounded-xl overflow-hidden relative font-reem ${
          isLast && "xl:hidden"
        }  `}
      >

        <img
          className="h-58 w-full object-content"
          draggable={false}
          src={event.poster}
          alt={event.title}
        />
        <p className="bg-white py-1 px-3 absolute right-4 top-4 uppercase font-normal text-xs ">
          Free
        </p>
        <div className="bg-white py-5 px-7">
          <div className="flex">
            <div className=" font-normal">
              <time className="block text-lg text-appYellow100">
                {event.month}
              </time>
              <span className="block text-3xl">
                {event.day}
                <sup className="text-xs">th</sup>
              </span>
            </div>

            <div className=" border-l-2 border-appGray400 ml-3 pl-3 md:ml-4 md:pl-4 lg:ml-5 lg:pl-5 font-poppins ">
              <h6 className="font-medium text-appGray600 text-lg">
                {event.title}
              </h6>
              <summary className="font-light text-sm mt-1 mb-2 truncate">
                {event.subTitle}
              </summary>

              <address className="font-poppins font-normal text-sm text-appGray700 not-italic">
                <IoIosPin className="inline text-base" /> {event.locatiion}
              </address>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8 font-poppins ">
            {/* <Link to="" className="underline font-normal text-xs text-appGray800">
            View details
          </Link> */}

            <Link
              to=""
              className="font-medium text-sm text-appBlue100 px-3 py-2 border-2 rounded-lg border-appYellow100 hover:bg-appYellow100 hover:text-white"
              type="button"
              onClick={handleModalToggle}
            >
              Register
            </Link>
          </div>
        </div>
      </li>
      <div
        className={`fixed  z-[100] items-center justify-center top-0 right-0 left-0 bottom-0 transition-all   ${
          !isModalOpen && "translate-y-full"
        } `}
      >
        <div className="h-full  w-[400px]  z-[102] relative pt-12">
          <IoCloseCircleOutline
            onClick={handleModalToggle}
            className="text-red text-5xl absolute right-3 top-3 z-[105] cursor-pointer animate-pulse"
          />
          <iframe
            src={event.link}
            width="640"
            height="895"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>

        <button
          type="button"
          onClick={handleModalToggle}
          className="bg-black absolute top-0 right-0 left-0 bottom-0 opacity-50 z-[101] "
        />
      </div>
    </div>
  );
};

export default EventsCard;
