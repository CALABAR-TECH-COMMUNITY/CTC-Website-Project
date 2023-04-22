import {
  AiOutlinePlus,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import { useState } from "react";

import ElipsesIcon from "assets/images/landingPage/ellipses.svg";
// import { URLS } from "assets/data/dummyURLs";
import sylvsus from "assets/images/sylvsus.png";
import Michael from "assets/images/Michael.jpg";
import Akase from "assets/images/Akase.jpg";
import Maxwell from "assets/images/Maxwell.jpg";
import Ekong from "assets/images/ekong.jpeg";
import Obasi from "assets/images/obasi.jpg";

const Stories = (): JSX.Element => {
  const [userIndex, setUserIndex] = useState(0);

  function trimString(string: string, numberOfWord: number) {
    var cut = string.indexOf(" ", numberOfWord);
    if (cut == -1) return string;
    return `${string.substring(0, cut)}...`;
  }
  const stories = [
    {
      name: "Obasi Kanu",
      role: "Product Manager",
      linkedin: "https://www.linkedin.com/in/obasikanu/",
      twitter: "",
      testimony:
        "The Calabar Tech Community has played a significant role in motivating me to pursue my career in the tech industry, particularly as a Product Manager. Their support has been instrumental in keeping me focused on my goals and pushing me to achieve my full potential. The wealth of resources and knowledge within the community has given me valuable insights into the tech space and inspired me to strive for excellence. I'm grateful for the opportunities and encouragement that the CTC community has provided, and I look forward to continuing to learn and grow alongside them.",
      photo: Obasi,
    },
    {
      name: "Sylvanus Ezekiel",
      role: "WordPress Developer",
      linkedin: "",
      twitter: "Sylvanuspe",
      testimony:
        "The Calabar Tech Community has been instrumental in my tech journey. I became a member of CTC in late 2022 and have since gained a wealth of knowledge and expertise from industry experts through both online and in-person meetups. This experience has equipped me with the necessary skills and connections to excel in the field, allowing me to code websites proficiently without relying on WordPress CMS as I did before. I'm grateful for all that I've learned and accomplished, and I highly recommend that anyone interested in pursuing a career in tech consider joining the CTC.",
      photo: sylvsus,
    },
    {
      name: "Michael  Nwachukwu",
      role: "Software Engineer",
      linkedin: "LinkedIn.com/in/michael-nwachukwu ",
      twitter: "numichael_dev",
      testimony:
        "The CTC has been an invaluable asset in my tech journey, providing me with mentorship, resources, and the confidence to navigate my software engineering journey with ease. I'm grateful for the leadership of the CTC and deeply appreciate all that they do",
      photo: Michael,
    },
    {
      name: "Akase Kanu",
      role: "Product manager",
      linkedin: "https://www.linkedin.com/in/akase-kanu-5a0a70241",
      twitter: "",
      testimony:
        "The CTC has helped me connect with like-minded individuals and provided me with a deeper understanding of the tech industry. Thanks to the support of group members, my tech career has taken a positive turn",
      photo: Akase,
    },
    {
      name: "Maxwell Ikika",
      role: "Software developer",
      linkedin: "",
      twitter: "",
      testimony:
        "I had always aspired to learn how to code, but had struggled to find the right resources to advance my career until I was introduced to the Calabar Tech Community. Since then, I have been fortunate to benefit from the wealth of knowledge within the community. This experience has boosted my morale and reinforced my passion for pursuing a career in tech. I extend my sincere appreciation to the Calabar Tech Community and urge them to continue being a valuable resource to individuals like myself.",
      photo: Maxwell,
    },
    {
      name: "Samuel Ekong",
      role: "Backend developer",
      linkedin: "",
      twitter: "ekongsonjnr",
      testimony:
        "I was fortunate to land a job through direct referrals from the Calabar Tech Community without undergoing an interview. The organizers of the community are doing a remarkable job, and it's important to show appreciation for their efforts regularly. Although the tech ecosystem in the state wasn't well-established, the community's initiatives are helping to propel us forward and achieve greater heights. I'm grateful to the CTC for their contributions.",
      photo: Ekong,
    },
  ];
  return (
    <section className="relative pt-20 pb-44">
      <img
        className="absolute h-56 md:h-60 lg:h-64 w-56 md:w-60 lg:w-64 -left-14"
        src={ElipsesIcon}
        draggable={false}
        alt="ellipse"
      />
      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-appGray200 font-weight-700 text-center  ">
        Stories
      </h4>

      <div className="responsive-padx-container blurr-hidden flex flex-wrap gap-10 lg:gap-5 lg:grid grid-cols-6 mt-16 ">
        <article className="col-span-2 mr-8 ">
          <p className="text-justify font-comforta text-appGray200 text-sm md:text-base lg:text-lg xl:text-xl">
            {stories[userIndex].testimony}
            <br />
          </p>
          <p className="mt-2 font-bold">~ {stories[userIndex].name}</p>
          <p className=" text-sm text-appYellow10">{stories[userIndex].role}</p>
          <span className="flex text-appYellow100 mt-6 mb-2">
            <AiOutlinePlus />
            Connect now
          </span>
          <div className="text-appYellow200 text-sm  font-bold flex gap-2 items-center cursor-pointer">
            <br />
            {stories[userIndex].linkedin && (
              <div>
                <a
                  href={stories[userIndex].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <AiFillLinkedin color="#0072b1" size={30} /> {stories[userIndex].name}
                </a>
              </div>
            )}
            {stories[userIndex].twitter && (
              <div>
                <a
                  href={`https://twitter.com/${stories[userIndex].twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <AiFillTwitterCircle size={30} color="#1DA1F2" />@{stories[userIndex].twitter}
                </a>
              </div>
            )}
          </div>
        </article>

        <section className="col-span-4 font-poppins flex gap-3 overflow-scroll pb-2 ">
          {stories.map((user, index) => {
            return (
              <figure
                key={index}
                className={`w-64 flex-shrink-0 hover:bg-appYellow200 h-[450px] rounded-t-xl overflow-hidden rounded-b-lg text-appGray100 hover:text-appGray900 hover:scale-95 transition-all cursor-pointer ${
                  index == userIndex && "bg-appYellow200"
                }`}
                onClick={() => setUserIndex(index)}
              >
                <img
                  className="h-52 w-full object-cover "
                  src={user.photo}
                  alt="CTC user"
                />

                <figcaption className="px-4 pt-3 pb-8  text-xs">
                  <h5 className="text-base font-semibold">{user.name}</h5>
                  <h6 className="font-medium mb-3">{user.role}</h6>
                  {/* <p className="font-normal mb-2">Best Technologies</p> */}
                  <p className="font-light">
                    {trimString(user.testimony, 100)}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Stories;
