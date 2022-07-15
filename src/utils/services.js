import axios from "axios";

// const apiEndPoint = config;
const apiEndPoint = "https://foodielandnod.herokuapp.com/api/";

export const getAllCategory = () => {
 return axios.get(apiEndPoint + 'getAllCategory');
}


export const getAllReceipe = () => {
    return axios.get(apiEndPoint + 'v1/getAllRecipes')
}

export const getPopularReceipes = () => {
    return axios.get(apiEndPoint + 'popularRecipes');
}

export const getFooterData = () => {
    return axios.get(apiEndPoint + 'getAllSitOptions')
}