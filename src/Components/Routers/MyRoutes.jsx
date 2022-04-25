import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
