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
            <NavLink to="/mars-weather">Mars Weather</NavLink>
            </li>
            <li>
              <NavLink to="/map">Asteroids Map</NavLink>
            </li>
            <li>
              <NavLink to="/mars-rovers-photos">Mars photos</NavLink>
            </li>
            <li>
            <NavLink to="/near-earth-objects">NEO</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
