import React from "react";
import Cooker from "./HomeComponents/Cooker";
import Footer from "../UsableComponents/Footer";
import Header from "../UsableComponents/Header";
import Static from "../UsableComponents/Static";
import { Box } from "@chakra-ui/react";
import Categories from "./HomeComponents/Category";
import ImageSlider from "./HomeComponents/ImageSlider";
import Instagram from "./HomeComponents/Instagram";
import Recipe from "./HomeComponents/Recipe";
import AllReceipes from "./HomeComponents/AllRecipes";
const Index = (props) => {
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
