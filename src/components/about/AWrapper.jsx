import React from "react";
import { homeAbout } from "../../assests/dummyData";

const AWrapper = () => {
  return (
    <>
      <section className="awrapper">
        <div className="container grid">
          {homeAbout.map((val) => (
            <div className="box flex">
              <div className="img">
                <img src={val.img} alt="" />
              </div>
              <div className="text">
                <h1>{val.data}</h1>
                <h3>{val.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AWrapper;
