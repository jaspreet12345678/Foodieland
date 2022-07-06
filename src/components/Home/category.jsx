import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Heading,
  GridItem,
  Grid,
  Flex,
  HStack,
  Box,
  Button,
  VStack,
  Image,
  Text,
  Spacer,
} from "@chakra-ui/react";
function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      const response = await axios.get(
        "http://95.111.202.157:8001/api/getAllCategory"
      );
      console.log(response);

      setCategory(response.data);
    };

    loadPost();
  }, []);

  return (
    <>
      <Box>
        <Flex marginTop="60px" maxW={1024} mx={"auto"}>
          <VStack>
            <Flex>
              <Box >
                <HStack justifyContent={"space-between"}>
                  <Heading>Category</Heading>
                  <Spacer />
                  <Button>View all Categories</Button>
                </HStack>
              </Box>
            </Flex>
            <Flex>
              <Grid ml={8} templateColumns="repeat(6, 1fr)" gap={6}>
                {category.slice(2, 8).map((item) => (
                  <GridItem>
                    <Image
                      w={250}
                      h={150}
                      src={"http://95.111.202.157:8001/" + item.image}
                    />
                    <Flex ml={10} mt={10}>
                      {item.categoryName}
                    </Flex>
                  </GridItem>
                ))}
              </Grid>
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </>
  );
}

export default Category;
