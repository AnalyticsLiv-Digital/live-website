import React from 'react'
import { useState, useEffect } from 'react';

const index = () => {
   
    //console.log(blogData);
    const initialValues = { id: '', our_description:'',job_short_description:'', title: '', brief: '', location: '', experience: '',notice_period:'', postingdate: '', active: '',heading1:'',heading2:'',heading3:'',heading4:'',heading5:'',content1:'',content2:'',content3:'',content4:'',content5:''};
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
        fetch('/api/admin/job/new', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'mode': 'no-cors'
            },
            body: JSON.stringify({
              "id": formValues.id,
              "title": formValues.title,
             "brief": formValues.brief,
             "our_description": formValues.our_description,
             "job_short_description": formValues.job_short_description,
             "postingdate": formValues.postingdate,
             "location": formValues.location,
             "experience": formValues.experience,
             "active":formValues.active,
             "notice_period" :formValues.notice_period,
             "heading1" :formValues.heading1,
             "heading2" :formValues.heading2,
             "heading3" :formValues.heading3,
             "heading4" :formValues.heading4,
             "heading5" :formValues.heading5,
             "content1" :formValues.content1,
             "content2" :formValues.content2,
             "content3" :formValues.content3,
             "content4" :formValues.content4,
             "content5" :formValues.content5
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
             fetch('/api/admin/job/new', {
                 method: 'POST', // or 'PUT'
                 headers: {
                     'Content-Type': 'application/json',
                     'mode': 'no-cors'
                 },
                 body: JSON.stringify({
                  "id": formValues.id,
                  "title": formValues.title,
                 "brief": formValues.brief,
                 "our_description": formValues.our_description,
                 "job_short_description": formValues.job_short_description,
                 "postingdate": formValues.postingdate,
                 "location": formValues.location,
                 "experience": formValues.experience,
                 "active":formValues.active,
                 "notice_period" :formValues.notice_period,
                 "heading1" :formValues.heading1,
                 "heading2" :formValues.heading2,
                 "heading3" :formValues.heading3,
                 "heading4" :formValues.heading4,
                 "heading5" :formValues.heading5,
                 "content1" :formValues.content1,
                 "content2" :formValues.content2,
                 "content3" :formValues.content3,
                 "content4" :formValues.content4,
                 "content5" :formValues.content5
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
            Job Title - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="title" value={formValues.title} onChange={handleChange} /><br/>
            ID - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="id" value={formValues.id} onChange={handleChange} /><br/>
            Job Description - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="brief" value={formValues.brief} onChange={handleChange} /><br/>
            Our Description - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="our_description" value={formValues.our_description} onChange={handleChange} /><br/>
            Job Short Description - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="job_short_description" value={formValues.job_short_description} onChange={handleChange} /><br/>
            Experience - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="experience" value={formValues.experience} onChange={handleChange} /><br/>
            Location - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="location" value={formValues.location} onChange={handleChange} /><br/>
            Posting date - <input required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="postingdate" value={formValues.postingdate} onChange={handleChange} /><br/>
            Active - <select required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="active" value={formValues.active} onChange={handleChange} ><option value="true">Yes</option><option value="false">No</option> </select><br/>
            Notice Period - <select required className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="active" value={formValues.notice_period} onChange={handleChange} ><option value="true">Yes</option><option value="false">No</option> </select><br/> 
            Details  - <br></br>
            <input required placeholder='Heading 1' className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="heading1" value={formValues.heading1} onChange={handleChange} /><br/>
            <input required placeholder="Content 1 Pointers separated by ;" className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="content1" value={formValues.content1} onChange={handleChange} /><br/><br/>
            <input placeholder='Heading 2' className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="heading2" value={formValues.heading2} onChange={handleChange} /><br/>
            <input placeholder="Content 2 Pointers separated by ;" className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="content2" value={formValues.content2} onChange={handleChange} /><br/><br/>
            <input placeholder='Heading 3' className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="heading3" value={formValues.heading3} onChange={handleChange} /><br/>
            <input placeholder="Content 3 Pointers separated by ;" className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="content3" value={formValues.content3} onChange={handleChange} /><br/><br/>
            <input placeholder='Heading 4' className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="heading4" value={formValues.heading4} onChange={handleChange} /><br/>
            <input placeholder="Content 4 Pointers separated by ;" className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="content4" value={formValues.content4} onChange={handleChange} /><br/><br/>
            <input placeholder='Heading 5' className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="heading5" value={formValues.heading5} onChange={handleChange} /><br/>
            <input placeholder="Content 5 Pointers separated by ;" className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="content5" value={formValues.content5} onChange={handleChange} /><br/><br/>
            
            <button className="tracking-wider my-4 px-8 py-2 m-auto bg-slate-900 text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150">Submit</button>
        </form>
    </div>
  )
}


export default index