import React from "react";
import Title from "../common/Title/Title";
import { homeAbout } from "../../assests/dummyData";
import AWrapper from "./AWrapper";
import "./About.css";

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
                  <div className="item flexSB">
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
      <AWrapper />
    </>
  );
};

export default AboutCard;
