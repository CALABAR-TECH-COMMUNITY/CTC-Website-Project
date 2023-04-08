import background from "assets/images/about-img3.jpg";
import textbg from "assets/images/about-img1.png";
import vision from "assets/images/vision.png";
import value from "assets/images/value.png";
import mission from "assets/images/mission.png";
import community from "assets/images/about-img2.png";
import HomeLayout from "layout/HomeLayout";
import "./About.css";

export default function About() {
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
            <p>
              Lorem ipsum dolor sit amet consectetur. Integer lectus cras et
              habitasse tellus dictum sit leo varius. Lectus massa est sed
              lectus bibendum tortor pellennb
              <br />
              Egestas imperdiet vivamus metus massa suspendisse eget ultrices
              ipsum. Egestas imperdiet vivamus metus massa suspendisse eget
              ultrices ipsum.
            </p>
            <a href="#">request mentor/mentee</a>
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
              <img src={vision} alt="" />
              <h3>vision</h3>
              <p>
                Our vision is to empower the Community of Calabar through
                technology by providing access to resources, opportunities, and
                a collaborative networking platform that inspires
                innovation,creativity, and inclusivity in the tech industry
              </p>
            </div>
            <div className="value card">
              <img src={value} alt="" />
              <h3>our value</h3>
              <p>
                Building a vibrant and inclusive community that drives
                innovation and collaboration in technology, advancing the
                industry and empowering individuals to achieve their goals.
              </p>
            </div>
            <div className="mission card">
              <img src={mission} alt="" />
              <h3>mission</h3>
              <p>
                Our mission is to assist individuals in the community by
                promoting self-sufficiency through continuous personal
                development and connections with the appropriate network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
