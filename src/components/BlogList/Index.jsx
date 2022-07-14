import React from "react";
import Footer from "../usable/Footer";
import Header from "../usable/Header";
import Static from "../usable/Static";
import BlogArticle from "./BlogArticle";
import Blog from "./Blog";
function BlogMain() {
  return (
    <>
      <Header />
      <BlogArticle />
      <Blog />
      <Static />
      <Footer />
    </>
  );
}

export default BlogMain;
