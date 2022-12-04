import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo 1.png";
import { data } from "./data";
import { signin } from "./data";
import "./navbar.css";
import { SideNav } from "./SideNav";
export const Navbar = () => {
  const [activeLink, setActiveLink] = useState();
  return (
    <div>
      <nav className="navbar-container">
        <div className="logo-div">
          <img src={logo} />
        </div>
        <div className="navbar-nav">
          <ul className="nav-list">
            <NavLink>Post Job</NavLink>
            <NavLink>Programs</NavLink>
            <NavLink>Services</NavLink>
            <NavLink>Pricing</NavLink>
          </ul>
        </div>
        {/* <SideNav /> */}
        <div className="link">
          {signin.map(({ id, title }) => {
            return (
              <a href="" key={id}>
                {title}
              </a>
            );
          })}
        </div>

        <div></div>
      </nav>
    </div>
  );
};

//  <div className="nav-list"></div>;
// {
// }
//
// {
//   data.map(({ id, title }) => {
//     return (
//       <ul key={id}>
//         <NavLink>{title}</NavLink>
//       </ul>
//     );
//   });
// }
