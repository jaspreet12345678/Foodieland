import React from "react";
import Footer from "../Home/footer";
import Navbar from "../Home/navbar";
import Static from "../Home/static";
import BlogArticle from "./BlogArticle";
import Nakli from "./nakli";
function Index() {
  return (
    <>
      <Navbar />
      <BlogArticle />
      <Nakli />
      <Static />
      <Footer />
    </>
  );
}

export default Index;
