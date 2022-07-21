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
import { useState, useEffect } from "react";
import React from "react";
import { FiPrinter, FiShare2 } from "react-icons/fi";
import { RiTimerFill } from "react-icons/ri";
import { TbToolsKitchen2 } from "react-icons/tb";
import { getOneReceipePost } from "../../../utils/blogSer";
import moment from "moment";

function RecipeDetail(props) {
  const [recipes, setRecipes] = useState([]);
  const imgPath = "https://foodielandnod.herokuapp.com/";
  const receipeId = props.receipeId;

  const getReceipeDetail = async () => {
    const { data: recipes } = await getOneReceipePost(receipeId);
    setRecipes(recipes.data);
    console.log(recipes);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getReceipeDetail();
  }, [receipeId]);

  return (
    <Box mt={20} maxW={1024} mx={"auto"}>
      <Heading>{recipes && recipes.recipeId && recipes.recipeId.title}</Heading>
      <Flex mt={5}>
        <Box w={700}>
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            <GridItem>
              <HStack>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <VStack>
                  <Text
                    fontSize={13}
                    fontWeight={"semibold"}
                    textAlign={"center"}
                  >
                    {recipes &&
                      recipes.recipeId &&
                      recipes.recipeId.userId.firstName +
                        " " +
                        recipes.recipeId.userId.lastName}
                    <br />
                  </Text>
                  <Text fontSize={"sm"}>
                    {recipes &&
                      recipes.recipeId &&
                      moment(recipes.recipeId.userId.createdAt).format(
                        "MMM Do YYYY"
                      )}
                  </Text>
                </VStack>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack ml={5} mt={1}>
                <Icon as={RiTimerFill} />
                <Text fontSize={13} fontWeight={"semibold"}>
                  Prep Time
                  <br />
                  {recipes && recipes.recipeId && recipes.recipeId.prepTime}
                </Text>
              </HStack>
            </GridItem>
            <GridItem>
              <HStack ml={1} mt={1}>
                <Icon as={RiTimerFill} />
                <Text fontSize={13} fontWeight={"semibold"}>
                  Cook Time
                  <br />
                  {recipes && recipes.recipeId && recipes.recipeId.cookTime}
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
            <Image
              borderRadius={"3xl"}
              w={650}
              h={470}
              src={
                recipes && recipes.recipeId && imgPath + recipes.recipeId.image
              }
            />
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
                {/* {recipes.slice(0, 1).map((item) => ( */}
                <VStack mt={2}>
                  <Heading size={"md"}>Nutrition Information</Heading>
                  <Grid gap={6}>
                    <GridItem mt={4}>
                      <HStack w="275px" h="10" justifyContent={"space-between"}>
                        <Text>Calories</Text>{" "}
                        <Text>
                          {recipes &&
                            recipes.nutritionInformation &&
                            recipes.nutritionInformation.calories}
                        </Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack w="275px" h="10" justifyContent={"space-between"}>
                        <Text>Total Fat</Text>
                        <Text>
                          {recipes &&
                            recipes.nutritionInformation &&
                            recipes.nutritionInformation.totalFat}
                        </Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack w="275px" h="10" justifyContent={"space-between"}>
                        <Text>Protein</Text>
                        <Text>
                          {" "}
                          {recipes &&
                            recipes.nutritionInformation &&
                            recipes.nutritionInformation.protein}
                        </Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack w="275px" h="10" justifyContent={"space-between"}>
                        <Text>Carbohydrate</Text>
                        <Text>
                          {recipes &&
                            recipes.nutritionInformation &&
                            recipes.nutritionInformation.carbohydrate}
                        </Text>
                      </HStack>
                    </GridItem>
                    <GridItem>
                      <HStack w="275px" h="10" justifyContent={"space-between"}>
                        <Text>Cholesterol</Text>
                        <Text>
                          {recipes &&
                            recipes.nutritionInformation &&
                            recipes.nutritionInformation.cholesterol}
                        </Text>
                      </HStack>
                    </GridItem>
                  </Grid>
                  <Box>
                    <Text mt={8} textAlign={"center"}>
                      {recipes &&
                        recipes.nutritionInformation &&
                        recipes.nutritionInformation.nutritionTitle}
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </Flex>
          </VStack>
        </Box>
      </Flex>
      <Flex mt={20}>
        <Text>
          {recipes && recipes.receipeId && recipes.receipeId.description}
        </Text>
      </Flex>
    </Box>
  );
}

export default RecipeDetail;
