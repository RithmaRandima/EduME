import React from "react";
import Hero from "./hero/Hero";
import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";
import Test from "./Testimonial/Test";
import Hblog from "../blog/Hblog";
import Hprice from "../pricing/Hprice";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test />
      <Hblog />
      <Hprice />
    </div>
  );
};

export default Home;
