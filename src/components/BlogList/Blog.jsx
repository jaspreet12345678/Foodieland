import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import axios from "axios";
import { Box, Center} from "@chakra-ui/react";
import BlogList from "./BlogList";
import BlogArticle from "./BlogArticle"

const Blog = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [search] = useState("");

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(
        `https://foodielandnod.herokuapp.com/api/searchBlog?key=${key}`);
      console.log(result);
      result = await result.json();
      if (result) {
        setData(search);
      }
    }
  };

  const blogsDetails = async () => {
    const { data } = await axios.get(
      "https://foodielandnod.herokuapp.com/api/getAllBlog"
    );
    setData(data);
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

export default Blog;
