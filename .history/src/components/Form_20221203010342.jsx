import React from "react";
import "./form.css";
export const Form = () => {
  return (
    <div>
      <div>
        <form>
          <div className="form">
            <label>Your name</label>
            <input className="input-field" placeholder="Enter your name" />
          </div>
          <div className="form">
            <label>Your email</label>
            <input className="input-field" placeholder="Enter your email" />
          </div>
          <div className="form">
            <label>Your Phone Number</label>
            <input
              className="input-field"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form">
            <label>Your Company Name</label>
            <input
              className="input-field"
              placeholder="Enter your Company Name"
            />
          </div>
          <div className="form">
            <label>Message</label>
            <input className="message" placeholder="" />
          </div>
          <button className="form-button">Consult with us</button>
        </form>
      </div>
    </div>
  );
};
