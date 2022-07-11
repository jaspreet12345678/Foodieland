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
const BlogList = ({ posts }) => {
  const imgPath = "https://foodielandnod.herokuapp.com/";
  return (
    <Box>
      <Flex mt={20}>
        <Box w={750}>
          {posts.map((item) => {
            return (
              <Flex mb={5}>
                <Box w={250}>
                  <Img
                    src={
                      imgPath + item.image
                        ? "food-32.png"
                        : imgPath + item.image
                    }
                    w={220}
                    h={200}
                    borderRadius={20}
                  />
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
              <HStack mt={5}>
                <Img w={180} h={120} borderRadius={30} src={"food-1.png"} />
                <Stack>
                  <Heading fontSize={"lg"}>
                    Chicken MeatBall With Creamy Cheese
                  </Heading>
                  <Heading fontSize={"sm"} color={"gray.400"}>
                    By Andreas Paul
                  </Heading>
                </Stack>
              </HStack>
              <HStack mt={5}>
                <Img w={180} h={120} borderRadius={30} src={"food-1.png"} />
                <Stack>
                  <Heading fontSize={"lg"}>
                    Chicken MeatBall With Creamy Cheese
                  </Heading>
                  <Heading fontSize={"sm"} color={"gray.400"}>
                    By Andreas Paul
                  </Heading>
                </Stack>
              </HStack>
              <HStack mt={5}>
                <Img w={180} h={120} borderRadius={30} src={"food-1.png"} />
                <Stack>
                  <Heading fontSize={"lg"}>
                    Chicken MeatBall With Creamy Cheese
                  </Heading>
                  <Heading fontSize={"sm"} color={"gray.400"}>
                    By Andreas Paul
                  </Heading>
                </Stack>
              </HStack>
            </Box>
          </Flex>
          <Img src={"panner.png"} mt={5} />
        </Box>
      </Flex>
    </Box>
  );
};

export default BlogList;
