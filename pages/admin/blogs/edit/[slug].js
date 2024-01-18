import React from 'react'
import { useState, useEffect } from 'react';

const index = ({blogDat}) => {
    const blogData = blogDat.blog[0];
    //console.log(blogData);
    const initialValues = { coverphoto: blogData.coverphoto, description:blogData.description, title: blogData.title, slug: blogData.slug, author: blogData.author, thumbnail: blogData.thumbnail, date: blogData.date, active: blogData.active, duration: blogData.duration, document_id: blogData.document_id, sequence: blogData.sequence,category: ["GA4"]};
    const [formValues, setFormValues] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
    console.log(formValues);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
 
        setIsSubmit(true);
        alert('submitted');
        console.log("submit2")
        fetch('/api/admin/blogs/update', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'mode': 'no-cors'
            },
            body: JSON.stringify({
                "title": formValues.title,
               "slug": formValues.slug,
               "description": formValues.description,
               "author": formValues.author,
               "duration": formValues.duration,
               "date": formValues.date,
               "coverphoto": formValues.coverphoto,
               "thumbnail": formValues.thumbnail,
               "document_id": formValues.document_id,
               "active":formValues.active,
               "category":formValues.category,
               "sequence" :formValues.sequence
   }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                alert('data updated');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('error');
            });

    };

    useEffect(() => {
        // console.log(formErrors);
         if (isSubmit) {

            console.log("submit2")
             fetch('/api/admin/blogs/update', {
                 method: 'POST', // or 'PUT'
                 headers: {
                     'Content-Type': 'application/json',
                     'mode': 'no-cors'
                 },
                 body: JSON.stringify({
                     "title": formValues.title,
                    "slug": formValues.slug,
                    "description": formValues.description,
                    "author": formValues.author,
                    "duration": formValues.duration,
                    "date": formValues.date,
                    "coverphoto": formValues.coverphoto,
                    "thumbnail": formValues.thumbnail,
                    "document_id": formValues.document_id,
                    "active":formValues.active,
                    "category":formValues.category,
                    "sequence" :formValues.sequence
        }),
             })
                 .then((response) => response.json())
                 .then((data) => {
                     console.log('Success:', data);
                     alert('data updated');
                 })
                 .catch((error) => {
                     console.error('Error:', error);
                     alert('error');
                 });
 
         }
     }, []);
 

  return (
    <div>
        <form  onSubmit={handleSubmit}>
            Blog Title - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="title" value={formValues.title} onChange={handleChange} /><br/>
            Author - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="author" value={formValues.author} onChange={handleChange} /><br/>
            Slug - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="slug" value={formValues.slug} onChange={handleChange} /><br/>
            Reading Time - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="duration" value={formValues.duration} onChange={handleChange} /><br/>
            Publish Date - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="date" value={formValues.date} onChange={handleChange} /><br/>
            Description - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="description" value={formValues.description} onChange={handleChange} /><br/>
            Coverimage URL- <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="coverphoto" value={formValues.coverphoto} onChange={handleChange} /><br/>
            Thumbnail URL- <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="thumbnail" value={formValues.thumbnail} onChange={handleChange} /><br/>
            Document ID - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="document_id" value={formValues.document_id} onChange={handleChange} /><br/>
            Sequence - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="sequence" value={formValues.sequence} onChange={handleChange} /><br/>
            Active - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="active" value={formValues.active} onChange={handleChange} /><br/>
            <button className="tracking-wider my-4 px-8 py-2 m-auto bg-slate-900 text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150">Submit</button>
        </form>
    </div>
  )
}

export async function getServerSideProps(context) {
    // Fetch data from external API

    const res = await fetch(`${process.env.domain}/api/fullblog?slug=${context.params.slug}`)
    const blogDat = await res.json()

  

    // Pass data to the page via props
    return { props: { blogDat} }
}

export default index