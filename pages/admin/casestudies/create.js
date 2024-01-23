import React from 'react'
import { useState, useEffect } from 'react';

const index = () => {
   
    //console.log(blogData);
    const initialValues = { open:'true', coverimage: '', description:'', title: '', slug: '', author: '', filename: '', date: '', active: '', sequence: '',heading1:'',heading2:'',heading3:'',heading4:'',heading5:'',content1:'',content2:'',content3:'',content4:'',content5:''};
    const [formValues, setFormValues] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
    console.log(formValues);


      
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
          const res = await fetch(`/api/csupload?file=${new_filename}`);
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
         
          setFormValues({ ...formValues, coverimage: 'https://storage.googleapis.com/website-bucket-uploads/cs/'+new_filename });
       
          if (upload) {
            console.log('Uploaded successfully!');
             setFormValues({ ...formValues, coverimage: 'https://storage.googleapis.com/website-bucket-uploads/cs/'+new_filename });
       
          } else {
            console.log(upload);
            setFormValues({ ...formValues, coverimage: 'https://storage.googleapis.com/website-bucket-uploads/cs/'+new_filename });
       
          }
      
          console.log(formValues)
      }else{
          alert('file size should be less than 10MB');
            document.getElementById('coverimage_file').value='';
      }
      
      
        };


        const uploadCaseStudy = async (e) => {
          const file = e.target.files[0];
          var file_size = e.target.files[0].size;
      
          if(file_size < 10000000){
          var re = /(?:\.([^.]+))?$/;
          var x = Date.now() +''+ Math.floor(Math.random() * 1000);
          var ext = re.exec(file.name)[1];
          var new_filename = x+'.'+ext;
         // console.log(new_filename);
          const filename = encodeURIComponent(file.name);
          const res = await fetch(`/api/csupload?file=${new_filename}`);
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
         
          setFormValues({ ...formValues, filename: 'https://storage.googleapis.com/website-bucket-uploads/cs/'+new_filename });
       
          if (upload) {
            console.log('Uploaded successfully!');
             setFormValues({ ...formValues, filename: 'https://storage.googleapis.com/website-bucket-uploads/cs/'+new_filename });
       
          } else {
            console.log(upload);
            setFormValues({ ...formValues, filename: 'https://storage.googleapis.com/website-bucket-uploads/cs/'+new_filename });
       
          }
      
          console.log(formValues)
      }else{
          alert('file size should be less than 10MB');
            document.getElementById('casestudy_file').value='';
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
        fetch('/api/admin/casestudy/new', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'mode': 'no-cors'
            },
            body: JSON.stringify({
              "id": formValues.id,
              "title": formValues.title,
             "slug": formValues.slug,
             "description": formValues.description,
             "author": formValues.author,
             "duration": formValues.duration,
             "date": formValues.date,
             "coverimage": formValues.coverimage,
             "filename": formValues.filename,
             "active":formValues.active,
             "sequence" :formValues.sequence,
             "heading1" :formValues.heading1,
             "heading2" :formValues.heading2,
             "heading3" :formValues.heading3,
             "heading4" :formValues.heading4,
             "heading5" :formValues.heading5,
             "content1" :formValues.content1,
             "content2" :formValues.content2,
             "content3" :formValues.content3,
             "content4" :formValues.content4,
             "content5" :formValues.content5,
             "open" :formValues.open
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



  return (
    <div>
        <form  onSubmit={handleSubmit}>
        Id - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="id" value={formValues.id} onChange={handleChange} /><br/>
            Casestudy Title - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="title" value={formValues.title} onChange={handleChange} /><br/>
            Author - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="author" value={formValues.author} onChange={handleChange} /><br/>
            Slug - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="slug" value={formValues.slug} onChange={handleChange} /><br/>
            Publish Date - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="date" value={formValues.date} onChange={handleChange} /><br/>
            Description - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="description" value={formValues.description} onChange={handleChange} /><br/>
            File URL -<input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="filename" value={formValues.filename} onChange={handleChange} /><br/> 
            Casestudy Upload - <input type="file" id="casestudy_file" onChange={uploadCaseStudy}  accept=".pdf, .jpg, .jpeg, .docx" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder="No file" /><br/>           
            Coverimage URL- <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="coverimage" value={formValues.coverimage} onChange={handleChange} /><br/>
            Coverimage Upload - <input type="file" id="coverimage_file" onChange={uploadPhoto}  accept=".pdf, .jpg, .jpeg, .docx" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder="No file" /><br/>
            Sequence - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="sequence" value={formValues.sequence} onChange={handleChange} /><br/>
            Active - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="active" value={formValues.active} onChange={handleChange} /><br/>
            Open Download - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="open" value={formValues.open} onChange={handleChange} /><br/>

            Content - <br/>
            <input placeholder='Heading 1' className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="heading1" value={formValues.heading1} onChange={handleChange} /><br/>
            <input placeholder="Content 1" className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="content1" value={formValues.content1} onChange={handleChange} /><br/><br/>
            <input placeholder='Heading 2' className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="heading2" value={formValues.heading2} onChange={handleChange} /><br/>
            <input placeholder="Content 2" className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="content2" value={formValues.content2} onChange={handleChange} /><br/><br/>
            <input placeholder='Heading 3' className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="heading3" value={formValues.heading3} onChange={handleChange} /><br/>
            <input placeholder="Content 3" className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="content3" value={formValues.content3} onChange={handleChange} /><br/><br/>
            <input placeholder='Heading 4' className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="heading4" value={formValues.heading4} onChange={handleChange} /><br/>
            <input placeholder="Content 4" className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="content4" value={formValues.content4} onChange={handleChange} /><br/><br/>
            <input placeholder='Heading 5' className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="heading5" value={formValues.heading5} onChange={handleChange} /><br/>
            <input placeholder="Content 5" className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="content5" value={formValues.content5} onChange={handleChange} /><br/><br/>
            <button className="tracking-wider my-4 px-8 py-2 m-auto bg-slate-900 text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150">Submit</button>
        </form>
    </div>
  )
}


export default index