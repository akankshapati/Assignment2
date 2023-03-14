import React from "react";
import Card from "./Card";
import data from "./CardData";
import "./LatestArticle.css";
import Frame from "../images/Frame.png"
import element from "../images/element.png"

const LatestArticle = () => {
  return (
    <div className="container flex article">
      <div className="title-wrapper">
        <h2 className="title">Check out our latest article</h2>
      </div>
      <div className="bgFrame">
        <img src={Frame} alt="BgFrame" />
      </div>
      <div className="dots">
        <img src={element} alt="Bg-Dots" />
      </div>
      <div className="latest-card">
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
      <button className="sec-btn btn bla">View all</button>
      <div className="dots2">
        <img src={element} alt="Bg-Dots2" />
      </div>
    </div>
  );
};

export default LatestArticle;
