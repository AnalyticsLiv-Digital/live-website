import React from 'react'
import { useState, useEffect } from 'react';

const index = ({jobData}) => {
   
    //console.log(blogData);
    const initialValues = { id: jobData.job[0].id, our_description:jobData.job[0].our_description,job_short_description:jobData.job[0].job_short_description, title: jobData.job[0].title, brief: jobData.job[0].brief, location: jobData.job[0].location, experience: jobData.job[0].experience,notice_period:jobData.job[0].notice_period, postingdate: jobData.job[0].postingdate, active: jobData.job[0].active,heading1:jobData.job[0].details[0].heading,content1:jobData.job[0].details[0].points.join(';')};
    // ,content2:jobData.job[0].details[1].points.join(';'),content3:jobData.job[0].details[2].points.join(';'),content4:jobData.job[0].details[3].points.join(';'),content5:jobData.job[0].details[4].points.join(';')
    //,heading2:jobData.job[0].details[1].heading,heading3:jobData.job[0].details[2].heading,heading4:jobData.job[0].details[3].heading,heading5:jobData.job[0].details[4].heading
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
        fetch('/api/admin/job/update', {
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
             fetch('/api/admin/job/update', {
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
            Job Title - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="title" value={formValues.title} onChange={handleChange} /><br/>
             Job Description - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="brief" value={formValues.brief} onChange={handleChange} /><br/>
            Our Description - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="our_description" value={formValues.our_description} onChange={handleChange} /><br/>
            Job Short Description - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="job_short_description" value={formValues.job_short_description} onChange={handleChange} /><br/>
            Experience - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="experience" value={formValues.experience} onChange={handleChange} /><br/>
            Location - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="location" value={formValues.location} onChange={handleChange} /><br/>
            Posting date - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="postingdate" value={formValues.postingdate} onChange={handleChange} /><br/>
            Active - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="active" value={formValues.active} onChange={handleChange} /><br/>
            Notice Period - <input className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="notice_period" value={formValues.notice_period} onChange={handleChange} /><br/>
            Details  - <br></br>
            <input placeholder='Heading 1' className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="heading1" value={formValues.heading1} onChange={handleChange} /><br/>
            <input placeholder="Content 1 Pointers separated by ;" className="px-2.5 pb-2.5 pt-5 w-1/2 text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" type="text" name="content1" value={formValues.content1} onChange={handleChange} /><br/><br/>
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



export async function getServerSideProps(context) {
    // Fetch data from external API
  
    const res = await fetch(`${process.env.domain}/api/jobdetails?id=${context.params.post}`)
    const jobData = await res.json()
  //console.log(casestudyDat);
    // Pass data to the page via props
    return { props: { jobData } }
}

export default index