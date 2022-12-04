import React from "react";
import logo from "../assets/logo 1.png";
import "./footer.css";
export const Footer = () => {
  return (
    <div>
      <div className="footer-section">
        <div className="image-logo">
          <img src={logo} />
        </div>
        <div>
          <div>
            <p>
              Your ultimate email solution to grow business and engaging with
              future customers and clients.
            </p>
            <button className="button">Ask Question</button>
          </div>
        </div>
      </div>
    </div>
  );
};
