import { Flex, Image, Box, Text, Heading, Button } from "@chakra-ui/react";
import React from "react";

const Cooker = () => {
  return (
    <Flex marginTop="60px">
      <Flex max>
        <Box boxSize="sm" marginLeft="100px">
          <Heading marginTop="10px">Everyone can be a chef in their own kichen</Heading>
          <Text marginTop="10px">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            eligendi, unde, sit vero mollitia esse aperiam
          </Text>
          <Button marginTop="20px" alignContent="center" colorScheme='blue'>Learn more</Button>
        </Box>
      </Flex>
      <Flex>
        <Box  boxSize="sm" marginLeft="260px" bg="#81E6D9">
        <Image width="1000px" height="370px" src="/220.png"/>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Cooker;
