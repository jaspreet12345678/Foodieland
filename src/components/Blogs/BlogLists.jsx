import React from "react";
import Footer from "../UsableComponents/Footer";
import Header from "../UsableComponents/Header";
import Subscription from "../UsableComponents/Subscription";
import BlogHeader from "./BlogComponents/BlogHeader";

function BlogLists(props) {
  return (
    <>
      <Header />
      <BlogHeader />
      <Subscription />
      <Footer />
    </>
  );
}

export default BlogLists;
