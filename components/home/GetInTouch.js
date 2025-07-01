'use client';
import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import { ScaleLoader } from 'react-spinners';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const GetInTouch = () => {

    const initialValues = { fullName: '', email: '', contactno: '', purpose: '', requirements: '' };
    //  date: todayDate,

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showWaiting, setShowWaiting] = useState(false);
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
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setShowWaiting(true);
            dataLayer.push({
                event: 'contact_submission'
            });
            localStorage.setItem('contactFormSubmitted', 'true');
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'mode': 'no-cors',
                },
                body: JSON.stringify({
                    "firstName": formValues?.fullName,
                    "lastName": "",
                    "email": formValues?.email,
                    "contact": formValues?.contactno,
                    // "date": formValues?.date,
                    "purpose": formValues?.purpose,
                    "requirments": formValues?.requirements,
                    "company": formValues.company,
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
                    setTimeout(() => {

                        setShowWaiting(false);
                        alert('there is some issue in submitting your query ! please try again later.')
                    }, 2000);
                });
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.fullName) {
            errors.firstName = "Name is required!";
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (!values.contactno) {
            errors.contactno = "Contact number is required!";
        }

        if (!values.purpose) {
            errors.purpose = "Purpose is required!";
        }

        if (!values.requirements) {
            errors.requirements = "Requirement is required!";
        }

        return errors;
    };

    return (
        <section id="get-in-touch" className="lg:pt-28 py-10 px-4 md:px-10 xl:px-16 bg-white">
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
                    {formSubmit && (
                        <div className='relative text-slate-700 p-4 space-y-4 h-full'>
                            <h1 className='align-middle font-medium text-4xl'>Thank You for your interest.</h1>
                            <h2 className='align-middle text-xl'>We will get back to you soon.</h2>
                            <div className='absolute bottom-0 right-2 rounded-full w-20 h-20 bg-emerald-600 opacity-70 animate-bounce hover:animate-none duration-300 delay-75'></div>
                        </div>
                    )}
                    {!formSubmit && (
                        <form className="flex flex-col justify-evenly h-full gap-3 2xl:gap-6" onSubmit={handleSubmit}>
                            <div className="">
                                <label className="block text-base font-semibold text-[#14183E]">Full Name</label>
                                <input
                                    name="fullName"
                                    id='fullName'
                                    value={formValues.fullName}
                                    onChange={handleChange}
                                    required
                                    type="text"
                                    placeholder="Enter Your Full Name"
                                    className="w-full text-sm mt-1 px-5 py-2 border border-[#ECECEC] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#08A4F7]"
                                />
                            </div>
                            <div className='flex max-sm:flex-col gap-3 md:gap-5 items-center justify-start w-full'>
                                <div className="w-full sm:w-[50%]">
                                    <label className="block text-base font-semibold text-[#14183E]">Email</label>
                                    <input
                                        name="email"
                                        id='email'
                                        value={formValues.email}
                                        onChange={handleChange}
                                        required
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="w-full text-sm mt-1 px-5 py-2 border border-[#ECECEC] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#08A4F7]"
                                    />
                                </div>
                                <div className="w-full sm:w-[50%]">
                                    <label className="block mb-1 text-base font-semibold text-[#14183E]">Contact No</label>
                                    <PhoneInput
                                        containerClass="custom-phone-input-container"
                                        inputClass="custom-phone-input"
                                        required
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
                                        id="contact"
                                        value={formValues.contactno}
                                        onChange={handleContactChange}
                                        country={"in"}
                                        preferredCountries={['in', 'us', 'au']}
                                        enableSearch={true}
                                    />
                                </div>
                            </div>
                            <div className='flex max-sm:flex-col gap-3 md:gap-5 items-center justify-between w-full'>
                                <div className="w-full">
                                    <label className="block text-base font-semibold text-[#14183E]">Contact For</label>
                                    <select
                                        name="purpose"
                                        id='purpose'
                                        value={formValues.purpose}
                                        onChange={handleChange}
                                        className="w-full text-sm mt-1 px-5 py-2 border border-[#ECECEC] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#08A4F7]"
                                    >
                                        <option value='Web Analytics Service'>Web Analytics Service</option>
                                        <option value='Display & Video 360 Self Serve'>Display &amp; Video 360 Self Serve</option>
                                        <option value='Google Cloud Platform'>Google Cloud Platform</option>
                                        <option value='Mobile App Analytics Service'>Mobile App Analytics Service</option>
                                        <option value='Advanced Funnel Optimization'>Advanced Funnel Optimization</option>
                                        <option value='Training'>Training</option>
                                        <option value='Others'>Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className="">
                                <label className="block text-base font-semibold text-[#14183E]">Requirements</label>
                                <textarea
                                    name="requirements"
                                    id='requirements'
                                    value={formValues.requirements}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Requirements"
                                    rows={4}
                                    className="w-full text-sm mt-1 px-5 py-2 border border-[#ECECEC] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#08A4F7]"
                                />
                            </div>
                            <div className="flex justify-start">
                                <button
                                    type="submit"
                                    disabled={showWaiting}
                                    className="mainbutn"
                                >
                                    {showWaiting ? (
                                        <div className='flex justify-center items-center gap-2 md:gpa-4'><ScaleLoader
                                            size={5}
                                            color={"#87CEFA"}
                                            loading={showWaiting}
                                        />Submitting</div>
                                    ) : (
                                        'Submit'
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;




// const formatDate = (date) => {
//     const d = new Date(date);
//     const day = String(d.getDate()).padStart(2, '0');
//     const month = String(d.getMonth() + 1).padStart(2, '0');
//     const year = d.getFullYear();
//     return `${day}-${month}-${year}`;
// };

// const todayDate = formatDate(new Date());



// if (!values.date) {
//     errors.date = "Date is required!";
// }


{/* <div className="w-full">
                                    <label className="block text-base font-semibold text-[#14183E]">Date</label>
                                    <input
                                        name="date"
                                        required
                                        type="date"
                                        value={formValues.date}
                                        onChange={handleChange}
                                        placeholder="dd-mm-yyyy"
                                        className="w-full text-sm mt-1 px-5 py-2 border border-[#ECECEC] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#08A4F7]"
                                    />
                                </div> */}