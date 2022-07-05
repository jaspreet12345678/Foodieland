import { Flex, Heading, VStack, Text, Divider, Box, Spacer } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <Flex marginLeft="20px" marginRight="20px">
        <Flex>
          <VStack>
            <Heading marginRight="100px">Foodieland</Heading>
            <Text>Lorem lpsum dolor sit amit,conseptucuting pit.</Text>
          </VStack>
          <Flex
            marginTop="20px"
            marginLeft="400px"
            display="flex"
            justifyItems="center"
            justifyContent="space-between"
          >
            <Text>Recipes</Text>
            <Text marginLeft="30px">Blog</Text>
            <Text marginLeft="30px">Contact us</Text>
            <Text marginLeft="30px">About us</Text>
          </Flex>
        </Flex>
      </Flex>
      <Divider border="3px" color="black" />
      <Flex>
        <Flex marginLeft="400px">
          <Box marginTop="20px">
            <Text>2020 FLowbase. Powered by webflow</Text>
          </Box>
        </Flex>
        <Spacer />
        <Flex marginTop="20px" marginRight="20px" float="right" w="150px" display="flex" justify="space-between">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
