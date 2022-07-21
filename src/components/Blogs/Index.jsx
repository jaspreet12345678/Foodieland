import React from "react";
import Footer from "../UsableComponents/Footer";
import Header from "../UsableComponents/Header";
import Static from "../UsableComponents/Static";
import BlogHeader from "./BlogComponents/BlogHeader";

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
