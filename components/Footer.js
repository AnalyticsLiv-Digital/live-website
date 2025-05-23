'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaPhone, FaSquareFacebook } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaPhoneVolume } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"
// import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link'
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {

    const [email, setEmail] = useState('');
    // const [error, setError] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // if (!email?.trim()) setError('Please enter Email address !')
        await fetch("api/navbar/services", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "type": "footer"
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setIsSubmit(true);
                setIsLoading(false);
                setEmail('')
            })
            .catch((error) => {
                console.log("Error:", error);
                alert('There is some issue sending your data, Please try again later !')
            })

        setIsLoading(false);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <section className='relative font-sans z-20'>
            <div className='absolute left-[43%] sm:left-[48%] pb-[-60px] z-30 opacity-100 top-[-30px] border-[5px] border-[#2B2E3C] rounded-full'>
                <button onClick={scrollToTop}
                    className="relative z-10 px-3 py-[17px] rounded-full bg-white text-[#08A4F7] border border-[#08A4F7] cursor-pointer text-lg font-bold not-italic inline mb-3 transition-all duration-300 ease-linear"
                >
                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Vector%20(4).png' alt='upwards_arrow' />
                </button>
            </div>
            <div className='overflow-hidden relative bg-[#2B2E3C]'>
                <div className='relative pt-10'>
                    <div className=' max-sm:px-2 px-4 md:px-4 lg:px-12 pt-8 md:pt-4 pb-4 relative z-20'>
                        <footer className="bg-cover bg-opacity-60 f">
                            <div className='relative opacity-100 max-sm:px-3'>
                                <div className='flex flex-wrap items-start justify-between pb-7'>
                                    <div className='md:w-full w-full flex flex-wrap max-sm:flex-col sm:justify-around items-start max-md:justify-start justify-around'>
                                        <div className='right-footer1 pb-7 sm:pt-0 pt-5'>
                                            <div className='text-lg text-[#ffffff] font-semibold leading-[1.3em] max-sm:mb-2 sm:mb-4 max-sm:pb-1 max-sm:border-b max-sm:border-b-gray-500'>What We Do</div>
                                            <div className=''>
                                                <ul className='tracking-wider text-start max-sm:flex max-sm:flex-wrap max-sm:gap-3'>
                                                    <li className='py-1 md:pb-2 text-[13px] lg:text-base opacity-[60%] text-[#efefef] font-normal leading-5'> <Link href="/services/programatic-advertising">Advertising</Link> </li>
                                                    <li className='py-1 md:pb-2 text-[13px] lg:text-base opacity-[60%] text-[#efefef] font-normal leading-5'> <Link href="/services/analytics">Analytics</Link> </li>
                                                    <li className='py-1 md:pb-2 text-[13px] lg:text-base opacity-[60%] text-[#efefef] font-normal leading-5'> <Link href="/services/data-science">Data Solutions</Link> </li>
                                                    <li className='py-1 md:pb-2 text-[13px] lg:text-base opacity-[60%] text-[#efefef] font-normal leading-5'> <Link href="/services/training">Training</Link> </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='right-footer2 pb-7 sm:pt-0'>
                                            <div className='text-lg text-[#ffffff] font-semibold leading-[1.3em] max-sm:mb-2 sm:mb-4 max-sm:pb-1 max-sm:border-b max-sm:border-b-gray-500'>Company</div>
                                            <div className=''>
                                                <ul className='tracking-wider text-start max-sm:flex max-sm:flex-wrap max-sm:gap-3'>
                                                    {/* <li className='py-1 md:pb-2 text-[13px] lg:text-base opacity-[60%] text-[#efefef] font-normal leading-5'> <Link href="/about-us?id=vision">Vision</Link> </li>
                                                    <li className='py-1 md:pb-2 text-[13px] lg:text-base opacity-[60%] text-[#efefef] font-normal leading-5'> <Link href="/about-us?id=mission">Mission</Link> </li> */}
                                                    <li className='py-1 md:pb-2 text-[13px] lg:text-base opacity-[60%] text-[#efefef] font-normal leading-5'> <Link href="/about-us?id=vision">Our Story</Link> </li>
                                                    <li className='py-1 md:pb-2 text-[13px] lg:text-base opacity-[60%] text-[#efefef] font-normal leading-5'> <Link href="/about-us?id=mission">Join Us</Link> </li>
                                                    <li className='py-1 md:pb-2 text-[13px] lg:text-base opacity-[60%] text-[#efefef] font-normal leading-5'> <Link href="/about-us">About Team</Link> </li>
                                                    <li className='py-1 md:pb-2 text-[13px] lg:text-base opacity-[60%] text-[#efefef] font-normal leading-5'> <Link href="/about-us">Testimonial</Link> </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='right-footer2 pb-7 sm:pt-0'>
                                            <div className='text-lg text-[#ffffff] font-semibold leading-[1.3em] max-sm:mb-2 sm:mb-4 max-sm:pb-1 max-sm:border-b max-sm:border-b-gray-500'>Quick Links</div>
                                            <div className=''>
                                                <ul className='tracking-wider text-start max-sm:flex max-sm:flex-wrap max-sm:gap-3'>
                                                    <li className='py-1 md:pb-2 text-[13px] lg:text-base opacity-[60%] text-[#efefef] font-normal leading-5'> <Link href="/blogs">Blogs</Link> </li>
                                                    <li className='py-1 md:pb-2 text-[13px] lg:text-base opacity-[60%] text-[#efefef] font-normal leading-5'> <Link href="/case-studies">Case Study</Link> </li>
                                                    <li className='py-1 md:pb-2 text-[13px] lg:text-base opacity-[60%] text-[#efefef] font-normal leading-5'> <Link href="/careers">Careers</Link> </li>
                                                    <li className='py-1 md:pb-2 text-[13px] lg:text-base opacity-[60%] text-[#efefef] font-normal leading-5'> <Link href="/contact">Contact Us</Link> </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="right-footer2 md:pb-7 h-full sm:pt-0">
                                            <div className="text-[21px] font-semibold text-white">Contact Us</div>
                                            <div className="relative w-full max-sm:max-w-[380px] max-w-[400px] pt-2.5 md:pt-7">

                                                {isSubmit ?
                                                    <div className='analyticsliv-footer-thankyou bg-gray-100 p-3 text-center sm:min-w-[300px] sm:max-w-[310px] rounded-[10px] text-gray-800 font-medium text-base'>
                                                        <div>Thank You for Connecting !</div>
                                                    </div>
                                                    :

                                                    <div className="analyticsliv-footer flex items-center">
                                                        <form onSubmit={handleSubmit}>
                                                            <input
                                                                required
                                                                type="email"
                                                                placeholder="Enter your email"
                                                                value={email}
                                                                onChange={handleEmailChange}
                                                                className="flex-grow h-10 xl:h-10 pl-2 pr-1 sm:pl-4 rounded-l-[8px] border border-gray-300 focus:outline-none"
                                                            />
                                                            <button className={`h-10 xl:h-10 px-4 sm:px-6 text-base font-medium bg-[#08A4F7] text-white rounded-r-[8px] transition
                                                                ${isLoading ? 'cursor-not-allowed' : ''}`} disabled={isLoading}>
                                                                Submit
                                                            </button>
                                                        </form>
                                                    </div>
                                                }
                                                {/* {error && <>{error}</>} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='left-footer w-full pb-7 px-3 lg:px-6 2xl:px-9'>
                                    <div className='text-left'>
                                        <div className='relative flex max-sm:flex-col md:pr-14 justify-around text-white'>
                                            <p className='text-[21px] max-md:text-base max font-semibold leading-[1.3em] mb-4 text-white'>Contact Us</p>
                                            <div className='mb-4'>
                                                <div className='text-[13px] 2xl:text-[14px] font-semibold leading-5 text-white'>For Business Enquiries</div>
                                                <div className='max-[381px]:flex-wrap max-sm:flex max-[381px]:gap-2 max-[400px]:gap-5 max-sm:gap-12 max-sm:w-[90dvw] py-2'>
                                                    <div className='ml-0 flex items-start [381px]:mb-[3px] max-[381px]:gap-2'>
                                                        <IoIosMail className='opacity-[30%] w-[21px] h-[22px] sm:mr-[7px]' />
                                                        <div className='text-[13px] font-normal leading-5'>
                                                            <a href="mailto:sales@analyticsliv.com" className='analyticsliv-email text-[#efefef]'>sales@analyticsliv.com</a>
                                                        </div>
                                                    </div>
                                                    <div className='ml-0 msm:pt-2 flex items-center '>
                                                        <FaPhone className='opacity-[30%] w-[18px] h-[18px] mr-[7px] max-[374px]:ml-1' />
                                                        <span className='analyticsliv-contact text-[13px] font-normal leading-5 text-[#efefef]'><a href="tel:+918320576622">+91 83205 76622</a></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='mb-4'>
                                                <div className='text-[13px] 2xl:text-[14px] font-semibold leading-5 text-white'>For Job Enquiries</div>
                                                <div className='max-[381px]:flex-wrap max-sm:flex max-[381px]:gap-2 max-[400px]:gap-5 max-sm:gap-12 max-sm:w-[90dvw] py-2'>
                                                    <div className='ml-0 flex items-start [381px]:mb-[3px] max-[381px]:gap-2'>
                                                        <IoIosMail className='opacity-[30%] w-[21px] h-[22px] sm:mr-[7px]' />
                                                        <div className='text-[13px] font-normal leading-5'>
                                                            <a href="mailto:hr@analyticsliv.com" className='analyticsliv-email text-[#efefef]'>hr@analyticsliv.com</a>
                                                        </div>
                                                    </div>
                                                    <div className='ml-0 msm:pt-2 flex items-center '>
                                                        <FaPhone className='opacity-[30%] w-[18px] h-[18px] mr-[7px] max-[374px]:ml-1' />
                                                        <span className='analyticsliv-contact text-[13px] font-normal leading-5 text-[#efefef]'><a href="tel:+919998835732">+91 99988 35732</a></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='mb-4'>
                                                <div className='text-[13px] 2xl:text-[14px] font-semibold leading-5 text-white'>For Other Support</div>
                                                <div className='max-[381px]:flex-wrap max-sm:flex max-[381px]:gap-2 max-[400px]:gap-5 max-sm:gap-12 max-sm:w-[90dvw] py-2'>
                                                    <div className='ml-0 flex items-start [381px]:mb-[3px] max-[381px]:gap-2'>
                                                        <IoIosMail className='opacity-[30%] w-[21px] h-[22px] sm:mr-[7px]' />
                                                        <div className='text-[13px] font-normal leading-5'>
                                                            <a href="mailto:support@analyticsliv.com" className='analyticsliv-email text-[#efefef]'>support@analyticsliv.com</a>
                                                        </div>
                                                    </div>
                                                    <div className='ml-0 msm:pt-2 flex items-center '>
                                                        <FaPhone className='opacity-[30%] w-[18px] h-[18px] mr-[7px] max-[374px]:ml-1' />
                                                        <span className='analyticsliv-contact text-[13px] font-normal leading-5 text-[#efefef]'><a href="tel:+918320576622">+91 83205 76622</a></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='absolute max-[530px]:hidden bottom-[20px] sm:hidden md:block md:bottom-[-50px] right-[0px] lg:right-[3%]'>
                                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/boy_footer.png' alt='boy_footer' className='relative' />
                                                </div>
                                            </div>


                                        </div>
                                        <div className='flex items-center pt-5 md:pt-14 pb-4 justify-center'>
                                            <div className='bg-[#888888] h-0.5 w-full mr-2 sm:mr-10'></div>
                                            <div className='social flex items-center justify-center max-sm:justify-evenly lg:pl-0 -mr-[5px] text-white'>
                                                <a title='Facebook' href="https://m.facebook.com/100070503960704/"><FaSquareFacebook className='w-[30px] h-[30px] opacity-[50%] mr-2 sm:mr-3.5' /></a>
                                                <a title='Twitter' href="https://twitter.com/AnalyticsLiv"><FaSquareXTwitter className='w-[30px] h-[30px] opacity-[50%] mx-2 sm:mx-3.5' /></a>
                                                <a title='Instagram' href="https://www.instagram.com/analyticsliv_digital/"><FaInstagramSquare className='w-[30px] h-[30px] opacity-[50%] mx-2 sm:mx-3.5' /></a>
                                                <a title='Linkedin' href="https://in.linkedin.com/company/analytics-liv-digital/"><FaLinkedin className='w-[30px] h-[30px] opacity-[50%] mx-2 sm:mx-3.5' /></a>
                                                <a title='Youtube' href="https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw"><FaYoutube className='w-[30px] h-[30px] opacity-[50%] mx-2 sm:mx-3.5' /></a>
                                            </div>
                                            <div className='bg-[#888888] h-0.5 w-full ml-2 sm:ml-10'></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center pb-4 justify-center opacity-[50%]'>
                                    <div className='text-[14px] font-normal text-white'>© Created by Analytics Liv Digital LLP, In Collaboration With Collabo LLC, All rights reserved.&nbsp;&nbsp;
                                        <br className='lg:hidden'></br><Link href="/privacy-policy" className='text-blue-200'>Privacy Policy</Link>
                                        &nbsp; | &nbsp;
                                        <Link href="/terms-and-conditions" className='text-blue-200'>Terms & Conditions&nbsp; | &nbsp;</Link>
                                        <br className='sm:hidden'></br><Link href="/refund-policy" className='text-blue-200'>Refund Policy</Link>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer




// {/* <div className="right-footer2 pb-7 h-full sm:pt-0">
//                                             <div className="text-[21px] font-semibold text-white">Contact Us</div>
//                                             <div className="relative w-full max-w-[300px] md:max-w-[400px]">
//                                                 <input
//                                                     type="email"
//                                                     placeholder="Enter your email"
//                                                     className="h-[46px] focus:border-none xl:h-[49px] w-full pl-4 pr-[80px] rounded-[8px] border border-gray-300"
//                                                 />
//                                                 <button className="absolute top-1 left-[257.5px] 2xl:left-[257px] translate-y-[-50px] xl:translate-y-[-53px] mainbutn">
//                                                     Submit
//                                                 </button>
//                                             </div>
//                                         </div> */}


// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import { FaSquareFacebook } from "react-icons/fa6"
// import { FaLinkedin } from "react-icons/fa"
// import { FaYoutube } from "react-icons/fa"
// import { FaInstagramSquare } from "react-icons/fa"
// import { FaPhoneVolume } from "react-icons/fa6"
// import { IoIosMail } from "react-icons/io"
// // import { FaLocationDot } from "react-icons/fa6";
// import Link from 'next/link'
// import { FaSquareXTwitter } from "react-icons/fa6";

// const Footer = () => {
//     const backgroundImageUrl = 'url("/src/assets/MAP.png")';

//     return (
//         <section className='homeftr relative overflow-hidden font-gilroy z-20'>
//             <div className='inrhomeftr relative'>

//                 <div className=' max-sm:px-2 px-4 md:px-12 pt-8 md:pt-4 pb-4 relative z-20'>
//                     <footer className="bg-cover bg-opacity-60 f">
//                         <div className='relative opacity-100 max-sm:px-3'>
//                             <div className='text-end flex items-center justify-start my-4 pb-5'>
//                                 <a href="/" className='inline-block'>
//                                     <img src="/AnalyticsLiv 3.png" alt="" className='w-[130px]' />
//                                 </a>
//                             </div>
//                             <div className='flex flex-wrap items-start justify-between pb-7'>
//                                 <div className='left-footer md:w-2/5 w-full pb-7'>
//                                     <div className='text-left'>
//                                         <div className='relative text-white'>
//                                             <p className='text-[15px] font-bold leading-[1.3em] mb-4 uppercase text-white'>Connect with us</p>
//                                             <div className='flex items-center justify-start'>
//                                                 <div>
//                                                     <div className='mb-4'>
//                                                         <div className='text-[13px] font-semibold leading-5 text-white'>For Business Enquiries</div>
//                                                         <div className='max-[381px]:flex-wrap max-sm:flex max-[381px]:gap-2 max-[400px]:gap-5 max-sm:gap-12 max-sm:w-[90dvw] py-2'>
//                                                             <div className='ml-0 flex items-start [381px]:mb-[3px] max-[381px]:gap-2'>
//                                                                 <IoIosMail className='w-[21px] h-[22px] sm:mr-[7px]' />
//                                                                 <div className='text-[13px] font-normal leading-5'>
//                                                                     <a href="mailto:sales@analyticsliv.com" className='text-[#efefef]'>sales@analyticsliv.com</a>
//                                                                 </div>
//                                                             </div>
//                                                             <div className='ml-0 flex items-center '>
//                                                                 <FaPhoneVolume className='w-[18px] h-[18px] mr-[7px] max-[374px]:ml-1' />
//                                                                 <span className='text-[13px] font-normal leading-5 text-[#efefef]'><a href="tel:+918320576622">+91 83205 76622</a></span>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className=' max-sm:flex max-[374px]:flex-wrap max-[374px]:gap-2 max-[381px]:gap-5 max-[400px]:gap-9 max-sm:gap-16'>
//                                                         <div className='ml-0 mb-4'>
//                                                             <p className='text-[13px] font-semibold leading-5 text-white'>For Job Enquiries</p>
//                                                             <div className=' flex items-start  max-sm:py-1'>
//                                                                 <IoIosMail className='w-[21px] h-[22px] mr-[7px]' />
//                                                                 <div className='text-[13px] font-normal leading-5'>
//                                                                     <a href="mailto:hr@analyticsliv.com" className='text-[#efefef]'>hr@analyticsliv.com</a>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div className='ml-0 mb-4'>
//                                                             <p className='text-[13px] font-semibold leading-5 text-white'>For Other Support</p>
//                                                             <div className='flex items-start max-md:py-1'>
//                                                                 <IoIosMail className='w-[21px] h-[22px] mr-[7px]' />
//                                                                 <div className='text-[13px] font-normal leading-5'>
//                                                                     <a href="mailto:support@analyticsliv.com" className='text-[#efefef]'>support@analyticsliv.com</a>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className='social flex items-center justify-start max-sm:justify-evenly lg:pl-0 -mr-[5px] text-white'>
//                                             <a href="https://m.facebook.com/100070503960704/"><FaSquareFacebook className='w-[30px] h-[30px] mt-4 mr-2' /></a>
//                                             <a href="https://twitter.com/AnalyticsLiv"><FaSquareXTwitter className='w-[30px] h-[30px] mt-4 mx-2' /></a>
//                                             <a href="https://in.linkedin.com/company/analytics-liv-digital/"><FaLinkedin className='w-[30px] h-[30px] mt-4 mx-2' /></a>
//                                             <a href="https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw"><FaYoutube className='w-[30px] h-[30px] mt-4 mx-2' /></a>
//                                             <a href="https://www.instagram.com/analyticsliv_digital/"><FaInstagramSquare className='w-[30px] h-[30px] mt-4 mx-2' /></a>
//                                         </div>
//                                     </div>
//                                     <div className=' grid grid-cols-2 items-center justify-center mt-7 md:mb-0 rounded-[10px] shadow-foter1 lg:p-4 lg:w-9/12 sm:w-[90%]'>
//                                         <div className='sm:pr-5'>
//                                             <Image
//                                                 src="/Help.png"
//                                                 width={200}
//                                                 height={200}
//                                                 alt="Picture of the author"
//                                                 priority={true}
//                                                 className='mx-auto my-6'
//                                             />
//                                         </div>
//                                         <div className='text-center'>
//                                             <Link href="/contact"><button className='ftbutn'>LET'S CONNECT</button></Link>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className='md:w-3/5 w-full flex flex-wrap items-start justify-end'>
//                                     <div className='right-footer1  sm:w-[33.33%] w-full pb-7 sm:pt-0 pt-5'>
//                                         <div className='text-[15px] text-[#ffffff] font-bold leading-[1.3em] max-sm:mb-2 sm:mb-4 max-sm:pb-1 uppercase max-sm:border-b max-sm:border-b-gray-500'>What We Do</div>
//                                         <div className=''>
//                                             <ul className='uppercase tracking-wider text-start max-sm:flex max-sm:flex-wrap max-sm:gap-3'>
//                                                 <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/services/programatic-advertising">Advertising</Link> </li>
//                                                 <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/services/analytics">Analytics</Link> </li>
//                                                 <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/services/data-science">Data Solutions</Link> </li>
//                                                 <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/services/training">Training</Link> </li>
//                                             </ul>
//                                         </div>
//                                     </div>

//                                     <div className='right-footer2  sm:w-[33.33%] w-full pb-7 sm:pt-0'>
//                                         <div className='text-[15px] text-[#ffffff] font-bold leading-[1.3em] max-sm:mb-2 sm:mb-4 max-sm:pb-1 uppercase max-sm:border-b max-sm:border-b-gray-500'>Company</div>
//                                         <div className=''>
//                                             <ul className='uppercase tracking-wider text-start max-sm:flex max-sm:flex-wrap max-sm:gap-3'>
//                                                 <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/about-us?id=vision">Vision</Link> </li>
//                                                 <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/about-us?id=mission">Mission</Link> </li>
//                                                 <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/about-us">About Team</Link> </li>
//                                             </ul>
//                                         </div>
//                                     </div>

//                                     <div className='right-footer2  sm:w-[33.33%] w-full pb-7 sm:pt-0'>
//                                         <div className='text-[15px] text-[#ffffff] font-bold leading-[1.3em] max-sm:mb-2 sm:mb-4 max-sm:pb-1 uppercase max-sm:border-b max-sm:border-b-gray-500'>Quick Links</div>
//                                         <div className=''>
//                                             <ul className='uppercase tracking-wider text-start max-sm:flex max-sm:flex-wrap max-sm:gap-3'>
//                                                 <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/blogs">Blogs</Link> </li>
//                                                 <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/case-studies">Case Study</Link> </li>
//                                                 <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/careers">Careers</Link> </li>
//                                                 <li className='py-1 md:pb-2 text-[13px] text-[#efefef] font-normal leading-5'> <Link href="/contact">Contact Us</Link> </li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>

//                             <div className='pb-4'>
//                                 <div className='bg-[#fdfdfd] w-full h-0.5'></div>
//                             </div>

//                             <div className='flex items-center justify-center'>
//                                 <div className='text-[14px] font-normal text-white'>© Created by Analytics Liv Digital LLP, In Collaboration With Collabo LLC, All rights reserved.
//                                     &nbsp;&nbsp;<Link href="/privacy-policy" className='text-blue-200'>Privacy Policy</Link>
//                                     &nbsp; | &nbsp;
//                                     <Link href="/terms-and-conditions" className='text-blue-200'>Terms & Conditions</Link>
//                                     &nbsp; | &nbsp;
//                                     <Link href="/refund-policy" className='text-blue-200'>Refund Policy</Link>
//                                 </div>
//                             </div>

//                         </div>
//                     </footer>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Footer