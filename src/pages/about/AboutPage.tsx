//import background from "assets/images/about-img3.jpg"
// import textbg from "assets/images/about-img1.png";
// import vision from "assets/images/vision.png";
// import value from "assets/images/value.png";
// import mission from "assets/images/mission.png";
// import community from "assets/images/about-img2.png";
// import "./About.css";


// export default function About(){
//     return(
//         <>
//           <div className="hero" style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', height: '400px' }}>
//             <div className="hero-text-bg" style={{backgroundImage: `url(${textbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '146px', height: '71px', opacity: '80%', position: 'absolute', top: '70px', left: '122px'   }}>
//               <h1>about us</h1>
//             </div>
//           </div>

//           <div className="about-content">
//             <div className="about-community">
//              <div className="about-comm-text">
//                <h2>our community</h2>
//                <p>Lorem ipsum dolor sit amet consectetur. Integer lectus cras et habitasse tellus dictum sit leo varius. Lectus massa est sed lectus bibendum tortor pellennb<br/>
//                   Egestas imperdiet vivamus metus massa suspendisse eget ultrices ipsum.  Egestas imperdiet vivamus metus massa suspendisse eget ultrices ipsum.  
//                 </p>
//                <a href="#">request mentor/mentee</a>
//              </div>
//               <div className="about-comm-img">
//                 <img src={community} alt="" />
//                 <span></span>
//               </div>
//             </div>

//             <div className="our-statement">
//                <div className="heading-text">
//                 <h2>our statement</h2>
//                </div>
//                <div className="statement-cards">
//                 <div className="vision card">
//                  <img src={vision} alt="" />
//                  <h3>vision</h3>
//                  <p>Our vision is to empower the Community of Calabar through technology by providing access to resources, opportunities, and a collaborative networking platform that inspires innovation,creativity, and inclusivity in the tech industry</p>
//                 </div>
//                 <div className="value card">
//                  <img src={value} alt="" />
//                  <h3>our value</h3>
//                  <p>Building a vibrant and inclusive community that drives innovation and collaboration in technology, advancing the industry and empowering individuals to achieve their goals.</p>
//                 </div>
//                 <div className="mission card">
//                  <img src={mission} alt="" />
//                  <h3>mission</h3>
//                  <p>Our mission is to assist individuals in the community by promoting self-sufficiency through continuous personal development and connections with the appropriate network.</p>
//                 </div>               
//                </div>
//             </div>
//           </div>
//         </>
//     )
// }

import background from "assets/images/about-img3.jpg"
import textbg from "assets/images/about-img1.png";
import vision from "assets/images/vision.png";
import value from "assets/images/value.png";
import mission from "assets/images/mission.png";
import community from "assets/images/about-img2.png";
import "./About.css";

export default function About(){
  return(
    <>
    <header 
    style={{
      display: 'flex',
      alignItems: 'center',
      minHeight: '150px',
      backgroundImage: `url(${background})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover',
      backgroundPosition: 'center'  
    }}
    >
      <div className="container">
        <div id="text">
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
          <div className="img-contain">
            <img src={community} alt="" />
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