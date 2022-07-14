import React from "react";
import Footer from "../Home/footer";
import Navbar from "../Home/navbar";
import Recipe from "../Home/recipe";
import Static from "../Home/static";
import About from "./about";
import Chef from "./chef";

const AboutUs = () => {
  return <>
  <Navbar />
  <About />
  <Chef />
  <Static />
  <Recipe />
  <Footer />
  </>;
};

export default AboutUs;
