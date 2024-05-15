import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
// import AllCart from "./routers/allCart/AllCart";
import Wishlist from "./routers/wishlist/Wishlist";
import Footer from "./components/footer/Footer";
import SingleRoute from "./routers/singleRoute/SingleRoute";
import Contact from "./routers/contact/Contact";
import Home from "./routers/home/Home";
import "./scss/main.scss";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Checkout from "./routers/checkout/Checkout";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<AllCart />} /> */}
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact" element={<Checkout />} />
        <Route path="/product/:id" element={<SingleRoute />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
