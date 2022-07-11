import React from "react";
import RecipeS from "./recipeList";
import Direction from "./direction";
import Ingrediants from "./ingredient";
import Navbar from "../Home/navbar";
import Static from "../Home/static";
import Recipe from "./recipe2";
import Footer from "../Home/footer"
const Index = () => {
  return (
    <>
      <Navbar />
      <RecipeS />
      <Ingrediants />
      <Direction />
      <Static />
      <Recipe />
      <Footer />
    </>
  );
};

export default Index;
