// import React, { useEffect } from "react";
import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Avatar,
  Stack,
  Text,
  Img,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getOneBlogPost } from "../../../utils/blogSer";
import moment from "moment";
import { api } from "../../../config";

function BlogDetail(props) {
  const [blog, setBlog] = useState([]);

  const imgPath = api;

  const blogId = props.blogId;

  const getBlogDetail = async () => {
    const { data: blog } = await getOneBlogPost(blogId);
    setBlog(blog.data);
  };

  useEffect(() => {
    window.scroll(0,0)
    getBlogDetail();
  }, []);

  return (
    <Container maxW={1080} mx={"auto"}>
      <Box mt={20}>
        <Heading textAlign={"center"} fontSize={"5xl"} fontWeight={800}>
          {blog.title}
        </Heading>
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={10}>
            <GridItem>
              <HStack>
                <Avatar
                src={blog && blog.userId && imgPath + blog.userId.Image }
                ></Avatar>
                <Stack>
                  <Heading fontSize={"sm"}>
                    {blog &&
                      blog.userId &&
                      blog.userId &&
                      blog.userId.firstName + "  " + blog.userId.lastName}
                  </Heading>
                </Stack>
              </HStack>
            </GridItem>
            <GridItem>
              <Text fontSize={"sm"} mt={3}>
                {moment(
                  blog.userId && blog.userId && blog.userId.createdAt
                ).format("MMM Do YY")}
              </Text>
            </GridItem>
          </Grid>
        </Center>
        <Text
          mt={10}
          fontSize={"sm"}
          color={"gray.500"}
          textAlign={"center"}
          mx={20}
        >
          {blog.description}
        </Text>
        <Box mt={10}>
          <Img src={imgPath + blog.image} w={"100%"} borderRadius={30} />
        </Box>
      </Box>
    </Container>
  );
}

export default BlogDetail;
