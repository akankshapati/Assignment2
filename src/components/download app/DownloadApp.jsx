import React from 'react'
import Pic3 from '../images/Pic3.png'
import './DownloadApp.css'

const DownloadApp = () => {
  return (
    <div className="DownloadApp">
      <div className="d-left">
        <div className="d-name">
          <span>Download our</span>
          <span>mobile app</span>
          <hr />
          <span>Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not
            just work. We take pride in the solutions we deliver
          </span>
        </div>
        <button className="button d-button">Download</button>
      </div>

      <div className="d-right">
        <img src={Pic3} alt="Pic3" />
      </div>
    </div>
  )
}

export default DownloadApp
