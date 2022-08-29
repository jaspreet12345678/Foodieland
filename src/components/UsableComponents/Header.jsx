import {
  Text,
  Stack,
  Flex,
  Box,
  Divider,
  Spacer,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./index.css";

const Header = (props) => {
  const token = localStorage.getItem("token");

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
              <NavLink className="common" to="/home">
                Home
              </NavLink>
              <NavLink className="common" to="/recipes">
                Receipes
              </NavLink>
              <NavLink className="common" to="/blogs">
                Blogs
              </NavLink>
              <NavLink className="common" to="/contact">
                Contact
              </NavLink>
              <NavLink className="common" to="/about">
                About Us
              </NavLink>
              {!token && <NavLink className="common" to="/login">
                Login
              </NavLink>}
              {token && <NavLink className="common" to="/login">
                Logout
              </NavLink>}
            </HStack>
          </Flex>
          <Spacer />
          <Flex alignItems={"end"}>
            <Stack direction={"row"} spacing={7}>
              <Button bg={"white"}>
                <a href="https://www.instagram.com/foodieland555/">
                  {<FaFacebook className="facebook" />}
                </a>
              </Button>
              <Button bg={"white"}>
                <a href="https://www.instagram.com/foodieland555/">
                  {<FaTwitter className="twitter" />}
                </a>
              </Button>

              <Button bg={"white"}>
                <a href="https://www.instagram.com/foodieland555/">
                  {<FaInstagram className="instagram" />}
                </a>
              </Button>
            </Stack>
          </Flex>
        </Stack>
        <Divider border="2px" />
      </Box>
    </>
  );
};

export default Header;
