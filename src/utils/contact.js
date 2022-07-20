import axios from "axios";

const blogs = "https://foodielandnod.herokuapp.com/api/";
const apiEndPoint = blogs + 'addContactDetails';

export function setContact(user){
    console.log(user)
    return axios.post(apiEndPoint, {
        name : user.name,
        email : user.email,
        subject : user.subject,
        enquiryType : user.enquiryType,
        message : user.message,
    });
}