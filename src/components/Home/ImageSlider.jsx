// import {
//   Box,
//   Flex,
//   Image,
//   Heading,
//   Text,
//   HStack,
// } from "@chakra-ui/react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const api = "http://95.111.202.157:8001/api/getAllCategory";
// // If you want to use your own Selectors look up the Advancaed Story book examples
// const ImageSlider = ({ slides }) => {
//   return (
//     <Carousel infiniteLoop>
//       {slides.map((slide) => {
//         return (
//           <>
//             <Box >
//               <HStack>
//                 <Flex bg="#e6faff"  w={750} h={450}>
//                       <Text color={"black"}>Jaspreet</Text>
//                 </Flex>
//                 <Flex w={500}>
//                   <Image src={slide.image} />
//                 </Flex>
//               </HStack>
//             </Box>
//           </>
//         );
//       })}
//     </Carousel>
//   );
// };
// export default ImageSlider;
import {
  Image,
  Box,
  Heading,
  Flex,
  Text,
  Button,
  HStack,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsFillAlarmFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineSlowMotionVideo, MdKitchen } from "react-icons/md";
// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }) => {
  return (
    <Carousel infiniteLoop>
      {slides.map((slide) => {
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
              <Box w={512}>
                <Button borderRadius="10px" mt={10} ml={-300}>
                  <MdKitchen /> Hot Receipe
                </Button>
                <Heading fontSize="4xl" mt={25} ml={5} mr={20}>
                  Spicy Delicious Chicken Wings
                </Heading>
                <Text
                  fontSize={"sm"}
                  ml={10}
                  mt={5}
                  mb={5}
                  textAlign="justify"
                  mr={20}
                >
                  Lorem ipsum dolor sit amet, Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s
                </Text>
                <HStack ml={10} justifyItems={"space-between"}>
                  <Button borderRadius="10px" bgColor="#EDFDFD">
                    <BsFillAlarmFill />
                    30 Minutes
                  </Button>
                  <Button borderRadius="10px" bgColor="#EDFDFD">
                    <ImSpoonKnife />
                    Chicken
                  </Button>
                </HStack>
                <Wrap
                  spacing="160px"
                  mt={20}
                  ml={10}
                  mb={5}
                  justifyItems={"space-between"}
                >
                  <WrapItem>
                    <Avatar
                      size="sm"
                      name="Kent Dodds"
                      src="https://bit.ly/kent-c-dodds"
                    />
                    <Box pl={3}>
                      <Heading fontSize={"sm"}>John Smith</Heading>
                      <Text fontSize={"sm"}>20 March 2022</Text>
                    </Box>
                  </WrapItem>
                  <Button borderRadius="10px" bgColor="#000" colorScheme="#fff">
                    View Receipe
                    <MdOutlineSlowMotionVideo />
                  </Button>
                </Wrap>
              </Box>
              <Box w={512}>
                <Image src={slide.image} height={460} w={"100%"} />
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;