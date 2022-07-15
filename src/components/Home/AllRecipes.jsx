import React, { Component } from "react";
import axios from "axios";
import { Box, Heading, Flex, SimpleGrid, Text, Button, Image, HStack } from "@chakra-ui/react";
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import {getAllReceipe} from "../../utils/services"

class AllReceipes extends Component {
  state = {
    popularReceipes: [],
  };
  imagePath = "https://foodielandnod.herokuapp.com/";

  async componentDidMount() {
    const URL = "https://foodielandnod.herokuapp.com/api/v1/getAllRecipes";
    const res = await getAllReceipe();
    const popularReceipes = res.data;
    console.log(popularReceipes);
    this.setState({ popularReceipes });
  }
  render() {
    return (
      <Box mt={20} maxW={1024} mx={"auto"} >
        <Flex mt={30}>
          <Heading w={540}>Try this delicious receipe<br/> to make your day</Heading>
          <Text w={540} mt={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Flex>
        <SimpleGrid columns={3} spacing={6}>
          {this.state.popularReceipes.slice(0,6).map((item) => {
            return (
              <Box p={3} bg="#EBF8FF" borderRadius={20} as="article" mt={15}>
                <Image
                  ImageobjectFit="fill"
                  h={200}
                  w="100%"
                  src={this.imagePath + item.recipeId.image}
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

export default AllReceipes;