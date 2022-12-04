import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Team } from "./Team";

const Head = () => {
  return (
    <div>
      <Navbar />
      <Team />
      <Footer />
    </div>
  );
};

export default Head;
