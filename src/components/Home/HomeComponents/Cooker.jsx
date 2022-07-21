import {
  Flex,
  Image,
  Box,
  Text,
  Heading,
  Button,
  VStack,
  Center,
} from "@chakra-ui/react";
import React from "react";

const Cooker = () => {
  return (
    <Box>
      <Flex
        marginTop="60px"
        maxW={1024}
        mx={"auto"}
        mb={10}
        bg="#fff"
        borderRadius="15px"
        color={"#000"}
        h="500px"
      >
        <Flex>
          <Box ml="30px">
            <VStack>
              <Flex>
                <Heading mt={20}>Everyone can be a chef in their own kichen</Heading>
              </Flex>
              <Flex >
                <Text mt={10}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloremque eligendi, unde, sit vero mollitia esse aperiam
                </Text>
              </Flex>
              <Center>
                <Flex>
                  <Button mt={50} alignContent="center" colorScheme="blue">
                    Learn more
                  </Button>
                </Flex>
              </Center>
            </VStack>
          </Box>
        </Flex>
        <Flex>
          <Box bg="#EBF8FF">
            <Image width="1000px" height="500px" src="/220.png" />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Cooker;
