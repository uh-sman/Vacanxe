import React from "react";
import "./version.css";
import man from "../assets/computer.png";
import dotted from "../assets/Dot Pattern 1.png";
export const Versions = () => {
  return (
    <div>
      <div className="versions-container">
        <div className="versions-section">
          <div>
            <h2 className="h2">Get the best version of young talents</h2>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus, dolor? Dicta cumque recusandae consequatur molestias
              sapiente soluta placeat unde similique!
            </small>
            <a className="version-link">Signup now </a>
          </div>
          <div>
            <img src={dotted} className="dotted" />
            <img src={man} />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
