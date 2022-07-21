import React from 'react'
import BlogPosts from './BlogDetailComponents/BlogDetail';
import Header from "../UsableComponents/Header";
import Subscription from "../UsableComponents/Subscription";
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
        <Subscription />
        <Recipe />
        <Footer />
        </>
     );
}
 
export default BlogPostMain;