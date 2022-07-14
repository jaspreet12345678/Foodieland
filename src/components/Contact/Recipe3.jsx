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
class Recipe extends Component {
  state = {
    popularRecipe: [],
  };

  async componentDidMount() {
    const url = "https://foodielandnod.herokuapp.com/api/v1/getAllRecipes";
    const recipe = await axios.get(url);
    const popularRecipe = recipe.data;
    console.log(popularRecipe);
    this.setState({ popularRecipe: popularRecipe });
  }
  render() {
    return (
      <Box mt={20} maxW={1024} mx={"auto"}>
        <Stack textAlign={"center"}>
          <Heading>You may like these recipes too</Heading>
        </Stack>
        <SimpleGrid columns={3} spacing={6}>
          {this.state.popularRecipe.slice(0, 3).map((item) => {
            return (
              <Box p={3} bg="#EBF8FF" borderRadius={20} as="article" mt={15}>
                <Image
                  ImageobjectFit="fill"
                  h={200}
                  w="100%"
                  src={
                    "https://foodielandnod.herokuapp.com/" + item.recipeId.image
                      ? "banana.png"
                      : "https://foodielandnod.herokuapp.com/" +
                        item.recipeId.image
                  }
                />
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
