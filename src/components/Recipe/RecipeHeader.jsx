import React, { useState, useEffect } from "react";
import RecipePostList from "./RecipePost";
import Pagination from "./Pagination";
import { getAllReceipe, getPopularReceipes } from "../../utils/services";
import { getSearch } from "../../utils/blogSer";
import {
  Center,
  Container,
  Heading,
  Box,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";

function RecipeHeader() {
  const [data, setRecipe] = useState([]);
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const recipesDetails = async () => {
    const { data } = await getAllReceipe();
    setRecipe(data);
  };

  const popularRecipesDetails = async () => {
    const { data: popularBlogs } = await getPopularReceipes();
    setPopularBlogs(popularBlogs);
  };

  const getSearch = async (query) => {
    const { data: searchQuery } = await getSearch();
    setBlogs(searchQuery);
  };

  useEffect(() => {
    recipesDetails();
    popularRecipesDetails();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container maxW={1080} mx={"auto"}>
      <Box maxW={1024} mx={"auto"} mt={10}>
        <Heading size={"3xl"} textAlign={"center"}>
          Recipe & Article
        </Heading>
        <Text mt={8} textAlign={"center"}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </Text>
        <Center mt={20}>
          <Box display={"flex"} alignContent={"center"} w={600}>
            <Input
              variant="flushed"
              placeholder="Search articles, recipes and news"
              onChange={(event) => getSearch(event.target.value)}
            />
            <Button bg={"black"} color={"white"}>
              Search
            </Button>
          </Box>
        </Center>
      </Box>

      <RecipePostList posts={currentPosts} popularBlogs={popularBlogs} />
      <Center>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Center>
    </Container>
  );
}

export default RecipeHeader;
