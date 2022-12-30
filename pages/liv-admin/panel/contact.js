import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

const index = () => {
const [contactdata, setContactdata] = useState();

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
        if(data.message != "success"){
            window.location.href = "/";
        }else{

            fetch('/api/admin/contacts', {
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
                    setContactdata(data.contact);

             
                })
                .catch((error) => {
                    console.error('Error:', error);
                });


        }
 
    })
    .catch((error) => {
        console.error('Error:', error);
    });

}, []);

    return (
        <div>
           {contactdata && contactdata.map((contact,key) => (
            <div key={key}>{contact.timestamp}</div>
          ))}
        </div>
    )
}

export default index