import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Heading,
  GridItem,
  Grid,
  HStack,
  Box,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import {getAllCategory} from "../../utils/services"

function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      const response = await getAllCategory();
      setCategory(response.data);
    };

    loadPost();
  }, []);

 const imagePath = "https://foodielandnod.herokuapp.com/";

  return (
    <Box marginTop="60px" maxW={1024} mx={"auto"}>
      <HStack justifyContent={"space-between"}>
        <Heading>Category</Heading>
        <Button bgColor="#EBF8FF" borderRadius="10px">
          View all Categories
        </Button>
      </HStack>
      <Box h={"100%"} w={"100%"} mt={10}>
        <Grid templateColumns="repeat(6, 1fr)" gap={6}>
          {category.slice(2, 8).map((item) => (
            <GridItem>
              <Image
                w={250}
                h={150}
                src={imagePath + item.image }
              />
              <Text fontSize={"md"} fontWeight={400} textAlign={"center"}>
                {item.categoryName}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Category;