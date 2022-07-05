import {
  Box,
  Center,
  HStack,
  Heading,
  Image,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import React from "react";

const Cont = () => {
  return (
    <Box mt={20}>
      <Center>
        <HStack>
          <Heading>Contact Us</Heading>
        </HStack>
      </Center>
      <Flex>
        <Flex>
          <Image src="/Cook-contact.png" />
        </Flex>
        <Flex mt={20} ml={10}>
          <InputGroup>
            <InputLeftAddon children="Name" />
            <Input type="text" placeholder="Enter your Name" />
          </InputGroup>
          <InputGroup ml={10}>
            <InputLeftAddon children="Email" />
            <Input placeholder="Enter your Email" />
          </InputGroup>
        </Flex>
        <Flex mt={20} ml={10}>
          <InputGroup>
            <InputLeftAddon children="Name" />
            <Input type="text" placeholder="Enter your Name" />
          </InputGroup>
          <InputGroup ml={10}>
            <InputLeftAddon children="Email" />
            <Input placeholder="Enter your Email" />
          </InputGroup>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Cont;
