import React from 'react'
import ScrollProgress from '../../components/ScrollProgress'
import AOS from 'aos';
import { useState, useEffect } from 'react';
import { Router, useRouter } from 'next/router';
import Head from 'next/head';
import { ScaleLoader } from 'react-spinners'

const post = ({jobData}) => {

    const router = useRouter();
    const {post} = router.query;
    ///////////////////////////////////
    const [resumefile, setResumefile] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const initialValues = { firstName: '', lastName: '', email: '', contact: '', linkedin: '', experience: '', resume: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [selected, setSelected] = useState("");
  const [showWaiting, setShowWaiting] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

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
    const res = await fetch(`/api/resumegoogleupload?file=${new_filename}`);
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
   
    setFormValues({ ...formValues, resume: new_filename });
    if (upload) {
      console.log('Uploaded successfully!');
      setFormValues({ ...formValues, resume: new_filename });
    } else {
      console.log(upload);
      setFormValues({ ...formValues, resume: new_filename });
    }

    console.log(formValues)
}else{
    alert('file size should be less than 10MB');
      document.getElementById('resume_file').value='';
}


  };

  /*useEffect(() => {
    
    const body = new FormData();
    body.append("file", resumefile);
      fetch("/api/resumeupload", {
      method: "POST",
      body
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFormValues({ ...formValues, resume: data.message });

      })

}, [createObjectURL]);
*/
////////////////////////////////////////////////





    useEffect(() => {
        AOS.init();
    }, []);
 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
           // console.log(formValues);
            setShowWaiting(true);
           // console.log({post});
           dataLayer.push({
            event:'job_application',
            eventCategory :{post}.post,
            eventAction:'apply'
        });
            fetch('/api/jobapplication', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "post":{post}.post,
                    "postName": document.getElementById("postName").value,
                    "firstName": formValues.firstName,
                   "lastName": formValues.lastName,
                   "email": formValues.email,
                   "contact": formValues.contact,
                   "linkedin": formValues.linkedin,
                   "experience": formValues.experience,
                   "resume": formValues.resume
       }),
            })
                .then((response) => response.json())
                .then((data) => {
                   // console.log('Success:', data);
                    setFormSubmit(true);
                    setShowWaiting(false);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const mobile = /^(?=.*\d).{8,}$/i;
        if (!values.firstName) {
            errors.firstName = "Firstname is required!";
        }

        if (!values.lastName) {
            errors.lastName = "Lastname is required!";
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (!values.contact) {
            errors.contact = "Contact number is required!";
        } else if (!mobile.test(values.contact)) {
            errors.contact = "This is not a valid phone number!";
        }

        if (!values.experience) {
            errors.experience = "Experience is required!";
        }

        if (!values.resume) {
            errors.resume = "Resume is required!";
        }



       




        

        return errors;
    };


var meta_desc = "Join as " +jobData.job[0].title+ " in Analyticliv, a diverse analytics and marketing agency committed to data-driven growth using first-party data.";


  return (
    <>
    <Head>
    <meta name="description" content={meta_desc}/>
        <title>AnalyticsLiv Job - {jobData && jobData.job[0].title}</title>
    </Head>
        <ScrollProgress/>
        {showWaiting && <div className="fixed flex backdrop-blur top-0 left-0 right-0 z-40 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"><ScaleLoader
  color="#271d90"
  loading
  size={100}
  className="m-auto align-middle"
/></div>}
    <div className='overflow-hidden'>
        <section className="relative bg-gray-100  md:pt-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute lg:w-48 w-32 -right-0 top-10 lg:top-8 lg:right-10 fill-orange-500 blur-md rotate-45" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15">
                <path  d="M7.932 1.248a.5.5 0 0 0-.864 0l-7 12A.5.5 0 0 0 .5 14h14a.5.5 0 0 0 .432-.752l-7-12Z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute lg:w-48 w-32 bottom-0 fill-green-400 blur-md -rotate-12" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15">
                <path  d="M7.932 1.248a.5.5 0 0 0-.864 0l-7 12A.5.5 0 0 0 .5 14h14a.5.5 0 0 0 .432-.752l-7-12Z"/>
            </svg>

           <div className=" lg:flex relative w-full lg:w-4/5 space-y-4 lg:space-y-0 lg:space-x-4 mx-auto pt-4 pb-8 px-4">
           {formSubmit && <div className='w-full bg-white p-2 lg:p-0 mx-auto h-auto lg:text-center text-slate-600'>
                    <h1 className='m-4 font-bold text-4xl '>Thank You {formValues.firstName}, for applying.</h1>
                    <div className='ml-4 text-xl py-4'>We will get back to you shortly.</div>
                    <div><a className='underline text-blue-600 mx-2'>Click here</a> to go to Home Page</div>
                    <img className=' mx-auto opacity-80' src='https://img.freepik.com/free-vector/tiny-people-standing-near-big-checkmark-team-male-female-characters-finishing-work-with-list-good-job-sign-flat-vector-illustration-done-job-checklist-time-management-concept_74855-21019.jpg?t=st=1671165312~exp=1671165912~hmac=3278782597e388c76a1bbb109240c67b98b714c0c9c354659a1ab5643b354abd' />
                </div>}
                
                
                {!formSubmit &&<>
                <div className=" p-4 lg:w-3/4 space-y-6 bg-white ">
                    <h1 className="text-2xl">{jobData.job[0].title}</h1>
                    <div className="h-0.5 bg-cyan-500"></div>
                    <div>
                     <p className="px-2 md:px-8 mt-4 text-gray-600">
                        {jobData.job[0].our_description}
                        </p>
                    </div>
                    <div>
                     <p className="px-2 md:px-8 mt-4 text-gray-600">
                        {jobData.job[0].job_short_description}
                        </p>
                    </div>

                

                    {jobData.job[0].details && jobData.job[0].details.map((details,key) => (
            <div key={key}>
            <h2 className="uppercase font-semibold text-slate-800">{details.heading}:</h2>
            <p className="px-2 md:px-8 mt-4 text-gray-600">
            {details.points && details.points.map((items,key) => (
                <p><b className='font-bold'>- </b>{items}</p>
            ))}                        
            </p>
        </div>
          ))}


                    <div>
                        <h2 className="uppercase font-semibold text-slate-800">Location:</h2>
                        <p className="px-2 md:px-8 mt-4 text-gray-600">
                        {jobData.job[0].location}
                        </p>
                    </div>
                    <div>
                        <h2 className="uppercase font-semibold text-slate-800">Posted on:</h2>
                        <p className="px-2 md:px-8 mt-4 text-gray-600">
                        {jobData.job[0].postingdate}
                        </p>
                    </div>
                    
                </div>

                <div className="relative lg:w-1/2 bg-white px-2 md:px-10 py-4">
                
                    <form className="relative sticky top-20 space-y-4 md:space-y-6 " onSubmit={handleSubmit}>
                        <h1 className="text-center text-xl">Apply Now</h1>
                        <div className="h-0.5 bg-cyan-600"></div>
                         <input type="hidden" id="postName" name="postName" value={jobData.job[0].title}/>
                            <div className="relative">
                                <input type="text" name="firstName" id="firstname" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-b border-slate-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" "  value={formValues.firstName} onChange={handleChange}/>
                                <label htmlFor="firstname" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">First Name</label>
                                <p className="text-red-600 text-sm">{formErrors.firstName}</p>
                            </div>
                            <div className="relative">
                                <input type="text" name="lastName" id="lastname" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-b border-slate-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " value={formValues.lastName} onChange={handleChange} />
                                <label htmlFor="lastname" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Last Name</label>
                                <p className="text-red-600 text-sm">{formErrors.lastName}</p>
                            </div>
                        
                        
                            <div className="relative">
                                <input type="emailid" name="email" id="email" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-b border-slate-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " value={formValues.email} onChange={handleChange}/>
                                <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">E-mail</label>
                                <p className="text-red-600 text-sm">{formErrors.email}</p>
                            </div>
                            <div className="relative">
                                <input type="tel" name="contact" id="tel" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-b border-slate-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" "  value={formValues.contact} onChange={handleChange} />
                                <label htmlFor="tel" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Contact No</label>
                                <p className="text-red-600 text-sm">{formErrors.contact}</p>
                            </div>
                        
                        
                            <div className="relative">
                                <input type="experience" name="experience" id="experience" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-b border-slate-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " value={formValues.experience} onChange={handleChange} />
                                <label htmlFor="experience" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Experience (years)</label>
                                <p className="text-red-600 text-sm">{formErrors.experience}</p>
                            </div>
                            
                            <div className="relative">
                                <input type="url" id="link" name="linkedin" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-b border-slate-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " value={formValues.linkedin} onChange={handleChange} />
                                <label htmlFor="link" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">LinkedIn Profile Link (optional)</label>
                            
                            </div>
                        
                            <div className="relative">
                                <input type="file" id="resume_file" onChange={uploadPhoto}  accept=".pdf, .jpg, .jpeg, .docx" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-b border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder="No file" />
                                <label htmlFor="resume_file" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Upload CV</label>
                                <p className="text-red-600 text-sm">{formErrors.resume}</p>
                            </div>
                        
                        <div className="text-center">
                            <button className="tracking-wider w-full mt-4 px-8 py-2 m-auto bg-cyan-700 uppercase text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150">Submit</button>
                        </div>
 
                    </form>
                </div>

                </>}
           </div>
          
       </section>
    </div>
    </>
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

export default post