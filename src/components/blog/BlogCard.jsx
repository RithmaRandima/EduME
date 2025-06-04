import React from "react";
import { homeAbout } from "../../assests/dummyData";
import { FaCalendarAlt, FaComment, FaUser } from "react-icons/fa";
import "./Blog.css";

const BlogCard = () => {
  return (
    <>
      {/* {Blog data} */}
      {homeAbout.map((val) => (
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
    </>
  );
};

export default BlogCard;
