import React from "react";
import { Heading, Box, Text, Input, Button, Center } from "@chakra-ui/react";
const BlogArticle = () => {
  return (
    <Box maxW={1024} mx={"auto"} mt={10}>
      <Heading size={"3xl"} textAlign={"center"}>
        Blog & Article
      </Heading>
      <Text mt={8} textAlign={"center"}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration.
      </Text>
      <Center mt={20}>
        <Box display={"flex"} alignContent={"center"} w={600}>
          <Input variant='flushed' placeholder="Search articles, recipes and news" />
          <Button bg={"black"} color={"white"}>Search</Button>
        </Box>
      </Center>
    </Box>
  );
};

export default BlogArticle;
