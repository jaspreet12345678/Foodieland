import {
  Flex,
  Box,
  Heading,
  Select,
  Image,
  SimpleGrid,
  Textarea,
  Text,
  Input,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
const Contact = () => {
  return (
      <Box mt={10} maxW={1024} mx={"auto"}>
        <VStack>
          <HStack justifyContent={"center"}>
            <Heading>Contact Us</Heading>
          </HStack>
          <Flex>
            <Flex bg="#E6FFFA" w={300}>
              <Image src="https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/cooker%2FCook-contact.png?alt=media&token=6d41b736-1b6c-4929-9b2e-fd6319ebfa2b" />
            </Flex>
            <Flex mt={10} w={724} ml={10}>
              <SimpleGrid columns={2} spacing={10}>
                <Box>
                  <Text>Name</Text>
                  <Input  placeholder="Enter your name" />
                </Box>
                <Box>
                  <Text>Email</Text>
                  <Input placeholder="Enter email" />
                </Box>
                <Box>
                  <Text>Subject</Text>
                  <Input placeholder="Enter subject" />
                </Box>
                <Box>
                  <Text>Enqiury Type</Text>
                  <Select>
                    <option value="option1">Advertising</option>
                    <option value="option2">Commercial</option>
                    <option value="option3">Support</option>
                  </Select>
                </Box>
                <Box>
                  <Text>Message</Text>
                  <Textarea
                    w={600}
                    placeholder="Enter your message"
                  />
                </Box>
              </SimpleGrid>
            </Flex>
          </Flex>
          <HStack>
            <Button>Submit</Button>
          </HStack>
        </VStack>
      </Box>
  );
};

export default Contact;
