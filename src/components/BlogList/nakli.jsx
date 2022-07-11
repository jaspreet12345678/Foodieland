import React, { useState, useEffect } from "react";
import Pagination from "../BlogList/pagination";
import axios from "axios";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import BlogList from "./BlogList";

const Nakli = () => {
  const [data, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const blogsDetails = async () => {
    const { data } = await axios.get(
      "https://foodielandnod.herokuapp.com/api/getAllBlog"
    );
    setBlogs(data);
  };

  useEffect(() => {
    blogsDetails();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
      <Box maxW={1024} mx={"auto"}>
        <BlogList posts={currentPosts} />
        <Center  mt={10}>
        <Pagination 
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
        </Center>
      </Box>
  );
};

export default Nakli;
