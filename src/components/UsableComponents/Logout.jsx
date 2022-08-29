import React from 'react'
function Logout(props) {
    const token = localStorage.getItem("token")
    console.log(token)
    if(token !== ""){
        localStorage.removeItem("token");
        props.history.push("./login");
    }
    return;
}

export default Logout;