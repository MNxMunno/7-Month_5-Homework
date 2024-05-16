import React from "react";
import Products from "../../components/products/Products";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import AboutUs from "../../components/about/AboutUs";
import Banner from "../../static/banner/Banner";

const Home = () => {
  return (
    <main>
      {/* <h1>Home Page</h1>   */}
      <Hero />
      <Products />
      <AboutUs />
      <Banner />
    </main>
  );
};

export default Home;
