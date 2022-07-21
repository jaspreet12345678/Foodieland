import React from 'react'
import BlogPosts from './BlogDetailComponents/Professional';
import Header from "../UsableComponents/Header";
import Static from "../UsableComponents/Static";
import Recipe from "./BlogDetailComponents/Recipe";
import Footer from "../UsableComponents/Footer"
import Content from './BlogDetailComponents/Content';

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