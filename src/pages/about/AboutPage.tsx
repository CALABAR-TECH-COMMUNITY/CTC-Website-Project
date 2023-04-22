import background from "assets/images/about-img3.jpg";
import textbg from "assets/images/about-img1.png";
import vision from "assets/images/vision.png";
import value from "assets/images/value.png";
import mission from "assets/images/mission.png";
import community from "assets/images/about-img2.png";
import HomeLayout from "layout/HomeLayout";
import "./About.css";
import TeamMemberCard from "./Team";

import Grace from "assets/images/grace.jpg";
import Amani from "assets/images/amani.jpg";
import Florence from "assets/images/florence.jpeg";
import Bassey from "assets/images/bassey.jpeg";
// import {
//   ILogo,
//   ITwitter,
//   IWhatsapp,
//   ISlack,
//   ILogoFooter,
//   IArrowUp,
// } from "utils/icons.utils";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

export default function About() {
  const teamMembers = [
    {
      name: "Amani Kanu",
      role: "Founder",
      socialLinks: [
        {
          label: "Twitter",
          icon: <AiFillTwitterCircle color="#0072b1" size={30} />,
          url: "https://twitter.com/",
        },
        {
          label: "LinkedIn",
          icon: <AiFillLinkedin size={30} color="#1DA1F2" />,
          url: "https://www.linkedin.com/in/amani-kanu/",
        },
      ],
      imageSrc: Amani,
      description:
        "I had always aspired to learn how to code, but had struggled to find the right resources to advance my career until I was introduced to the Calabar Tech Community. Since then, I have been fortunate to benefit from the wealth of knowledge within the community.",
    },
    {
      name: "Florence Arong",
      role: "Co-founder",
      socialLinks: [
        {
          label: "Twitter",
          icon: <AiFillTwitterCircle color="#0072b1" size={30} />,
          url: "https://twitter.com/",
        },
        {
          label: "LinkedIn",
          icon: <AiFillLinkedin size={30} color="#1DA1F2" />,
          url: "https://www.linkedin.com/in/florencesarah-arong-egwu",
        },
      ],
      imageSrc: Florence,
      description:
        "I had always aspired to learn how to code, but had struggled to find the right resources to advance my career until I was introduced to the Calabar Tech Community. Since then, I have been fortunate to benefit from the wealth of knowledge within the community.",
    },
    {
      name: "Grace Effiong",
      role: "Co-founder",
      socialLinks: [
        {
          label: "Twitter",
          icon: <AiFillTwitterCircle color="#0072b1" size={30} />,
          url: "https://twitter.com/",
        },
        {
          label: "LinkedIn",
          icon: <AiFillLinkedin size={30} color="#1DA1F2" />,
          url: "https://www.linkedin.com/in/grace-effiong/",
        },
      ],
      imageSrc: Grace,
      description:
        "I had always aspired to learn how to code, but had struggled to find the right resources to advance my career until I was introduced to the Calabar Tech Community. Since then, I have been fortunate to benefit from the wealth of knowledge within the community.",
    },
    {
      name: "BASSEY ARCHIBONG",
      role: "Co-founder",
      socialLinks: [
        {
          label: "Twitter",
          icon: <AiFillTwitterCircle color="#0072b1" size={30} />,
          url: "https://twitter.com/",
        },
        {
          label: "LinkedIn",
          icon: <AiFillLinkedin size={30} color="#1DA1F2" />,
          url: "https://www.linkedin.com/in/bassey-m-archibong",
        },
      ],
      imageSrc: Bassey,
      description:
        "I had always aspired to learn how to code, but had struggled to find the right resources to advance my career until I was introduced to the Calabar Tech Community. Since then, I have been fortunate to benefit from the wealth of knowledge within the community.",
    },
  ];

  return (
    <HomeLayout>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "300px",
        }}
      >
        <div
          className="hero-text-bg"
          style={{
            backgroundImage: `url(${textbg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: "146px",
            height: "71px",
            opacity: "80%",
            position: "absolute",
            left: "122px",
          }}
        >
          <h1 className="about">about us</h1>
        </div>
      </div>

      <div className="about-content">
        <div className="about-community">
          <div className="about-comm-text">
            <h2>our community</h2>
            <p className="mt-8">
              We are a group of tech enthusiasts and tech professionals who come
              together to connect, share resources, and enhance our tech skills.
              Through active engagement on our platform, we aim to provide an
              inclusive environment that caters to individuals looking to
              acquire new skills or upgrade their existing ones. We understand
              that being in the company of like-minded individuals is a great
              motivator for learning and growth, and we take pride in fostering
              a sense of community that supports these values.
            </p>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLScy4nFHFFml0N-BN6mxcctqKoqyIF4UwJ1Us-KfLZecn0MpIg/viewform">
              Join us now
            </a>
          </div>
          <div className="about-comm-img">
            <img src={community} alt="" />
            {/* <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="vid-player">
                <path d="M24.554 46.6925L46.8029 32.3897L24.554 18.0868V46.6925ZM32.5 64.1738C28.1032 64.1738 23.9712 63.339 20.1042 61.6692C16.2371 60.0016 12.8733 57.7375 10.0127 54.877C7.15212 52.0164 4.88802 48.6526 3.22041 44.7855C1.55069 40.9184 0.71582 36.7865 0.71582 32.3897C0.71582 27.9928 1.55069 23.8609 3.22041 19.9938C4.88802 16.1267 7.15212 12.7629 10.0127 9.90234C12.8733 7.04177 16.2371 4.77661 20.1042 3.10688C23.9712 1.43927 28.1032 0.605469 32.5 0.605469C36.8968 0.605469 41.0288 1.43927 44.8958 3.10688C48.7629 4.77661 52.1267 7.04177 54.9873 9.90234C57.8479 12.7629 60.112 16.1267 61.7796 19.9938C63.4493 23.8609 64.2842 27.9928 64.2842 32.3897C64.2842 36.7865 63.4493 40.9184 61.7796 44.7855C60.112 48.6526 57.8479 52.0164 54.9873 54.877C52.1267 57.7375 48.7629 60.0016 44.8958 61.6692C41.0288 63.339 36.8968 64.1738 32.5 64.1738ZM32.5 57.817C39.5985 57.817 45.611 55.3537 50.5375 50.4272C55.4641 45.5006 57.9274 39.4881 57.9274 32.3897C57.9274 25.2912 55.4641 19.2787 50.5375 14.3521C45.611 9.42558 39.5985 6.96231 32.5 6.96231C25.4015 6.96231 19.389 9.42558 14.4625 14.3521C9.53593 19.2787 7.07266 25.2912 7.07266 32.3897C7.07266 39.4881 9.53593 45.5006 14.4625 50.4272C19.389 55.3537 25.4015 57.817 32.5 57.817Z" fill="white"/>
                </svg> */}
          </div>
        </div>

        <div className="our-statement">
          <div className="heading-text">
            <h2>our statement</h2>
          </div>
          <div className="statement-cards">
            <div className="vision card">
              <img src={value} alt="" />
              <h3>vision</h3>
              <p>
                Our goal is to empower the Calabar community through technology
                by facilitating access to resources, opportunities, and a
                collaborative networking platform that fosters innovation,
                creativity, and inclusivity within the tech industry. We aspire
                to bridge the gap between the local tech ecosystem and the
                global landscape, creating a brighter future for Calabar and
                beyond.
              </p>
            </div>
            <div className="mission card">
              <img src={mission} alt="" />
              <h3>mission</h3>
              <p>
                Our mission is to promote self-sufficiency in the community by
                fostering continuous personal development and cultivating
                connections with appropriate networks. We strive to empower
                individuals to achieve their full potential through targeted
                support, guidance, and resources that enable them to navigate
                the ever-changing landscape of the modern world.
              </p>
            </div>
            <div className="value card">
              <img src={vision} alt="" />
              <h3>our value</h3>
              <p>
                <b>Our Core values includes;</b>
                <p className="mb-4 mt-2">
                  <b className="text-lg">Inclusivity:</b> We strive to create a
                  welcoming and supportive environment that embraces diversity
                  and provides equal access to resources, opportunities, and
                  connections to all members of our community.
                </p>
                <p className="mb-4">
                  <b className="text-lg">Empowerment:</b> We aim to provide
                  individuals with the skills, knowledge, and resources they
                  need to succeed in the tech industry and achieve their
                  personal and professional goals.
                </p>
                <p className="mb-4">
                  <b className="text-lg">Innovation:</b> We encourage
                  creativity, curiosity, and experimentation in the pursuit of
                  new ideas, methods, and technologies that can drive positive
                  change and advancement in the industry.
                </p>
                <p>
                  <b>Accountability:</b> We hold ourselves and our community
                  members to high ethical and professional standards, and we are
                  committed to transparency, honesty, and responsibility in all
                  our interactions and endeavors.
                </p>
              </p>
            </div>
          </div>

          {/* <TeamMemberCard/> */}
          <div className="container mx-auto px-4 py-8 mt-[200px]">
            <h2 className="text-6xl font-semibold mb-8 text-center text-appYellow100">
              Meet the team
            </h2>
            <div className="flex flex-wrap justify-center">
              {teamMembers.map((item) => (
                <div
                  className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
                  key={item.name}
                >
                  <TeamMemberCard
                    name={item.name}
                    role={item.role}
                    socialLinks={item.socialLinks}
                    imageSrc={item.imageSrc}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
