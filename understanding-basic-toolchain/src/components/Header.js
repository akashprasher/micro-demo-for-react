import React from "react";
import { NavLink } from "react-router-dom";

let Header = () => {
  return (
    <nav>
      <h3>We'll Fetch and Route</h3>
      <div className="nav-NavLinks">
        <ul>
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "600" : "",
                boxShadow: isActive ? "0px 2px #ca5e1f" : "",
              };
            }}
            className="nav-item"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "600" : "",
                boxShadow: isActive ? "0px 2px #ca5e1f" : "",
              };
            }}
            className="nav-item"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "600" : "",
                boxShadow: isActive ? "0px 2px #ca5e1f" : "",
              };
            }}
            className="nav-item"
            to="/contact"
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
