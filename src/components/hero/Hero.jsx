import React from "react";
import hero from "../../assets/images/hero.png";
import Btn from "../../static/btn/Btn";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="cards">
          <div className="card">
            <h2>Mobile</h2>
            <h1>Backcover Tempered Glass</h1>
            <Btn text={"Shop all !"} />
          </div>
          <div className="card">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
