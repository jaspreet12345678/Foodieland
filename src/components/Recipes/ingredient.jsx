import { Box, Flex, Heading, Stack, List, ListItem, ListIcon, VStack, Divider, HStack, Img, Spacer } from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";

function Ingrediants(props) {
  return (
    <Box maxW={1024} mx={"auto"}>
      <Flex mt={10}>
        <Box>
          <Stack spacing={5}>
            <Heading fontSize={"4xl"}>Ingredients</Heading>
            <Heading fontSize={"lg"}>For Main Dish</Heading>
            <VStack>
            <List spacing={8}>
              <ListItem as='s' color={"gray.400"}>
                <ListIcon as={FaCheckCircle} color={"#000"} />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <Divider />
              <ListItem>
                <ListIcon as={FiCircle}  />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <Divider />
              <ListItem>
                <ListIcon as={FiCircle}/>
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              <Divider />
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={FiCircle}/>
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              <Divider />
            </List>
            </VStack>
            <Heading mt={10} fontSize={"lg"}>For The Sauce</Heading>
            <VStack>
            <List spacing={8}>
              <ListItem>
                <ListIcon as={FiCircle}/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <Divider />
              <ListItem>
                <ListIcon as={FiCircle}/>
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <Divider />
              <ListItem>
                <ListIcon as={FiCircle}/>
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              <Divider />
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={FiCircle}/>
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              <Divider />
            </List>
            </VStack>
          </Stack>
        </Box>
        <Spacer />
        <Box w={380}>
            <Heading fontSize={"4xl"}>Other Receipe</Heading>
            <Stack mt={5}>
                <HStack>
                    <Img w={180} h={110} borderRadius={30} src={"food-28.png"}/>
                    <Stack>
                    <Heading fontSize={"lg"}>Chicken MeatBall With Creamy Cheese</Heading>
                    <Heading fontSize={"sm"} color={"gray.400"}>By Andreas Paul</Heading>
                    </Stack>
                </HStack>
                <HStack>
                    <Img w={180} h={110} borderRadius={30} src={"food-25.png"}/>
                    <Stack>
                    <Heading fontSize={"lg"}>Chicken MeatBall With Creamy Cheese</Heading>
                    <Heading fontSize={"sm"} color={"gray.400"}>By Andreas Paul</Heading>
                    </Stack>
                </HStack>
                <HStack>
                    <Img w={180} h={110} borderRadius={30} src={"food-26.jpg"}/>
                    <Stack>
                    <Heading fontSize={"lg"}>Chicken MeatBall With Creamy Cheese</Heading>
                    <Heading fontSize={"sm"} color={"gray.400"}>By Andreas Paul</Heading>
                    </Stack>
                </HStack>
                <HStack>
                    <Img mt={20} w={"100%"} h={300} src={"food-9.png"}/>
                </HStack>
            </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default Ingrediants;