// import React, { useState, useEffect } from "react";
// import RecipePostList from "./RecipePost";
// import Pagination from "./Pagination";
// import { getAllReceipe, getPopularReceipes } from "../../utils/services";
// import {
//   Center,
//   Container,
//   Heading,
//   Box,
//   Text,
//   Input,
//   Button,
// } from "@chakra-ui/react";

// function RecipeHeader() {
//   const [data, setRecipe] = useState([]);
//   const [popularReceipe, setPopularReceipe] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(5);

//   const recipesDetails = async () => {
//     const { data } = await getAllReceipe();
//     setRecipe(data);
//   };

//   const popularRecipesDetails = async () => {
//     const { data: popularReceipe } = await getPopularReceipes();
//     setPopularReceipe(popularReceipe);
//   };

//   const getSearchQuery = async (query) => {
//     const { data: searchQuery } = await getSearchQuery1(query);
//     setRecipe(searchQuery);
//   };


//   useEffect(() => {
   
//     recipesDetails();
//     popularRecipesDetails();
//   }, []);

//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <Container maxW={1080} mx={"auto"}>
//       <Box maxW={1024} mx={"auto"} mt={10}>
//         <Heading size={"3xl"} textAlign={"center"}>
//           Recipe & Article
//         </Heading>
//         <Text mt={8} textAlign={"center"}>
//           There are many variations of passages of Lorem Ipsum available, but
//           the majority have suffered alteration.
//         </Text>
//         <Center mt={20}>
//           <Box display={"flex"} alignContent={"center"} w={600}>
//             <Input
//               variant="flushed"
//               placeholder="Search articles, recipes and news"
//               onChange={(event) => getSearchQuery(event.target.value)}
//             />
//             <Button bg={"black"} color={"white"}>
//               Search
//             </Button>
//           </Box>
//         </Center>
//       </Box>

//       <RecipePostList posts={currentPosts} popularReceipe={popularReceipe} />
//       <Center>
//         <Pagination
//           postsPerPage={postsPerPage}
//           totalPosts={data.length}
//           paginate={paginate}
//           currentPage={currentPage}
//         />
//       </Center>
//     </Container>
//   );
// }

// export default RecipeHeader;
import React, { useState, useEffect } from "react";
import {
  Center,
  Container,
  Heading,
  Box,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import ReceipePostList from "./RecipePost";
import Pagination from "./Pagination";
import { getAllReceipe, getPopularReceipes } from "../../utils/services";
import { getSearchReceipe } from "../../utils/blogSer";

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
        {/* <Center>
          <Text mt={5} color={"gray.600"} fontSize={"sm"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </Center> */}
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
      <ReceipePostList posts={currentPosts} searchQuery={searchQuery}  popularReceipe={popularReceipe} />
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