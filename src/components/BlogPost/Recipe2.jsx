import {
  Heading,
  Box,
  Stack,
  Image,
  SimpleGrid,
  HStack,
  Button,
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

  async componentDidMount() {
    const url = "https://foodielandnod.herokuapp.com/api/v1/getAllRecipes";
    const recipe = await getAllReceipe();
    const popularRecipe = recipe.data;
    this.setState({ popularRecipe: popularRecipe });
  };
  render() {
    return (
      <Box mt={20} maxW={1024} mx={"auto"}>
        <Stack textAlign={"center"}>
          <Heading>Check out the Delicious recipes</Heading>
        </Stack>
        <SimpleGrid columns={3} spacing={6}>
          {this.state.popularRecipe.slice(0,3).map((item, index) => (
            <Link to={`/RecipePost/${item._id}`}>
            <Box key={index} p={3} bg="#EBF8FF" borderRadius={20} as="article" mt={15}>
              <Link to={`/RecipePost/${item._id}`}>
                <Image
                  ImageobjectFit="fill"
                  h={200}
                  w="100%"
                  src={this.imagePath + item.recipeId.image}
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
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    );
  }
}

export default Recipe;
