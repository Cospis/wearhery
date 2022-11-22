import React, { useState } from "react";
import "./styles/Header.css";
import weathery from "./img/weathery.svg";
import menu from "./img/menu.svg";
import x from "./img/x.png";

const DefaultHeader = () => {
  const [toggle, settoggle] = useState(false);
  const toggleheader = () => {
    settoggle(!toggle);
  };
  return (
    <>
      <div className="navbar">
        <div className="icn">
          <img src={weathery} alt="weathery" />
          <h3>Weathery</h3>
        </div>
        <div className="links">
          <ul>
            <li>Features</li>
            <li>For Business</li>
            <li>News</li>
            <li>Career</li>
            <li>About Us </li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="cnt">
          <ul>
            <li>Contact Us </li>
            <li>
              <button>Get started</button>
            </li>
          </ul>
        </div>
        <div className="nav-mobile">
          <div className="nav-icn">
            {!toggle && <img src={menu} alt="menu" onClick={toggleheader} />}
            {toggle && <img src={x} alt="X" onClick={toggleheader} />}
          </div>
        </div>
      </div>
      {toggle && (
        <div className="nav-links">
          <ul>
            <li>Features</li>
            <li>For Business</li>
            <li>News</li>
            <li>Career</li>
            <li>About Us </li>
            <li>FAQs</li>
            <li>Contact Us </li>
            <li>Get started</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default DefaultHeader;
