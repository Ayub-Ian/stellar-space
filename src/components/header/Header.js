import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav>
      <div className="container">
        <div className="header">
          <div className="logo">
            <img
              src={require("../../assets/logo.svg").default}
              alt="Stellar Space logo"
            />
          </div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <a href="/">Mars Weather</a>
            </li>
            <li>
              <a href="/">Asteroids Map</a>
            </li>
            <li>
              <a href="/">Mars Rovers</a>
            </li>
            <li>
              <a href="/">NEO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
