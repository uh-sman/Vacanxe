import React from "react";
import "./contact.css";
import location from "../assets/Location.png";
import message from "../assets/Message.png";
import stroke from "../assets/Stroke 5.png";
export const ContactInfo = () => {
  return (
    <div>
      <div className="contact-section">
        <h1 className="header-text">Contact info:</h1>
        <div>
          <p className="contact">
            <img src={location} /> 4157 Washington Ave. Manchester, Kentucky
            39495
          </p>
        </div>
        <div>
          <ul>
            <li className="contact">
              <img src={stroke} />
              (505) 555-0119
            </li>
            <li>(505) 555-0120</li>
            <li>(505) 555-0125</li>
          </ul>
        </div>
        <div>
          <p className="contact">
            <img src={message} /> 4157 Washington Ave. Manchester, Kentucky
            39495
          </p>
        </div>
      </div>
    </div>
  );
};
