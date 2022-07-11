import React from "react";
import { Avatar, Box, Center, Heading, Icon, Text, Image } from "@chakra-ui/react";
import { TbMinusVertical } from "react-icons/tb";
function Chef() {
  return (
    <Box maxW={1024} mx={"auto"}>
      <Heading mt={10} textAlign={"center"}>
        Full Guide to Becoming a Professional Chef
      </Heading>
      <Center>
        <Box mt={10} display={"flex"}>
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          <Text ml={3} fontSize={"lg"} mt={5}>
            JOhn Smith
          </Text>
          <Icon mt={2} w={20} h={10} as={TbMinusVertical} />
          <Text fontSize={"lg"} mt={5}>
            15 march 2022
          </Text>
        </Box>
      </Center>
      <Text mt={8} textAlign={"center"}>
        We have created a list of easy sandwich recipes you can make for
        breakfast. But the highlight of these recipes is that <br />
        they come with a desi twist
      </Text>
      <Image mt={10} borderLeftRadius={"3xl"} borderRightRadius={"3xl"} src={"Chef1.jpg"} />
    </Box>
  );
}

export default Chef;
