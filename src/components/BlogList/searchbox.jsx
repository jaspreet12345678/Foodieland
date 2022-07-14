import { Box, Input, Button, Center } from "@chakra-ui/react";

function Search(searchHandler, placeholder) {
    return ( <Center mt={20}>
        <Box display={"flex"} alignContent={"center"} w={600}>
          <Input
          onChange={searchHandler}
          placeholder={placeholder}
          variant='flushed'/>
          <Button  bg={"black"} color={"white"}>Search</Button>
        </Box>
      </Center> );
}

export default Search;