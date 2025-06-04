import React from "react";
import Title from "../common/Title/Title";
import { FaCalendarAlt, FaComment, FaUser } from "react-icons/fa";
import { homeAbout } from "../../assests/dummyData";

const Hblog = () => {
  return (
    <div>
      <section className="blog">
        <div className="container">
          <Title subtitle="Our Blog" title="Recent From Blog" />
          <div className="grid2">
            {homeAbout.slice(0, 3).map((val) => (
              <div className="items shadow">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <div className="admin flexSB">
                    <span>
                      <FaUser />
                      <label>{val.type}</label>
                    </span>
                    <span>
                      <FaCalendarAlt />
                      <label htmlFor="">{val.date}</label>
                    </span>
                    <span>
                      <FaComment />
                      <label>{val.com}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hblog;
