import React from "react";
import { ContactInfo } from "./ContactInfo";
import { Form } from "./Form";
import "./team.css";
export const Team = () => {
  return (
    <div>
      <div className="team-container">
        <div className="team">
          <div className="build">
            <div className="team-header">
              <h1>
                <span className="custom"> Build</span> Your Dream Team !
              </h1>
              <small className="small">
                Start your team development with a free consultation. Fill out
                the form and Vacanxe representative will contact you.
              </small>
            </div>
            <div className="flexed">
              {" "}
              <div>
                <Form />
              </div>
              <div>
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// ;
