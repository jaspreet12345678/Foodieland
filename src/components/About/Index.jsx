import React from "react";
import Footer from "../UsableComponents/Footer";
import Header from "../UsableComponents/Header";
import Recipe from "../Home/HomeComponents/Recipe";
import Subscription from "../UsableComponents/Subscription";
import About from "./AboutComponents/About";
import Chef from "./AboutComponents/Chef";

const Index = () => {
  return <>
  <Header />
  <About />
  <Chef />
  <Subscription />
  <Recipe />
  <Footer />
  </>;
};

export default Index;
