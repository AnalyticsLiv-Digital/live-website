import Head from 'next/head'
import React from 'react'
import ScrollProgress from '../../components/ScrollProgress'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react'
import { Router, useRouter } from 'next/router';
import { ScaleLoader } from 'react-spinners'

const index = () => {
    const router = useRouter();
    const {post} = router.query;
    useEffect(() => {
        AOS.init();
    }, []);
    const initialValues = { fullName: '', email: '', company: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showWaiting, setShowWaiting] = useState(false);
    const [selected, setSelected] = useState("");
    const [formSubmit, setFormSubmit] = useState(false);
    const [formFixed, setFormFixed] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
       // console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

    };

    useEffect(() => {

        let headerSize = () => {
            
            const totalScroll = document.documentElement.scrollTop;
           
           if(( totalScroll > 50)){
            setFormFixed(true);
           }else if(( totalScroll < 45)){
            setFormFixed(false);
           }
    
            
        }
    
        window.addEventListener("scroll", headerSize);
    
        return () => window.removeEventListener("scroll", headerSize);
    });

    useEffect(() => {
       // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            //console.log(formValues);
            setShowWaiting(true);
            fetch('/api/casestudylead', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "fullName": formValues.fullName,
                   "email": formValues.email,
                   "casestudy": {post}.post,
                   "company": formValues.company
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
        if (!values.fullName) {
            errors.fullName = "Fullname is required!";
        }

        if (!values.company) {
            errors.company = "Company is required!";
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }


        return errors;
    };


  return (<>
  <Head>
    <title>AnalyticsLiv - Case Sudies</title>
  </Head>
  <ScrollProgress/>
  {showWaiting && <div className="fixed flex backdrop-blur top-0 left-0 right-0 z-40 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"><ScaleLoader
  color="#271d90"
  loading
  size={100}
  className="m-auto align-middle"
/></div>}
    <div>
        <section className="relative bg-gray-100 pt-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute lg:w-48 w-32 -right-0 top-10 lg:top-8 lg:right-10 fill-orange-500 blur-md rotate-45" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15">
                <path  d="M7.932 1.248a.5.5 0 0 0-.864 0l-7 12A.5.5 0 0 0 .5 14h14a.5.5 0 0 0 .432-.752l-7-12Z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute lg:w-48 w-32 bottom-0 fill-green-400 blur-md -rotate-12" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15">
                <path  d="M7.932 1.248a.5.5 0 0 0-.864 0l-7 12A.5.5 0 0 0 .5 14h14a.5.5 0 0 0 .432-.752l-7-12Z"/>
            </svg>
            <h1 className="text-center text-4xl font-semibold uppercase mb-2">Case Study</h1>

            <div className="relative lg:flex w-full lg:w-5/6 space-y-4 lg:space-y-0 lg:space-x-4 mx-auto pt-4 pb-8 px-4">
                <div className="p-4 lg:w-3/4 space-y-6 bg-white">
                    <h1 className="text-2xl">MDaudit transforms the healthcare industry with ThoughtSpot Everywhere to drive compliance and revenue outcomes</h1>
                    <div className="h-0.5 bg-cyan-500"></div>
                    <img className="w-screen" src="/static/cs1.png"/>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline w-10 fill-cyan-800" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/>
                        </svg>
                        <h2 className="inline uppercase font-semibold text-xl text-slate-800">Client:</h2>
                        <h3 className="px-8 mt-4 text-sky-800 "> MDaudit  </h3>
                        <p className="px-8 mt-4 text-gray-600">
                            Healthcare, Financial Services                         
                        </p>

                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline w-10 fill-red-800" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29H9a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m8.19 3.5c-.89 0-1.6.18-2.14.54c-.55.36-.83.96-.78 1.65h1.97c0-.28.1-.49.26-.63c.2-.14.42-.21.69-.21c.31 0 .58.08.76.26c.18.17.27.39.27.69c0 .28-.08.53-.22.74c-.17.22-.38.4-.64.54c-.52.32-.86.6-1.07.84c-.19.24-.29.58-.29 1.08h2c0-.28.05-.5.14-.68c.09-.17.26-.32.52-.47c.46-.21.84-.49 1.13-.85c.29-.37.44-.76.44-1.2c0-.7-.27-1.26-.81-1.68c-.54-.41-1.29-.62-2.23-.62M11 12v2h2v-2h-2Z"/>
                        </svg>
                        <h2 className="inline uppercase font-semibold text-xl text-slate-800">Challenge:</h2>
                        <p className="px-8 mt-4 text-gray-600">
                            MDaudit needed a solution for a better way for healthcare organizations to identify the
                            efficacy of their auditing efforts — what they do, who they
                            audit, and who to educate
                        </p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline w-10 fill-yellow-300" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path  d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7M9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9v1Z"/>
                        </svg>
                        <h2 className="inline uppercase font-semibold text-xl text-slate-800">Solution:</h2>
                        <p className="px-8 mt-4 text-gray-600">
                            MDaudit’s product team has created Liveboards that are
                            enabling all users to self-serve their ad hoc questions.
                            To date, ThoughtSpot Everywhere has been adopted by
                            over 500+ end users, with 10 internal users from product
                            management and engineering.
                        </p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline w-10 fill-green-800" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"/>
                        </svg>
                        <h2 className="inline uppercase font-semibold text-xl text-slate-800">Out-turn:</h2>
                        <p className="px-8 mt-4 text-gray-600">
                            Growing in healthcare is incredibly hard, yet with ThoughtSpot Everywhere’s user-friendly Live Analytics and scalability,
                            MDaudit has seen a 25%+ increase in new logos and revenue in 2022.
                        </p>
                    </div>
                </div>

                <div className={`${formFixed ? "sticky top-20" : "relative"} h-96 lg:w-1/2 bg-white px-10 py-4`}>
                    {formSubmit ? <div className='relative text-slate-700 p-4 space-y-4 h-full'>
                                    <h1 className='align-middle font-medium text-4xl'>Thank You for your interest.</h1>
                                    <h2 className='align-middle text-xl'>The download link for this case study has been sent to the email-id provided.</h2>
                                    <div><a href='#' className='text-blue-500 underline'>Click here</a> to go to Home Page</div>
                                    <div className='absolute bottom-0 right-2 rounded-full w-20 h-20 bg-emerald-600 opacity-70 animate-bounce hover:animate-none duration-300 delay-75'></div>
                                </div> :<form className="space-y-4 md:space-y-6">
                        <h1 className="text-center text-xl">Enter your details to download the casestudy.</h1>
                        <div className="h-0.5 bg-cyan-600"></div>
                        
                            <div className="relative">
                                <input type="text" id="fullName" name="fullName" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent dark:bg-gray-700 border-b border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required  value={formValues.fullName} onChange={handleChange}/>
                                <label htmlFor="fullName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Full Name</label>
                                <p className="text-red-600 text-sm">{formErrors.fullName}</p>
                            </div>

                        
                            <div className="relative">
                                <input type="email" id="email" name="email" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent dark:bg-gray-700 border-b border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" "  value={formValues.email} onChange={handleChange}/>
                                <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">E-mail</label>
                                <p className="text-red-600 text-sm">{formErrors.email}</p>
                            </div>

                            <div className="relative">
                                <input type="text" id="company" name="company" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent dark:bg-gray-700 border-b border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" "  value={formValues.company} onChange={handleChange} />
                                <label htmlFor="company" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Company</label>
                                <p className="text-red-600 text-sm">{formErrors.company}</p>
                            </div>
                       
                        <div className="text-center">
                            <div className="tracking-wider w-full mt-4 px-8 py-2 m-auto bg-sky-800 uppercase text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150 cursor-pointer" onClick={handleSubmit}>Download
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 inline text-right" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4l-4-4h3zm6 7H7v-2h10v2z"/>
                                </svg>
                            </div>
                        </div>
                    </form>}
                </div>
           </div>   

      </section>
    </div></>
  )
}

export default index