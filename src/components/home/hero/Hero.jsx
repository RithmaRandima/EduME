import React from "react";
import "./Hero.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Title from "../../common/Title/Title";

const Hero = () => {
  return (
    <div>
      <>
        <section className="hero">
          <div className="container">
            <div className="row">
              <Title
                subtitle={"WELCOME TO EDUME."}
                title={"BSET Onlile Education"}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi maiores porro eum soluta quibusdam, dolorum sequi autem
                aut minus velit perspiciatis officiis nam quidem fuga ullam quos
                sint unde repudiandae.
              </p>
              <div className="button">
                <button className="primary-btn">
                  GET STARTED NOW <FaLongArrowAltRight />
                </button>
                <button>
                  VIEW COURCES
                  <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="margin"></div>
      </>
    </div>
  );
};

export default Hero;
