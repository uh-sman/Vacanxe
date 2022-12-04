import React from "react";
import logo from "../assets/logo 1.png";
import "./footer.css";
export const Footer = () => {
  return (
    <div>
      <div className="footer-section">
        <div className="container">
          <div className="image-logo">
            <img src={logo} />
          </div>
        </div>
      </div>
    </div>
  );
};
