import React from "react";
import "./version.css";
import man from "../assets/computer.png";
import img from "../assets/Group 1.png";
import dotted from "../assets/Dot Pattern 1.png";
export const Versions = () => {
  return (
    <div>
      <div className="versions-container">
        <div className="versions-section1">
          <div className="text-section">
            <h2 className="h2">Get the best version of young talents</h2>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus, dolor? Dicta cumque recusandae consequatur molestias
              sapiente soluta placeat unde similique!
            </small>
            <div>
              <a className="version-link">Signup now </a>
            </div>
          </div>
          <div>
            <img src={dotted} className="dotted" />
            <img src={man} className="man" />
          </div>
        </div>
        <div className="versions-section1">
          <div>
            <img src={dotted} className="dotted" />
            <img src={img} className="man" />
          </div>
          <div className="text-section">
            <h2 className="h2">Your Job Posting is on Steroids</h2>
            <small>
              Gain brand authority and visibility with the help of the largest
              IT service ecosystem. Find customers who are looking for your
              solution right now!
            </small>
            <div>
              <a className="version-link">Signup now </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
