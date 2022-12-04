import React, { useState } from "react";
import "./navbar.css";
import burger from "../assets/burger-menu.png";
import { data } from "./data";
export const SideNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sidebar-container">
      {open ? (
        data.map(({ title, id }) => {
          return (
            <div>
              <ul key={id}>
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
