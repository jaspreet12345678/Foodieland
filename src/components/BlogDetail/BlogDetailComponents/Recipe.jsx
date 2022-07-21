import {
  Heading,
  Box,
  Stack,
  Image,
  SimpleGrid,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { Component } from "react";
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { getAllReceipe } from "../../../utils/services";
import { Link } from "react-router-dom";
import { api } from "../../../config";
class Recipe extends Component {
  state = {
    popularRecipe: [],
  };
  imagePath = api;

  async componentDidMount() {
    const recipe = await getAllReceipe();
    const popularRecipe = recipe.data;
    this.setState({ popularRecipe: popularRecipe });
  }
  render() {
    return (
      <Box mt={20} maxW={1024} mx={"auto"}>
        <Stack textAlign={"center"}>
          <Heading>Check out the Delicious recipes</Heading>
        </Stack>
        <SimpleGrid columns={3} spacing={6}>
          {this.state.popularRecipe.slice(0, 3).map((item, index) => (
            <Link to={`/RecipePost/${item._id}`}>
              <Box
                key={index}
                p={3}
                bg="#EBF8FF"
                borderRadius={20}
                as="article"
                mt={15}
              >
                <Link to={`/recipedetail/${item._id}`}>
                  <Image
                    ImageobjectFit="fill"
                    h={200}
                    w="100%"
                    src={this.imagePath + item.recipeId.image}
                  />
                </Link>
                <Heading
                  size="sm
              "
                  fontWeight="bold"
                >
                  {item.recipeId.title}
                </Heading>
                <HStack mt={2} justifyItems={"space-between"}>
                  <HStack>
                    <Icon ml={5} as={BsFillAlarmFill} />
                    <Text borderRadius="10px" bgColor="#EDFDFD">
                      {item.recipeId.cookTime}
                    </Text>
                  </HStack>
                  <HStack>
                    <Icon ml={25} as={ImSpoonKnife} />
                    <Text borderRadius="10px" bgColor="#EDFDFD">
                      {item.recipeId.categoryId.categoryName}
                    </Text>
                  </HStack>
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
