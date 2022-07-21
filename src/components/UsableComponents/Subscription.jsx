import {
  Flex,
  Box,
  Image,
  Text,
  VStack,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { setSubscription } from "../../utils/blogSer";
import { Component } from "react";
class Subscription extends Component {
  state = {
    subscriptionData: {
      email: "",
    },
  };

  doSubmit = async () => {
    await setSubscription(this.state.subscriptionData);
    this.setState({
      subscriptionData: {
        email: "",
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.doSubmit();
  };
  handleChange = ({ currentTarget: input }) => {
    const subscriptionData = { ...this.state.subscriptionData };
    console.log(subscriptionData);
    subscriptionData[input.name] = input.value;
    this.setState({ subscriptionData });
  };

  render() {
    const { subscriptionData } = this.state;
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
          <Flex>
            <Box mt={8}>
              <Image src="/1.png" />
            </Box>
          </Flex>

          <VStack mt={35}>
            <Flex>
              <Heading>Deliciousness to your inbox</Heading>
            </Flex>
            <Flex>
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque eligendi, unde, sit vero mollitia esse aperiam
              </Text>
            </Flex>
            <Box display={"flex"} borderRadius="3xl">
              <form onSubmit={this.handleSubmit}>
                <Input
                  p={5}
                  my={1}
                  w="300px"
                  name="email"
                  value={subscriptionData.email}
                  onChange={this.handleChange}
                  placeholder="Your Email Address"
                  borderRadius={15}
                  backgroundColor="white"
                  size="lg"
                />
                <Button
                  type="submit"
                  name="submit"
                  w={120}
                  size="lg"
                  borderRadius="10px"
                  bg={"black"}
                  color="white"
                >
                  Subscribe
                </Button>
              </form>
            </Box>
          </VStack>
          <Flex>
            <Box marginLeft="5px" marginTop="127px">
              <Image src="/2.png" />
            </Box>
          </Flex>
        </Flex>
      </Box>
    );
  }
}

export default Subscription;
