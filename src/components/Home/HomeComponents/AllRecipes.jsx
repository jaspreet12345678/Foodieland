import React, { Component } from "react";
import {
  Box,
  Heading,
  Flex,
  SimpleGrid,
  Text,
  HStack,
  Img,
  Icon,
} from "@chakra-ui/react";
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { getAllReceipe } from "../../../utils/services";
import { Link } from "react-router-dom";
import { api } from "../../../config";
import "../../../App.css";
class AllReceipes extends Component {
  state = {
    popularReceipes: [],
  };
  imagePath = api;
  
  async componentDidMount() {
    window.scroll(0, 0);
    const res = await getAllReceipe();
    const popularReceipes = res.data;
    this.setState({ popularReceipes });
  }
  render() {
    return (
      <Box mt={20} maxW={1024} mx={"auto"}>
        <Flex mt={30}>
          <Heading w={540}>
            Try this delicious receipe
            <br /> to make your day
          </Heading>
          <Text w={540} mt={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Flex>
        <SimpleGrid columns={3} spacing={10}>
          {this.state.popularReceipes.slice(0, 6).map((item) => {
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

export default AllReceipes;
