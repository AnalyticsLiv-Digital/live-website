import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

const index = () => {
const [blogdata, setBlogdata] = useState();

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

            fetch('/api/admin/blogs/getall', {
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
                    setBlogdata(data.blog);

             
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
           {blogdata && blogdata.map((blog,key) => (
            <div key={key}>{blog.author}</div>
          ))}
        </div>
    )
}

export default index