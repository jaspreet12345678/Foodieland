import {
  Flex,
  Box,
  Heading,
  Select,
  Image,
  Textarea,
  Text,
  Input,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Container,
  Center,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import React from "react";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container mt={6} mb={6} maxW="6xl">
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 5, md: 10 }}
        py={{ base: 5, md: 7 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Contact Us
        </Heading>
      </Stack>
      <Stack align={"center"} direction={{ base: "column", md: "row" }}>
        <Stack flex={1}>
          <Flex>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={300}
            >
              <Box
                position={"relative"}
                rounded={"0xl"}
                boxShadow={"1xl"}
                width={"full"}
                overflow={"hidden"}
                bgGradient="linear(to-b, white.0, blue.100)"
          
              >
                <Image
                ml={100}
                  fit={"cover"}
                  align={"center"}
                  src={"Cook-contact.png"}
                />
              </Box>
            </Flex>
            <Box bg="white" p={6}>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  subject: "",
                  enquiryType: "",
                  messages: "",
                }}
                validate={(values) => {
                  const errors = {};

                  if (values.name.trim() === "") {
                    errors.name = "** Name Feild is Required";
                  } else if (isNaN(values.name) === false) {
                    errors.name = "** Name Contain only characters";
                  }

                  if (!values.email) {
                    errors.email = "** Email Feild Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "** Invalid email address";
                  }

                  if (values.subject.trim() === "") {
                    errors.subject = "** subject Feild is Required";
                  } else if (isNaN(values.subject) === false) {
                    errors.subject = "**subject Contain only characters";
                  }

                  if (values.enquiryType === "") {
                    errors.enquiryType = "** Please select Enquery type feild";
                  }

                  return errors;
                }}
                onSubmit={(values, { setSubmitting }, event) => {
                  setTimeout(() => {
                    const formdata = JSON.stringify(values, null, 2);

                    fetch(
                      "https://foodielandnod.herokuapp.com/api/addContactDetails",
                      {
                        method: "POST",
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "application/json",
                        },
                        body: formdata,
                      }
                    ).then(function (response) {
                      console.log(response);
                      if (response.status === 200) {
                        alert("data submitted successfully");
                      } else {
                        alert("email allready exists");
                        // resetForm(values) ;
                      }
                    });

                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  handleBlur,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <HStack align="flex-start">
                      <FormControl>
                        <FormLabel htmlFor="Name">Name</FormLabel>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your name "
                          size="lg"
                          variant="filled"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                        <Text color={"red"} fontSize={"sm"}>
                          {errors.name && touched.name && errors.name}
                        </Text>
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                          size="lg"
                          variant="filled"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Text color={"red"} fontSize={"sm"}>
                          {errors.email && touched.email && errors.email}
                        </Text>
                      </FormControl>
                    </HStack>
                    <HStack spacing={4} align="flex-start" mt={10}>
                      <FormControl>
                        <FormLabel htmlFor="subject">Subject</FormLabel>
                        <Field
                          as={Input}
                          id="subject"
                          name="subject"
                          type="text"
                          variant="filled"
                          size="lg"
                          placeholder="Enter your subject"
                          value={values.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Text color={"red"} fontSize={"sm"}>
                          {errors.subject && touched.subject && errors.subject}
                        </Text>
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="enquery">Enquery Type</FormLabel>
                        <Stack spacing={3}>
                          <Select
                            size="lg"
                            name="enquiryType"
                            value={values.enquiryType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option> Select a option</option>
                            <option>Advertising</option>
                            <option>Commercial</option>
                            <option>Support</option>
                          </Select>
                        </Stack>
                        <Text color={"red"} fontSize={"sm"}>
                          {errors.enquiryType &&
                            touched.enquiryType &&
                            errors.enquiryType}
                        </Text>
                      </FormControl>
                    </HStack>
                    <HStack spacing={10} mt={10}>
                      <FormControl>
                        <FormLabel htmlFor="message" value={values.messages}>
                          Message(optional)
                        </FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          // value={values.messages}
                          placeholder="message"
                        />
                      </FormControl>
                    </HStack>
                    <Center>
                      <HStack pt={12}>
                        <Button type="submit" disabled={isSubmitting}>
                          Submit
                        </Button>
                      </HStack>
                    </Center>
                  </form>
                )}
              </Formik>
            </Box>
          </Flex>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Contact;
