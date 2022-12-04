import React from "react";
import "./version.css";
import { Services } from "./Services";
import { Versions } from "./Versions";
export const Body = () => {
  return (
    <div>
      <Services />
      <div className="flex">
        <Versions />
      </div>
    </div>
  );
};
