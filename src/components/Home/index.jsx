import React from "react";
import Cooker from "./cooker";
import Footer from "./footer";
import Navbar from "./navbar";
import Static from "./static";
import { Divider, Box } from "@chakra-ui/react";
import Category from "./category";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";
import Instagram from "./instagram";
import Recipe from "./recipe";
const Index = () => {
  return (
    <>
      <Navbar />
      <Divider border="2px" />
      <Box w="100%" p={4} color="white">
        <ImageSlider slides={SlideData} />
      </Box>
      <Cooker />
      <Recipe />
      <Category />
      <Static />
      {/* <Instagram /> */}
      <Footer />
    </>
  );
};

export default Index;
