'use client'
import React from 'react'
// import ScrollProgress from '../components/ScrollProgress'
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

const GetInTouch = () => {

    const { Element: ScrollElement } = Scroll;
    const initialValues = { fullName: '', email: '', contactno: '', date: '', purpose: '', requirements: '' };
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
                    // "fullName": formValues.fullName,
                    "firstName": formValues?.fullName,
                    "lastName": "",
                    "email": formValues?.email,
                    "contact": formValues?.contactno,
                    "date": formValues?.date,
                    "purpose": formValues?.purpose,
                    "requirments": formValues?.requirements,
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
        if (!values.fullName) {
            errors.firstName = "Name is required!";
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (!values.contactno) {
            errors.purpose = "Contact number is required!";
        }

        if (!values.date) {
            errors.lastName = "Lastname is required!";
        }

        if (!values.purpose) {
            errors.purpose = "Lastname is required!";
        }

        if (!values.requirements) {
            errors.requirements = "Requirement is required!";
        }

        return errors;
    };
    return (
        <section id="get-in-touch" className="font-lato lg:pt-28 py-10 px-4 md:px-10 xl:px-16 bg-white">

            <div className="flex flex-col sm:flex-row items-center lg:items-center gap-3 md:gap-8">
                <div className="max-sm:hidden relative max-w-full sm:max-w-[35%] lg:max-w-[45%]">
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full shadow-md -z-10"></div>
                    <img src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/contactus.png" alt="contact" className="z-10 relative" />
                </div>

                <div className="w-full lg:w-[55%]">
                    <h1 className="text-[36px] font-bold text-[#282C4B] pb-8 xl:font-extrabold">
                        <span className="inline-block relative">
                            Let’s&nbsp;
                            <span
                                className="absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]"
                                style={{
                                    width: '50px',
                                    height: '5px',
                                    borderRadius: '10px',
                                    top: 'calc(100% + 2px)',
                                    left: '0',
                                }}
                            ></span>
                        </span>
                        Get in touch
                    </h1>
                    {formSubmit && <div className='relative text-slate-700 p-4 space-y-4 h-full'>
                        <h1 className='align-middle font-medium text-4xl'>Thank You for your interest.</h1>
                        <h2 className='align-middle text-xl'>We will get back to you soon.</h2>
                        <div className='absolute bottom-0 right-2 rounded-full w-20 h-20 bg-emerald-600 opacity-70 animate-bounce hover:animate-none duration-300 delay-75'></div>
                    </div>}
                    {!formSubmit &&
                        <form className="flex flex-col justify-evenly h-full gap-3 2xl:gap-6">
                            {/* Full Name */}
                            <div className="">
                                <label className="block text-base font-semibold text-[#14183E]">Full Name</label>
                                <input
                                    name="fullName" value={formValues.fullName} onChange={handleChange}
                                    required
                                    type="text"
                                    placeholder="Enter Your Full Name"
                                    className="w-full text-sm mt-1 px-5 py-2 border border-[#ECECEC] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#08A4F7]"
                                />
                            </div>
                            {/* Email */}
                            <div className='flex max-sm:flex-col gap-3 md:gap-5 items-center justify-start w-full'>
                                <div className="w-full sm:w-[50%]">
                                    <label className="block text-base font-semibold text-[#14183E]">Email</label>
                                    <input
                                        name="email" value={formValues.email} onChange={handleChange}
                                        required
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="w-full text-sm mt-1 px-5 py-2 border border-[#ECECEC] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#08A4F7]"
                                    />
                                </div>
                                {/* Contact No */}
                                <div className="w-full sm:w-[50%]">
                                    <label className="block mb-1 text-base font-semibold text-[#14183E]">Contact No</label>
                                    <PhoneInput
                                        containerClass="custom-phone-input-container"
                                        inputClass="custom-phone-input"
                                        containerStyle={{
                                            width: '100%',
                                        }}
                                        inputStyle={{
                                            width: '100%',
                                            height: '38px',
                                            border: '1px solid #ECECEC',
                                            borderRadius: '5px',
                                            fontSize: '14px',
                                            paddingLeft: '60px',
                                        }}
                                        buttonStyle={{
                                            border: 'none',
                                            borderRadius: '8px 0 0 8px',
                                        }}
                                        name="contactno"
                                        id="contactno"
                                        value={formValues.contactno}
                                        onChange={handleContactChange}
                                        country={"in"}
                                        preferredCountries={['in', 'us', 'au']}
                                        enableSearch={true}
                                    />
                                </div>

                            </div>
                            {/* Date */}
                            <div className='flex max-sm:flex-col gap-3 md:gap-5 items-center justify-between w-full'>
                                <div className="w-full">
                                    <label className="block text-base font-semibold text-[#14183E]">Date</label>
                                    <input
                                        required
                                        type="date"
                                        value={formValues.date}
                                        className="w-full text-sm mt-1 px-5 py-2 border border-[#ECECEC] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#08A4F7]"
                                    />
                                </div>
                                {/* Contact For */}
                                <div className="w-full">
                                    <label className="block text-base font-semibold text-[#14183E]">Contact For</label>
                                    <select
                                        name="purpose" value={formValues.purpose} onChange={handleChange}
                                        className="w-full text-sm mt-1 px-5 py-2 border border-[#ECECEC] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#08A4F7]"
                                    >
                                        <option>Web Analytics Service</option>
                                        <option>Display &amp; Video 360 Self Serve</option>
                                        <option>Google Cloud Platform</option>
                                        <option>Mobile App Analytics Service</option>
                                        <option>Advanced Funnel Optimization</option>
                                        <option>Training</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                            </div>
                            {/* Requirements */}
                            <div className="overflow-auto max-h-36 px-0.5">
                                <label className="block text-base font-semibold text-[#14183E]">Requirements</label>
                                <textarea
                                    name="requirements" value={formValues.requirements} onChange={handleChange}
                                    placeholder="Write Message..."
                                    className="w-full text-sm mt-1 px-5 py-2 border border-[#ECECEC] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#08A4F7]"
                                    rows="3"
                                ></textarea>
                            </div>
                            {/* Submit Button */}
                            <div className="flex justify-start">
                                <button
                                    type="submit"
                                    className="mainbutn"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>}
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;





// import React from 'react'
// // contactus
// const GetInTouch = () => {
//     return (
//         <section className='font-lato py-10 px-4 md:px-10 xl:px-16'>
//             <div className='flex items-start gap-8'>
//                 <div className='max-w-[45%]'>
//                     <img src='/contactus.png' alt='contact' />
//                 </div>
//                 <div className=''>
//                     <div className='text-[36px] font-bold text-[#282C4B] pb-8 xl:font-extrabold'>
//                         <span className='inline-block relative'>
//                             Let’s&nbsp;
//                             <span
//                                 className='absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]'
//                                 style={{
//                                     width: '50px',
//                                     height: '5px',
//                                     borderRadius: '10px',
//                                     top: 'calc(100% )',
//                                     left: '0',
//                                 }}
//                             ></span>
//                         </span>
//                         Get in touch
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default GetInTouch




{/* Contact No */ }
{/* <div className="w-full md:w-1/2 focus:ring-1">
                                    <label className="block text-base font-semibold text-[#14183E]">Contact No</label>
                                    <PhoneInput
                                        containerClass="custom-phone-input-container"
                                        inputClass="custom-phone-input"
                                        className="w-0 mt-4 md:mt-1 text-sm"
                                        name="contactno" id="contactno" value={formValues.contactno} onChange={handleContactChange}
                                        country={"in"}
                                        preferredCountries={['in', 'us', 'au']}
                                        enableSearch={true}

                                    />
                                </div> */}








//     return (
//         <>


//             <section className="font-gilroy" id='joinus'>
//                 <div className="relative overflow-hidden px-4 pb-8 md:pb-16">
//                     <div className="relative mx-2 lg:flex">
//                         <div className="relative bg-[#f5f5f5] md:h-screen lg:w-[40%] rounded-lg space-y-9 px-4 pb-20 align-middle text-white">
//                             <div className="inline-widget overflow-hidden bg-[#fff]">
//                                 <div className="pb-4">

//                                     <ScrollElement id="consultation" name="consultation" ></ScrollElement>

//                                     <div className="flex justify-center">
//                                         <img src="/AnalyticsLiv 2.png" alt="" className="max-w-[200px] max-h-[100px]" />
//                                     </div>
//                                     <div className="flex items-center justify-center">
//                                         <div>
//                                             <p className="text-sm font-semibold text-homepagebtn leading-[18px] sm:leading-[5px]">Book A Slot for Media & Analytics Consultancy</p>
//                                         </div>
//                                     </div>

//                                 </div>
//                                 <InlineWidget url="https://calendly.com/analyticsliv/30min" />
//                             </div>
//                         </div>

//                         <ScrollElement id="footer" name="footer" ></ScrollElement>

//                         <div className="relative lg:w-[60%] rounded-lg p-4 font-regular">

//                             <div className="pb-5 md:w-[90%] mx-auto">
//                                 <h3 className="text-left text-[20px] font-semibold text-homepagebtn leading-[30px]">Fill the form to get in touch with us</h3>
//                             </div>

//                             {formSubmit && <div className='relative text-slate-700 p-4 space-y-4 h-full'>
//                                 <h1 className='align-middle font-medium text-4xl'>Thank You for your interest.</h1>
//                                 <h2 className='align-middle text-xl'>We will get back to you soon.</h2>
//                                 <div className='absolute bottom-0 right-2 rounded-full w-20 h-20 bg-emerald-600 opacity-70 animate-bounce hover:animate-none duration-300 delay-75'></div>
//                             </div>}
//                             {/* <ScrollElement id="footer" name="footer" ></ScrollElement> */}
//                             {!formSubmit && <form className="space-y-2 md:space-y-6  md:w-[90%] mx-auto" onSubmit={handleSubmit}>
//                                 <div className="relative w-full md:flex justify-between md:space-x-8">
//                                     <div className="relative md:w-1/2">
//                                         <input type="text" id="firstname" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " name="firstName" value={formValues.firstName} onChange={handleChange} />
//                                         <label htmlFor="firstname" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">First Name</label>
//                                         <p className="text-red-600 text-sm">{formErrors.firstName}</p>
//                                     </div>
//                                     <div className="relative md:w-1/2">
//                                         <input type="text" id="lastname" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " name="lastName" value={formValues.lastName} onChange={handleChange} />
//                                         <label htmlFor="lastname" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Last Name</label>
//                                         <p className="text-red-600 text-sm">{formErrors.lastName}</p>
//                                     </div>
//                                 </div>

//                                 <div className="relative w-full md:flex justify-between md:space-x-8">
//                                     <div className="relative md:w-1/2">
//                                         <input type="emaild" id="email" className="px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " name="email" value={formValues.email} onChange={handleChange} />
//                                         <label htmlFor="emaild" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">E-mail</label>
//                                         <p className="text-red-600 text-sm">{formErrors.email}</p>
//                                     </div>
//                                     <div className="relative md:w-1/2">
//                                         <PhoneInput className="w-0 mt-4 md:mt-0 text-sm"
//                                             name="contactno" id="contactno" value={formValues.contactno} onChange={handleContactChange}
//                                             country={"in"}
//                                             preferredCountries={['in', 'us', 'au']}
//                                             enableSearch={true}

//                                         />
//                                         <label htmlFor="tel" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Contact No</label>

//                                     </div>
//                                 </div>

//                                 <div className="w-full md:flex space-y-4 justify-around md:space-x-8">
//                                     <div className="relative md:w-1/2 ">
//                                         <input type="Cname" id="company" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " name="company" value={formValues.company} onChange={handleChange} />
//                                         <label htmlFor="Cname" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Company Name</label>
//                                         <p className="text-red-600 text-sm">{formErrors.company}</p>
//                                     </div>
//                                     <div className='relative w-full md:w-1/2'>
//                                         <select className="pb-2.5 pl-2 min-w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-slate-500  focus:outline-none focus:ring-0 focus:border-cyan-500 outline-none" placeholder="Role in Comapany" id="role" name="role" value={formValues.role} onChange={handleChange}>
//                                             <option>Role in Company</option>
//                                             <option>Data Analyst</option>
//                                             <option>Management/Executive</option>
//                                             <option>Sales</option>
//                                             <option>Marketing</option>
//                                             <option>Ecommerce Manager</option>
//                                             <option>Other</option>
//                                         </select>
//                                         <p className="block text-red-600 text-sm">{formErrors.role}</p>
//                                     </div>


//                                 </div>
//                                 <div className="relative w-full ">
//                                     <select className="pb-4 pl-2 w-full  mt-4 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-slate-500  focus:outline-none focus:ring-0 focus:border-cyan-500 outline-none" placeholder="Contact for" id="purpose" name="purpose" value={formValues.purpose} onChange={handleChange}>
//                                         <option>Contact For</option>
//                                         <option>Web Analytics Service</option>
//                                         <option>Advertising Services</option>
//                                         <option>Display &amp; Video 360 Services</option>
//                                         <option>Google Cloud Platform</option>
//                                         <option>Mobile App Analytics Service</option>
//                                         <option>Advanced Funnel Optimization</option>
//                                         <option>Training</option>
//                                         <option>Others</option>
//                                     </select>
//                                     <p className="text-red-600 text-sm">{formErrors.purpose}</p>
//                                 </div>
//                                 <div className="w-full">
//                                     <textarea className="pl-2 mt-4 mx-auto resize-none lg:h-28 text-sm w-full  text-gray-700 bg-transparent border-0 border-b-2 border-slate-500  focus:outline-none focus:ring-0 focus:border-cyan-500 outline-none" id="requirements" name="requirements" placeholder="Requirements" value={formValues.requirements} onChange={handleChange}></textarea>
//                                     <p className="text-red-600 text-sm">{formErrors.requirements}</p>

//                                 </div>
//                                 <div className="text-left">
//                                     <button className="butn">Submit</button>
//                                 </div>
//                             </form>}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {showWaiting && <div className="fixed flex z-99 backdrop-blur top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"><ScaleLoader
//                 color="#271d90"
//                 loading
//                 size={100}
//                 className="m-auto align-middle"
//             /></div>}
//         </>
//     )
// }
