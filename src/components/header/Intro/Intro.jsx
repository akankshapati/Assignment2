import React from "react";
import "./Intro.css";
import Pic1 from "../../images/Pic1.jpg";
import element1 from "../../images/element1.png";

const Intro = () => {
  return (
    <div className="container flex hero-section">
      <div className="dots">
        <img src={element1} alt="element1 not visible" />
      </div>
      <div className="section-info">
  
        <h1 className="section-title">Virtual healthcare for you </h1>
        <p className="section-desc">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
        <button className="prim-btn btn">Consult Today</button>
      </div>

      <div className="hero-img">
        <img src={Pic1} alt="Pic1 not visible" />
      </div>
    </div>
  );
};

export default Intro;
