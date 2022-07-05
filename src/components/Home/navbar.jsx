import { Text, Box, Stack, Flex, Link} from "@chakra-ui/react";
import React from "react";
import { Avatar } from "@chakra-ui/react";
const Navbar = () => {
  return (
    // <Flex>
    //   <Box>Foodieland</Box>

    // </Flex>
    <Flex w={1024}>
      <Stack direction={["column", "row"]} spacing="24px">
        <Box w="300px" h="50px">
          <Text marginTop="10px" marginLeft="10px">
            Foodieland
          </Text>
        </Box>
        <Box
          w="500px"
          h="50px"
          display={"flex"}
          justifyItems="center"
          justifyContent="space-between"
        >
          <Text marginTop="10px">Home</Text>
          <Text marginTop="10px">Recipes</Text>
          <Text marginTop="10px">Blog</Text>
          <Text marginTop="10px">Contact us</Text>
          <Text marginTop="10px">About us</Text>
        </Box>
        <Box w="300px" h="50px">
          <Stack direction="row" justify="flex-end">
            <Avatar src="https://bit.ly/broken-link" />
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Navbar;
