import React from "react";
import { courseCard } from "../../assests/dummyData";
import { FaStar } from "react-icons/fa";
import "./Course.css";

const CourseCard = () => {
  return (
    <>
      <section className="courseCard">
        <div className="container grid2">
          {courseCard.map((val) => (
            <div className="items">
              <div className="content flex">
                <div className="left">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                </div>
                <div className="text">
                  <h1>{val.courseName}</h1>
                  <div className="rate">
                    <FaStar className="rateStar" />
                    <FaStar className="rateStar" />
                    <FaStar className="rateStar" />
                    <FaStar className="rateStar" />
                    <FaStar className="rateStar" />
                    <label htmlFor="">(5.0)</label>
                  </div>
                  <div className="details">
                    {val.courseTeacher.map((details) => (
                      <>
                        <div className="box">
                          <div className="dimg">
                            <img src={details.dcover} alt="" />
                          </div>
                          <div className="para">
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="price">
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className="outline-btn">ENROLL NOW</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CourseCard;
