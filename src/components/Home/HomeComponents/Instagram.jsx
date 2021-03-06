import {
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  Button,
  Flex,
  Center,
  Box,
  VStack,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
const Instagram = () => {
  return (
    <>
      <Box>
        <Flex
          maxW={1024}
          mx={"auto"}
          mb={10}
          mt={10}
          bg="#EBF8FF"
          borderRadius="15px"
          color={"#000"}
          h="500px"
        >
          <VStack>
            <Flex mt={30}>
              <Center>
                <VStack>
                  <Heading>
                    <b>Check Out @foodieland on Instagram</b>
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet
                    consectetur{" "}
                  </Text>
                  <Text>Lorem ipsum dolor sit amet consectetur, </Text>
                </VStack>
              </Center>
            </Flex>
            <Flex>
              <Grid
                templateColumns="repeat(5, 1fr)"
                gap={6}
                marginBottom="250px"
                marginLeft="150px"
                marginTop="30px"
              >
                <GridItem w="100%" h="1" bg="blue.500">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/instagram%2Ffood-10.png?alt=media&token=c364a4b8-40a0-44ad-95a5-d706a0d98efa"
                    alt="Dan Abramov"
                  />
                </GridItem>
                <GridItem w="100%" h="1" bg="blue.500">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/instagram%2Ffood-11.png?alt=media&token=d63e16b5-e524-4bbe-96e6-fe05ca251f8f"
                    alt="Dan Abramov"
                  />
                </GridItem>
                <GridItem w="100%" h="1" bg="blue.500">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/instagram%2Ffood-12.png?alt=media&token=bbf3063f-9bcc-4355-8cbb-6feedec1e47b"
                    alt="Dan Abramov"
                  />
                </GridItem>
                <GridItem w="100%" h="1" bg="blue.500">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/instagram%2Ffood-9.png?alt=media&token=17415fc0-4330-4441-917d-3c1d3f9e8915"
                    alt="Dan Abramov"
                  />
                </GridItem>
              </Grid>
            </Flex>
            <Flex>
              <Center>
                <Button bg={"black"} color={"white"}>
                  <a href="https://www.instagram.com/foodieland555/">
                    <HStack>
                      <Text>View our Instagram</Text> <Icon as={FaInstagram} />
                    </HStack>
                  </a>
                </Button>
              </Center>
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </>
  );
};

export default Instagram;
