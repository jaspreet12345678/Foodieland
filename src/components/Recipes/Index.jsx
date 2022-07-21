import React from "react";
import Footer from "../UsableComponents/Footer";
import Header from "../UsableComponents/Header";
import Static from "../UsableComponents/Static";
import ReceipeHeader from "./RecipesComponents/RecipeHeader";

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
