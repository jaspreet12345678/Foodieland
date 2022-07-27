import axios from "axios";
import { blogs } from "../config";
const apiEndPoint = blogs + 'signIn';

export function setLogin(user){
    console.log(user)
    return axios.post(apiEndPoint, {
        password : user.password,
        email : user.email,
    });
}