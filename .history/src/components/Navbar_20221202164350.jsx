import React from "react";
import logo from "../assets/logo 1.png";
import { data } from "./data";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar-container">
        <div>
          <img src={logo} />
        </div>
        <div>
          {data.map(({ id, title }) => {
            return (
              <ul key={id} className="nav-list">
                <li>{title}</li>
              </ul>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
