import React from 'react'
import { useState, useEffect } from 'react';

const index = () => {
   
    //console.log(blogData);
    const initialValues = { coverphoto: '', description:'', title: '', slug: '', author: '', thumbnail: '', date: '', active: '', duration: '', document_id: '', sequence: '',category: ''};
    const [formValues, setFormValues] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
    console.log(formValues);


    const uploadToClient = async (event) => {
        var file_size = event.target.files[0].size;
        if(file_size < 10000000){
          if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
      
            setResumefile(i);
            setCreateObjectURL(URL.createObjectURL(i));
      
      
          }
          }else{
            alert('file size should be less than 10MB');
            document.getElementById('resume_file').value='';
          }
      
          
        };
      
        const uploadPhoto = async (e) => {
          const file = e.target.files[0];
          var file_size = e.target.files[0].size;
      
          if(file_size < 10000000){
          var re = /(?:\.([^.]+))?$/;
          var x = Date.now() +''+ Math.floor(Math.random() * 1000);
          var ext = re.exec(file.name)[1];
          var new_filename = x+'.'+ext;
         // console.log(new_filename);
          const filename = encodeURIComponent(file.name);
          const res = await fetch(`/api/imageupload?file=${new_filename}`);
          const { url, fields } = await res.json();
          console.log(res.json);
          const formData = new FormData();
      
          Object.entries({ ...fields, file }).forEach(([key, value]) => {
            formData.append(key, value);
          });
      
          const upload = await fetch(url, {
            method: 'POST',
            mode: 'no-cors', // no-cors, *cors, same-origin
            body: formData,
          }).then((data)=>{/*console.log(data.json)*/});
         
          setFormValues({ ...formValues, coverphoto: 'https://storage.googleapis.com/website-bucket-uploads/blog_images/'+new_filename });
       
          if (upload) {
            console.log('Uploaded successfully!');
             setFormValues({ ...formValues, coverphoto: 'https://storage.googleapis.com/website-bucket-uploads/blog_images/'+new_filename });
       
          } else {
            console.log(upload);
            setFormValues({ ...formValues, coverphoto: 'https://storage.googleapis.com/website-bucket-uploads/blog_images/'+new_filename });
       
          }
      
          console.log(formValues)
      }else{
          alert('file size should be less than 10MB');
            document.getElementById('resume_file').value='';
      }
      
      
        };

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
        fetch('/api/admin/blogs/new', {
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
             fetch('/api/admin/blogs/create', {
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
            Coverimage Upload - <input type="file" id="resume_file" onChange={uploadPhoto}  accept=".pdf, .jpg, .jpeg, .docx" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder="No file" /><br/>
            Document ID - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="document_id" value={formValues.document_id} onChange={handleChange} /><br/>
            Sequence - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="sequence" value={formValues.sequence} onChange={handleChange} /><br/>
            Active - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="active" value={formValues.active} onChange={handleChange} /><br/>
            <button className="tracking-wider my-4 px-8 py-2 m-auto bg-slate-900 text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150">Submit</button>
        </form>
    </div>
  )
}


export default index