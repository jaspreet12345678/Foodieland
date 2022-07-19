import React from 'react'
import Chef from './Professional';
import Header from "../usable/Header";
import Static from "../usable/Static";
import Recipe from "./Recipe2";
import Footer from "../usable/Footer"
import Content from './Content';

const BlogPostMain = (props) => {
    const blogId = props.match.params.blogId;
    console.log(blogId)
    return ( 
        <>
        <Header />
        <Chef blogId = {blogId}/>
        <Content />
        <Static />
        <Recipe />
        <Footer />
        </>
     );
}
 
export default BlogPostMain;