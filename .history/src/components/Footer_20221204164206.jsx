import React from "react";
import logo from "../assets/logo 1.png";
import { BsGoogle } from "react-icons/bs";
import { BsGoogle, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "./footer.css";
export const Footer = () => {
  return (
    <div>
      <div className="footer-section">
        <div className="image-logo">
          <img src={logo} />
        </div>
        <div className="footer-texts">
          <div className="div">
            <p className="text">
              Your ultimate email solution to grow business and engaging with
              future customers and clients.
            </p>
            <button className="button">Ask Question</button>
          </div>
          <div className="div">
            <ul>
              <h4>Community</h4>
              <li>For Talents</li>
              <li>For Companies</li>
              <li>Facebook Group</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="div">
            <ul>
              <h4>About us</h4>
              <li>Meet the Team</li>
              <li>Our Story</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="div">
            <ul>
              <h4>Contacts</h4>
              <p>
                Feel free to get in touch with us via phone or send us a message
              </p>
            </ul>
          </div>
        </div>
        <div className="div">
          <ul>
            <li className="copyright">
              &copy;Vacanxe 2022, All Rights Reserved
            </li>
            <div>
              <a>
                {" "}
                <BsTwitter className="twitter" />
              </a>
              <a>
                <FaFacebookF />
              </a>
              <a>
                <BsGoogle />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
