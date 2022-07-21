import React from "react";
import {
  Box,
  Flex,
  Img,
  Heading,
  Text,
  HStack,
  Avatar,
  Stack,
} from "@chakra-ui/react";
import moment from "moment";
import { Link } from "react-router-dom";
const ReceipePostList = ({ posts, popularReceipe, searchQuery }) => {
  const imgPath = "https://foodielandnod.herokuapp.com/";

  return (
    <Box>
      <Flex mt={20}>
        <Box w={750}>
          {posts
            .filter((value) => {
              if (searchQuery === "") {
                return value;
              } else if (
                value.recipeId.title
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              ) {
                return value;
              }
            })
            .map((item) => {
              return (
                <Flex mb={5}>
                  <Box w={250}>
                    <Link to={`/recipedetail/${item._id}`}>
                      <Img
                        src={imgPath + item.recipeId.image}
                        w={220}
                        h={200}
                        borderRadius={20}
                      />
                    </Link>
                  </Box>
                  <Box w={400}>
                    <Heading fontSize={"md"}>{item.recipeId.title}</Heading>
                    <Text
                      fontSize={"sm"}
                      color={"gray.500"}
                      textAlign={"justify"}
                    >
                      {item.recipeId.description}
                    </Text>
                    <HStack mt={35}>
                      <Avatar
                        name="AV"
                        src={imgPath + item.recipeId.userId.Image}
                        size="sm"
                      />
                      <Heading fontSize={"sm"} fontWeight={800}>
                        {item.recipeId.userId.firstName +
                          " " +
                          item.recipeId.userId.lastName}
                      </Heading>
                      <Text fontSize={"sm"} color={"gray.500"}>
                        {moment(item.recipeId.userId.createdAt).format(
                          "MMM Do YY"
                        )}
                      </Text>
                    </HStack>
                  </Box>
                </Flex>
              );
            })}
        </Box>
        <Box ml={10}>
          <Heading fontSize={"2xl"}>Tasty Receipes</Heading>
          <Flex>
            <Box>
              {popularReceipe.slice(1, 4).map((data) => {
                return (
                  <HStack mt={5}>
                    <Box w={180}>
                      <Link to={`/recipedetail/${data._id}`}>
                        <Img
                          w={180}
                          h={120}
                          borderRadius={30}
                          src={imgPath + data.recipeId.image}
                        />
                      </Link>
                    </Box>
                    <Stack>
                      <Heading fontSize={"lg"}>{data.recipeId.title}</Heading>
                      <Heading fontSize={"sm"} color={"gray.400"}>
                        {"By" +
                          " " +
                          data.recipeId.userId.firstName +
                          " " +
                          data.recipeId.userId.lastName}
                      </Heading>
                    </Stack>
                  </HStack>
                );
              })}
            </Box>
          </Flex>
          <Img src={"panner.png"} mt={5} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ReceipePostList;
