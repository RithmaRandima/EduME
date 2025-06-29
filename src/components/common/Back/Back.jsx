import React from "react";
import "./Back.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Back = ({ title }) => {
  const location = useLocation();
  return (
    <div>
      <section className="back">
        <h2>Home / {location.pathname.split("/")}</h2>
        <h1>{title}</h1>
      </section>
      <div className="margin"></div>
    </div>
  );
};

export default Back;
