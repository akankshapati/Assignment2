import React from 'react'

const Card = (props) => {
    return (
        <>

            <div className="cust-info flex">
                <div className="cust-img">
                    <img src={props.img} alt="" className='card-img' />
                </div>

                <div className='cust-header'>
                    <h2>{props.title}</h2>
                    <span>{props.position}</span>
                </div>
            </div>
            <p className='cust-review'>{props.review}</p>
        </>
    )
}

export default Card
