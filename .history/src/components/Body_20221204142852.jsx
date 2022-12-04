import React from "react";
import "./version.css";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { Team } from "./Team";
import { Services } from "./Services";
import { Versions } from "./Versions";
export const Body = () => {
  return (
    <div>
      <Hero />
      <Body />
      <Team />
      <Footer />
      <Services />
      <div className="flex">
        <Versions />
      </div>
    </div>
  );
};
