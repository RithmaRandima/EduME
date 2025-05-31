import React from "react";
import "./AboutCard.css";
import Title from "../common/Title/Title";
import { homeAbout } from "../../assests/dummyData";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./" alt="" />
          </div>
          <div className="right row">
            <Title
              subtitle="LEar Anything"
              title="Benefits About Online Learning"
            />
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="items flexSB">
                    <div className="img">
                      <img src={val.cover} alt={val.title} />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;
