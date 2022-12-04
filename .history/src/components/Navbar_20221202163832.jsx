import React from "react";
import logo from "../assets/logo 1.png";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar-container">
        <div>
          <img src={logo} />
        </div>
        <div></div>
      </nav>
    </div>
  );
};
