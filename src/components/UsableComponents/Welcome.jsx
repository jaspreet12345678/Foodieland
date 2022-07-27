import { Heading } from '@chakra-ui/react';
import React from 'react';
import { setLogin } from '../../utils/login';

function Welcome(props) {
    // const response =  setLogin(this.state.userData);
    // const token = localStorage.getItem("token");
    // console.log(token)

    setTimeout(() =>{
        props.history.push("/home")
        localStorage.removeItem("token");
    }, 60000);

    return (
        <Heading>Welcome you will be logout after 1 mins</Heading>
      );
}

export default Welcome;