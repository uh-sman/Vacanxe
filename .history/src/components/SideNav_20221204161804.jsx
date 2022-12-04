import React, { useState } from "react";
import "./navbar.css";
import burger from "../assets/burger-menu.png";
import { data } from "./data";
export const SideNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <div>
          <div>
            <ul>
              <li>Post Job</li>
              <li>Programs</li>
              <li>Services</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
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
//  data.map(({ title, id }) => {
//           return (
//             <div key={id} className="sidebar-container">
//               <div className="sidebar">
//                 <div className="close" onClick={(e) => setOpen(!open)}>
//                   <h1>X</h1>
//                 </div>
//                 <ul>
//                   <a>{title}</a>
//                 </ul>
//               </div>
//             </div>
//           );
//         })
