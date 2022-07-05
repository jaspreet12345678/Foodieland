import React, { useState, useEffect,Button } from "react";
import axios from "axios";
import { Heading, GridItem, Grid, Flex } from "@chakra-ui/react";
function Category() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      const response = await axios.get(
        "http://95.111.202.157:8001/api/getAllCategory"
      );
      console.log(response);

      setPosts(response.data);
    };

    loadPost();
  }, []);

  return (
    <>
      <div>
        <Heading m={10}>Category</Heading>
        <Grid ml={8} templateColumns="repeat(6, 1fr)" gap={6}>
        {posts.slice(2,8).map((item) => (
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