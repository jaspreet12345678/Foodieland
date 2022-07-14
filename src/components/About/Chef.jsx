import React from "react";
import {
  Box,
  Heading,
  Avatar,
  Grid,
  GridItem,
  Text,
  Center,
} from "@chakra-ui/react";

const Chef = () => {
  return (
    <Box maxW={1024} mx="auto" mt={10}>
      <Heading fontSize={"5xl"}>Our professional Chef</Heading>
      <Grid mt={10} templateColumns="repeat(4, 1fr)" gap={6}>
        <Center>
          <GridItem>
            <Avatar size="2xl" src="https://bit.ly/ryan-florence" />
            <Text fontWeight={"bold"} mt={2} textAlign={"center"}>
              Ryan Florence
            </Text>
            <Text textAlign={"center"}>Senior Chef</Text>
          </GridItem>
        </Center>
        <Center>
          <GridItem alignContent={"center"}>
            <Avatar size="2xl" src="https://bit.ly/prosper-baba" />
            <Text fontWeight={"bold"} mt={2} textAlign={"center"}>
              Prosper Otemuyiwa
            </Text>
            <Text textAlign={"center"}>Senior Chef</Text>
          </GridItem>
        </Center>
        <Center>
          <GridItem>
            <Avatar size="2xl" src="https://bit.ly/code-beast" />
            <Text fontWeight={"bold"} mt={2} textAlign={"center"}>
              Christian Nwamba
            </Text>
            <Text textAlign={"center"}>Senior Chef</Text>
          </GridItem>
        </Center>
        <Center>
          <GridItem>
            <Avatar size="2xl" src="https://bit.ly/sage-adebayo" />
            <Text fontWeight={"bold"} mt={2} textAlign={"center"}>
              Segun Adebayo
            </Text>
            <Text textAlign={"center"}>Senior Chef</Text>
          </GridItem>
        </Center>
      </Grid>
    </Box>
  );
};

export default Chef;
