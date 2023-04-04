import vision from "assets/images/vision.png";
import value from "assets/images/value.png";
import mission from "assets/images/mission.png";
import community from "assets/images/about-img2.png";
import text from "assets/images/about-img1.png";
import play from "assets/images/play.png";
import "./About.css";

export default function About(){

  return(
    <>
    <header className="header-bg">
      <div className="container">
        <div className="text">
          <img src={text} alt="" />
          <h1>about us</h1>
        </div>
      </div>
    </header>

    <section id="about-flex">
      <div className="container">
        <div className="row">
          <div className="content">
            <h2>our community</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Integer lectus cras et habitasse tellus dictum sit leo varius. Lectus massa est sed lectus bibendum tortor pellennb<br/>
              Egestas imperdiet vivamus metus massa suspendisse eget ultrices ipsum.  Egestas imperdiet vivamus metus massa suspendisse eget ultrices ipsum.
            </p>
            <a href="#">request mentor/mentee</a>
          </div>
          <div className="img-content">
            <div className="img-first">
            <img src={community} className="first-img" alt="" />
            </div>
            <img src={play} className="second-img" alt="" />
          </div> 
        </div>
      </div>
    </section>
    
    <section id="statement">
      <div className="container">
        <h2>our statement</h2>
        <div className="cards">
          <div className="vision card">
            <img src={vision} alt="" />
            <h3>vision</h3>
            <p>Our vision is to empower the Community of Calabar through technology by providing access to resources, opportunities, and a collaborative networking platform that inspires innovation,creativity, and inclusivity in the tech industry</p>
          </div>
          <div className="value card">
            <img src={value} alt="" />
            <h3>our value</h3>
            <p>Building a vibrant and inclusive community that drives innovation and collaboration in technology, advancing the industry and empowering individuals to achieve their goals.</p>
          </div>
          <div className="mission card">
            <img src={mission} alt="" />
            <h3>mission</h3>
            <p>Our mission is to assist individuals in the community by promoting self-sufficiency through continuous personal development and connections with the appropriate network.</p>
          </div>
        </div>
      </div> 
    </section>
    </>
  )
}
