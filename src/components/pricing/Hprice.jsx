import React from "react";
import Title from "../common/Title/Title";
import PricingCard from "./PricingCard";

const Hprice = () => {
  return (
    <div className="hprice padding">
      <Title subtitle="our price" title={"Pricing & packages"} />

      <div className="price container grid">
        <PricingCard />
      </div>
    </div>
  );
};

export default Hprice;
