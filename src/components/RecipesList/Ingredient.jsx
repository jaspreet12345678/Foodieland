import {
  Box,
  Flex,
  Heading,
  Stack,
  List,
  ListItem,
  ListIcon,
  VStack,
  Divider,
  HStack,
  Img,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
import axios from "axios";
import { useState, useEffect } from "react";
import { getOneReceipePost } from "../../utils/blogSer";
import { Link } from "react-router-dom";
import { getPopularReceipes } from "../../utils/services";

function Ingrediants(props) {
  const [popularReceipe, setPopularReceipe] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const imgPath = "https://foodielandnod.herokuapp.com/";
  const receipeId = props.receipeId;

  const popularReceipeDetails = async () => {
    const { data: popularReceipe } = await getPopularReceipes();
    setPopularReceipe(popularReceipe);
  };

  const getReceipeDetail = async () => {
    const { data: recipes } = await getOneReceipePost(receipeId);
    setRecipes(recipes.data.ingredient);
    console.log(recipes);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getReceipeDetail();
    popularReceipeDetails();
  }, [receipeId]);

  const handleevent = () => {
    window.scroll(0, 0);
  };

  return (
    <Box maxW={1080} mx={"auto"}>
      <Flex mt={10}>
        <Box>
          <Stack spacing={5}>
            <Heading fontSize={"4xl"}>Ingredients</Heading>
            <Heading fontSize={"lg"}>For Main Dish</Heading>
            <Stack>
              <List spacing={8}>
                {recipes &&
                  recipes[0] &&
                  recipes[0].formaindish.map((formaindishItem, key) => {
                    return (
                      <>
                        {key === 0 ? (
                          <ListItem as={"s"} id={key} color="gray.400">
                            {key === 0 ? (
                              <ListIcon as={FaCheckCircle} color={"#000"} />
                            ) : (
                              <ListIcon as={FiCircle} color={"#000"} />
                            )}

                            {formaindishItem}
                          </ListItem>
                        ) : (
                          <ListItem id={key}>
                            {key === 0 ? (
                              <ListIcon as={FaCheckCircle} color={"#000"} />
                            ) : (
                              <ListIcon as={FiCircle} color={"#000"} />
                            )}

                            {formaindishItem}
                          </ListItem>
                        )}

                        <Divider />
                      </>
                    );
                  })}
              </List>
            </Stack>
            <Stack>
              <Heading mt={10} fontSize={"lg"}>
                For The Sauce
              </Heading>
            </Stack>
            <Stack>
              <List spacing={8}>
                {recipes ? (
                  <>
                    <ListItem>
                      <ListIcon as={FiCircle} />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListIcon as={FiCircle} />
                      Assumenda, quia temporibus eveniet a libero incidunt
                      suscipit
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListIcon as={FiCircle} />
                      Quidem, ipsam illum quis sed voluptatum quae eum fugit
                      earum
                    </ListItem>
                  </>
                ) : (
                  recipes &&
                  recipes[0] &&
                  recipes[0].sauce.map((sauceItem, key) => {
                    return (
                      <>
                        <ListItem id={key}>
                          <ListIcon as={FiCircle} />
                          {sauceItem}
                        </ListItem>
                        <Divider />
                      </>
                    );
                  })
                )}
              </List>
            </Stack>
          </Stack>
        </Box>
        <Spacer />
        <Box w={380}>
          <Heading fontSize={"4xl"}>Other Receipe</Heading>
          {/* <Link to={`/RecipePost/${data._id}`} onClick={handleevent}> */}
          <Stack mt={5}>
            {popularReceipe.slice(1, 4).map((data) => {
              return (
                <HStack>
                  <Box w={150}>
                    <Link to={`/RecipePost/${data._id}`} onClick={handleevent}>
                      <Img
                        w={180}
                        h={120}
                        borderRadius={30}
                        src={imgPath + data.recipeId.image}
                      />
                    </Link>
                  </Box>
                  <Box w={200}>
                    <Stack>
                      <Heading fontSize={"lg"}>{data.recipeId.title}</Heading>
                      <Heading fontSize={"sm"} color={"gray.400"}>
                        By Andreas Paul
                      </Heading>
                    </Stack>
                  </Box>
                </HStack>
              );
            })}
          </Stack>
          {/* </Link> */}
        </Box>
      </Flex>
    </Box>
  );
}

export default Ingrediants;
