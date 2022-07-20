import {
  Heading,
  Box,
  Text,
  Stack,
  Image,
  SimpleGrid,
  HStack,
  Button,
  Img
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { Component } from "react";
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { getAllReceipe } from "../../utils/services";
import { Link } from "react-router-dom";
class Recipe extends Component {
  state = {
    popularRecipe: [],
  };
  imagePath = "https://foodielandnod.herokuapp.com/";

  componentDidMount() {
    window.scroll(0,0);
  }

  async componentDidMount() {
    const url = "https://foodielandnod.herokuapp.com/api/v1/getAllRecipes";
    const recipe = await getAllReceipe();
    const popularRecipe = recipe.data;
    this.setState({ popularRecipe: popularRecipe });
  }
  render() {
    return (
      <Box mt={20} maxW={1024} mx={"auto"}>
        <Stack textAlign={"center"}>
          <Heading>Simple and tasty recipes</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet
            consectetur <br /> Lorem ipsum dolor sit amet consectetur{" "}
          </Text>
        </Stack>
        <SimpleGrid columns={3} spacing={6}>
          {this.state.popularRecipe.slice(0, 6).map((item) => {
            return (
              <Box p={3} bg="#EBF8FF" borderRadius={20} as="article" mt={15}>
                <Link to={`/RecipePost/${item._id}`}>
                  <Img
                    src={this.imagePath + item.recipeId.image}
                    borderRadius={20}
                    h={200}
                    w="100%"
                  />
                </Link>
                <Heading size="md" fontWeight="bold">
                  {item.recipeId.title}
                </Heading>
                <HStack justifyItems={"space-between"}>
                  <Button borderRadius="10px" bgColor="#EDFDFD">
                    <BsFillAlarmFill />
                    {item.recipeId.cookTime}
                  </Button>
                  <Button borderRadius="10px" bgColor="#EDFDFD">
                    <ImSpoonKnife />
                    {item.recipeId.categoryId.categoryName}
                  </Button>
                </HStack>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    );
  }
}

export default Recipe;
