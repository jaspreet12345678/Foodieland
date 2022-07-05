import React, { useState, useEffect,Button } from "react";
import axios from "axios";
import { Heading, GridItem, Grid, Flex, HStack } from "@chakra-ui/react";
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
      <div>
        <HStack>
          <Heading m={10}>Category</Heading>
          <Button>View all Categies</Button>
        </HStack>
        <Grid ml={8} templateColumns="repeat(6, 1fr)" gap={6}>
        {category.slice(2,8).map((item) => (
        <GridItem  >
        <img  width= "100px" height="25px" src={"http://95.111.202.157:8001/" + item.image}/>
        <Flex ml={10} mt={10}>{item.categoryName}</Flex>
        
        </GridItem>
        ))}
        </Grid>
      </div>
    </>
  );
}

export default Category;