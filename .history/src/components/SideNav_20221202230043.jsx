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
            <ul key={id}>
              <li>{title}</li>
            </ul>
          );
        })
      ) : (
        <img src={burger} className="burger-img" />
      )}
    </div>
  );
};
