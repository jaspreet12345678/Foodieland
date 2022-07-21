import {
  Box,
  Divider,
  Flex,
  Heading,
  Img,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiCircle } from "react-icons/fi";
import { getOneReceipePost } from "../../../utils/blogSer";
import { useState, useEffect } from "react";

function Direction(props) {
  const [recipes, setRecipes] = useState([]);
  const imgPath = "https://foodielandnod.herokuapp.com/";
  const receipeId = props.receipeId;

  const getReceipeDetail = async () => {
    const { data: recipes } = await getOneReceipePost(receipeId);
    setRecipes(recipes.data.direction);
    console.log(recipes);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getReceipeDetail();
  }, [receipeId]);

  return (
    <Box maxW={1024} mx={"auto"}>
      <Heading mt={20}>Direction</Heading>
      <Flex mt={5} w={700}>
        <Box>
          <VStack>
            <List spacing={5}>
              {recipes.map((item) => {
                return (
                  <ListItem fontSize={"md"} fontWeight={800}>
                    <ListIcon as={FiCircle} />
                    {item.directionTitle}
                    <Text
                      fontWeight={300}
                      fontSize={"sm"}
                      color={"gray.500"}
                      mt={5}
                      textAlign={"justify"}
                    >
                      {item.directionDescription}
                    </Text>
                    <Img
                      src={imgPath + item.directionImage}
                      w={600}
                      my={5}
                      borderRadius={20}
                    />
                    <Text
                      fontWeight={300}
                      fontSize={"sm"}
                      color={"gray.500"}
                      mt={5}
                      textAlign={"justify"}
                    >
                      {item.directionDescription}
                    </Text>
                  </ListItem>
                );
              })}

              <Divider />
            </List>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default Direction;
