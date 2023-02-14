import React from 'react'
import './Intro.css'
import Pic1 from '../../images/Pic1.jpg';

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Virtual healthcare</span>
                    <span>for you</span>
                    <span>
                        Trafalgar provides progressive, and affordable
                        healthcare, accessible on mobile and online
                        for everyone
                    </span>
                </div>
                <button className="button i-button">Consult Today</button>
            </div>

            <div className="i-right">
                <img src={Pic1} alt="Pic1 not visible" />
            </div>

        </div>
    )
}

export default Intro
