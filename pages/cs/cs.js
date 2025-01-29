'use client'
// import NewCastdy from "@/Components/NewCastdy";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CgArrowLongLeft } from "react-icons/cg";
import { FaCheck } from "react-icons/fa6";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Head from 'next/head';

export default function Home() {

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
          
            <section className="castdynewbnner bg-[#000] lg:min-h-[400px] font-gilroy relative overflow-hidden">
                <div className="relative px-4 md:px-20 pt-4 md:pt-4 pb-8 md:pb-4">
                    <div className="flex items-center justify-start">
                        <div className='mt-5'>
                            <div className="castdy-return ">
                                <Link href="/case-studies" className="text-[#ffffff] flex items-center gap-1 hover:text-black text-base font-normal tracking-wider rounded-xl py-3 pr-6">
                                    <CgArrowLongLeft />
                                    <button >Back to case-study</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='fff flex items-center justify-center lg:mt-10'>
                        <h1 className='text-[30px] font-bold text-[#ffffff] mt-[10px] mb-[5px]'><span className='text-[#0092f4]'>19%</span> Lower Cost Per Acquisition: <br /> A Case Study in DV360 Ad Optimization</h1>
                    </div>
                </div>
            </section>
            <section className='bg-[#ffffff]'>
                <div className='relative px-4 md:px-20 pt-4 md:pt-4 pb-8 md:pb-4'>
                    <div className='flex lg:flex-nowrap flex-wrap justify-center gap-5'>
                        <div className='lg:w-[60%]'>
                            <div className='vb bg-[#ffffff] shadow-allshadow p-4 my-5'>
                                <div className='text-center flex items-center justify-start gap-4 mb-5'>
                                    <div className='bg-black rounded-[50%] flex items-center justify-center w-[65px] h-[65px]'><img src="/Background.png" alt="" className='w-10 h-10' /></div>
                                    <h3 className='text-[25px] font-gilroy font-semibold text-[#011627]'>Background</h3>
                                </div>
                                <p className='font-gilroy2'>The client is an automotive manufacturer that produces cars, vans, and SUVs. The clients vehicles are sold in New Zealand through a network of authorised dealerships. In New Zealand, the client offers a range of vehicles and is responsible for marketing, sales, and after-sales service of the brand's products.</p>
                            </div>
                            <div className='vb bg-[#ffffff] shadow-allshadow p-4 my-5'>
                                <div className='flex lg:flex-nowrap flex-wrap items-start lg:justify-between justify-center'>
                                    <div className='p-4 lg:w-[33.33%] text-center h-auto'>
                                        <h3 className='text-[28px] font-semibold text-[#034EA2]'>8% </h3>
                                        <p className='text-[17px] font-gilroy2 font-medium text-[#011627]'><span>Improvement</span> in conversion rate for existing customer payment journeys</p>
                                    </div>
                                    <div className='p-4 lg:w-[33.33%] text-center h-auto'>
                                        <h3 className='text-[28px] font-semibold text-[#034EA2]'>100%</h3>
                                        <p className='text-[17px] font-gilroy2 font-medium text-[#011627]'><span>Improvement</span> in overall conversion happening online</p>
                                    </div>
                                    <div className='p-4 lg:w-[33.33%] text-center h-auto'>
                                        <h3 className='text-[28px] font-semibold text-[#034EA2]'>9x</h3>
                                        <p className='text-[17px] font-gilroy2 font-medium text-[#011627]'><span>Decrease</span> in frauds</p>
                                    </div>
                                </div>
                            </div>
                            <div className='vb bg-[#ffffff] shadow-allshadow p-4 my-5'>
                                <div className='flex items-center gap-4 mb-5'>
                                    <div className='bg-black rounded-[50%] flex items-center justify-center w-[65px] h-[65px]'><img src="/Challenge.png" alt="" className='w-12 h-12' /></div>
                                    <h3 className='text-[25px] font-semibold text-[#000]'>Challenge</h3>
                                </div>
                                <div>
                                    <p className='text-[16px] font-medium font-gilroy text-[#000] mr-1'>Client struggled to convert ad viewers into car buyers despite running ads. Analysis revealed two key issues</p>
                                    <ul className='my-4 challenge-list grid sm:grid-cols-1 gap-4'>
                                        <li className='text-[#000] flex items-start bg-[#00000000] px-6 pl-0 pt-0 rounded-[10px]'>
                                            <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                            <div>
                                                <p className='text-[15px] font-gilroy font-medium ml-1'>Ineffective Creative Sizes</p>
                                                <p className='text-[14px] mt-1 font-gilroy2 ml-1'>Certain creatives  weren't driving conversions despite budget allocation.</p>
                                            </div>
                                        </li>
                                        <li className='text-[#000] flex items-start bg-[#00000000] px-6 pl-0 pt-0 rounded-[10px]'>
                                            <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                            <div>
                                                <p className='text-[15px] font-gilroy font-medium ml-1'>Low-Quality Creatives</p>
                                                <p className='text-[14px] mt-1 font-gilroy2 ml-1'>Blurry or low-quality visuals in some ads were hindering user experience.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='vb bg-[#ffffff] shadow-allshadow p-4 my-5'>
                                <div className='flex items-center gap-4 mb-5'>
                                    <div className='bg-black rounded-[50%] flex items-center justify-center w-[65px] h-[65px]'><img src="https://storage.googleapis.com/website-bucket-uploads/static/public/approach.png" alt="approach" className='w-12 h-12' /></div>
                                    <h3 className='text-[25px] font-semibold text-[#000]'>Approach</h3>
                                </div>
                                <p className='text-[16px] text-[#000] font-medium font-gilroy mr-1'>Our data-driven approach leveraged DV360 to optimise ad performance</p>
                                <div>
                                    <ul className='my-4 grid sm:grid-cols-1 gap-4 approach-list'>
                                        <li className='approachli text-[#000] w-full flex items-start justify-start relative overflow-hidden px-5 pl-2'>
                                            <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                            <div className=''>
                                                <p className='text-[15px] font-medium font-gilroy ml-1 mb-2'>Creative Size Analysis</p>
                                                <p className='approachlip text-[14px] font-gilroy2'>We identified the most effective ad sizes (e.g., 300x250, 300x600) for the "Fuel Your Drive" campaign.</p>
                                            </div>
                                        </li>
                                        <li className='approachli text-[#000] w-full flex items-start justify-start relative overflow-hidden px-5 pl-2'>
                                            <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                            <div className=''>
                                                <p className='text-[15px] font-medium font-gilroy ml-1 mb-2'>Budget Optimization</p>
                                                <p className='approachlip text-[14px] font-gilroy2'>Budget was shifted towards well-performing formats, minimizing spending on underperforming ones.</p>
                                            </div>
                                        </li>
                                        <li className='approachli text-[#000] w-full flex items-start justify-start relative overflow-hidden px-5 pl-2'>
                                            <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                            <div className=''>
                                                <p className='text-[15px] font-medium font-gilroy ml-1 mb-2'>High-Quality Creatives</p>
                                                <p className='approachlip text-[14px] font-gilroy2'>We collaborated with the client to replace low-quality visuals with clear, visually appealing elements.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='flex items-center bg-[#ffffff] shadow-allshadow p-4 justify-start my-5'>
                                <div>
                                    <div className='text-center flex items-center justify-start gap-4 mb-5'>
                                        <div className='bg-black rounded-[50%] flex items-center justify-center w-[65px] h-[65px]'><img src="/Result.png" alt="" className='w-12 h-12' /></div>
                                        <h3 className='text-[25px] font-gilroy font-semibold'>Results</h3>
                                    </div>
                                    <div className=''>
                                        <div>
                                            <ul className='grid sm:grid-cols-1 gap-4 my-4'>
                                                <li className='text-[#000] flex items-start bg-[#00000000] px-6 pl-2 pt-0 rounded-[10px]'>
                                                    <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                                    <div>
                                                        <p className='text-[15px] font-gilroy font-medium relative inline-block ml-1 mb-2'>Increased Conversions</p>
                                                        <p className='text-[14px] font-gilroy2'>Effective cost per acquisition (CPA) dropped by 19% compared to the previous month, indicating a significant improvement in conversion rates.</p>
                                                    </div>
                                                </li>
                                                <li className='text-[#000] flex items-start bg-[#00000000] px-6 pl-2 pt-0 rounded-[10px]'>
                                                    <span className='text-[#de668a] mt-[5px]'><FaCheck /></span>
                                                    <div>
                                                        <p className='text-[15px] font-gilroy font-medium relative inline-block ml-1 mb-2'>Enhanced User Experience</p>
                                                        <p className='text-[14px] font-gilroy2'>High-quality creatives provided a more engaging user experience, leading to better ad reception.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-[40%] w-full'>
                            <div className='p-[10px] pr-0 sticky top-3 lg:mt-[10%]'>
                                <div className='py-[15px] px-[10px] pr-0 rounded-xl'>
                                    <div className='flex items-start lg:justify-end justify-center'>
                                        <div className='bg-[#ecf9ff] sample w-[300px] rounded-[15px] p-4'>
                                            <div>
                                                <p className='mb-4 text-[#011627] font-semibold'>Download Case Study</p>
                                            </div>
                                            <div className='relative'>
                                                <div className='rounded-lg'>
                                                    {formSubmit && <div className='relative text-s[#ffffff] p-4 space-y-4 h-full'>
                                                        <h2 className='align-middle font-medium text-4xl'>Thank You for your interest.</h2>
                                                        <h2 className='align-middle text-xl'>We will get back to you soon.</h2>
                                                        <div className='absolute bottom-0 right-2 rounded-full w-20 h-20 bg-emerald-600 opacity-70 animate-bounce hover:animate-none duration-300 delay-75'></div>
                                                    </div>}

                                                    {!formSubmit && <form className="" onSubmit={handleSubmit}>
                                                        <div className="relative mb-6">
                                                            <input type="text" id="firstname" className="block px-2.5 pt-[9px] pb-0 w-full text-sm bg-[#ffffff] text-[#30486a] border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " name="firstName" value={formValues.firstName} onChange={handleChange} />
                                                            <label htmlFor="firstname" className="absolute lg:text-[15px] text-[13px] text-[#30486a]  duration-300 transform -translate-y-4 scale-75 top-[5px] origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Name*</label>
                                                            <p className="text-red-600 text-sm">{formErrors.firstName}</p>
                                                        </div>

                                                        <div className="relative mb-6">
                                                            <input type="emaild" id="email" className="px-2.5 pt-[9px] pb-0 w-full text-sm bg-[#ffffff] text-[#30486a] border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " name="email" value={formValues.email} onChange={handleChange} />
                                                            <label htmlFor="emaild" className="absolute lg:text-[15px] text-[13px] text-[#30486a]  duration-300 transform -translate-y-4 scale-75 top-[5px] origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">E-mail*</label>
                                                            <p className="text-red-600 text-sm">{formErrors.email}</p>
                                                        </div>
                                                        <div className="relative mb-6">
                                                            <PhoneInput className="w-0 mt-4 md:mt-0 text-sm"
                                                                name="contactno" id="contactno" value={formValues.contactno} onChange={handleContactChange}
                                                                country={"in"}
                                                                preferredCountries={['in', 'us', 'au']}
                                                                enableSearch={true}

                                                            />
                                                            <label htmlFor="tel" className="absolute lg:text-[15px] text-[13px] text-[#011627]  duration-300 transform -translate-y-4 scale-75 top-[15px] origin-[0] left-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Contact No</label>
                                                        </div>


                                                        <div className="relative mb-6">
                                                            <input type="Cname" id="company" className="block px-2.5 pt-[9px] pb-0 w-full text-sm bg-[#ffffff] text-[#30486a] border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " name="company" value={formValues.company} onChange={handleChange} />
                                                            <label htmlFor="Cname" className="absolute lg:text-[15px] text-[13px] text-[#30486a]  duration-300 transform -translate-y-4 scale-75 top-[5px] origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Company Name</label>
                                                            <p className="text-red-600 text-sm">{formErrors.company}</p>
                                                        </div>
                                                        <div className='relative w-full mb-6'>
                                                            <select className="px-2.5 pt-[6px] pb-[6px] min-w-full lg:text-[15px] text-[13px] bg-[#ffffff] text-[#30486a] border-0 border-b-2 border-slate-500  focus:outline-none focus:ring-0 focus:border-cyan-500 outline-none" placeholder="Role in Comapany" id="role" name="role" value={formValues.role} onChange={handleChange}>
                                                                <option className='bg-[#ffffff] text-[#000]'>Role in Company</option>
                                                                <option className='bg-[#ffffff] text-[#000]'>Data Analyst</option>
                                                                <option className='bg-[#ffffff] text-[#000]'>Management/Executive</option>
                                                                <option className='bg-[#ffffff] text-[#000]'>Sales</option>
                                                                <option className='bg-[#ffffff] text-[#000]'>Marketing</option>
                                                                <option className='bg-[#ffffff] text-[#000]'>Ecommerce Manager</option>
                                                                <option className='bg-[#ffffff] text-[#000]'>Other</option>
                                                            </select>
                                                            <p className="block text-red-600 text-sm">{formErrors.role}</p>
                                                        </div>
                                                        <div className="text-center">
                                                            <button className="tracking-wider text-[15px] my-4 px-8 py-2 m-auto border border-solid border-[#ffffff] bg-[#BAF63A] text-[#011627] rounded-[12px] hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150">Download CaseStudy</button>
                                                        </div>
                                                    </form>}

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
            <section className='castdynewcontct relative overflow-hidden'>
                <div className='relative px-4 md:px-12 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div className='fg'>
                        <div className='text-[#ffffff] font-work-sans'>
                            <h2 className='mb-5 font-bold text-[28px]'>Get a <strong> Personal Tour </strong> of AnalyticsLiv</h2>
                            <p className='text-[20px] mb-4 font-bold'>Learn how we help agencies and brands plan, execute, and optimize high-performing ad campaigns.</p>
                        </div>
                        <div className="text-left mt-5">
                            <button className="border border-solid border-[#ffffff] bg-[#ffffff] text-[#de668a] hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150 text-base font-normal tracking-wider rounded-xl py-3 px-6">Book Demo</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='font-gilroy relative'>
                <div className='relative px-4 md:px-20 pt-4 md:pt-4'>
                    <div className='border-t border-solid border-[#d9d9d9] py-8'>
                        <div>
                            <div className='mb-4 pl-1'><h3 className='text-[25px] font-bold'>Related case-studies</h3></div>
                        </div>
                        <div className='flex md:flex-nowrap flex-wrap items-start justify-center gap-[30px]'>
                            <div className='md:w-[33.33%] w-full'>
                                <a href="">
                                    <img src="/castdyinner1.png" alt="" className='imgcstdy w-full' />
                                </a>
                                <h4 className='text-[18px] font-medium text-[#212529] my-[10px]'>Optimizing Email Marketing with Custom Data Pipeline</h4>
                            </div>
                            <div className='md:w-[33.33%] w-full'>
                                <a href="">
                                    <img src="/castdyinner2.png" alt="" className='imgcstdy w-full' />
                                </a>
                                <h4 className='text-[18px] font-medium text-[#212529] my-[10px]'>Skyrocket Your Campaign's CTR with a 95% Surge in 14 Days!</h4>
                            </div>
                            <div className='md:w-[33.33%] w-full'>
                                <a href="">
                                    <img src="/castdyinner3.png" alt="" className='imgcstdy w-full' />
                                </a>
                                <h4 className='text-[18px] font-medium text-[#212529] my-[10px]'>Driving the Campaigns in DV360 to Post Click Attribution Success with a 36% reduction in CPI</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}