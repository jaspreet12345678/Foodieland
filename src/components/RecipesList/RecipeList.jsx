import {
  Heading,
  Text,
  Box,
  Grid,
  GridItem,
  Image,
  Avatar,
  Flex,
  HStack,
  Icon,
  VStack,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { FiPrinter, FiShare2 } from "react-icons/fi";
import { RiTimerFill } from "react-icons/ri";
import { TbToolsKitchen2 } from "react-icons/tb";
import { getAllReceipe } from "../../utils/services";
function RecipeS() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      const response = await getAllReceipe();
      setRecipes(response.data);
    };

    loadPost();
  }, []);
  return (
    <Box mt={20} maxW={1024} mx={"auto"}>
      <Heading>Health Japanese Fried Rice</Heading>
      <Flex mt={5}>
        <Box w={700}>
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            <GridItem>
              <HStack>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Text
                  fontSize={13}
                  fontWeight={"semibold"}
                  textAlign={"center"}
                >
                  John Smith <br />
                  15th march 2022
                </Text>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack ml={5} mt={1}>
                <Icon as={RiTimerFill} />
                <Text fontSize={13} fontWeight={"semibold"}>
                  Prep Time
                  <br />
                  15 min
                </Text>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack ml={1} mt={1}>
                <Icon as={RiTimerFill} />
                <Text fontSize={13} fontWeight={"semibold"}>
                  Cook Time
                  <br />
                  15 min
                </Text>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack mt={1}>
                <Icon as={TbToolsKitchen2} />
                <Text fontSize={13} fontWeight={"semibold"}>
                  Chicken
                </Text>
              </HStack>
            </GridItem>
          </Grid>
          <Box mt={5}>
            <Image borderRadius={"3xl"} w={650} h={470} src={"food-3.png"} />
          </Box>
      
        </Box>
        <Box>
          <VStack>
            <Flex>
              <Button>
                <Icon as={FiPrinter} />
                Print
              </Button>
              <Button ml={2}>
                <Icon as={FiShare2} />
                Share
              </Button>
            </Flex>
            <Flex>
              <Box
                mt={7}
                w={324}
                borderLeftRadius={5}
                borderRightRadius={5}
                ml={5}
                bg={"bisque"}
              >
                  {recipes.slice(0,1).map((item) => (
                <VStack mt={2}>
                  <Heading size={"md"}>Nutrition Information</Heading>
                    <Grid  gap={6}>
                      <GridItem mt={4}>
                        <HStack
                          w="275px"
                          h="10"
                          justifyContent={"space-between"}
                        >
                          <Text>Calories</Text> <Text>{item.nutritionInformation.calories}</Text>
                        </HStack>
                      </GridItem>
                      <GridItem>
                        <HStack
                          w="275px"
                          h="10"
                          justifyContent={"space-between"}
                        >
                          <Text>Total Fat</Text>
                          <Text>{item.nutritionInformation.totalFat}</Text>
                        </HStack>
                      </GridItem>
                      <GridItem>
                        <HStack
                          w="275px"
                          h="10"
                          justifyContent={"space-between"}
                        >
                          <Text>Protein</Text>
                          <Text>{item.nutritionInformation.protein}</Text>
                        </HStack>
                      </GridItem>
                      <GridItem>
                        <HStack
                          w="275px"
                          h="10"
                          justifyContent={"space-between"}
                        >
                          <Text>Carbohydrate</Text>
                          <Text>{item.nutritionInformation.carbohydrate}</Text>
                        </HStack>
                      </GridItem>
                      <GridItem>
                        <HStack
                          w="275px"
                          h="10"
                          justifyContent={"space-between"}
                        >
                          <Text>Cholesterol</Text>
                          <Text>{item.nutritionInformation.cholesterol}</Text>
                        </HStack>
                      </GridItem>
                    </Grid>
                  <Box>
                    <Text mt={8} textAlign={"center"}>
                      {item.nutritionInformation.nutritionTitle}
                    </Text>
                  </Box>
                </VStack>
                ))}
              </Box>
            </Flex>
          </VStack>
        </Box>
      </Flex>
      <Flex mt={20}>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </Text>
      </Flex>
    </Box>
  );
}

export default RecipeS;
