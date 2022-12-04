import React from "react";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Team } from "./Team";

const Head = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Team />
      <Footer />
    </div>
  );
};

export default Head;
