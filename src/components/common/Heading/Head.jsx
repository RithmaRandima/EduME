import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Head = () => {
  return (
    <div>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>aKdaMia</h1>
            <span>ONLINE EDUCATION</span>
          </div>
          <div className="social">
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Head;
