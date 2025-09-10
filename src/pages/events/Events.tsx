import HomeLayout from "layout/HomeLayout";
import EventsCard from "pages/home/components/EventsCard";
import header from "assets/images/header.svg";
import flyer1 from "assets/images/flyer1.png";
import flyer2 from "assets/images/flyer2.png";
import flyer3 from "assets/images/flyer3.png";
import flyer4 from "assets/images/flyer4.png";
import image18 from "assets/images/image 18.png";
import image52 from "assets/images/image 52.png";
import image53 from "assets/images/image 53.png";
import image56 from "assets/images/image 56.png";
import aiEEveentImage from "assets/images/events/ai_event.png";


const upcomingEvents = [
    {
      title: "Navigating your career as AI and MACHINE LEARNING Engineer",
      subTitle: "",
      poster: aiEEveentImage,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeJ-KI1e2DJFJZbdiMPySTsa0qb67aU_UWhGDY9vfV11ylb2Q/viewform?embedded=true",
      locatiion: "Virtual",
      month: "May",
      day: "20",
    },
  ];

const pastEvents = [
  {
    image: flyer1,
    date: "Feb 23, 2023 - Virtual (Google meet)",
    title: "Introduction to tech",
    description: "A comprehensive introduction to the world of technology, covering career paths in Product Management, Mobile App Development, and Software Engineering.",
    tags: ["Career Talks", "Product Management", "Mobile App Dev", "Software Engineering"],
  },
  {
    image: flyer2,
    date: "Mar 15, 2023 - Calabar, Nigeria",
    title: "Navigating Your Way Through Tech",
    description: "An in-person event where attendees had the opportunity to meet and learn from seasoned professionals in the tech industry.",
    tags: ["Networking", "Career Growth", "Tech Industry"],
  },
  {
    image: flyer3,
    date: "Apr 2, 2023 - Calabar, Nigeria",
    title: "Pizza Hangout 3.0",
    description: "A fun and informal hangout for members of the best tech community in Nigeria to connect, share ideas, and enjoy pizza.",
    tags: ["Community", "Networking", "Hangout"],
  },
  {
    image: flyer4,
    date: "May 10, 2023 - Virtual",
    title: "The Future of Web Development",
    description: "A virtual seminar discussing the latest trends and technologies shaping the future of web development.",
    tags: ["Web Development", "Future Tech", "Online Seminar"],
  },
];

const eventPhotos = [image18, image52, image53, image56];

const Events = () => {
  return (
    <HomeLayout>
      <div className="bg-darkblue text-white">
        <header 
          className="relative h-60 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${header})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <h1 className="relative text-5xl font-bold">Events</h1>
        </header>

        <section className="py-20 responsive-padx-container">
          <h2 className="text-4xl font-bold text-center mb-12">
            Upcoming <span className="text-appYellow200">Events</span>
          </h2>
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {upcomingEvents.map((event, index) => (
                <EventsCard event={event} key={index} />
              ))}
            </div>
          ) : (
            <p className="text-center text-ash">No upcoming events at the moment. Please check back later!</p>
          )}
        </section>

        <section className="bg-darkash py-20">
          <div className="responsive-padx-container">
            <h2 className="text-4xl font-bold text-center mb-12">
              Past <span className="text-appYellow200">Events</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {pastEvents.map((event, index) => (
                <div key={index} className="bg-darkblue rounded-lg overflow-hidden md:flex">
                  <img src={event.image} alt={event.title} className="w-full md:w-1/3 h-auto object-cover"/>
                  <div className="p-6">
                    <p className="text-appYellow200 text-sm mb-2">{event.date}</p>
                    <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                    <p className="text-lightash mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map(tag => (
                        <span key={tag} className="bg-appAsh text-lightash px-3 py-1 rounded-full text-sm">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 responsive-padx-container">
          <h2 className="text-4xl font-bold text-center mb-12">
            Event <span className="text-appYellow200">Photos</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eventPhotos.map((photo, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <img src={photo} alt={`Event photo ${index + 1}`} className="w-full h-full object-cover cursor-pointer"/>
              </div>
            ))}
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default Events;
