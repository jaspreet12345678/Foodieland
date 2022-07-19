import React from "react";
import RecipeS from "./RecipeList";
import Direction from "./Direction";
import Ingrediants from "./Ingredient";
import Header from "../usable/Header";
import Static from "../usable/Static";
import Recipe from "./Recipe2";
import Footer from "../usable/Footer"
const ReceipeMain = () => {
  return (
    <>
      <Header />
      <RecipeS />
      <Ingrediants />
      <Direction />
      <Static />
      <Recipe />
      <Footer />
    </>
  );
};

export default ReceipeMain;
