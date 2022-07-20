import React from 'react'
import BlogPosts from './Professional';
import Header from "../usable/Header";
import Static from "../usable/Static";
import Recipe from "./Recipe2";
import Footer from "../usable/Footer"
import Content from './Content';

const BlogPostMain = (props) => {
    const blogId = props.match.params.blogId;
    return ( 
        <>
        <Header />
        <BlogPosts blogId = {blogId}/>
        <Content />
        <Static />
        <Recipe />
        <Footer />
        </>
     );
}
 
export default BlogPostMain;