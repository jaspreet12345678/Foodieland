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
import "./index.css"

const Header = () => {
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
              <NavLink className="common" to="/Home">Home</NavLink>
              <NavLink className="common" to="/Recipes">Receipe</NavLink>
              <NavLink className="common" to="/BlogList">BlogList</NavLink>
              <NavLink className="common" to="/BlogPost">BlogPost</NavLink>
              <NavLink className="common" to="/Contact">Contact</NavLink>
              <NavLink className="common" to="/About">About Us</NavLink>
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

export default Header;
