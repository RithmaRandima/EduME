import React from "react";
import Back from "../common/Back/Back";
import TeamCard from "./TeamCard";
import "./Team.css";

const Team = () => {
  return (
    <>
      <Back title="Team" />
      <section className="team padding">
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
      Team
    </>
  );
};

export default Team;
