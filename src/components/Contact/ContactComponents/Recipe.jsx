import {
  Heading,
  Box,
  Stack,
  Image,
  SimpleGrid,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Component } from "react";
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { Link } from "react-router-dom";
import { getAllReceipe } from "../../../utils/services";
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
                <Link to={`recipedetail/${item._id}`}>
                  <Image
                    ImageobjectFit="fill"
                    h={200}
                    w="100%"
                    src={this.imagePath + item.recipeId.image}
                  />
                </Link>
                <Heading size="sm" fontWeight="bold">
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
            );
          })}
        </SimpleGrid>
      </Box>
    );
  }
}

export default Recipe;
