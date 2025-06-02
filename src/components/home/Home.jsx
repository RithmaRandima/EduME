import React from "react";
import Hero from "./hero/Hero";
import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <HAbout />
    </div>
  );
};

export default Home;
