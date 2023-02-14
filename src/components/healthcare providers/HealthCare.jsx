import React from 'react'
import './HealthCare.css'
import Pic2 from '../images/Pic2.png'

const HealthCare = () => {
  return (
    <div className="HealthIntro">
        <div className="h-left">
        <img src={Pic2} alt="Pic2" />
        </div>
        <div className="h-right">
            <div className="h-name">
                <span>Leading healthcare </span>
                <span>providers</span>
                <hr />
                <span>Trafalgar provides progressive, and affordable healthcare,
                     accessible on mobile and online for everyone. To us, it’s not
                      just work. We take pride in the solutions we deliver
                </span>
            </div>
            <button className="button h-button">Learn more</button>
        </div>
    </div>
  )
}

export default HealthCare
