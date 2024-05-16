import React from "react";
import banner from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="content">
          <img src={banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
