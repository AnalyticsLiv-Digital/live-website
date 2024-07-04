import React from 'react'
import ScrollProgress from '../components/ScrollProgress'
import Image from 'next/image';
import Head from 'next/head'
import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactFlagsSelect from "react-flags-select";
import { ScaleLoader } from 'react-spinners'
import Link from 'next/link';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { FaLocationDot } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";


const contact = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const initialValues = { firstName: '', lastName: '', email: '', contactno: '', company: '', role: '', purpose: '', requirements: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showWaiting, setShowWaiting] = useState(false);
    const [selected, setSelected] = useState("");
    const [formSubmit, setFormSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const handleContactChange = (e) => {
        setFormValues({ ...formValues, ['contactno']: e });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

    };

    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            //console.log(formValues);
            setShowWaiting(true);
            dataLayer.push({
                event: 'contact_submission'
            });
            fetch('/api/contact', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    'mode': 'no-cors'
                },
                body: JSON.stringify({
                    "firstName": formValues.firstName,
                    "lastName": formValues.lastName,
                    "email": formValues.email,
                    "contact": formValues.contactno,
                    "role": formValues.role,
                    "purpose": formValues.purpose,
                    "requirments": formValues.requirements,
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
        if (!values.firstName) {
            errors.firstName = "Firstname is required!";
        }

        if (!values.lastName) {
            errors.lastName = "Lastname is required!";
        }

        if (!values.company) {
            errors.company = "Company is required!";
        }

        /* if (!values.role) {
             errors.role = "Role is required!";
         }
         */

        if (!values.purpose) {
            errors.purpose = "Lastname is required!";
        }

        if (!values.requirements) {
            errors.requirements = "Requirement is required!";
        }



        if (!values.purpose) {
            errors.purpose = "Contact For is required!";
        }


        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        /*   if (!values.contactno) {
               errors.contactno = "Contact is required!";
           } else if (!mobile.test(values.contactno)) {
               errors.contactno = "This is not a valid phone number!";
           }
       */
        return errors;
    };


    return (
        <>
            <Head>
                <title>AnalyticsLiv - Contact us</title>
                <meta name="description" content="Google Marketing Platform Partner - Contact for Support" />
                <link rel="canonical" href="https://www.analyticsliv.com/contact"></link>
            </Head>
            <ScrollProgress />
            {showWaiting && <div className="fixed flex backdrop-blur top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"><ScaleLoader
                color="#271d90"
                loading
                size={100}
                className="m-auto align-middle"
            /></div>}
            <section className="relative pt-12 pb-12 bg-slate-900">

                <div data-aos="zoom-in" data-aos-once="true" className=" absolute blur-sm lg:w-80 w-40 lg:h-80 h-40 rounded-full bg-gradient-to-b from-violet-500 via-slate-900 to-transparent top-10 lg:left-96 lg:ml-28 left-1/2 -ml-20"></div>


                <div className="relative pt-12 ">
                    <h1 className=" text-center tracking-wide text-white uppercase text-2xl mb-8">Contact Us</h1>
                    <div className="relative overflow-hidden lg:w-4/5 lg:p-8 p-2 pt-2 rounded-lg mx-2 lg:mx-auto bg-white">
                        <div className="absolute rounded-full w-40 h-40 bg-gradient-to-b from-rose-500 to-transparent blur -right-10 top-0"></div>
                        <div className="hidden absolute rounded-full w-40 h-40 bg-gradient-to-r from-cyan-500 to-transparent blur left-1/2 -bottom-10"></div>
                        <div className="relative mx-2 lg:flex">
                            <div data-aos="fade-up" data-aos-once="true" className="relative md:h-screen overflow-hidden min-[1100px]:w-1/3 lg:w-[38%] rounded-lg bg-slate-900 space-y-9 px-4 pt-12 pb-20 align-middle text-white">
                                <h2 className="font-semibold uppercase tracking-wider">Contact Information</h2>
                                <h2 className="uppercase">Make an appointment for first consultation.</h2>
                                <div>
                                    <p>For Business Enquiries</p>
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 mr-[7px]" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7L4 8v10h16V8Zm0-2l8-5H4ZM4 8V6v12Z"></path>
                                        </svg>
                                        <a href="mailto:sales@analyticsliv.com">sales@analyticsliv.com</a>
                                    </div>
                                    <div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 mr-[7px]" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19.95 21q-3.225 0-6.287-1.425q-3.063-1.425-5.425-3.8q-2.363-2.375-3.8-5.438Q3 7.275 3 4.05v-.525Q3 3.25 3.05 3H8.9l.925 5.025l-2.85 2.875q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.9-2.9l5 1v5.85q-.25.025-.525.038Q20.2 21 19.95 21Z"></path>
                                            </svg>
                                            <a href="tel:+918320576622">+91 83205 76622</a></div>
                                    </div>
                                </div>
                                <div>
                                    <p>For Job Enquiries</p>
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 mr-[7px]" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7L4 8v10h16V8Zm0-2l8-5H4ZM4 8V6v12Z"></path>
                                        </svg>
                                        <a href="mailto:hr@analyticsliv.com">hr@analyticsliv.com</a>
                                    </div>
                                </div>
                                <div>
                                    <p>For Other Support</p>
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 mr-[7px]" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7L4 8v10h16V8Zm0-2l8-5H4ZM4 8V6v12Z"></path>
                                        </svg>
                                        <a href="mailto:support@analyticsliv.com">support@analyticsliv.com</a>
                                    </div>
                                </div>
                                <div className="social-contact space-x-2 pl-4 flex items-center">
                                    <Link site="facebook" href="https://m.facebook.com/100070503960704/"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className="w-8 inline mx-1 fill-current hover:fill-[#1877f2]">
                                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                                    </svg>
                                    </Link>
                                    <Link site="linkedin" href="https://in.linkedin.com/company/analytics-liv-digital"><svg xmlns="http://www.w3.org/2000/svg" className="w-8 inline fill-current hover:fill-[#0077b5]" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                        <path d="M5 3c0 1.062-.71 1.976-2.001 1.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1s1.976.91 2 2zM1 19V6h4v13H1zm6-8.556c0-1.545-.051-2.836-.102-3.951h3.594l.178 1.723h.076c.506-.811 1.746-2 3.822-2C17.1 6.216 19 7.911 19 11.558V19h-4v-6.861c0-1.594-.607-2.81-2-2.81c-1.062 0-1.594.86-1.873 1.569c-.102.254-.127.608-.127.963V19H7v-8.556z" />
                                    </svg></Link>
                                    <Link site="instagram" href="https://twitter.com/AnalyticsLiv" className='inline-flex'>
                                        <span className='w-[26px] inline-block fill-current hover:text-[#000]'><BsTwitterX className='h-[23px] w-[23px]'/></span>
                                    </Link>
                                    <Link site="youtube" href="https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw"><svg xmlns="http://www.w3.org/2000/svg" className="w-8 inline fill-current hover:fill-[#ff0000]" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                        <path d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z" />
                                    </svg></Link>
                                    <Link site="instagram" href="https://www.instagram.com/analyticsliv_digital">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 inline fill-current hover:fill-[#c13584]" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                            <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div data-aos="fade-down" data-aos-once="true" className="relative min-[1100px]:w-2/3 lg:w-[62%] rounded-lg p-4 bg-white font-regular">
                                {formSubmit && <div className='relative text-slate-700 p-4 space-y-4 h-full'>
                                    <h1 className='align-middle font-medium text-4xl'>Thank You for your interest.</h1>
                                    <h2 className='align-middle text-xl'>We will get back to you soon.</h2>
                                    <div><a href='/' className='text-blue-500 underline'>Click here</a> to go to Home Page</div>
                                    <div className='absolute bottom-0 right-2 rounded-full w-20 h-20 bg-emerald-600 opacity-70 animate-bounce hover:animate-none duration-300 delay-75'></div>
                                </div>}

                                {!formSubmit && <form className="space-y-2 md:space-y-6  md:w-4/5 mx-auto" onSubmit={handleSubmit}>
                                    <div className="relative w-full md:flex justify-between md:space-x-8">
                                        <div className="relative md:w-1/2">
                                            <input type="text" id="firstname" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " name="firstName" value={formValues.firstName} onChange={handleChange} />
                                            <label htmlFor="firstname" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">First Name</label>
                                            <p className="text-red-600 text-sm">{formErrors.firstName}</p>
                                        </div>
                                        <div className="relative md:w-1/2">
                                            <input type="text" id="lastname" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " name="lastName" value={formValues.lastName} onChange={handleChange} />
                                            <label htmlFor="lastname" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Last Name</label>
                                            <p className="text-red-600 text-sm">{formErrors.lastName}</p>
                                        </div>
                                    </div>

                                    <div className="relative w-full md:flex justify-between md:space-x-8">
                                        <div className="relative md:w-1/2">
                                            <input type="emaild" id="email" className="px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " name="email" value={formValues.email} onChange={handleChange} />
                                            <label htmlFor="emaild" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">E-mail</label>
                                            <p className="text-red-600 text-sm">{formErrors.email}</p>
                                        </div>
                                        <div className="relative md:w-1/2">
                                            <PhoneInput className="w-0 mt-4 md:mt-0 text-sm"
                                                name="contactno" id="contactno" value={formValues.contactno} onChange={handleContactChange}
                                                country={"in"}
                                                preferredCountries={['in', 'us', 'au']}
                                                enableSearch={true}

                                            />
                                            <label htmlFor="tel" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Contact No</label>

                                        </div>
                                    </div>

                                    <div className="w-full md:flex space-y-4 justify-around md:space-x-8">
                                        <div className="relative md:w-1/2 ">
                                            <input type="Cname" id="company" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " name="company" value={formValues.company} onChange={handleChange} />
                                            <label htmlFor="Cname" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Company Name</label>
                                            <p className="text-red-600 text-sm">{formErrors.company}</p>
                                        </div>
                                        <div className='relative w-full md:w-1/2'>
                                            <select className="pb-2.5 pl-2 min-w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-slate-500  focus:outline-none focus:ring-0 focus:border-cyan-500 outline-none" placeholder="Role in Comapany" id="role" name="role" value={formValues.role} onChange={handleChange}>
                                                <option>Role in Company</option>
                                                <option>Data Analyst</option>
                                                <option>Management/Executive</option>
                                                <option>Sales</option>
                                                <option>Marketing</option>
                                                <option>Ecommerce Manager</option>
                                                <option>Other</option>
                                            </select>
                                            <p className="block text-red-600 text-sm">{formErrors.role}</p>
                                        </div>


                                    </div>
                                    <div className="relative w-full ">
                                        <select className="pb-4 pl-2 w-full  mt-4 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-slate-500  focus:outline-none focus:ring-0 focus:border-cyan-500 outline-none" placeholder="Contact for" id="purpose" name="purpose" value={formValues.purpose} onChange={handleChange}>
                                            <option>Contact For</option>
                                            <option>Web Analytics Service</option>
                                            <option>Display &amp; Video 360 Self Serve</option>
                                            <option>Google Cloud Platform</option>
                                            <option>Mobile App Analytics Service</option>
                                            <option>Advanced Funnel Optimization</option>
                                            <option>Training</option>
                                            <option>Others</option>
                                        </select>
                                        <p className="text-red-600 text-sm">{formErrors.purpose}</p>
                                    </div>
                                    <div className="w-full">
                                        <textarea className="pl-2 mt-4 mx-auto resize-y text-sm w-full  text-gray-700 bg-transparent border-0 border-b-2 border-slate-500  focus:outline-none focus:ring-0 focus:border-cyan-500 outline-none" id="requirements" name="requirements" placeholder="Requirements" value={formValues.requirements} onChange={handleChange}></textarea>
                                        <p className="text-red-600 text-sm">{formErrors.requirements}</p>

                                    </div>
                                    <div className="text-center">
                                        <button className="tracking-wider my-4 px-8 py-2 m-auto bg-slate-900 text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150">Submit</button>
                                    </div>
                                </form>}




                            </div>
                        </div>

                        <div className='w-full h-[200px]'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.660556214622!2d72.4981082753132!3d22.9995064791899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x613f5a1e7cb48aa3%3A0xaef382143b118f7!2sAnalyticsLiv!5e0!3m2!1sen!2sin!4v1704214142520!5m2!1sen!2sin" className='w-full h-full z-100'></iframe>
                        </div>

                        <div className='mt-[30px] flex items-center justify-center px-4 bg-[#0f172a] text-[#ffffff] rounded-lg'>
                            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5 my-5 w-full'>
                                <div className=''>
                                    <div>
                                        <span className="inline w-6"><img src="/address-28-16.png" ></img></span>
                                        <p className='mt-1'>503, 31Five, Corporate Road, <br /> Prahaladnagar, S.G. Highway, <br />Ahmedabad 380015, Gujarat,<br /> India</p>
                                    </div>
                                </div>
                                <div className=''>
                                    <div>
                                        <span className="inline w-6"><img src="/address-28-16.png" ></img></span>
                                        <p className='mt-1'>3104 E Camelback Rd ,Suite #7406, <br /> Phoenix, AZ 85016,<br /> USA</p>
                                    </div>
                                </div>
                                <div className=''>
                                    <div>
                                        <span className="inline w-6"><img src="/address-28-16.png" ></img></span>
                                        <p className='mt-1'>Via Natale Prampolini, <br /> 15 - 00132, Roma,<br /> Italy</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default contact