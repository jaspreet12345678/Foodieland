import React, { useState, useEffect } from "react";
import BlogPostList from "./BlogPost";
import Pagination from "../../UsableComponents/Pagination";
import {
  getAllBlogs,
  getAllPopularBlogs,
  getSearchQuery,
} from "../../../utils/blogSer";
import {
  Center,
  Container,
  Heading,
  Box,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";

function BlogHeader() {
  const [data, setBlogs] = useState([]);
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const blogsDetails = async () => {
    const { data } = await getAllBlogs();
    setBlogs(data);
  };

  const popularBlogsDetails = async () => {
    const { data: popularBlogs } = await getAllPopularBlogs();
    setPopularBlogs(popularBlogs);
  };

  const getSearch = async (query) => {
    const { data: searchQuery } = await getSearchQuery(query);
    setBlogs(searchQuery);
  };

  useEffect(() => {
    window.scroll(0,0);
    blogsDetails();
    popularBlogsDetails();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    window.scroll(0,0)
    setCurrentPage(pageNumber);
  };

  return (
    <Container maxW={1080} mx={"auto"}>
      <Box maxW={1024} mx={"auto"} mt={10}>
        <Heading size={"3xl"} textAlign={"center"}>
          Blog & Article
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

      <BlogPostList posts={currentPosts} popularBlogs={popularBlogs} />
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

export default BlogHeader;
