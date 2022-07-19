import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Text,
  HStack,
  Divider,
  Button,
  Stack,
  Center,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./index.css";

function Footer(props) {
  return (
    <Box maxW={1024} mx={"auto"}>
      <Box mt={10}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Text fontSize="2xl" as="i" color="#001219" fontWeight="800">
              Foodieland
            </Text>
            <Text>Lorem ipsum dolor sit amet</Text>
          </Box>
          <Spacer />
          <Flex justifyContent={"space-between"}>
            <HStack spacing={8}>
              <NavLink className={"common"} to="/Home">
                Home
              </NavLink>
              <NavLink className={"common"} to="/Recipes">
                Receipe
              </NavLink>
              <NavLink className={"common"} to="/BlogList">
                BlogList
              </NavLink>
              <NavLink className={"common"} to="/BlogPost">
                BlogPost
              </NavLink>
              <NavLink className={"common"} to="/Contact">
                Contact
              </NavLink>
              <NavLink className={"common"} to="/About">
                About Us
              </NavLink>
            </HStack>
          </Flex>
        </Flex>
        <Divider />
        <Box mt={5} mb={10}>
          <Flex>
              <Flex>
                <Text fontWeight="600" justifyContent="center">
                  2020 FlowBase Powered by WebFlow
                </Text>
              </Flex>
            <Spacer />
            <Flex alignItems={"end"}>
              <Stack direction={"row"} spacing={7}>
                <Button bg={"white"}>
                  {<FaFacebook className="facebook" />}
                </Button>
                <Button bg={"white"}>
                  {<FaTwitter className="twitter" />}
                </Button>
                <Button bg={"white"}>
                  {<FaInstagram className="instagram" />}
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
