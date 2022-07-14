import React from "react";
import Footer from "../usable/Footer";
import Header from "../usable/Header";
import Recipe from "../Home/Recipe";
import Static from "../usable/Static";
import About from "./About";
import Chef from "./Chef";

const AboutUs = () => {
  return <>
  <Header />
  <About />
  <Chef />
  <Static />
  <Recipe />
  <Footer />
  </>;
};

export default AboutUs;
