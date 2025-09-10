import { useState } from "react";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import Obasi from "assets/images/obasi.jpg";
import Ekong from "assets/images/ekong.jpeg";
import sylvsus from "assets/images/sylvsus.png";
import Michael from "assets/images/Michael.jpg";
import Akase from "assets/images/Akase.jpg";
import Maxwell from "assets/images/Maxwell.jpg";

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
      name: "Samuel Ekong",
      role: "Backend developer",
      linkedin: "",
      twitter: "ekongsonjnr",
      testimony:
        "I was fortunate to land a job through direct referrals from the Calabar Tech Community without undergoing an interview. The organizers of the community are doing a remarkable job, and it's important to show appreciation for their efforts regularly. Although the tech ecosystem in the state wasn't well-established, the community's initiatives are helping to propel us forward and achieve greater heights. I'm grateful to the CTC for their contributions.",
      photo: Ekong,
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
  ];

const Stories = (): JSX.Element => {
  const [userIndex, setUserIndex] = useState(0);

  return (
    <section className="bg-darkblue py-20">
      <div className="responsive-padx-container">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Success <span className="text-appYellow200">Stories</span>
        </h2>
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 space-y-4">
            {stories.map((user, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${userIndex === index ? 'bg-appYellow200 text-appBlack' : 'bg-darkash text-white'}`}
                onClick={() => setUserIndex(index)}
              >
                <div className="flex items-center">
                  <img src={user.photo} alt={user.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <h3 className="font-bold text-lg">{user.name}</h3>
                    <p className={`${userIndex === index ? 'text-appAsh' : 'text-ash'}`}>{user.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 bg-darkash p-8 rounded-lg shadow-lg">
            <p className="text-lightash text-lg mb-6 leading-relaxed">{stories[userIndex].testimony}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {stories[userIndex].linkedin && (
                  <a href={stories[userIndex].linkedin} target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin size={30} className="text-appYellow200 hover:text-appYellow100" />
                  </a>
                )}
                {stories[userIndex].twitter && (
                  <a href={`https://twitter.com/${stories[userIndex].twitter}`} target="_blank" rel="noopener noreferrer">
                    <AiFillTwitterCircle size={30} className="text-appYellow200 hover:text-appYellow100" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
