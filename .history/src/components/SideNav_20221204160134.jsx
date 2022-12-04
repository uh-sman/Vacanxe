import React, { useState } from "react";
import "./navbar.css";
import burger from "../assets/burger-menu.png";
import { data } from "./data";
export const SideNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        data.map(({ id, title, close }) => {
          return (
            <div>
              <div className="close" onClick={(e) => setOpen(!open)}>
                <h1>{close}</h1>
              </div>
              <ul key={id}>
                <a>{title}</a>
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
