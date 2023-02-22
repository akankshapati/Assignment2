import React from "react";
import RightArrow from "../images/RightArrow.png";

const Card = (props) => {
  return (
    <>
      <div className="l-box">
        <img src={props.image} alt="" />
        <div className="box-content">
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
          <a href="/">
            Read More <img src={RightArrow} alt="arrow" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
