import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className="s-box">
                    <img src={props.image} alt="" />
                    <div className="box-content">
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                    </div>
                </div>
    </>
  )
}

export default Card
