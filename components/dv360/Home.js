import Head from 'next/head'
import React from 'react'
import { useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';
import { ScaleLoader } from 'react-spinners';

const Home = () => {
    const { Element: ScrollElement } = Scroll;
    const initialValues = { fullName: '', email: '', contact: '', message: '', website: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showWaiting, setShowWaiting] = useState(false);
    const [selected, setSelected] = useState("");
    const [formSubmit, setFormSubmit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const scrolling = () => {
        {
            Scroll.scroller.scrollTo("top", {
                duration: 500,
                smooth: true,
                offset: -100,
            });
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        //console.log(formValues);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

    };

    useEffect(() => {
        //console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(formValues);
            setShowWaiting(true);
            dataLayer.push({
                event: 'dv360_submission'
            });
            fetch('/api/dv360contact', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    'mode': 'no-cors'
                },
                body: JSON.stringify({
                    "fullName": formValues.fullName,
                    "email": formValues.email,
                    "contact": formValues.contact,
                    "message": formValues.message,
                    "website": formValues.website
                }),
            })
                .then((response) => response.json())
                .then((data) => {

                    setFormSubmit(true);
                    setShowWaiting(false);
                    window.open("https://calendly.com/analyticsliv/30min", '_blank');
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
            errors.fullName = "Name is required!";
        }





        if (!values.website) {
            errors.website = "Website is required!";
        }




        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        /*  if (!values.contact) {
              errors.contact = "Contact is required!";
          } else if (!mobile.test(values.contact)) {
              errors.contact = "This is not a valid phone number!";
          }
          */

        return errors;
    };
    return (
        <><section>
            <div className="md:mx-16 mx-4 pb-16 my-2 md:px-4">
                <div className="flex justify-between">
                    <div className="flex items-center space-x-4 py-4">
                        <img alt="Display & Video 360" className="md:w-12 w-10" src="https://storage.googleapis.com/website-bucket-uploads/static/DV360_logo.png" />
                        <h1 className="md:text-4xl text-xl font-bold text-gray-400">Display & Video 360</h1>
                    </div>
                    <div><img alt="sparkler" className="w-16" src="https://storage.googleapis.com/website-bucket-uploads/static/sparkler (1) 1.png" /></div>
                </div>
                <div className="relative md:flex md:justify-between">
                    <div className="space-y-4 md:w-3/4">
                        <h2 className="py-4 text-xl font-semibold text-sky-600">Run Brand Marketing & Performance Campaigns Programmatically</h2>
                        <ul>
                            <li className='flex items-start mb-2'>
                                <img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png' />
                                <span>  Enhance Reach by 10x
                                </span>
                            </li>
                            <li className='flex items-start mb-2'>
                                <img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png' />
                                <span>  Buy Placements on Premium Websites and Apps
                                </span>
                            </li>
                            <li className='flex items-start mb-2'>
                                <img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png' />
                                <span>  Turn Engagements into Experiences With Rich Media Creatives
                                </span>
                            </li>
                            <li className='flex items-start mb-2'>
                                <img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png' />
                                <span>  Reserve placements on YouTube & Other Video Channels
                                </span>
                            </li>
                            <li className='flex items-start mb-2'>
                                <img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png' />
                                <span>  Define Custom Bid Strategy To Reach Your KPIs
                                </span>
                            </li>
                            <li className='flex items-start mb-2'>
                                <img alt="arrow" className='inline mr-4' src='https://storage.googleapis.com/website-bucket-uploads/static/arrow_1.png' />
                                <span>  Drive Action Throgh Enhanced Conversion In Floodlight
                                </span>
                            </li>
                        </ul>
                        <div className="mx-8"><img alt="brand image" src="https://storage.googleapis.com/website-bucket-uploads/static/Brand_IMG.png" /></div>
                    </div>
                    <div className="relative flex md:justify-end justify-center my-4 md:my-0">
                        <div className="absolute rounded-full bg-sky-100 w-56 h-56 left-0 -top-10 z-0 blur-xl"></div>
                        <div className="z-10 text-center bg-gray-50 py-8 md:p-8 md:w-3/4 rounded-xl shadow-xl shadow-gray-400">
                            <ScrollElement
                                id="contact-form"
                                name="contact-form"
                            ></ScrollElement>
                            {!formSubmit && <div className="block">
                                <h2 className="text-sky-900 md:p-0 p-[10px]">We Understand Its difficult to get DV360 Account and control the outcome</h2>
                                <h2 className="font-semibold text-2xl p-4 border-dashed border-b-2 border-sky-200">Let us help you !!</h2>
                                <ScrollElement id="top" name="top" ></ScrollElement>
                                <form className="px-4 md:pt-4 pb-2 space-y-4 text-gray-600" onSubmit={handleSubmit}>
                                    <div>
                                        <input type="text" placeholder="FULL NAME*" className="bg-transparent px-4 border-b-2 w-full py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="fullName" name="fullName" value={formValues.fullName} onChange={handleChange} />
                                        <span className="text-xs text-red-600 float-left">{formErrors.fullName}</span>
                                    </div>

                                    <div>
                                        <input type="email" placeholder="EMAIL*" className="bg-transparent border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="email" name="email" value={formValues.email} onChange={handleChange} />
                                        <span className="text-xs text-red-600 float-left">{formErrors.email}</span>
                                    </div>
                                    <div>
                                        <input type="tel" placeholder="CONTACT NO." className="bg-transparent border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="contact" name="contact" value={formValues.contact} onChange={handleChange} />

                                    </div>
                                    <div>
                                        <input type="text" placeholder="WEBSITE*" className="bg-transparent px-4 border-b-2 w-full py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="website" name="website" value={formValues.website} onChange={handleChange} />
                                        <span className="text-xs text-red-600 float-left">{formErrors.website}</span>
                                    </div>
                                    <div>
                                        <textarea type="" placeholder="TYPE MESSAGE" className="bg-transparent border-b-2 w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200" id="message" name="message" value={formValues.message} onChange={handleChange}></textarea>

                                    </div>
                                    <div>
                                        <button className="cta cursor-pointer bg-sky-500 hover:bg-sky-600 transition duration-200 delay-75 font-semibold text-white px-8 py-2 rounded-xl shadow-md shadow-gray-600"> CONTACT US </button>
                                    </div>
                                </form>
                            </div>}

                            {formSubmit && <div>
                                <h2 className="md:text-xl text-sky-900">Thank you for showing interest with us!</h2>
                                <h2 className="font-semibold text-2xl p-4 md:p-8 border-dashed border-b-2 border-sky-200">We will get back to you shortly !!</h2>
                                <img alt="Thankyou image" className="w-64 mx-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/Na_Dec_46.jpg" />
                            </div>}

                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default Home