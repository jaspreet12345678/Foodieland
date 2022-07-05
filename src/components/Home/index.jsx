import React from 'react';
import Curosel from './curosel';
import Footer from './footer';
import Navbar from './navbar';
import Static from './static';
import { Divider } from '@chakra-ui/react';
import Category from './category';
const Index = () => {
    return ( 
        <>
            <Navbar />
            <Divider border="2px"/>
            <Curosel />
            <Category />
            <Static />
            <Footer />
        </>
     );
}
 
export default Index;