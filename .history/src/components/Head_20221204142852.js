import React from "react";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { Team } from "./Team";
import { Routes, Route } from "react-router-dom";

const Head = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
};

export default Head;
