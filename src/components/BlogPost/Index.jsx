import React from 'react'
import Chef from './Professional';
import Header from "../usable/Header";
import Static from "../usable/Static";
import Recipe from "./Recipe2";
import Footer from "../usable/Footer"
import Content from './Content';

const BlogPostMain = () => {
    return ( 
        <>
        <Header />
        <Chef />
        <Content />
        <Static />
        <Recipe />
        <Footer />
        </>
     );
}
 
export default BlogPostMain;