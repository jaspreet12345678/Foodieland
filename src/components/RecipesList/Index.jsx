import React from "react";
import Direction from "./RecipeDetailComponent/Direction";
import Ingrediants from "./RecipeDetailComponent/Ingredient";
import Header from "../UsableComponents/Header";
import Static from "../UsableComponents/Static";
import Recipe from "./RecipeDetailComponent/Recipe";
import Footer from "../UsableComponents/Footer"
import RecipeDetail from "./RecipeDetailComponent/RecipeDetail";
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
