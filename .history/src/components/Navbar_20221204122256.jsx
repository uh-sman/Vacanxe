import React from "react";
import logo from "../assets/logo 1.png";
import { data } from "./data";
import { signin } from "./data";
import "./navbar.css";
import { SideNav } from "./SideNav";
export const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="navbar-container">
          <div>
            <img src={logo} />
          </div>
          <div className="navbar-nav">
            {
   data.map(({ id, title }) => {
     return (
       <ul key={id}>
         <li>{title}</li>
       </ul>
     );
   });
 }
            <div className="link"></div>
          </div>
          {/* <SideNav /> */}
        </div>
        <div></div>
      </nav>
    </div>
  );
};


//  {
//    signin.map(({ id, title }) => {
//      return (
//        <a href="" key={id}>
//          {title}
//        </a>
//      );
//    });
//  }

//  <div className="nav-list"></div>;