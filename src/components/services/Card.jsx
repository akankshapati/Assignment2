import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="s-box">
        <div className="s-img">
           <img src={props.image} alt="" />
        </div>
        <div className="box-content">
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
