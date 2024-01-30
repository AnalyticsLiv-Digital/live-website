import React from 'react'
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState, useEffect } from 'react';

const Home = () => {
    const initialValues = { fullName: '', email: '', contact: '',message : '', website: ''};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showWaiting, setShowWaiting] = useState(false);
    const [selected, setSelected] = useState("");
    const [formSubmit, setFormSubmit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
                event:'dv360_submission'
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
                   "website" : formValues.website
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



 

        if (!values.message) {
            errors.message = "Message is required!";
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
        <section className='home flex items-center justify-center text-center'>
            <div className='px-4 md:px-20 pt-8 md:pt-11'>
                <div className='grid gap-10 pt-8 md:pt-24'>
                    <div className='tophome'>
                        <h1 className='text-[#fff] text-[45px] font-semibold leading-normal pb-5'>Get 10x Audiences Reach Programmatically</h1>
                        <p className='text-[#fff] text-base font-medium leading-normal pb-7'>Dive into a Decade of Expertise with Analytics Liv – Leaders in <span className='text-[17px] font-bold'> BRANDING & ONLINE ADVERTISING.</span> We've Propelled Countless Brands to bring Efficiency and Actionable Insights to their Marketing Operations.
                            <br />
                            Ready to join the journey?</p>
                        <div className='flex items-center justify-between w-[300px] m-auto text-[#fff] text-[21px] font-bold border border-solid border-[#fff] rounded-[10px] shadow-btnshadow py-4 px-8 hover:bg-[#fff] hover:text-homepagebtn'>
                            <button>Hire DV360 Experts</button>
                            <FaLongArrowAltRight />
                        </div>
                    </div>
                    <div className='botmhome grid lg:grid-cols-2 text-center gap-3'>
                        <div className='relative text-center flex justify-center'>
                            <Image
                                src="/image (4).png"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                            <Image
                                src="/Clutch.png"
                                width={130}
                                height={130}
                                alt="Picture of the author"
                                className='absolute top-0 left-0'
                            />
                            <Image
                                src="/Trustpilot.png"
                                width={130}
                                height={130}
                                alt="Picture of the author"
                                className='absolute top-0 right-0'
                            />
                        </div>
                        <div className='flex justify-center lg:justify-end my-4'>
                            <div className='text-center bg-dvbackgrnd py-8 md:p-8 md:w-3/4 rounded-[10px] shadow-formshadow'>
                            {!formSubmit &&<div className="block">
                                    <h2 className='text-homepagebtn text-base font-medium leading-normal'>We Understand Its difficult to get DV360 Account and control the outcome</h2>
                                    <h2 className='text-[#000] text-[30px] font-semibold leading-normal'>Let us help you !!</h2>
                                    <form onSubmit={handleSubmit} className='px-4 md:pt-4 pb-2 space-y-4 text-gray-600'>
                                        <div>
                                            <input type="text" placeholder='FULL NAME*' name="fullName" id="fullname" className='bg-transparent px-4 border border-solid border-homepagebtn rounded-[10px] w-full py-2 focus:outline-none focus:border-2 focus:border-sky-200'  value={formValues.fullName} onChange={handleChange}/>
                                            <span className="text-xs text-red-600 float-left">{formErrors.fullName}</span>
                                        </div>
                                        <div>
                                            <input type="email" placeholder='EMAIL*' name="email" id="email" className='bg-transparent px-4 border border-solid border-homepagebtn rounded-[10px] w-full py-2 focus:outline-none focus:border-2 focus:border-sky-200'  value={formValues.email} onChange={handleChange}/>
                                            <span className="text-xs text-red-600 float-left">{formErrors.email}</span>
                                        </div>
                                        <div>
                                            <input type="tel" placeholder='CONTACT NO.' name="contact" id="contact" className='bg-transparent px-4 border border-solid border-homepagebtn rounded-[10px] w-full py-2 focus:outline-none focus:border-2 focus:border-sky-200'  value={formValues.contact} onChange={handleChange}/>
                                        </div>
                                        <div>
                                            <textarea placeholder='TYPE MESSAGE' name="message" id="message" className='bg-transparent border border-solid border-homepagebtn rounded-[10px] w-full px-4 py-2 focus:outline-none focus:border-2 focus:border-sky-200'  value={formValues.message} onChange={handleChange}></textarea>
                                            <span className="text-xs text-red-600 float-left">{formErrors.message}</span>
                                        </div>
                                        <div>
                                            <button className='border border-solid border-homepagebtn rounded-[10px] shadow-btn2shadow py-4 px-9 text-homepagebtn text-base font-medium leading-9 hover:bg-homepagebtn hover:text-white'> CONTACT US </button>
                                        </div>
                                    </form>
                                </div>}
                                {formSubmit && <div>
          <h2 className="md:text-xl text-sky-900">Thank you for showing interest with us!</h2>
        <h2 className="font-semibold text-2xl p-4 md:p-8 border-dashed border-b-2 border-sky-200">We will get back to you shortly !!</h2>
        <img alt="Thankyou image" className="w-64 mx-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/Na_Dec_46.jpg"/>
        </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home