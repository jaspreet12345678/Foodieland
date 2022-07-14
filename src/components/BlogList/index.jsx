import React from "react";
import Footer from "../Home/footer";
import Navbar from "../Home/navbar";
import Static from "../Home/static";
import BlogArticle from "./BlogArticle";
import Blog from "./Blog";
function BlogMain() {
  return (
    <>
      <Navbar />
      <BlogArticle />
      <Blog />
      <Static />
      <Footer />
    </>
  );
}

export default BlogMain;
