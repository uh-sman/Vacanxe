import React from "react";
import "./hero.css";
import partner from "../assets/Partner.svg";
export const Hero = () => {
  return (
    <div className="hero">
      <div>
        <div className="container">
          <div className="hero-container">
            <div>
              <img src={partner} className="partner-img" />
            </div>
            <div className="hero-content">
              <h1 className="header">
                Find the right <span>talents</span> to fuel your business growth
              </h1>
              <small className="text">
                Join a vibrant community os MSPs to forge long-lasting
                relationships with partners
                <br /> that help you create excellent customers experiences
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
