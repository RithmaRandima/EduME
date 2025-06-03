import React from "react";
import Title from "../../common/Title/Title";
import { courseCard } from "../../../assests/dummyData";
import { FaQuoteLeft } from "react-icons/fa";
import "./Test.css";

const Test = () => {
  return (
    <>
      <section className="testimonial padding">
        <div className="container">
          <Title subtitle={"testimonial"} title={"our successful students"} />
          <div className="content grid2">
            {courseCard.map((val) => (
              <div className="items shadow">
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <FaQuoteLeft className="icon" />
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                  <div>
                    <p>{val.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Test;
