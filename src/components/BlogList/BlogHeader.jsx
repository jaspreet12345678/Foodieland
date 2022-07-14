import React from 'react'
import { Box, Heading,Text } from '@chakra-ui/react'

function Header() {
    return ( 
        <Box maxW={1024} mx={"auto"} mt={10}>
        <Heading size={"3xl"} textAlign={"center"}>
          Blog & Article
        </Heading>
        <Text mt={8} textAlign={"center"}>
          There are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration.
        </Text>
        </Box>
    )
}

export default Header;