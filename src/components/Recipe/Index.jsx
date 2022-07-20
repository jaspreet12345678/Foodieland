import React from "react";
import Footer from "../usable/Footer";
import Header from "../usable/Header";
import Static from "../usable/Static";
import ReceipeHeader from "./RecipeHeader";

function RecipeList(props) {
  return (
    <>
      <Header />
      <ReceipeHeader />
      <Static />
      <Footer />
    </>
  );
}

export default RecipeList;
