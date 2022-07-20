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

const BlogPostList = ({ posts, popularBlogs }) => {
  const imgPath = "https://foodielandnod.herokuapp.com/";

  return (
    <Box>
      <Flex mt={20}>
        <Box w={750}>
          {posts.map((item) => {
            return (
              <Flex mb={5}>
                <Box w={250}>
                  <Link to={`/BlogPost/${item._id}`}>
                    <Img
                      src={imgPath + item.image}
                      w={220}
                      h={200}
                      borderRadius={20}
                    />
                  </Link>
                </Box>
                <Box w={400}>
                  <Heading fontSize={"md"}>{item.title}</Heading>
                  <Text
                    fontSize={"sm"}
                    color={"gray.500"}
                    textAlign={"justify"}
                  >
                    {item.description}
                  </Text>
                  <HStack mt={35}>
                    <Avatar
                      name="AV"
                      src={imgPath + item.userId.Image}
                      size="sm"
                    />
                    <Heading fontSize={"sm"} fontWeight={800}>
                      {item.userId.firstName + " " + item.userId.lastName}
                    </Heading>
                    <Text fontSize={"sm"} color={"gray.500"}>
                      {moment(item.userId.createdAt).format("MMM Do YY")}
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
              {popularBlogs.slice(0, 3).map((data) => {
                return (
                  <HStack mt={5}>
                    <Link to={`BlogPost/${data._id}`}>
                      <Img
                        w={180}
                        h={120}
                        borderRadius={30}
                        src={imgPath + data.image}
                      />
                    </Link>
                    <Stack>
                      <Heading fontSize={"lg"}>{data.title}</Heading>
                      <Heading fontSize={"sm"} color={"gray.400"}>
                        {"By" +
                          " " +
                          data.userId.firstName +
                          " " +
                          data.userId.lastName}
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

export default BlogPostList;
