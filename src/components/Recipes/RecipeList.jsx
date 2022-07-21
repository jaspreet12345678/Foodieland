import React from "react";
import Footer from "../UsableComponents/Footer";
import Header from "../UsableComponents/Header";
import Subscription from "../UsableComponents/Subscription";
import ReceipeHeader from "./RecipesComponents/RecipeHeader";

function RecipeList(props) {
  return (
    <>
      <Header />
      <ReceipeHeader />
      <Subscription />
      <Footer />
    </>
  );
}

export default RecipeList;
