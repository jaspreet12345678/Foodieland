import React from "react";
import Direction from "./RecipeDetailComponents/Direction";
import Ingrediants from "./RecipeDetailComponents/Ingredient";
import Header from "../UsableComponents/Header";
import Static from "../UsableComponents/Static";
import Recipe from "./RecipeDetailComponents/Recipe";
import Footer from "../UsableComponents/Footer"
import RecipeDetail from "./RecipeDetailComponents/RecipeDetail";
const ReceipeMain = (props) => {
  const receipeId = props.match.params.receipeId;
  return (
    <>
      <Header />
      <RecipeDetail  receipeId = {receipeId}/>
      <Ingrediants receipeId = {receipeId} />
      <Direction  receipeId = {receipeId}/>
      <Static />
      <Recipe />
      <Footer />
    </>
  );
};

export default ReceipeMain;
