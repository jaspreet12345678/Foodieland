import {
  Heading,
  Box,
  Text,
  Stack,
  Img,
  SimpleGrid,
  HStack,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { Component } from "react";
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { getAllReceipe } from "../../../utils/services";
import { Link } from "react-router-dom";
class Recipe extends Component {
  state = {
    popularRecipe: [],
  };
  imagePath = "https://foodielandnod.herokuapp.com/";

  async componentDidMount() {
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
        <SimpleGrid columns={3} spacing={10}>
          {this.state.popularRecipe.slice(0, 6).map((item) => {
            return (
              <Link to={`/recipedetail/${item._id}`}>
                <Box
                  className="zoom"
                  p={3}
                  bg="#EBF8FF"
                  borderRadius={20}
                  as="article"
                  mt={15}
                >
                  <Img
                    src={this.imagePath + item.recipeId.image}
                    borderRadius={20}
                    h={200}
                    w="100%"
                  />
                  <Heading mt={2} size="sm" fontWeight="bold">
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
            );
          })}
        </SimpleGrid>
      </Box>
    );
  }
}

export default Recipe;
