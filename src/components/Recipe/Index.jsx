import React from "react";
import Footer from "../usable/Footer";
import Header from "../usable/Header";
import Static from "../usable/Static";
import BlogHeader from "./BlogHeader";
import RecipeHeader from "./RecipeHeader";

function BlogLists(props) {
  return (
    <>
      <Header />
      <RecipeHeader />
      <Static />
      <Footer />
    </>
  );
}

export default BlogLists;
