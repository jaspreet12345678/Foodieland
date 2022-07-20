import React from "react";
import RecipeS from "./RecipeList";
import Direction from "./Direction";
import Ingrediants from "./Ingredient";
import Header from "../usable/Header";
import Static from "../usable/Static";
import Recipe from "./Recipe2";
import Footer from "../usable/Footer"
const ReceipeMain = (props) => {
  const receipeId = props.match.params.receipeId;
  return (
    <>
      <Header />
      <RecipeS  receipeId = {receipeId}/>
      <Ingrediants receipeId = {receipeId} />
      <Direction  receipeId = {receipeId}/>
      <Static />
      <Recipe />
      <Footer />
    </>
  );
};

export default ReceipeMain;
