import React from "react";
import Cooker from "./cooker";
import Footer from "./footer";
import Navbar from "./navbar";
import Static from "./static";
import { Box } from "@chakra-ui/react";
import Categories from "./category";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";
import Instagram from "./instagram";
import Recipe from "./recipe";
import AllReceipes from "./allRecipes";
const Index = () => {
  return (
    <>
      <Navbar />
      <Box w="100%" p={4} color="white">
        <ImageSlider slides={SlideData} />
      </Box>
      <Categories />
      <Recipe />
      <Cooker />
      <Instagram />
      <AllReceipes />
      <Static />
      <Footer />
    </>
  );
};

export default Index;
