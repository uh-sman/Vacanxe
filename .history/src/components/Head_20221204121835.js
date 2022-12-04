import React from "react";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { Team } from "./Team";

const Head = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Body />
      <Team />
      <Footer />
    </div>
  );
};

export default Head;
