import React from "react";
import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Button,
  Image,
  Spacer,
  ButtonGroup
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Content() {
  return (
    <Flex mt={10} maxW={1024} mx={"auto"}>
      <Box w={800}>
        <Box>
          <Heading fontSize={"1xl"}>
            How did you start out in the food industry?
          </Heading>
          <Text mt={2} color={"gray.400"} fontSize={"md"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
            suscipit.
          </Text>
        </Box>
        <Box mt={10}>
          <Heading fontSize={"1xl"}>
            How did you start out in the food industry?
          </Heading>
          <Text mt={2} color={"gray.400"} fontSize={"md"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
            suscipit.
          </Text>
        </Box>
        <Box>
          <Heading mt={10} fontSize={"1xl"}>
            Do you cook at home on your days off
          </Heading>
          <Image mt={3} src={"Cooking.jpg"} />
        </Box>
        <Box>
          <Text mt={10} fontSize={"3xl"} bg={"lightgray"}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </Text>
        </Box>
        <Box>
          <Heading mt={10} fontSize={"1xl"}>
            What is the biggest misconception that people have about being about
            a professional Chef
          </Heading>
          <Text mt={2} color={"gray.400"} fontSize={"md"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
            suscipit.
          </Text>
        </Box>
      </Box>
      <Box w={200} mt={10}>
          <Heading>Share on</Heading>
          <ButtonGroup >
            <VStack>
            <Button mt="10">{<FaFacebook />}</Button>
            <Spacer/>
            <Button mt="10">{<FaTwitter />}</Button>
            <Spacer />
            <Button my="10">{<FaInstagram />}</Button>
            </VStack>
          </ButtonGroup>
      </Box>
    </Flex>
  );
}

export default Content;
