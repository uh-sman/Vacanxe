import React, { useState } from "react";
import "./navbar.css";
import burger from "../assets/burger-menu.png";
import { data } from "./data";
export const SideNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        data.map(({ id, title }) => {
          return (
            <ul key={id}>
              <a>{title}</a>
            </ul>
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
<div className="close" onClick={(e) => setOpen(!open)}>
  <h1>X</h1>
</div>;
