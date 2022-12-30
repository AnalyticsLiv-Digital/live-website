import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

const index = () => {
const [loginStatus, setLoginStatus] = useState(false);
useEffect(() => {
   
   var cookie =  Cookies.get('name')|| '';
   fetch('/api/admin/cookievalidate', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "cookie": cookie,
}),
})
    .then((response) => response.json())
    .then((data) => {
     console.log(data);
        if(data.message == "success"){
            window.location.href = "/liv-admin/panel";
        }
 
    })
    .catch((error) => {
        console.error('Error:', error);
    });

}, []);

    const validate = () => {
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;
    }
    return (
        <div>
            UserID - <input type="text" id="user" /><br />
            Pass - <input type="password" id="pass" /><br />
            <button onClick={validate}>Login</button>
        </div>
    )
}

export default index