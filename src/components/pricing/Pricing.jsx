import React from "react";
import Back from "../common/Back/Back";
import PricingCard from "./PricingCard";
import "./Pricing.css";
import Faq from "./Faq";
const Pricing = () => {
  return (
    <>
      <Back title="Choose The Right Plan" />
      <section className="price padding">
        <div className="container grid">
          <PricingCard />
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Pricing;
