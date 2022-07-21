import React from "react";
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex mt={10} maxW={1024} mx="auto">
      <Box boxSize={"sm"} w={724}>
        <Box>
          <Heading fontSize={"4xl"}>
            23 Years Of Experience In Cooking Services
          </Heading>
          <Text mt={5} fontSize={"lg"} color="gray.400">
            Sed ut perspiciatis unde omnis natus error lutatem accusantium
            doloremque laudantium totam rem apam eaquepsa quae abillo inventore
            veritatis quasi arctecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsamya voluptatem quia voluptas sit aspernatur aut odifugi sed
            quia consequuntur magni dolores eos qui ratioluptatem sequi
            nesciunt. 
          </Text>
          <Button bg={"blue.100"} mt={8}>Discover More</Button>
        </Box>
      </Box>
      <Box  ml={10} w={300} boxSize="max-content">
        <Image borderLeftRadius={"3xl"} borderRightRadius={"3xl"} src="exp.jpg"/>
      </Box>
    </Flex>
    );
};

export default About;
