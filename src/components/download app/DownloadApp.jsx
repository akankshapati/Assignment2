import React from "react";
import Pic3 from "../images/Pic3.png";
import "./DownloadApp.css";
import element from "../images/element.png"
import DownArrow from "../images/DownArrow.png"

const DownloadApp = () => {
  return (
    <div className="container flex download">
      <div className="dots-down">
        <img src={element} alt="Bg-Dots" />
      </div>
      <div className="section-info">
        <h1 className="section-title underlined">Download our mobile apps</h1>
        <p className="section-desc"
        >Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <button className="sec-btn btn"
        >Download <img src={DownArrow} alt="DownArrow"
          /></button>
      </div>
      <div className="hero-img">
        <img src={Pic3} alt="Pic3 not visble"  />
      </div>
    </div>
  );
};

export default DownloadApp;
