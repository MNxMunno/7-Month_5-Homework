import React from "react";
import logo from "../../assets/images/logo_2.svg";
import { Link } from "react-router-dom";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="cards">
          <div className="card">
            <img src={logo} alt="logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="card">
            <h3>Contact US</h3>
            <p>
              E: info@example.com <br />
              P: +94 7670000000 <br /> A: 123 Hospital rd, Kalubowila, Dehiwela
            </p>
          </div>
          <div className="card">
            <h3>Useful links</h3>
            <Link to={"/shop"}>Shop All</Link>
            <a href="#">Tempered Glass</a>
            <a href="#">Back-cover</a>
            <a href="#">About Us</a>
          </div>
          <div className="card link_card">
            <a href="https://www.whatsapp.com/" target="_blank">
              <FaWhatsappSquare />
              <p>Whatsapp</p>
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebookSquare />
              <p>Facebook</p>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagramSquare />
              <p>Instagram</p>
            </a>
            <a href="#" target="_blank">
              <AiFillTikTok />
              <p>Tik Tok</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
