import React from "react";
import { ContactInfo } from "./ContactInfo";
import { Form } from "./Form";
import "./team.css";
export const Team = () => {
  return (
    <div>
      <div className="team-container">
        <div className="flexed">
          <div className="build">
            <h1>
              <span className="custom"> Build</span> Your Dream Team !
            </h1>
            <small>
              Start your team development with a free consultation. Fill out the
              form and Vacanxe representative will contact you.
            </small>
          </div>
          <Form />
        </div>
        <div>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};
