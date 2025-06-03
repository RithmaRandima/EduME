import React from "react";
import { homeAbout } from "../../assests/dummyData";

const PricingCard = () => {
  return (
    <>
      {/* price data */}
      {homeAbout.map((val) => (
        <div className="item shadow">
          <h4>{val.name}</h4>
          <h1>
            <span>$</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className="outline-btn">GET STARTED</button>
        </div>
      ))}
    </>
  );
};

export default PricingCard;
