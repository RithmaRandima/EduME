import React from "react";
import Title from "../common/Title/Title";
import { courseCard } from "../../assests/dummyData";

const OnlineCources = () => {
  return (
    <div>
      <section className="online">
        <div className="container">
          <Title subtitle="Cources" title="Browse Our Online Cources" />

          <div className="content grid3">
            {courseCard.map((val) => (
              <div className="box">
                <div className="img">
                  <img src={val.cover} alt="" />
                  <img src={val.cover} alt="" className="show" />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.courseName}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineCources;
