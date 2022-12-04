import React from "react";
import "./contact.css";
import location from "../assets/Location.png";
import message from "../assets/Message.png";
import twitter from "../assets/twitter";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import stroke from "../assets/Stroke 5.png";
export const ContactInfo = () => {
  return (
    <div>
      <div>
        <h1 className="header-text">Contact info:</h1>
        <div className="contact-section">
          <div>
            <p className="contact">
              <img src={location} /> 4157 Washington Ave. Manchester, Kentucky
              39495
            </p>
          </div>
          <div>
            <ul className="contact-list">
              <div>
                <img src={stroke} />
              </div>
              <div>
                <li>(505) 555-0119</li>
                <li>(505) 555-0120</li>
                <li>(505) 555-0125</li>
              </div>
            </ul>
          </div>
          <div>
            <p className="contact">
              <img src={message} /> Consult@Vacanxe.com
            </p>
          </div>
          <div>
            <img src={facebook} />
            <img src={twitter} />
            <img src={linkedin} />
            <img src={instagram} />
          </div>
        </div>
      </div>
    </div>
  );
};
