import React, { useState } from "react";
import "./navbar.css";
import burger from "../assets/burger-menu.png";
import { data } from "./data";
export const SideNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        data.map(({ title, id }) => {
          return (
            <div key={id} className="sidebar-container">
              <ul>
                {/* <h1></h1> */}
                <li>{title}</li>
              </ul>
            </div>
          );
        })
      ) : (
        <img
          src={burger}
          className="burger-img"
          onClick={(e) => setOpen(!open)}
        />
      )}
    </div>
  );
};
