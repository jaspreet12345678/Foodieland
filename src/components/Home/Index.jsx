import React, { useEffect } from "react";
import Cooker from "./HomeComponents/Cooker";
import Footer from "../UsableComponents/Footer";
import Header from "../UsableComponents/Header";
import Subscription from "../UsableComponents/Subscription";
import { Box } from "@chakra-ui/react";
import Categories from "./HomeComponents/Category";
import ImageSlider from "./HomeComponents/ImageSlider";
import Instagram from "./HomeComponents/Instagram";
import Recipe from "./HomeComponents/Recipe";
import AllReceipes from "./HomeComponents/AllRecipes";

const Index = (props) => {
  const token = localStorage.getItem("token");

  console.log(token);
  useEffect(() => {
    if (token !== null) {
      setTimeout(() => {
        localStorage.removeItem("token");
        props.history.push("/login"); 
        // window.location = "/login";
      }, 30000);
    }
  }, []);

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
      <Subscription />
      <Footer />
    </>
  );
};

export default Index;
