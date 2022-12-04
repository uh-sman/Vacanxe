import React from "react";
import "./form.css";
export const Form = () => {
  return (
    <div>
      <div>
        <form>
          <div className="form">
            <label>Your name</label>
            <input className="input-field" />
          </div>
          <div className="form">
            <label>Your email</label>
            <input className="input-field" />
          </div>
          <div className="form">
            <label>Your Phone Number</label>
            <input className="input-field" />
          </div>
          <div className="form">
            <label>Your name</label>
            <input className="input-field" />
          </div>
          <div className="form">
            <label>Your name</label>
            <input />
          </div>
        </form>
      </div>
    </div>
  );
};
