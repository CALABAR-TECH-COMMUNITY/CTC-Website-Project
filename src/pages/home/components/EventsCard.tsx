import { IoIosPin } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const EventsCard = ({
  event,
}: {
  event: any;
}): JSX.Element => {
  const [isModalOpen, setModalVisibility] = useState(false);

  const handleModalToggle = () => {
    setModalVisibility(!isModalOpen);
  };

  return (
    <div>
      <li className="bg-darkash rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg w-full max-w-sm mx-auto">
        <img
          className="h-56 w-full object-cover"
          src={event.poster}
          alt={event.title}
        />
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-shrink-0 text-center mr-4">
              <p className="text-appYellow200 text-xl font-bold">{event.month.toUpperCase()}</p>
              <p className="text-white text-4xl font-bold">{event.day}</p>
            </div>
            <div className="flex-grow">
              <h3 className="text-white font-bold text-xl mb-2 leading-tight">{event.title}</h3>
              <div className="flex items-center text-ash text-sm">
                <IoIosPin className="inline mr-2" />
                <span>{event.locatiion}</span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-white font-semibold">Free</p>
            <button
              onClick={handleModalToggle}
              className="px-6 py-2 bg-appYellow200 text-appBlack font-bold rounded-full hover:bg-appYellow100 transition-colors duration-300"
            >
              Register
            </button>
          </div>
        </div>
      </li>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg relative m-4">
            <button
              onClick={handleModalToggle}
              className="absolute top-2 right-2 text-darkash hover:text-appBlack z-[105]"
            >
              <IoCloseCircleOutline size={30} />
            </button>
            <div className="h-[80vh] overflow-y-auto">
              <iframe
                src={event.link}
                className="w-full h-full"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsCard;
