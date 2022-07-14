import {
  Flex,
  Box,
  Image,
  Text,
  VStack,
  Heading,
  Input,
  Button,
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

        <VStack mt={35}>
          <Flex>
            <Heading>Deliciousness to your inbox</Heading>
          </Flex>
          <Flex>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque eligendi, unde, sit vero mollitia esse aperiam
            </Text>
          </Flex>
          <Box
           display={"flex"}
            borderRadius="3xl"
          >
            <Input placeholder="Your Email" />
            <Button  bg={"black"} color="white">Subscribe</Button>
          </Box>
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
