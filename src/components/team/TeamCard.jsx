import React from "react";
import { homeAbout } from "../../assests/dummyData";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const TeamCard = () => {
  return (
    <>
      {homeAbout.map((val) => (
        <div className="items shadow">
          <div className="img">
            <img src={val.cover} alt="" />
            <div className="overlay">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaInstagram className="icon" />
              <FaYoutube className="icon" />
            </div>
          </div>
          <div className="details">
            <h2>{val.name}</h2>
            <h2>{val.work}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
