import {
  Text,
  Stack,
  Flex,
  Box,
  Divider,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { Avatar } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box maxW={1024} mx={"auto"}>
        <Stack direction={["column", "row"]} spacing="24px">
          <Flex w="300px" h="50px">
            <Text mt={2} as="i" fontSize={"2xl"}>
              Foodieland
            </Text>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <HStack spacing={8}>
              <NavLink to="/Home">Home</NavLink>
              <NavLink to="/Recipes">Receipe</NavLink>
              <NavLink to="/BlogList">BlogList</NavLink>
              <NavLink to="/BlogPost">BlogPost</NavLink>
              <NavLink to="/Contact">Contact</NavLink>
              <NavLink to="/About">About Us</NavLink>
            </HStack>
          </Flex>
          <Spacer />
          <Flex>
            <Avatar src="https://bit.ly/broken-link" />
          </Flex>
        </Stack>
        <Divider border="2px" />
      </Box>
    </>
  );
};

export default Navbar;
