import React from "react";
import Cooker from "./Cooker";
import Footer from "../usable/Footer";
import Header from "../usable/Header";
import Static from "../usable/Static";
import { Box } from "@chakra-ui/react";
import Categories from "./Category";
import ImageSlider from "./ImageSlider";
import Instagram from "./Instagram";
import Recipe from "./Recipe";
import AllReceipes from "./AllRecipes";
const Index = () => {
  return (
    <>
      <Header />
      <Box w="100%" p={4} color="white">
        <ImageSlider />
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
