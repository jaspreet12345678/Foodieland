import React from 'react'
import Chef from './professional';
import Navbar from "../Home/navbar";
import Static from "../Home/static";
import Recipe from "./recipe2";
import Footer from "../Home/footer"
import Content from './content';

const Index = () => {
    return ( 
        <>
        <Navbar />
        <Chef />
        <Content />
        <Static />
        <Recipe />
        <Footer />
        </>
     );
}
 
export default Index;