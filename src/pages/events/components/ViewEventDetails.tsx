import "./ViewEventDetails.css";
import time from "../../../assets/images/time.png"
import date from "../../../assets/images/date.png"
import location from "../../../assets/images/location.png"
import speaker from "../../../assets/images/viewdetails-img.jpg"
import {BsTwitter, BsSlack} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
import HomeLayout from "layout/HomeLayout";

export default function ViewEventDetails(){
    return(
        <HomeLayout>
         <div className="header">
            <div className="container">
                <div className="header-text">
                    <h1>Navigating your way through tech</h1>
                </div>
                <div className="event-info">
                    <div className="time info">
                        <img src={time} alt="" />
                        <p>7PM - 8PM <span>(WAT)</span></p>
                    </div>
                    <div className="date info">
                        <img src={date} alt="" />
                        <p>feb. 23, 2023</p>
                    </div>
                    <div className="location info">
                       <img src={location} alt="" />
                        <p>virtual <span>(google meet)</span></p>
                    </div>
                </div>
                <div className="icons">
                    <BsTwitter />
                    <BsSlack />
                    <IoLogoWhatsapp />
                </div>
            </div>
         </div>

         <div className="speaker-form container">
            <div className="speaker">
                <h3>speaker</h3>
                <div className="img-name">
                    <img src={speaker} alt="speaker-img" />
                    <div className="name">
                        <h3>michael adalikwu</h3>
                        <p>lead product designer.</p>
                        <span>works at google</span>
                    </div>
                </div>
                <h4>about session</h4>
                <div className="rounded-cards">
                    <span>career talks</span>
                    <span>product management</span>
                    <span>mobile app dev.</span>
                    <span>software engineering</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia at sunt veritatis delectus pariatur harum adipisci eveniet ducimus porro aliquid aspernatur ex blanditiis, reprehenderit molestiae voluptatem magnam, accusantium nostrum dolore repellendus asperiores, accusamus consequuntur! Fuga possimus veniam autem alias.</p>
            </div>
            <div className="form">
                <input type="text" placeholder="Full Name" required/>
                <input type="number" placeholder="Phone Number" required/>
                <input type="email" placeholder="E-mail" />
                <input type="text" placeholder="How did you hear about us" />
                <textarea placeholder="Questions for the session"></textarea>
            </div>
         </div>
        </HomeLayout>
    )
}