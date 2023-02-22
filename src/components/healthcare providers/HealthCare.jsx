import React from "react";
import "./HealthCare.css";
import Pic2 from "../images/Pic2.png";

const HealthCare = () => {
  return (
    <div className="container flex providers">
      <div className="section-info">
        <h1 className="section-title underlined">Leading healthcare providers</h1>
        <p className="section-desc"
        >Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </p>
        <button className="sec-btn btn">Learn more</button>
      </div>
      <div className="hero-img">
        <img src={Pic2} alt="Pic2 not visible" />
      </div>
    </div>
  );
};

export default HealthCare;
