import React from "react";
import "./contact.css";
import location from "../assets/Location.png";
import message from "../assets/Message.png";
import stroke from "../assets/Stroke.png";
export const ContactInfo = () => {
  return (
    <div>
      <div>
        <h1 className="header-text">Contact info:</h1>
        <div>
          <p>
            <img src={location} /> 4157 Washington Ave. Manchester, Kentucky
            39495
          </p>
        </div>
        <div>
          <ul>
            <img src={stroke} />
            <li>(505) 555-0119</li>
            <li>(505) 555-0120</li>
            <li>(505) 555-0125</li>
          </ul>
        </div>
        <div>
          <p>
            <img src={message} /> 4157 Washington Ave. Manchester, Kentucky
            39495
          </p>
        </div>
      </div>
    </div>
  );
};
