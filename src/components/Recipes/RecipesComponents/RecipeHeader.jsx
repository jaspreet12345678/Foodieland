import React, { useState, useEffect } from "react";
import {
  Center,
  Container,
  Heading,
  Box,
  Input,
} from "@chakra-ui/react";
import ReceipePostList from "./ReceipePostList";
import Pagination from "../../UsableComponents/Pagination";
import { getAllReceipe, getPopularReceipes } from "../../../utils/services";

function ReceipeHeader() {
  const [data, setReceipe] = useState([]);
  const [popularReceipe, setPopularReceipe] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [postsPerPage] = useState(4);

  useEffect(() => {
    window.scrollTo(0, 0);
    receipeDetails();
    popularReceipeDetails();
  }, []);

  const receipeDetails = async () => {
    const { data } = await getAllReceipe();
    setReceipe(data);
  };

  const popularReceipeDetails = async () => {
    const { data: popularReceipe } = await getPopularReceipes();
    setPopularReceipe(popularReceipe);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    window.scroll(0,0)
    setCurrentPage(pageNumber);
  };

  return (
    <Container maxW={1080} mx={"auto"}>
      <Box>
        <Center>
          <Box mt={10}>
            <Heading fontSize={"5xl"}>Receipes & Article</Heading>
          </Box>
        </Center>
        <Center>
          <Box mt={12}>
            <Input
              type="text"
              name="query"
              placeholder="Search article, news or receipe..."
              size="lg"
              htmlSize={30}
              width="auto"
              borderRadius={15}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </Box>
        </Center>
      </Box>
      <ReceipePostList
        posts={currentPosts}
        searchQuery={searchQuery}
        popularReceipe={popularReceipe}
      />
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

export default ReceipeHeader;
