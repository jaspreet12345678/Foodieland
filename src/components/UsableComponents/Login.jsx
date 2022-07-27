import React, { Component } from "react";
import Joi from "joi-browser";
import jwtDecode from "jwt-decode";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  FormHelperText,
} from "@chakra-ui/react";
import { setLogin } from "../../utils/login";
import Welcome from "./Welcome";

class BannerContact extends Component {
  state = {
    userData: {
      password: "",
      email: "",
    },
    errors: {},
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  schema = {
    password: Joi.string().required().label("password"),
    email: Joi.string().required().label("Email"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.userData, this.schema, options);

    if (!error) return null;

    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  doSubmit = async () => {
    const response = await setLogin(this.state.userData);
    this.setState({
      userData: {
        password: "",
        email: "",
      },
    });
    if(response && response.status){
      console.log(response.data.accessToken);
      const value = response.data.accessToken;
      // alert("ok");
      const jwt = localStorage.setItem("token", value);
      this.props.history.push("/welcome")
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const userData = { ...this.state.userData };
    userData[input.name] = input.value;
    this.setState({ userData, errors });
  };

  render() {
    const { userData, errors } = this.state;
    return (
      <Container maxW={1080} mx={"auto"} mt={20}>
        <Stack>
          <Center>
            <Heading fontSize={"6xl"} fontWeight={800}>
              Contact us
            </Heading>
          </Center>
        </Stack>
        <Flex mt={20}>
          <Box mx={20}>
            <FormControl>
              <form onSubmit={this.handleSubmit}>
                <Stack direction={"row"}>
                  <Box mr={5}>
                    <Input
                      name="password"
                      value={userData.password}
                      label="Password"
                      placeholder="Enter Your Password"
                      onChange={this.handleChange}
                      error={errors.password}
                    />

                    <FormHelperText color={"#E53E3E"}>
                      {errors.password}
                    </FormHelperText>
                  </Box>

                  <Box>
                    <Input
                      name="email"
                      value={userData.email}
                      label="Email"
                      placeholder="Enter Your Email"
                      onChange={this.handleChange}
                      error={errors.email}
                    />
                    <FormHelperText color={"#E53E3E"}>
                      {errors.email}
                    </FormHelperText>
                  </Box>
                </Stack>
                <Stack mt={5}>
                  <Center>
                    {/* <Link to={`/home`}> */}
                    <Button
                      // onClick={this.handleSubmit}
                      type="submit"
                      password="submit"
                      bgColor={"#000"}
                      color={"#fff"}
                      size={"lg"}
                      w={150}
                      borderRadius={10}
                    >
                      Submit
                    </Button>
                    {/* </Link> */}
                  </Center>
                </Stack>
              </form>
            </FormControl>
          </Box>
        </Flex>
      </Container>
    );
  }
}

export default BannerContact;
