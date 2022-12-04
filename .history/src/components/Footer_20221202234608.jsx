import React from "react";
import logo from "../assets/logo 1.png";
import "./footer.css";
export const Footer = () => {
  return (
    <div>
      <div className="footer-section">
        <div className="image-logo">
          <img src={logo} />
        </div>
        <div className="footer-texts">
          <div>
            <p className="text">
              Your ultimate email solution to grow business and engaging with
              future customers and clients.
            </p>
            <button className="button">Ask Question</button>
          </div>
          <div>
            <ul>
              <h4>Community</h4>
              <li>For Talents</li>
              <li>For Companies</li>
              <li>Facebook Group</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <ul>
              <h4>About us</h4>
              <li>Meet the Team</li>
              <li>Our Story</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <ul>
              <h4>Contacts</h4>
              <p>
                Feel free to get in touch with us via phone or send us a message
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
