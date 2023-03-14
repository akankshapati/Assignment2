import React from "react";
import "./services.css";
import Card from "./Card";
import data from "./ServicesModule";
import Frame from "../images/Frame.png"
import element from "../images/element.png"

const Services = () => {
  return (
    <div className="container flex services">
      <div className="serv-info flex">
        <h2 className="title">Our services</h2>
        <p
        >We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health</p
        >
      </div>
      <div className="bgFrame">
        <img src={Frame} alt="BgFrame" />
      </div>
      <div className="dots">
        <img src={element} alt="Bg-Dots" />
      </div>

      <div className="s-grid">
        {data.map((val, index) => {
          return (
            <Card
              key={index}
              image={val.image}
              title={val.title}
              desc={val.desc}
            />
          );
        })}
      </div>

      <button className="sec-btn btn">Learn more</button>
    </div>
  );
};

export default Services;
