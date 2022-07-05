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
    <Flex
      marginLeft="20px"
      marginRight="20px"
      marginTop="15px"
      marginBottom="65px"
      bg="aliceblue"
      //   borderLeftRadius="3xl"
      //   borderRightRadius="3xl"
    >
      <Flex>
        <Box>
          <Image src="/1.png" />
        </Box>
      </Flex>

      <VStack>
        <Box marginTop="20px">
          <Heading>Deliciousness to your inbox</Heading>
        </Box>
        <Box>
          <Text w="500px" marginTop="20px" marginBottom="20px">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            eligendi, unde, sit vero mollitia esse aperiam
          </Text>
          <Input size="lg" placeholder="Your Email"  />
        </Box>
        <Box textAlign="center" borderRadius="3xl" bg="black" w="90px" h="25px"> 
          <Text  color="white">Subscribe</Text>
        </Box>
      </VStack>
      <Flex>
        <Box marginLeft="5px" marginTop="127px">
          <Image src="/2.png" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Static;
