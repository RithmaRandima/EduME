import React from "react";
import "./Footer.css";
import {
  FaCalendarAlt,
  FaFacebookF,
  FaInstagram,
  FaMap,
  FaPaperPlane,
  FaPhoneAlt,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import { homeAbout } from "../../../assests/dummyData";

const Footer = () => {
  return (
    <>
      <section className="newsLetter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <p>far far away, behind the word mountains</p>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email Address" />
            <FaPaperPlane className="icon" />
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>akadamia</h1>
            <span>online education</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti, possimus excepturi placeat quam repellat cum nam facere
              fugit, pariatur ex, unde explicabo. Magnam quae animi nisi id
              facere veritatis doloremque.
            </p>
            <div className="social">
              <FaFacebookF className="icon" />
              <FaInstagram className="icon" />
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
            </div>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About US</li>
              <li>About US</li>
              <li>About US</li>
              <li>About US</li>
              <li>About US</li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {/* blog data */}
            {homeAbout.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <FaUser />
                    <label>{val.type}</label>
                  </span>
                  <span>
                    <FaCalendarAlt />
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <h4>{val.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3>Have a Question?</h3>
            <ul>
              <li>
                <FaMap className="icon" />
                203 Fake ST, Mount View, San Francisco CAlifoenia, USA
              </li>
              <li>
                <FaPhoneAlt className="icon" />
                +011 222 445 1234
              </li>
              <li>
                <FaPaperPlane className="icon" />
                exaple@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright @2025 All right reserved</p>
      </div>
    </>
  );
};

export default Footer;
