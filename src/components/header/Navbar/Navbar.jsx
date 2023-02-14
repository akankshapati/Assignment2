import React from 'react'
import Burger from './Burger'
import './Navbar.css'
import Trafalgar from './Trafalgar'

const Navbar = () => {
  return (
    
  <div className="navbar">
    
    <div className="n-left">
         <Trafalgar />
    </div>
    <div className="n-right">
          <div className="n-list">
           <Burger />
          </div>
    </div>

  </div>
  )
}

export default Navbar
