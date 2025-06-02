import React from "react";
import Back from "../common/Back/Back";
import CourseCard from "./CourseCard";
import OnlineCources from "./OnlineCources";

const CourcesHome = () => {
  return (
    <div>
      <Back title="Explore Cources" />
      <CourseCard />
      <OnlineCources />
    </div>
  );
};

export default CourcesHome;
