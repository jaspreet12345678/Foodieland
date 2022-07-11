import {
  Flex,
  Box,
  Image,
  Text,
  VStack,
  Heading,
  Input,

} from "@chakra-ui/react";
import React from "react";
const Static = () => {
  return (
    <Box>
      <Flex
        maxW={1024}
        mx={"auto"}
        mb={10}
        mt={10}
        bg="#EBF8FF"
        borderRadius="15px"
        color={"#000"}
      >
        <Flex>
          <Box mt={8}>
            <Image src="/1.png" />
          </Box>
        </Flex>

        <VStack mt={30}>
          <Flex>
            <Heading>Deliciousness to your inbox</Heading>
          </Flex>
          <Flex>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque eligendi, unde, sit vero mollitia esse aperiam
            </Text>
          </Flex>
          <Input size="lg" placeholder="Your Email" />

          <Flex
            justifyContent={"center"}
            borderRadius="3xl"
            bg="black"
            w="90px"
            h="25px"
          >
            <Text color="white">Subscribe</Text>
          </Flex>
        </VStack>
        <Flex>
          <Box marginLeft="5px" marginTop="127px">
            <Image src="/2.png" />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Static;
