import React from 'react';
import Cooker from './cooker';
import Footer from './footer';
import Navbar from './navbar';
import Static from './static';
import { Divider} from '@chakra-ui/react';
import Category from './category';
// import Slider from "./slider"
const Index = () => {
    return ( 
        <>
            <Navbar />
            <Divider border="2px"/>
            <Cooker />
            <Category />
            <Static />
            <Footer />
        </>
     );
}
 
export default Index;