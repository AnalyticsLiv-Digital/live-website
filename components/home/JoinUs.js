'use client'
import React from 'react'
import Image from 'next/image';
import Head from 'next/head'
import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { InlineWidget } from 'react-calendly';
// import ReactFlagsSelect from "react-flags-select";
// import "react-flags-select/css/react-flags-select.css";
import { ScaleLoader } from 'react-spinners'
import Link from 'next/link';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import * as Scroll from 'react-scroll';


const JoinUs = () => {

    const { Element: ScrollElement } = Scroll;
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
            localStorage.setItem('contactFormSubmitted', 'true');
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
                    console.log('Success:', data);
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


            <section className="font-gilroy" id='joinus'>
                <div className="relative overflow-hidden px-4 pb-8 md:pb-16">
                    <div className="relative mx-2 lg:flex">
                        <div className="relative bg-[#f5f5f5] md:h-screen lg:w-[40%] rounded-lg space-y-9 px-4 pb-20 align-middle text-white">
                            <div className="inline-widget overflow-hidden bg-[#fff]">
                                <div className="pb-4">

                                    <ScrollElement id="consultation" name="consultation" ></ScrollElement>

                                    <div className="flex justify-center">
                                        <img src="https://storage.googleapis.com/website-bucket-uploads/static/public/AnalyticsLiv%202.png" alt="AnalyticsLiv" className="max-w-[200px] max-h-[100px]" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div>
                                            <p className="text-sm font-semibold text-homepagebtn leading-[18px] sm:leading-[5px]">Book A Slot for Media & Analytics Consultancy</p>
                                        </div>
                                    </div>

                                </div>
                                <InlineWidget url="https://calendly.com/analyticsliv/30min" />
                            </div>
                        </div>

                        <ScrollElement id="footer" name="footer" ></ScrollElement>

                        <div className="relative lg:w-[60%] rounded-lg p-4 font-regular">

                            <div className="pb-5 md:w-[90%] mx-auto">
                                <h3 className="text-left text-[20px] font-semibold text-homepagebtn leading-[30px]">Fill the form to get in touch with us</h3>
                            </div>

                            {formSubmit && <div className='relative text-slate-700 p-4 space-y-4 h-full'>
                                <h1 className='align-middle font-medium text-4xl'>Thank You for your interest.</h1>
                                <h2 className='align-middle text-xl'>We will get back to you soon.</h2>
                                <div className='absolute bottom-0 right-2 rounded-full w-20 h-20 bg-emerald-600 opacity-70 animate-bounce hover:animate-none duration-300 delay-75'></div>
                            </div>}
                            {/* <ScrollElement id="footer" name="footer" ></ScrollElement> */}
                            {!formSubmit && <form className="space-y-2 md:space-y-6  md:w-[90%] mx-auto" onSubmit={handleSubmit}>
                                <div className="relative w-full md:flex justify-between md:space-x-8">
                                    <div className="relative md:w-1/2">
                                        <input type="text" id="firstName" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " name="firstName" value={formValues.firstName} onChange={handleChange} />
                                        <label htmlFor="firstName" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">First Name</label>
                                        <p className="text-red-600 text-sm">{formErrors.firstName}</p>
                                    </div>
                                    <div className="relative md:w-1/2">
                                        <input type="text" id="lastName" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " name="lastName" value={formValues.lastName} onChange={handleChange} />
                                        <label htmlFor="lastName" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Last Name</label>
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
                                            name="contactno" id="contact" value={formValues.contactno} onChange={handleContactChange}
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
                                        <option>Advertising Services</option>
                                        <option>Display &amp; Video 360 Services</option>
                                        <option>Google Cloud Platform</option>
                                        <option>Mobile App Analytics Service</option>
                                        <option>Advanced Funnel Optimization</option>
                                        <option>Training</option>
                                        <option>Others</option>
                                    </select>
                                    <p className="text-red-600 text-sm">{formErrors.purpose}</p>
                                </div>
                                <div className="w-full">
                                    <textarea className="pl-2 mt-4 mx-auto resize-none lg:h-28 text-sm w-full  text-gray-700 bg-transparent border-0 border-b-2 border-slate-500  focus:outline-none focus:ring-0 focus:border-cyan-500 outline-none" id="requirements" name="requirements" placeholder="Requirements" value={formValues.requirements} onChange={handleChange}></textarea>
                                    <p className="text-red-600 text-sm">{formErrors.requirements}</p>

                                </div>
                                <div className="text-left">
                                    <button className="butn">Submit</button>
                                </div>
                            </form>}




                        </div>
                    </div>


                </div>
            </section>
            {showWaiting && <div className="fixed flex z-99 backdrop-blur top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"><ScaleLoader
                color="#271d90"
                loading
                size={100}
                className="m-auto align-middle"
            /></div>}
        </>
    )
}

export default JoinUs