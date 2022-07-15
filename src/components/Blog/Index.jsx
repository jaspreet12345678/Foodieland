import React from "react";
import Footer from "../usable/Footer";
import Header from "../usable/Header";
import Static from "../usable/Static";
import BlogHeader from "./BlogHeader";

function BlogLists(props) {
  return (
    <>
      <Header />
      <BlogHeader />
      <Static />
      <Footer />
    </>
  );
}

export default BlogLists;
