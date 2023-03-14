import React from "react";
import Burger from "./Burger";
import "./Navbar.css";
import Trafalgar from "./Trafalgar";

const Navbar = () => {
  return (
    <div className="container flex navbar">
      <div className="logo">
        <Trafalgar />
      </div>
      <div className="navlist flex">
        <div className="n-list">
          <Burger />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
