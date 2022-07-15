import axios from "axios";

const apiEndPoint = "https://foodielandnod.herokuapp.com/api/";

export const getAllBlogs = () => {
 return axios.get(apiEndPoint + 'getAllBlog');
}

export const getAllPopularBlogs =() => {
    return axios.get(apiEndPoint + 'popularBlogs');
}

export const getSearchQuery = (query) => {
    return axios.get(apiEndPoint + 'searchBlog?key=' + query );
}

export const getOneBlogPost = (blogId) => {
    return axios.get(apiEndPoint + 'getBlog?id=' + blogId);
}