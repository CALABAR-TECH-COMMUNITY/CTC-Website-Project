import { IoIosPin } from "react-icons/io";
import { Link } from "react-router-dom";

const EventsCard = ({ isLast }: { isLast: boolean }): JSX.Element => {
  return (
    <li
      className={`event-list home-hidden shadow-eventCardShadow rounded-xl overflow-hidden relative font-reem ${
        isLast && "xl:hidden"
      }  `}
    >
      <img
        className="h-52 w-full object-cover"
        draggable={false}
        src="https://plus.unsplash.com/premium_photo-1668383203267-877d4b1feb47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
      <p className="bg-white py-1 px-3 absolute right-4 top-4 uppercase font-normal text-xs ">
        Free
      </p>
      <div className="bg-white py-5 px-7">
        <div className="flex">
          <div className=" font-normal">
            <time className="block text-lg text-appYellow100">FEB</time>
            <span className="block text-3xl">
              15<sup className="text-xs">th</sup>
            </span>
          </div>

          <div className=" border-l-2 border-appGray400 ml-3 pl-3 md:ml-4 md:pl-4 lg:ml-5 lg:pl-5 font-poppins ">
            <h6 className="font-medium text-appGray600 text-lg">
              Navigating your way through tech
            </h6>
            <summary className="font-light text-sm mt-1 mb-2 truncate">
              Get to meet with professionals...
            </summary>

            <address className="font-poppins font-normal text-sm text-appGray700 not-italic">
              <IoIosPin className="inline text-base" /> Calabar, Nigeria.
            </address>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 font-poppins ">
          <Link to="" className="underline font-normal text-xs text-appGray800">
            View details
          </Link>

          <Link
            to=""
            className="font-medium text-sm text-appBlue100 px-3 py-2 border-2 rounded-lg border-appYellow100 hover:bg-appYellow100 hover:text-white"
            type="button"
          >
            Register
          </Link>
        </div>
      </div>
    </li>
  );
};

export default EventsCard;
