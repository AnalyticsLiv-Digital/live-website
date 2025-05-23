'use client'
import Link from 'next/link'
import React from 'react'
import Head from 'next/head';
import { FaAngleRight } from "react-icons/fa";
import { useState, useEffect } from 'react'
import Image from 'next/image';
import { FaCheck } from "react-icons/fa6";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const engagement = () => {
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
            <Head>
                <title>AnalyticsLiv - Analytics Engagement-Service</title>
                <meta name="description" content="Experts in GA4, DV360, Google Ads, Meta Ads, Microsoft Ads" />
                <link rel="canonical" href="https://analyticsliv.com/engagement"></link>
            </Head>
            <section className="engagement page_title pb-[15px]">
                <div className='h-full'>
                    <div className="relative px-4 md:px-12 max-[500px]:pt-0 pt-8 md:pt-[10px] pb-8 md:pb-16 h-full z-20">
                        <div className="z-10 flex lg:flex-nowrap items-center flex-wrap justify-between gap-7 pb-8">
                            <div className=" w-full lg:w-1/2 flex items-center lg:justify-start justify-center order-1">
                                <img src="/Engagement_Main_IMG_Updated.png" alt="" className='h-[400px]' />
                            </div>
                            <div className="w-full lg:w-1/2 order-2 lg:mt-8">
                                <div className='en'>
                                    <h1 className="lg:text-[39px] text-center text-[32px] lg:leading-[62px] leading-normal font-gilroy font-normal text-[#006EF5] mb-4">
                                        Empowering Your Growth AnalyticsLiv Engagement Models
                                    </h1>
                                    <div className='flex items-center justify-center gap-5'>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="butn mt-2 uppercase">Contact Us</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                            <p className='text-[18px] leading-[30px] font-normal text-[#000]'>At AnalyticsLiv, we understand that every business has unique data analytics needs. That's why we offer a variety of engagement models to ensure a perfect fit for your specific requirements and budget. Choose the model that best aligns with your project scope, ongoing needs, and desired level of collaboration</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='empreferred'>
                <div className='relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16 z-20'>
                    <div>
                        <div className='w-full m-auto'>
                            <div className='w-full px-4'>
                                <div className='ea1 text-center'>
                                    <h2 className='text-[32px] font-normal font-rbt leading-normal text-[#006EF5] mb-[22px] pb-6'>Choose Your Preferred Engagement Model</h2>
                                    <p className='text-[18px] leading-[30px] font-normal'>Each business problem demands a different solution. To help you address them, we have four distinct engagement models.</p>
                                </div>
                                <div className='pt-10 gap-10 grid lg:grid-cols-2 items-start justify-center'>
                                    <div className='engagement1 flex items-center justify-center font-gilroy'>
                                        <div className=' border border-solid border-[#E2E2E2] rounded-[10px] p-5 xl:h-[495px] xl:w-full lg:w-[440px] max-[499px]:w-[100%] w-[500px] lg:h-[515px] relative'>
                                            <div className='flex items-center justify-between pb-3 border-b border-solid border-[#455a6475]'>
                                                <h6 className='text-[#000] text-[18px] font-semibold leading-normal'>Project-Based Engagement</h6>
                                                <Image
                                                    src="/engagement_project_icon.png"
                                                    width={50}
                                                    height={50}
                                                    alt="Picture of Media_planing"
                                                />
                                            </div>
                                            <div className='pt-4 pb-[10px]'>
                                                <div className=''>
                                                    <h4 className='text-base font-semibold pt-[5px] mb-4 leading-[29px] text-[#202020]'>Best for you if:</h4>
                                                    <ul className='mb-5'>
                                                        <li className='relative mb-[14px] text-[#243238] text-[13px] leading-[22px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Ideal for well-defined projects with a clear scope and timeline.</p>
                                                        </li>
                                                        <li className='relative mb-[14px] text-[#243238] text-[13px] leading-[22px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Perfect for tasks like website analytics implementation, data migration, or specific marketing campaign analysis.</p>
                                                        </li>
                                                        <li className='relative mb-[14px] text-[#243238] text-[13px] leading-[22px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Our team will work closely with you to understand your project goals, develop a customized solution, and deliver high-quality results within the agreed timeframe.</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='lg:absolute xl:bottom-[30px] lg:bottom-[30px] pr-5'>
                                                    <h6 className='p-[10px] bg-[#20dc864f] rounded-[10px] text-[15px] mb-[10px] leading-normal text-[#404040] font-medium inline-block'>
                                                        <img src="/engagemnet_idea_icon.png" alt="" className='h-10 w-10' />
                                                        <p>Example: Implementing Google Analytics 4 with enhanced eCommerce within 1-3 months.</p>
                                                    </h6>

                                                    <div className='mt-4'>
                                                        <Link href="/contact" className='py-[10px] px-[30px] mb-4 text-base font-medium capitalize hover:border hover:border-solid hover:border-txt bg-txt hover:bg-[#fff] hover:text-txt rounded leading-6 text-[#fff] text-center'>I have a project</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='engagement2 flex items-center justify-center font-gilroy'>
                                        <div className=' border border-solid border-[#E2E2E2] rounded-[10px] p-5 xl:h-[495px] xl:w-full lg:w-[440px] max-[499px]:w-[100%] w-[500px] lg:h-[515px] relative'>
                                            <div className='flex items-center justify-between pb-3 border-b border-solid border-[#455a6475]'>
                                                <h6 className='text-[#000] text-[18px] font-semibold leading-normal'>Monthly Retainer</h6>
                                                <Image
                                                    src="/engagemnet_mr_icon.png"
                                                    width={50}
                                                    height={50}
                                                    alt="monthaly_retainer_icon"
                                                />
                                            </div>
                                            <div className='pt-4 pb-[10px]'>
                                                <div className=''>
                                                    <h4 className='text-base font-semibold pt-[5px] mb-4 leading-[29px] text-[#202020]'>Best for you if:</h4>
                                                    <ul className='mb-5'>
                                                        <li className='relative mb-[14px] text-[#243238] text-[13px] leading-[22px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Suitable for ongoing data analysis and reporting needs.</p>
                                                        </li>
                                                        <li className='relative mb-[14px] text-[#243238] text-[13px] leading-[22px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Benefit from consistent support and expertise for a predictable monthly fee.</p>
                                                        </li>
                                                        <li className='relative mb-[14px] text-[#243238] text-[13px] leading-[22px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>We'll provide regular reports, data visualization, and actionable insights to help you make data-driven decisions and optimize your marketing efforts over time.</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='lg:absolute xl:bottom-[30px] lg:bottom-[30px] pr-5'>
                                                    <h6 className='p-[10px] bg-[#20dc864f] rounded-[10px] text-[15px] mb-[10px] leading-normal text-[#404040] font-medium inline-block'>
                                                        <img src="/engagemnet_idea1.png" alt="" className='h-10 w-10' />
                                                        <p>Example: Programmatic ad campaign management to promote brands.</p>
                                                    </h6>
                                                    <div className='mt-4'>
                                                        <Link href="/contact" className='py-[10px] px-[30px] mb-4 text-base font-medium capitalize hover:border hover:border-solid hover:border-txt bg-txt hover:bg-[#fff] hover:text-txt rounded leading-6 text-[#fff] text-center'>I have a project</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='engagement3 flex items-center justify-center'>
                                        <div className=' border border-solid border-[#E2E2E2] rounded-[10px] p-5 xl:h-[510px] xl:w-full lg:w-[440px] max-[499px]:w-[100%] w-[500px] lg:h-[540px] relative'>
                                            <div className='flex items-center justify-between pb-3 border-b border-solid border-[#455a6475]'>
                                                <h6 className='text-[#000] text-[18px] font-semibold leading-normal'>Dedicated Resource</h6>
                                                <Image
                                                    src="/engagemnet_resource.png"
                                                    width={50}
                                                    height={50}
                                                    alt="dedicated_resource_icon"
                                                />
                                            </div>
                                            <div className='pt-4 pb-[10px] '>
                                                <div className=''>
                                                    <h4 className='text-base font-semibold pt-[5px] mb-4 leading-[29px] text-[#202020]'>Best for you if:</h4>
                                                    <ul className='mb-5'>
                                                        <li className='relative mb-[14px] text-[#243238] text-[13px] leading-[22px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Gain access to a dedicated data analyst who becomes an extension of your team.</p>
                                                        </li>
                                                        <li className='relative mb-[14px] text-[#243238] text-[13px] leading-[22px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Perfect for businesses requiring ongoing data analysis support and strategic guidance.</p>
                                                        </li>
                                                        <li className='relative mb-[14px] text-[#243238] text-[13px] leading-[22px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Our dedicated resource will work collaboratively with you, understand your business objectives, and provide tailored data insights to fuel your growth.</p>
                                                        </li>
                                                    </ul>
                                                    <div className='lg:absolute xl:bottom-[30px] lg:bottom-[30px] pr-5'>
                                                        <h6 className='p-[10px] bg-[#20dc864f] rounded-[10px] text-[15px] mb-[10px] leading-normal text-[#404040] font-medium inline-block'>
                                                            <img src="/engagemnet_idea1.png" alt="" className='h-10 w-10' />
                                                            <p>Example: Weekly/Monthly BigQuery reporting to the team for real-time predictive modelling.</p>
                                                        </h6>
                                                        <div className='mt-4'>
                                                            <Link href="/contact" className='py-[10px] px-[30px] mb-4 text-base font-medium capitalize hover:border hover:border-solid hover:border-txt bg-txt hover:bg-[#fff] hover:text-txt rounded leading-6 text-[#fff] text-center'>I have a project</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='engagement4 flex items-center justify-center'>
                                        <div className=' border border-solid border-[#E2E2E2] rounded-[10px] p-5 xl:h-[510px] xl:w-full lg:w-[440px] max-[499px]:w-[100%] w-[500px] lg:h-[540px] relative'>
                                            <div className='flex items-center justify-between pb-3 border-b border-solid border-[#455a6475]'>
                                                <h6 className='text-[#000] text-[18px] font-semibold leading-normal'>Custom Model</h6>
                                                <Image
                                                    src="/engagemnet_custom_icon.png"
                                                    width={50}
                                                    height={50}
                                                    alt="custom_model_icon"
                                                />
                                            </div>
                                            <div className='pt-4 pb-[10px] '>
                                                <div className=''>
                                                    <h4 className='text-base font-semibold pt-[5px] mb-4 leading-[29px] text-[#202020]'>Best for you if:</h4>
                                                    <ul className='mb-5'>
                                                        <li className='relative mb-[14px] text-[#243238] text-[13px] leading-[22px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>Do your needs fall outside the standard models? We can create a customized solution!</p>
                                                        </li>
                                                        <li className='relative mb-[14px] text-[#243238] text-[13px] leading-[22px] font-normal flex items-start gap-1'>
                                                            <span className='text-[#8d5dd9] mt-[5px]'><FaCheck /></span>
                                                            <p>We understand that some businesses have unique requirements. Our team will work with you to design a custom engagement model that perfectly aligns with your specific needs and budget.</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='pt-4 pb-[10px] '>
                                                <div className=''>
                                                    <h4 className='text-[15px] text-[#404040] font-medium pt-[5px] mb-4 leading-[29px]'>If you need a tailor-made engagement model.</h4>
                                                </div>
                                                <div className='mt-4 lg:absolute xl:bottom-[30px] lg:bottom-[35px]'>
                                                    <Link href="/contact" className='py-[10px] px-[30px] mb-4 text-base font-medium capitalize hover:border hover:border-solid hover:border-txt bg-txt hover:bg-[#fff] hover:text-txt rounded leading-6 text-[#fff] text-center'>Schedule A Call</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='engagement'>
                <div className='relative px-4 md:px-12 pt-3 md:pt-0 pb-0 z-20'>
                    <div>
                        <div className='w-full m-auto'>
                            <div className='w-full px-4'>
                                <div className='ea1 text-center'>
                                    <div className='header-form-title text-[32px] font-normal font-rbt leading-normal text-[#006EF5] pb-6'>Choosing the Right Model</div>
                                    <p className='text-base leading-[30px] font-normal mb-4'>Not sure which engagement model is best for you? </p>
                                    <p className='text-[18px] leading-[30px] font-normal'>Don't worry! Contact AnalyticsLiv today for a free consultation. Our team will discuss your business goals and data analytics requirements to recommend the most suitable model to help you achieve your desired outcomes.</p>
                                </div>
                                {/*  */}
                                <div className="relative lg:w-[60%] m-auto rounded-lg p-4 mt-6 font-regular">

                                    <div className="pb-5 md:w-[90%] mx-auto">
                                        <h3 className="text-[20px] font-semibold text-center text-homepagebtn leading-[30px]">Fill the form to get in touch with us</h3>
                                    </div>

                                    {formSubmit && <div className='analyticsliv-form-thankyou relative text-slate-700 p-4 space-y-4 h-full'>
                                        <div className='align-middle font-medium text-4xl'>Thank You for your interest.</div>
                                        <div className='align-middle text-xl'>We will get back to you soon.</div>
                                        <div className='absolute bottom-0 right-2 rounded-full w-20 h-20 bg-emerald-600 opacity-70 animate-bounce hover:animate-none duration-300 delay-75'></div>
                                    </div>}
                                    {!formSubmit && <form className="analyticsliv-form space-y-2 md:space-y-6  md:w-[90%] mx-auto" onSubmit={handleSubmit}>
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
                                            <textarea className="pl-2 mt-4 mx-auto resize-y text-sm w-full overflow-hidden text-gray-700 bg-transparent border-0 border-b-2 border-slate-500  focus:outline-none focus:ring-0 focus:border-cyan-500 outline-none" id="requirements" name="requirements" placeholder="Requirements" value={formValues.requirements} onChange={handleChange}></textarea>
                                            <p className="text-red-600 text-sm">{formErrors.requirements}</p>

                                        </div>
                                        <div className="text-center">
                                            <button className="tracking-wider my-4 px-8 py-2 m-auto bg-slate-900 text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150">Submit</button>
                                        </div>
                                    </form>}




                                </div>


                                {/*  */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='csservicedo relative overflow-hidden font-gilroy'>

                {/* Back-Ground design  */}
                <div className='absolute top-1/2 right-0 w-80 h-80 flex justify-end'>
                    < img className="bgd2 w-52 h-80 rounded-full blur-2xl opacity-[0.5]" />
                </div>
                {/*  */}

                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div>
                        <div className='text-center'>
                            <h2 className='text-[#006EF5] text-[32px] font-normal font-gilroy leading-normal text-center block mb-2'>Benefits of Partnering with AnalyticsLiv</h2>
                            <p className='text-base font-medium font-gilroy leading-[30px] text-center block mb-5'>Regardless of the engagement model you choose, you'll benefit from our core strengths</p>
                        </div>
                        <div>
                            <p className='text-[18px] font-medium font-gilroy leading-[30px] text-center block mb-2'>
                                Customer segmentation allows you to group your audience into distinct categories based on shared characteristics. This helps you
                            </p>
                        </div>
                        <div className=''>
                            <div className='w-full py-7 grid lg:grid-cols-4 sm:grid-cols-2 gap-5'>
                                <div className='fs text-center border border-solid border-[#00000012] rounded-xl p-5'>
                                    <div>
                                        <div className='flex items-center justify-center'>
                                            <img src="/targetreach.png" alt="target_reach_logo" className='h-[70px] w-[70px]' /></div>
                                        <h6 className='text-txt pt-4 mb-6 font-gilroy text-base font-semibold leading-normal'>Experienced Data Analysts</h6>
                                    </div>
                                    <p className='font-gilroy font-normal leading-[26px] text-xs text-[#000]'>Our team has extensive experience in various data analysis techniques and industry best practices.</p>
                                </div>
                                <div className='scnd text-center border border-solid border-[#00000012] rounded-xl p-5'>
                                    <div>
                                        <div className='flex items-center justify-center'>
                                            <img src="/sem_incr.png" alt="target_reach_logo" className='h-[70px] w-[70px]' /></div>
                                        <h6 className='text-txt pt-4 mb-6 font-gilroy text-base font-semibold leading-normal'>Data-Driven Approach</h6>
                                    </div>
                                    <p className='font-gilroy font-normal leading-[26px] text-xs text-[#000]'>We leverage data insights to inform every step of the process, ensuring actionable and ROI-focused solutions.</p>
                                </div>
                                <div className='thrd text-center border border-solid border-[#00000012] rounded-xl p-5'>
                                    <div>
                                        <div className='flex items-center justify-center'>
                                            <img src="/sem2.png" alt="target_reach_logo" className='h-[70px] w-[70px]' /></div>
                                        <h6 className='text-txt pt-4 mb-6 font-gilroy text-base font-semibold leading-normal'>Transparent Communication</h6>
                                    </div>
                                    <p className='font-gilroy font-normal leading-[26px] text-xs text-[#000]'>We believe in open communication and collaboration, keeping you informed throughout the entire engagement.</p>
                                </div>
                                <div className='four text-center border border-solid border-[#00000012] rounded-xl p-5'>
                                    <div>
                                        <div className='flex items-center justify-center'>
                                            <img src="/sem_improve.png" alt="target_reach_logo" className='h-[70px] w-[70px]' /></div>
                                        <h6 className='text-txt pt-4 mb-6 font-gilroy text-base font-semibold leading-normal'>Focus on Your Success</h6>
                                    </div>
                                    <p className='font-gilroy font-normal leading-[26px] text-xs text-[#000]'>Your success is our priority. We're committed to delivering data-driven solutions that empower your business growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='progracont relative overflow-hidden mb-14'>
                <div className='relative px-4 md:px-12 pt-8 pb-8 z-20'>
                    <div className='flex md:flex-nowrap flex-wrap items-center mx-auto'>
                        <div className='md:w-[66%] w-full'>
                            <div>
                                <div>
                                    <div><h3 className='text-[#ffffff] text-[30px] leading-8 md:mb-[20px] mb-6 font-gilroy font-semibold'>Contact us</h3></div>
                                    <div>
                                        <div className='text-[#ffffff] text-base leading-8 md:mb-[15px] mb-6 font-gilroy2 font-medium'>
                                            <p className='text-[22px] mb-3'>Ready to unlock the power of your data?</p>
                                        </div>
                                        <p className='text-[#ffffff] text-[15px] leading-8 md:mb-[15px] mb-6 font-gilroy2 font-medium'>Choose the engagement model that best suits your needs and contact AnalyticsLiv today! Let's discuss how we can help you transform your data into actionable insights and achieve measurable results.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[33%] w-full'>
                            <div className='p-[10px] pl-0'>
                                <div className='w-full flex lg:justify-end justify-center'>
                                    <div className='flex items-center md:justify-end justify-center mr-[25px] mt-[35px]'>
                                        <Link href="/contact?id=programatic-advertising">
                                            <button className="border border-solid border-[#ffffff] bg-[#ffffff] text-[#de668a] text-base font-normal tracking-wider rounded-xl py-3 px-6">Let's Connect</button>
                                        </Link>
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

export default engagement