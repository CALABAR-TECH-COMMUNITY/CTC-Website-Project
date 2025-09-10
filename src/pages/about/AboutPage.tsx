import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

import HomeLayout from "layout/HomeLayout";
import aboutHero from "assets/images/about-img3.jpg";
import community from "assets/images/about-img2.png";
import Amani from "assets/images/amani.jpg";
import Florence from "assets/images/florence.jpeg";
import Grace from "assets/images/grace.jpg";
import Bassey from "assets/images/bassey.jpeg";

const teamMembers = [
    {
      name: "Amani Kanu",
      role: "Founder",
      socialLinks: [
        {
          label: "Twitter",
          icon: <AiFillTwitterCircle color="#0072b1" size={30} />,
          url: "https://twitter.com/AmaniKanu",
        },
        {
          label: "LinkedIn",
          icon: <AiFillLinkedin size={30} color="#1DA1F2" />,
          url: "https://www.linkedin.com/in/amani-kanu/",
        },
      ],
      imageSrc: Amani,
      description:
        "Amani Kanu is an accomplished software engineer with over four years of experience developing robust web applications for both domestic and international clients. He is also the founder of the Calabar Tech Community, which has played a pivotal role in providing access to technical skills and employment opportunities for numerous tech enthusiasts. As a skilled community builder, Amani has demonstrated exceptional proficiency in fostering strong relationships within the tech industry. Moreover, he has devoted his time to mentoring aspiring technologists, offering guidance and assistance in navigating their career paths. Overall, Amani's contributions to the tech community have been highly valuable, and he is widely regarded as a respected figure in the field.",
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
          url: "https://twitter.com/Grace_ffiong",
        },
        {
          label: "LinkedIn",
          icon: <AiFillLinkedin size={30} color="#1DA1F2" />,
          url: "https://www.linkedin.com/in/grace-effiong/",
        },
      ],
      imageSrc: Grace,
      description:
        "Grace Effiong is a frontend engineer who possesses a strong interest in fostering the growth of individuals in the technology sector. With over three years of experience, she has gained expertise in developing user-friendly and responsive web interfaces utilizing React.js and Next.js frameworks. Grace is well-versed in frontend technologies, and is passionate about assisting novices in the tech industry by monitoring their progress. Her commitment to mentoring and guiding beginners has the potential to shape their professional journeys and promote the development of a more diverse and inclusive tech community.",
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
        "Bassey Archibong is an experienced product manager with in-depth knowledge of the startup industry in Nigeria and a talent for innovative thinking. He continually challenges the status quo and seeks out new opportunities to excel. Bassey demonstrates excellence in launching cutting-edge products, mentoring emerging talent, and collaborating with cross-functional teams. However, his interests extend beyond business, as he is also dedicated to empowering the youth of Calabar by assisting them in securing gainful employment in the technology field. With his sharp wit and dynamic energy, Bassey is well-equipped to help individuals achieve their career goals, while simultaneously making the process enjoyable, competitive, and thrilling.",
    },
  ];

const AboutPage = () => {
  return (
    <HomeLayout>
      <div className="bg-darkblue text-white">
        <header 
          className="relative h-80 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <h1 className="relative text-5xl font-bold">About Us</h1>
        </header>

        <section className="py-20 responsive-padx-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-appYellow200">Community</span>
              </h2>
              <p className="text-lg text-lightash mb-6">
                We are a collective of tech enthusiasts and professionals dedicated to fostering growth, innovation, and collaboration. Our mission is to create an inclusive environment where individuals can learn, connect, and elevate their skills.
              </p>
              <p className="text-lg text-lightash mb-8">
                We believe in making career opportunities accessible to everyone, regardless of background, and are committed to empowering our community to achieve their full potential.
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScy4nFHFFml0N-BN6mxcctqKoqyIF4UwJ1Us-KfLZecn0MpIg/viewform"
                className="inline-block px-8 py-4 bg-appYellow200 text-appBlack hover:bg-appYellow100 transition-all font-poppins font-bold rounded-full text-lg"
              >
                Join Us Now
              </a>
            </div>
            <div className="flex justify-center">
              <img src={community} alt="Community" className="rounded-lg shadow-lg"/>
            </div>
          </div>
        </section>

        <section className="bg-darkash py-20">
          <div className="responsive-padx-container text-center">
            <h2 className="text-4xl font-bold mb-12">
              Our <span className="text-appYellow200">Core Statements</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-darkblue p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-appYellow200 mb-4">Vision</h3>
                <p className="text-lightash">
                  To empower the Calabar tech community by providing access to resources, opportunities, and a collaborative network that fosters innovation, creativity, and inclusivity.
                </p>
              </div>
              <div className="bg-darkblue p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-appYellow200 mb-4">Mission</h3>
                <p className="text-lightash">
                  To promote self-sufficiency by fostering personal development, cultivating professional connections, and empowering individuals to achieve their full potential.
                </p>
              </div>
              <div className="bg-darkblue p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-appYellow200 mb-4">Values</h3>
                <p className="text-lightash">
                  Inclusivity, empowerment, innovation, and accountability are the pillars that guide our community and define our commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 responsive-padx-container">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet the <span className="text-appYellow200">Team</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-darkash rounded-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
                <img src={member.imageSrc} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"/>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-appYellow200 mb-4">{member.role}</p>
                <p className="text-ash text-sm mb-4">{member.description}</p>
                <div className="flex justify-center gap-4">
                  {member.socialLinks.map((link) => (
                    <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="text-ash hover:text-white">
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default AboutPage;
