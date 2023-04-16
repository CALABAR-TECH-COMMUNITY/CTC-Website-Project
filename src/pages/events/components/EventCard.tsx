import Vector from "assets/images/Vector.png";

interface Props {
  image: string;
  month: string;
  date: string;
  superscript: string;
  title: string;
  desc: string;
  location: string;
}

const EventCard = (props: Props): JSX.Element => {
  return (
    <div className="bg-white shadow-eventCardShadow h-[550px] w-[350px] overflow-hidden shadow-lg shadow-darkbtn rounded-xl transform hover:scale-105 transition duration-700 ease-in-out">
      <img
        draggable={false}
        className="h-[246px] w-full object-cover rounded-t-lg"
        src={props.image}
        alt={props.title}
      />

      <div className="flex mt-3 mb-1">
        <div className="border-r-2 border-black pr-2 mt-3 mb-6">
          <time
            className="text-left text-3xl px-[20px] pt-0 mb-[20px]"
            dateTime={props.date + props.month}
          >
            <data className="text-darkbtn">{props.month}</data>
            <div className="ml-4 font-bold">
              {props.date}
              <sup>{props.superscript}</sup>
            </div>
            <br />
            <br />
          </time>
        </div>
        <div className="h-[90%] w-1 bg-appGray400" />

        <article className="pl-5 mt-3 mb-6">
          <p className="font-extrabold">Navigating your way through tech</p>

          <p>{props.desc}</p>
          <br />
          <br />

          <span className="flex pl-0 text-left">
            <img src={Vector} className="h-[17.5px] w-[14px]" />
            &nbsp;&nbsp;&nbsp;{props.location}
          </span>
        </article>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center justify-start">
          <a href="/view-event-details">
            <p className="text-black text-left px-4 pb-4 underline">
              View Details
            </p>
          </a>
        </div>
        <div className="flex items-center justify-end px-[10px] pb-[20px]">
          <button className="text-black border rounded w-24 h-12 text-center font-bold py-2 px-4 mr-[10px] hover:border-darkbtn">
            Register
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default EventCard;
