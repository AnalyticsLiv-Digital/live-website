import Head from 'next/head'
import React, { useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react'
import { Router, useRouter } from 'next/router';
import { ScaleLoader } from 'react-spinners'
import { generateBreadcrumbSchemas, generateCaseStudySchema } from '../../utils/schema';

const index = ({ casestudyDat }) => {
    var cd = casestudyDat.data[0];
    useEffect(() => {
        AOS.init();
        console.log(cd.open);
    }, []);
    const initialValues = { fullName: '', email: '', company: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showWaiting, setShowWaiting] = useState(false);
    const [selected, setSelected] = useState("");
    const [formSubmit, setFormSubmit] = useState(false);
    const [formFixed, setFormFixed] = useState(false);

    const csSchema = generateCaseStudySchema(cd);

    const formRef = useRef(null);

    function formatDescription(description) {
        return description?.split(/(\*+)/g).reduce((acc, chunk, index, arr) => {
            let trimmedChunk = chunk?.trim();
            if (!trimmedChunk) return acc;

            // Handle single '*' for paragraph breaks
            if (/^\*(?!\*)/.test(trimmedChunk)) {
                acc?.push(
                    <p key={index} className='text-sm 2xl:text-base text-black mt-4'>
                        {trimmedChunk?.replace(/^\*/, '')?.trim()}
                    </p>
                );
                return acc;
            }

            // Handle multiple '*' for bullet points
            if (/^\*{2,}/.test(trimmedChunk)) {
                const stars = trimmedChunk?.length; // Count number of stars
                const nextChunk = arr[index + 1]?.trim() || '';
                const indentation = Math.min((stars - 2) * 30, 100); // Adjust indentation

                let bulletStyle = "w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-[#0E1947]";
                if (stars === 3) bulletStyle = 'rounded-full  bg-[#0E1947]'; // Square bullet (■)
                if (stars === 4) bulletStyle = 'border border-[#0E1947] rounded-full'; // Empty round bullet (◯)

                let boldText = '';
                let remainingText = nextChunk;

                // Check if there is a colon and split accordingly
                if (nextChunk?.includes(':')) {
                    const match = nextChunk?.match(/^(.*?):(.*)/);
                    if (match) {
                        boldText = match[1]?.trim();
                        remainingText = match[2]?.trim();
                    }
                }

                acc?.push(
                    <div key={index} className='flex items-start space-x-2 mt-2' style={{ marginLeft: `${indentation}px` }}>
                        <div className={`w-2 h-2 mt-1.5 2xl:mt-2 min-w-[8px] ${bulletStyle}`}></div>
                        <p className='text-sm 2xl:text-base text-black'>
                            {boldText ? <span className='font-semibold'>{boldText}</span> : null}
                            {boldText ? ': ' : ''}
                            {remainingText}
                        </p>
                    </div>
                );

                // Skip the next chunk since it's already processed
                arr[index + 1] = '';
                return acc;
            }

            // Handle normal text
            acc?.push(
                <p key={index} className='text-sm 2xl:text-base text-black mt-4'>{trimmedChunk}</p>
            );

            return acc;
        }, []);
    }

    useEffect(() => {
        const handleScroll = () => {
            const form = formRef.current;
            const caseStudy = document.getElementById("caseStudySection");
            form.style.position = "absolute";
            form.style.top = "120px";
            form.style.right = "3%";

            if (form && caseStudy) {
                const formTop = form.getBoundingClientRect().top;
                const caseStudyTop = caseStudy.getBoundingClientRect().top;

                if (formTop <= -80 && caseStudyTop > form.offsetHeight) {
                    form.style.position = "fixed";
                    form.style.top = "120px";
                    form.style.right = "3%";
                } else if (caseStudyTop <= form.offsetHeight) {
                    form.style.position = "absolute";
                    form.style.top = `${window.scrollY + caseStudyTop - form.offsetHeight
                        }px`;
                } else {
                    form.style.position = "absolute";
                    form.style.top = "320px";
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
    };


    const dataLayerpush = () => {
        dataLayer.push({
            event: 'free_casestudy_download',
            eventCategory: cd.title,
            eventAction: 'download'
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        dataLayerpush()
    };

    useEffect(() => {

        let headerSize = () => {

            const totalScroll = document.documentElement.scrollTop;

            if ((totalScroll > 50)) {
                setFormFixed(true);
            } else if ((totalScroll < 45)) {
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
            dataLayer.push({
                event: 'casestudy_download',
                eventCategory: cd.title,
                eventAction: 'download'
            });
            fetch('/api/casestudylead', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "fullName": formValues.fullName,
                    "email": formValues.email,
                    "casestudy": cd.title,
                    "company": formValues.company,
                    "id": casestudyDat.data[0].id
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
                    setShowWaiting(false);
                    alert('there is some issue , please try again !')
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

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (!values.company) {
            errors.company = "Company is required!";
        }

        return errors;
    };

    var url = "https://analyticsliv.com/case-studies/" + cd.slug;

    const breadcrumbSchema = generateBreadcrumbSchemas(url);

    return (<>
        {/* <Head>
            <title>AnalyticsLiv - Case Sudies</title>
            <link rel="canonical" href={url}></link>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
            />
        </Head> */}
        <Head>
            <meta name="description" content={cd &&
                (cd?.metadescription && cd?.metadescription !== '' ? cd?.metadescription : cd?.description)
            } />
            <title>
                {cd &&
                    (cd?.metatitle && cd?.metatitle !== '' ? cd?.metatitle : cd?.title)
                }
            </title>
            <link rel="canonical" href={url}></link>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(csSchema),
                }}
            />

            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
        </Head>
        {showWaiting && <div className="fixed flex backdrop-blur top-0 left-0 right-0 z-40 w-full p-4 md:overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"><ScaleLoader
            color="#271d90"
            loading
            size={100}
            className="m-auto align-middle"
        /></div>}
        <div className=' overflow-hidden'>
            <section className="relative pb-12">
                <div className="bg-header-linear relative lg:flex max-lg:flex-col justify-center lg:justify-between items-center pl-[5%] lg:min-h-[400px]">
                    <div className="lg:w-[50%] xl:w-[55%] py-10 flex flex-col gap-8 lg:gap-10">
                        {/* <h1 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-[35px] text-white font-bold">{cd?.title}</h1> */}
                        <h1 className="text-2xl lg:text-2xl xl:text-3xl 2xl:text-[35px] text-white font-bold">
                            {cd?.title?.includes(":")
                                ? cd.title.replace(":", ":\n").split("\n").map((text, index) => (
                                    <React.Fragment key={index}>
                                        {text}
                                        {index === 0 && <br className='max-sm:hidden' />}
                                    </React.Fragment>
                                ))
                                : cd?.title}
                        </h1>

                        <p className="text-xs md:text-[14px] text-white">
                            {cd?.content?.[0]?.description}
                        </p>
                        <div className="flex items-center justify-start gap-3 sm:gap-7">
                            {cd?.clientLogo ?
                                <div
                                // onClick={scrollToDownload}
                                //     className="bg-white px-2 sm:px-4 w-max py-2 md:px-4 md:py-[6.5px] xl:px-4 xl:py-[8px] 2xl:px-4 2xl:py-[8px] rounded-[5px]
                                // text-[#0E1947] text-[11px] sm:text-sm md:text-base 2xl:text-lg sm:hover:underline md:hover:text-[16.2px] 2xl:hover:text-[18.2px] font-bold"
                                >
                                    <img src={cd?.clientLogo} className="max-sm:w-[80%]" alt='AnalyticsLiv blogs' />
                                </div>
                                : <div>

                                </div>
                            }
                            {/* // onClick={scrollToDownload}
                                //     className="flex items-center justify-center gap-1 sm:gap-3 bg-white px-2 py-3 sm:px-4 w-max sm:py-2 md:px-4 md:py-[5px] xl:px-4 xl:py-[4px] 2xl:px-4 2xl:py-[7px] rounded-[5px]
                                // text-[#0E1947] text-[10px] sm:text-sm md:text-base 2xl:text-lg sm:hover:underline md:hover:text-[16.2px] 2xl:hover:text-[18.2px] font-bold"
                                     */}
                            {cd?.clientTestimonial ?
                                <a href={cd?.testimonialVedioUrl}
                                    target="_blank"
                                >
                                    <img
                                        src={cd?.clientTestimonial}
                                        className="max-sm:w-[80%]"
                                        alt='AnalyticsLiv blogs'
                                    />
                                </a>
                                :
                                <div></div>
                            }
                        </div>
                    </div>

                    {cd?.mainImage ?
                        <div className="lg:w-[45%] mr-[5%] max-lg:hidden flex flex-col items-end relative">
                            <img
                                src={cd?.mainImage}
                                alt={cd?.title}
                                className="mt-7 z-30 mr-5 xl:mr-16"
                            />
                            <img
                                src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Ellipse%203563.png"
                                alt="Casestudy"
                                className="z-10 absolute top-[80px] xl:top-[85px] right-[-3%] xl:right-[2%]"
                            />
                        </div>
                        :
                        <div className="lg:w-[45%] mr-[5%] max-lg:hidden flex flex-col items-end relative">
                            <img
                                src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/CaseStufy_Girl.png"
                                alt={cd?.title}
                                className="mt-7 z-30 mr-5 xl:mr-16"
                            />
                            <img
                                src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Ellipse%203563.png"
                                alt="Casestudy"
                                className="z-10 absolute top-[105px] right-[-3%] xl:right-[2%]"
                            />
                        </div>
                    }

                </div>
                <div
                    id="formContainer"
                    ref={formRef}
                    className="absolute top-[320px] right-[3%] lg:w-[330px] xl:w-[400px] z-40 max-lg:hidden 2xl:w-[425px] bg-white shadow-csFormShadow rounded-[5px]"
                >
                    {formSubmit ? (
                        <div className="analyticsliv-form-thankyou relative p-7 space-y-4 h-full">
                            <h3 className="align-middle font-medium text-4xl text-[#0E1947]">
                                Thank You for your interest.
                            </h3>
                            <h2 className="align-middle text-xl text-[#0E1947]">
                                The download link for this case study has been sent to the
                                email-id provided.
                            </h2>
                            <div>
                                <a href="#" className="text-blue-500 underline">
                                    Click here
                                </a>{" "}
                                to go to Home Page
                            </div>
                            <div className="absolute bottom-0 right-2 rounded-full w-20 h-20 bg-emerald-600 opacity-70 animate-bounce hover:animate-none duration-300 delay-75"></div>
                        </div>
                    ) : (
                        <form className="analyticsliv-form space-y-4 md:space-y-4 px-3 md:px-4 py-4 md:py-4 lg:py-[20px] lg:px-[30px] xl:py-[40px] xl:px-[40px]">
                            <div className="text-lg leading-[20px] 2xl:text-[20px] text-[#0E1947] font-semibold text-center">
                                Enter your details to download the casestudy.
                            </div>
                            <div className="relative mx-auto">
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-[#08A4F7] rounded-[5px] appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                                    placeholder=" "
                                    required
                                    value={formValues.fullName}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="fullName"
                                    className="absolute text-xs text-[#08A4F7] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                >
                                    Full Name*
                                </label>
                                <p className="text-red-600 text-sm">
                                    {formErrors.fullName}
                                </p>
                            </div>

                            <div className="relative mx-auto">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border border-[#08A4F7] rounded-[5px] appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                                    // className="block px-2.5 pb-1.5 pt-2.5 w-full text-sm text-gray-900 bg-transparent  border border-[#08A4F7] rounded-[5px] appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                                    placeholder=" "
                                    required
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute text-xs text-[#08A4F7] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                >
                                    E-mail*
                                </label>
                                <p className="text-red-600 text-sm">{formErrors.email}</p>
                            </div>

                            <div className="relative mx-auto">
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border border-[#08A4F7] rounded-[5px] appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                                    placeholder=" "
                                    required
                                    value={formValues.company}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="company"
                                    className="absolute text-xs text-[#08A4F7]  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                >
                                    Company*
                                </label>
                                <p className="text-red-600 text-sm">
                                    {formErrors.company}
                                </p>
                            </div>

                            <div className="text-center mx-auto">
                                <button
                                    className="group mainbutn w-full rounded-[5px] flex justify-center items-center gap-3"
                                    onClick={handleSubmit}
                                >
                                    <div className="max-w-fit">Get Case Study</div>
                                    <img
                                        src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/download_icon_white%201.png"
                                        alt="Download casestudy"
                                        className="block group-hover:hidden"
                                    />
                                    <img
                                        src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/download_icon_blue_cs.png"
                                        alt="Download casestudy"
                                        className="hidden group-hover:block"
                                    />
                                </button>
                            </div>
                        </form>
                    )}
                </div>
                <div className="max-lg:px-[5%] lg:pl-[5%] lg:pr-[40%] xl:pr-[38.5%] pt-[30px] lg:pb-14">

                    {cd?.content?.slice(1).map((casestudy, key, slicedArray) => (
                        <div key={key} className='pt-4 2xl:pt-5 pb-3'>
                            <h3 className='inline font-semibold text-2xl lg:text-3xl xl:text-3xl 2xl:text-[35px] text-[#0E1947]'>
                                {casestudy?.heading}
                            </h3>
                            <div className='mt-4'>
                                {formatDescription(casestudy?.description)}
                            </div>

                            {cd?.percentageBanner && key === slicedArray?.length - 2 && (
                                <>
                                    <img src={cd?.percentageBanner} alt='achievements' className='w-full mt-8' />
                                </>
                            )}
                        </div>
                    ))}
                    <div id="caseStudySection"></div>

                </div>
                {cd?.open && (
                    <div
                        id=""
                        className={`mx-[5%] lg:hidden p-4 lg:p-8 bg-header-linear py-4 md:flex items-center gap-12 mt-8 mb-12`}
                    >
                        <div className="text-white md:w-[50%] flex flex-col gap-10">
                            <div className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-[35px] text-white font-bold">
                                Download the case study here!
                            </div>
                            <div>
                                You're close to scaling your business! This case study
                                reveals how AnalyticsLiv empowers top companies to expand
                                their business successfully.
                            </div>
                            <div className="text-sm sm:text-base font-normal">
                                Let's Collaborate for Mutual Success!{" "}
                                <br className="sm:hidden"></br>{" "}
                                <a
                                    href="/contact"
                                    className="text-sm sm:text-base font-bold sm:ml-3 underline"
                                >
                                    Contact Us Now
                                </a>
                            </div>
                        </div>
                        <div className="md:w-[40%] bg-white my-3 rounded-[5px]">
                            {formSubmit ? (
                                <div className="relative p-4 space-y-4 h-full">
                                    <h3 className="align-middle font-medium text-4xl text-[#0E1947]">
                                        Thank You for your interest.
                                    </h3>
                                    <h2 className="align-middle text-xl text-[#0E1947]">
                                        The download link for this case study has been sent to
                                        the email-id provided.
                                    </h2>
                                    <div>
                                        <a href="#" className="text-blue-500 underline">
                                            Click here
                                        </a>{" "}
                                        to go to Home Page
                                    </div>
                                    <div className="absolute bottom-0 right-2 rounded-full w-20 h-20 bg-emerald-600 opacity-70 animate-bounce hover:animate-none duration-300 delay-75"></div>
                                </div>
                            ) : (
                                <form className="space-y-4 md:space-y-4 px-3 md:px-4 py-4 md:py-4">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-[#ECECEC] rounded-[5px] appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                                            placeholder=" "
                                            required
                                            value={formValues.fullName}
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor="fullName"
                                            className="absolute text-xs text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >
                                            Full Name*
                                        </label>
                                        <p className="text-red-600 text-sm">
                                            {formErrors.fullName}
                                        </p>
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border border-[#ECECEC] rounded-[5px] appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                                            placeholder=" "
                                            required
                                            value={formValues.email}
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute text-xs text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >
                                            E-mail*
                                        </label>
                                        <p className="text-red-600 text-sm">
                                            {formErrors.email}
                                        </p>
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border border-[#ECECEC] rounded-[5px] appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                                            placeholder=" "
                                            required
                                            value={formValues.company}
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor="company"
                                            className="absolute text-xs text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >
                                            Company*
                                        </label>
                                        <p className="text-red-600 text-sm">
                                            {formErrors.company}
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <button
                                            className="group mainbutn w-full rounded-[5px] flex justify-center items-center gap-3"
                                            onClick={handleSubmit}
                                        >
                                            <div className="max-w-fit">Get Case Study</div>
                                            <img
                                                src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/download_icon_white%201.png"
                                                alt="Download casestudy"
                                                className="block group-hover:hidden"
                                            />
                                            <img
                                                src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/download_icon_blue_cs.png"
                                                alt="Download casestudy"
                                                className="hidden group-hover:block"
                                            />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                )}
                <div>
                    <h1 className="px-[5%] pb-11 md:pt-3 text-2xl lg:text-3xl xl:text-3xl 2xl:text-[35px] text-[#0E1947] font-bold">Related Case Studies</h1>

                    <div className="px-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 lg:gap-4 2xl:gap-7 pb-16">
                        <a href='case-studies/elevate-the-brand-reach-with-discovery-campaigns' className="bg-white rounded-lg shadow-lg p-4 2xl:p-6 relative">
                            <div className='flex flex-col justify-evenly h-full'>
                                {/* <div className="absolute w-[100px] text-center top-4 2xl:top-6 left-4 2xl:left-6 bg-[#A2EC4E99] text-white font-semibold px-3 py-1 rounded-tl-2xl 2xl:rounded-tl-[20px] rounded-br-md text-sm">Marketing</div> */}
                                <img
                                    src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Case_study_10_Brand_Reach_Discovery_Campaign%201.png"
                                    alt="Brand_Reach_Discovery_Campaign"
                                    className="rounded-md mb-4 w-full"
                                />
                                <h3
                                    className="text-lg font-semibold text-[#100F1B] mb-2 truncate"
                                    style={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    Elevate the brand reach with Discovery Campaigns 17% higher CTR compared to Pmax
                                </h3>
                                <p
                                    className="text-sm text-[#373642] mb-4"
                                    style={{
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        WebkitLineClamp: 3,
                                    }}
                                >
                                    In the shopping season of black Friday and cyber Monday, our objective was to increase the reach of brand
                                    and drive huge amount of relevant traffic to the website by expanding the audience size in top of the funnel
                                    with the help of discovery campaigns
                                </p>
                                <div className="flex justify-between items-center text-sm text-[#0066cc]">
                                    <span className="text-[#6B7280]">25th Nov 2024</span>
                                    <button className="text-[#08A4F7] text-base font-medium hover:underline">Read Full</button>
                                </div>
                            </div>
                        </a>
                        <a href='/case-studies/ga4-enhanced-ecommerce-implementation-using-gtm-and-shopify-integration' className="bg-white rounded-lg shadow-lg p-4 2xl:p-6 relative">
                            <div className='flex flex-col justify-evenly h-full'>

                                {/* <div className="absolute w-[100px] text-center top-4 2xl:top-6 left-4 2xl:left-6 bg-[#EC954E99] text-white font-semibold px-3 py-1 rounded-tl-[20px] 2xl:rounded-tl-3xl rounded-br-md text-sm">Analytics</div> */}
                                <img
                                    src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/shopify.png"
                                    alt="Gshopify"
                                    className="rounded-md mb-4 w-full"
                                />
                                <h3
                                    className="text-lg font-semibold text-[#100F1B] mb-2 truncate"
                                    style={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    GA4 Enhanced Ecommerce Implementation Using GTM and Shopify Integration
                                </h3>
                                <p
                                    className="text-sm text-[#373642] mb-4"
                                    style={{
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        WebkitLineClamp: 3,
                                    }}
                                >
                                    A Shopify-powered e-commerce business in the East was facing challenges with Universal Analytics (UA) in
                                    capturing purchase data reliably. The client was unable to track data for resale products put on the post-purchase
                                    page and upsell products bought through third-party interfaces.
                                </p>
                                <div className="flex justify-between items-center text-sm text-[#0066cc]">
                                    <span className="text-[#6B7280]">06th Aug 2024</span>
                                    <button className="text-[#08A4F7] text-base font-medium hover:underline">Read Full</button>
                                </div>
                            </div>
                        </a>
                        <a href='/case-studies/180-percent-increase-in-lead-volume-and-60-percent-reduction-cpl' className="bg-white rounded-lg shadow-lg p-4 2xl:p-6 relative">
                            <div className='flex flex-col justify-evenly h-full'>

                                {/* <div className="absolute w-[100px] text-center top-4 2xl:top-6 left-4 2xl:left-6 bg-[#A2EC4E99] text-white font-semibold px-3 py-1 rounded-tl-2xl 2xl:rounded-tl-[20px] rounded-br-md text-sm">Marketing</div> */}
                                <img
                                    src="https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/increase_in_leadvolume.png"
                                    alt="increase_in_leadvolume"
                                    className="rounded-md mb-4 w-full"
                                />
                                <h3
                                    className="text-lg font-semibold text-[#100F1B] mb-2 truncate"
                                    style={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    Maximizing Lead Generation: 180% Increase in Lead Volume and 60% Reduction in CPL
                                </h3>
                                <p
                                    className="text-sm text-[#373642] mb-4"
                                    style={{
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        WebkitLineClamp: 3,
                                    }}
                                >
                                    We Sort It, a New Zealand-based cleaning and lawn care service provider, faced challenges with low lead volume
                                    and high costs per lead. Through advanced audience targeting and leveraging Facebook's Advantage Detailed Targeting
                                    feature, we achieved a 180% increase in lead volume and a 60% reduction in cost per lead. By aligning campaign strategies
                                    with the client’s goals, we ensured improved performance, cost efficiency, and high-quality leads.
                                </p>
                                <div className="flex justify-between items-center text-sm text-[#0066cc]">
                                    <span className="text-[#6B7280]">9th Aug 2024</span>
                                    <button className="text-[#08A4F7] text-base font-medium hover:underline">Read Full</button>
                                </div>
                            </div>
                        </a>
                        <a href='/case-studies/driving-campaigns-in-dv360-to-post-click-attribution-success-with-36-percent-reduction-in-cpi' className="bg-white rounded-lg shadow-lg p-4 2xl:p-6 relative">
                            <div className='flex flex-col justify-evenly h-full'>

                                {/* <div className="absolute w-[100px] text-center top-4 2xl:top-6 left-4 2xl:left-6 bg-[#A2EC4E99] text-white font-semibold px-3 py-1 rounded-tl-2xl 2xl:rounded-tl-[20px] rounded-br-md text-sm">Marketing</div> */}
                                <img
                                    src="https://storage.googleapis.com/website-bucket-uploads/cs/Case_study_4_Post_Click_Tracking_1.png"
                                    alt="increase_in_leadvolume"
                                    className="rounded-md mb-4 w-full"
                                />
                                <h3
                                    className="text-lg font-semibold text-[#100F1B] mb-2 truncate"
                                    style={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    Driving the Campaigns in DV360 to Post Click Attribution Success with a 36% reduction in CPI
                                </h3>
                                <p
                                    className="text-sm text-[#373642] mb-4"
                                    style={{
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        WebkitLineClamp: 3,
                                    }}
                                >
                                    Implementing post-click conversions in DV360 attribution led to increased conversions, a 36% lower CPI, and a notable 38% boost in overall click-through rate, showcasing the effectiveness of our refined attribution model.
                                </p>
                                <div className="flex justify-between items-center text-sm text-[#0066cc]">
                                    <span className="text-[#6B7280]">4th Sept 2024</span>
                                    <button className="text-[#08A4F7] text-base font-medium hover:underline">Read Full</button>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </section>
        </div></>
    )
}

export async function getServerSideProps(context) {
    // Fetch data from external API

    const res = await fetch(`${process.env.domain}/api/casestudy?slug=${context.params.post}`)
    const casestudyDat = await res.json()
    console.log(casestudyDat);
    // Pass data to the page via props
    return { props: { casestudyDat } }
}

export default index





// import Head from 'next/head'
// import React from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useState, useEffect } from 'react'
// import { Router, useRouter } from 'next/router';
// import { ScaleLoader } from 'react-spinners'

// const index = ({ casestudyDat }) => {
//     var cd = casestudyDat.data[0];
//     useEffect(() => {
//         AOS.init();
//         console.log(cd.open);
//     }, []);
//     const initialValues = { fullName: '', email: '', company: '' };
//     const [formValues, setFormValues] = useState(initialValues);
//     const [formErrors, setFormErrors] = useState({});
//     const [isSubmit, setIsSubmit] = useState(false);
//     const [showWaiting, setShowWaiting] = useState(false);
//     const [selected, setSelected] = useState("");
//     const [formSubmit, setFormSubmit] = useState(false);
//     const [formFixed, setFormFixed] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormValues({ ...formValues, [name]: value });
//         // console.log(formValues);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setFormErrors(validate(formValues));
//         setIsSubmit(true);

//     };

//     const dataLayerpush = () => {
//         dataLayer.push({
//             event: 'free_casestudy_download',
//             eventCategory: cd.title,
//             eventAction: 'download'
//         });

//     }

//     useEffect(() => {

//         let headerSize = () => {

//             const totalScroll = document.documentElement.scrollTop;

//             if ((totalScroll > 50)) {
//                 setFormFixed(true);
//             } else if ((totalScroll < 45)) {
//                 setFormFixed(false);
//             }

//         }

//         window.addEventListener("scroll", headerSize);

//         return () => window.removeEventListener("scroll", headerSize);
//     });

//     useEffect(() => {
//         // console.log(formErrors);
//         if (Object.keys(formErrors).length === 0 && isSubmit) {
//             //console.log(formValues);
//             setShowWaiting(true);
//             dataLayer.push({
//                 event: 'casestudy_download',
//                 eventCategory: cd.title,
//                 eventAction: 'download'
//             });
//             fetch('/api/casestudylead', {
//                 method: 'POST', // or 'PUT'
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     "fullName": formValues.fullName,
//                     "email": formValues.email,
//                     "casestudy": cd.title,
//                     "company": formValues.company,
//                     "id": casestudyDat.data[0].id
//                 }),
//             })
//                 .then((response) => response.json())
//                 .then((data) => {
//                     // console.log('Success:', data);
//                     setFormSubmit(true);
//                     setShowWaiting(false);
//                 })
//                 .catch((error) => {
//                     console.error('Error:', error);
//                     setShowWaiting(false);
//                     alert('there is some issue , please try again !')
//                 });

//         }
//     }, [formErrors]);

//     const validate = (values) => {
//         const errors = {};
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//         const mobile = /^(?=.*\d).{8,}$/i;
//         if (!values.fullName) {
//             errors.fullName = "Fullname is required!";
//         }

//         if (!values.email) {
//             errors.email = "Email is required!";
//         } else if (!regex.test(values.email)) {
//             errors.email = "This is not a valid email format!";
//         }

//         if (!values.company) {
//             errors.company = "Company is required!";
//         }

//         return errors;
//     };

//     var url = "https://analyticsliv.com/case-studies/" + cd.slug;

//     return (<>
//         <Head>
//             <title>AnalyticsLiv - Case Sudies</title>
//             <link rel="canonical" href={url}></link>
//         </Head>
//         {showWaiting && <div className="fixed flex backdrop-blur top-0 left-0 right-0 z-40 w-full p-4 md:overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"><ScaleLoader
//             color="#271d90"
//             loading
//             size={100}
//             className="m-auto align-middle"
//         /></div>}
//         <div className=' overflow-hidden'>
//             <section className="relative bg-gray-100 pt-12 pb-12">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="absolute lg:w-48 w-32 -right-0 top-10 lg:top-8 lg:right-10 fill-orange-500 blur-md rotate-45" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15">
//                     <path d="M7.932 1.248a.5.5 0 0 0-.864 0l-7 12A.5.5 0 0 0 .5 14h14a.5.5 0 0 0 .432-.752l-7-12Z" />
//                 </svg>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="absolute lg:w-48 w-32 bottom-0 fill-green-400 blur-md -rotate-12" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15">
//                     <path d="M7.932 1.248a.5.5 0 0 0-.864 0l-7 12A.5.5 0 0 0 .5 14h14a.5.5 0 0 0 .432-.752l-7-12Z" />
//                 </svg>
//                 <h2 className="text-center text-4xl font-semibold uppercase mb-2">Case Study</h2>

//                 <div className="relative lg:flex w-full lg:w-5/6 space-y-4 lg:space-y-0 lg:space-x-4 mx-auto pt-4 pb-8 px-4">
//                     <div className="p-4 lg:w-3/4 space-y-6 bg-white">
//                         <h1 className="text-2xl">{cd.title}</h1>
//                         <div className="h-0.5 bg-cyan-500"></div>
//                         <img className="w-screen" src={cd.coverimage} />

//                         {cd.content && cd.content.map((casestudy, key) => (
//                             <div key={key}>
//                                 <h3 className="inline uppercase font-semibold text-xl text-slate-800">{casestudy.heading}:</h3>
//                                 <p className="px-8 mt-4 text-gray-600">
//                                     {casestudy.description}
//                                 </p>
//                             </div>
//                         ))}

//                     </div>

//                     {cd.open &&

//                         <div className={`${formFixed ? "sticky top-20" : "relative"} h-fit lg:w-1/2 bg-white px-10 py-4`}>
//                             {formSubmit ? <div className='relative text-slate-700 p-4 space-y-4 h-full'>
//                                 <h3 className='align-middle font-medium text-4xl'>Thank You for your interest.</h3>
//                                 <h2 className='align-middle text-xl'>The download link for this case study has been sent to the email-id provided.</h2>
//                                 <div><a href='#' className='text-blue-500 underline'>Click here</a> to go to Home Page</div>
//                                 <div className='absolute bottom-0 right-2 rounded-full w-20 h-20 bg-emerald-600 opacity-70 animate-bounce hover:animate-none duration-300 delay-75'></div>
//                             </div> : <form className="space-y-4 md:space-y-6">
//                                 <h3 className="text-center text-xl">Enter your details to download the casestudy.</h3>
//                                 <div className="h-0.5 bg-cyan-600"></div>

//                                 <div className="relative">
//                                     <input type="text" id="fullName" name="fullName" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-b border-slate-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required value={formValues.fullName} onChange={handleChange} />
//                                     <label htmlFor="fullName" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Full Name*</label>
//                                     <p className="text-red-600 text-sm">{formErrors.fullName}</p>
//                                 </div>


//                                 <div className="relative">
//                                     <input type="email" id="email" name="email" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-b border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required value={formValues.email} onChange={handleChange} />
//                                     <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">E-mail*</label>
//                                     <p className="text-red-600 text-sm">{formErrors.email}</p>
//                                 </div>

//                                 <div className="relative">
//                                     <input type="text" id="company" name="company" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-b border-slate-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required value={formValues.company} onChange={handleChange} />
//                                     <label htmlFor="company" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Company*</label>
//                                     <p className="text-red-600 text-sm">{formErrors.company}</p>
//                                 </div>

//                                 <div className="text-center">
//                                     <div className="tracking-wider w-full mt-4 px-8 py-2 m-auto bg-sky-800 uppercase text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150 cursor-pointer" onClick={handleSubmit}>Download
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="w-8 inline text-right" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
//                                             <path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4l-4-4h3zm6 7H7v-2h10v2z" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </form>}
//                         </div>
//                     }

//                     {/* {cd.open &&

//                         <div className="sticky top-20 h-fit lg:w-1/2 bg-white px-10 py-4">
//                             <div className="text-center">
//                                 <a href={cd.filename} target="_blank">
//                                     <div className="tracking-wider w-full mt-4 px-8 py-2 m-auto bg-slate-800 uppercase text-white rounded hover:border hover:border-slate-800 hover:shadow-md hover:bg-white hover:text-slate-800 transition duration-150 cursor-pointer mr-16 flex justify-center items-center gap-2" onClick={dataLayerpush}>Download
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="w-8 inline text-right" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
//                                             <path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4l-4-4h3zm6 7H7v-2h10v2z" />
//                                         </svg>
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>
//                     } */}

//                 </div>

//             </section>
//         </div></>
//     )
// }

// export async function getServerSideProps(context) {
//     // Fetch data from external API

//     const res = await fetch(`${process.env.domain}/api/casestudy?slug=${context.params.post}`)
//     const casestudyDat = await res.json()
//     console.log(casestudyDat);
//     // Pass data to the page via props
//     return { props: { casestudyDat } }
// }

// export default index





// import Head from 'next/head'
// import React from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useState, useEffect } from 'react'
// import { Router, useRouter } from 'next/router';
// import { ScaleLoader } from 'react-spinners'

// const index = ({ casestudyDat }) => {
//     var cd = casestudyDat.data[0];
//     useEffect(() => {
//         AOS.init();
//         console.log(cd.open);
//     }, []);
//     const initialValues = { fullName: '', email: '', company: '' };
//     const [formValues, setFormValues] = useState(initialValues);
//     const [formErrors, setFormErrors] = useState({});
//     const [isSubmit, setIsSubmit] = useState(false);
//     const [showWaiting, setShowWaiting] = useState(false);
//     const [selected, setSelected] = useState("");
//     const [formSubmit, setFormSubmit] = useState(false);
//     const [formFixed, setFormFixed] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormValues({ ...formValues, [name]: value });
//         // console.log(formValues);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setFormErrors(validate(formValues));
//         setIsSubmit(true);

//     };

//     const dataLayerpush = () => {
//         dataLayer.push({
//             event: 'free_casestudy_download',
//             eventCategory: cd.title,
//             eventAction: 'download'
//         });

//     }

//     useEffect(() => {

//         let headerSize = () => {

//             const totalScroll = document.documentElement.scrollTop;

//             if ((totalScroll > 50)) {
//                 setFormFixed(true);
//             } else if ((totalScroll < 45)) {
//                 setFormFixed(false);
//             }

//         }

//         window.addEventListener("scroll", headerSize);

//         return () => window.removeEventListener("scroll", headerSize);
//     });

//     useEffect(() => {
//         // console.log(formErrors);
//         if (Object.keys(formErrors).length === 0 && isSubmit) {
//             //console.log(formValues);
//             setShowWaiting(true);
//             dataLayer.push({
//                 event: 'casestudy_download',
//                 eventCategory: cd.title,
//                 eventAction: 'download'
//             });
//             fetch('/api/casestudylead', {
//                 method: 'POST', // or 'PUT'
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     "fullName": formValues.fullName,
//                     "email": formValues.email,
//                     "casestudy": cd.title,
//                     "company": formValues.company,
//                     "id": casestudyDat.data[0].id
//                 }),
//             })
//                 .then((response) => response.json())
//                 .then((data) => {
//                     // console.log('Success:', data);
//                     setFormSubmit(true);
//                     setShowWaiting(false);
//                 })
//                 .catch((error) => {
//                     console.error('Error:', error);
//                     setShowWaiting(false);
//                     alert('there is some issue , please try again !')
//                 });

//         }
//     }, [formErrors]);

//     const validate = (values) => {
//         const errors = {};
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//         const mobile = /^(?=.*\d).{8,}$/i;
//         if (!values.fullName) {
//             errors.fullName = "Fullname is required!";
//         }

//         if (!values.email) {
//             errors.email = "Email is required!";
//         } else if (!regex.test(values.email)) {
//             errors.email = "This is not a valid email format!";
//         }

//         if (!values.company) {
//             errors.company = "Company is required!";
//         }

//         return errors;
//     };

//     var url = "https://analyticsliv.com/case-studies/" + cd.slug;

//     const scrollToDownload = () => {

//         const element = document.getElementById('download-cs');
//         if (element) {
//             const offset = 100;
//             const elementPosition = element.getBoundingClientRect().top + window.scrollY;
//             const offsetPosition = elementPosition - offset;

//             window.scrollTo({
//                 top: offsetPosition,
//                 behavior: 'smooth'
//             });
//         }
//     };


//     return (<>
//         <Head>
//             <title>AnalyticsLiv - Case Sudies</title>
//             <link rel="canonical" href={url}></link>
//         </Head>
//         {showWaiting && <div className="fixed flex backdrop-blur top-0 left-0 right-0 z-40 w-full p-4 md:overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"><ScaleLoader
//             color="#271d90"
//             loading
//             size={100}
//             className="m-auto align-middle"
//         /></div>}
//         <div className='overflow-hidden font-sans'>
//             <section className="relative">
//                 <div className="relative w-full">
//                     <div className="">
//                         <div className='bg-header-linear lg:flex max-lg:flex-col justify-center 2xl:justify-evenly items-center py-10 px-[5%]'>

//                             <div className='lg:w-[55%] flex flex-col gap-8'>
//                                 <h1 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-[35px] text-white font-bold">{cd?.title}</h1>
//                                 <p className="text-xs md:text-[14px] text-white">{cd?.content?.[0]?.description}</p>
//                                 <button onClick={scrollToDownload} className="bg-white px-4 w-max py-2 md:px-4 md:py-[5px] xl:px-5 xl:py-[7px] 2xl:px-7 2xl:py-[8px] rounded-[8px]
//                                 text-[#0E1947] text-[11px] sm:text-sm md:text-base 2xl:text-lg sm:hover:underline md:hover:text-[16.2px] 2xl:hover:text-[18.2px] font-bold">
//                                     Download Case Study
//                                 </button>
//                             </div>

//                             <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Frame.svg' alt={cd?.title}
//                                 className='max-lg:hidden mt-7' />
//                         </div>
//                         {/* <img className="w-screen" src={cd?.coverimage} /> */}

//                         <div className='px-[5%] pt-8'>
//                             {cd?.content?.slice(1).map((casestudy, key) => (
//                                 <div key={key} className='pt-4 2xl:pt-5 pb-3'>
//                                     <h3 className="inline font-semibold text-2xl lg:text-3xl xl:text-3xl 2xl:text-[35px] text-[#0E1947]">
//                                         {casestudy?.heading}
//                                     </h3>
//                                     <p className="mt-4 text-sm 2xl:text-base text-black">
//                                         {casestudy?.description}
//                                     </p>
//                                 </div>
//                             ))}
//                             <div id='download-cs'></div>
//                         </div>
//                     </div>

//                     {cd?.open &&

//                         <div id='' className={`mx-[5%] p-4 lg:p-8 bg-header-linear py-4 md:flex items-center gap-12 mt-12 mb-12`}>
//                             <div className='text-white md:w-[50%] flex flex-col gap-10'>
//                                 <div className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-[35px] text-white font-bold">
//                                     Download the case study here!
//                                 </div>
//                                 <div>
//                                     You're close to scaling your business! This case study reveals how AnalyticsLiv empowers top
//                                     companies to expand their business successfully.
//                                 </div>
//                                 <div className='text-sm sm:text-base font-normal'>
//                                     Let's Collaborate for Mutual Success! <br className='sm:hidden'></br> <a href='/contact' className='text-sm sm:text-base font-bold sm:ml-3 underline'>Contact Us Now</a>
//                                 </div>
//                             </div>
//                             <div className='md:w-[40%] bg-white my-3 rounded-[5px]'>
//                                 {formSubmit ? <div className='relative p-4 space-y-4 h-full'>
//                                     <h3 className='align-middle font-medium text-4xl text-[#0E1947]'>Thank You for your interest.</h3>
//                                     <h2 className='align-middle text-xl text-[#0E1947]'>The download link for this case study has been sent to the email-id provided.</h2>
//                                     <div><a href='#' className='text-blue-500 underline'>Click here</a> to go to Home Page</div>
//                                     <div className='absolute bottom-0 right-2 rounded-full w-20 h-20 bg-emerald-600 opacity-70 animate-bounce hover:animate-none duration-300 delay-75'></div>
//                                 </div> : <form className="space-y-4 md:space-y-4 px-3 md:px-8 py-4 md:py-7">

//                                     <div className="relative">
//                                         <input type="text" id="fullName" name="fullName" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-[#ECECEC] rounded-[5px] appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required value={formValues.fullName} onChange={handleChange} />
//                                         <label htmlFor="fullName" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Full Name*</label>
//                                         <p className="text-red-600 text-sm">{formErrors.fullName}</p>
//                                     </div>

//                                     <div className="relative">
//                                         <input type="email" id="email" name="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border border-[#ECECEC] rounded-[5px] appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required value={formValues.email} onChange={handleChange} />
//                                         <label htmlFor="email" className="absolute text-xs text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">E-mail*</label>
//                                         <p className="text-red-600 text-sm">{formErrors.email}</p>
//                                     </div>

//                                     <div className="relative">
//                                         <input type="text" id="company" name="company" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border border-[#ECECEC] rounded-[5px] appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required value={formValues.company} onChange={handleChange} />
//                                         <label htmlFor="company" className="absolute text-xs text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Company*</label>
//                                         <p className="text-red-600 text-sm">{formErrors.company}</p>
//                                     </div>

//                                     <div className="text-center">
//                                         {/* <div className="tracking-wider w-full mt-4 px-8 py-2 m-auto bg-sky-800 uppercase text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150 cursor-pointer" onClick={handleSubmit}>Download
//                                             <svg xmlns="http://www.w3.org/2000/svg" className="w-8 inline text-right" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
//                                                 <path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4l-4-4h3zm6 7H7v-2h10v2z" />
//                                             </svg>
//                                         </div> */}
//                                         <button className='group mainbutn w-full rounded-[5px] flex justify-center items-center gap-3' onClick={handleSubmit}>
//                                             <div className='max-w-fit'>Get Free Audit</div>
//                                             <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/download_icon_white%201.png' alt='Download casestudy'
//                                                 className='block group-hover:hidden' />
//                                             <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/download_icon_blue_cs.png' alt='Download casestudy'
//                                                 className='hidden group-hover:block' />
//                                         </button>
//                                     </div>
//                                 </form>}
//                             </div>
//                         </div>
//                     }


//                 </div>

//             </section>

//         </div></>
//     )
// }

// export async function getServerSideProps(context) {
//     // Fetch data from external API

//     const res = await fetch(`${process.env.domain}/api/casestudy?slug=${context.params.post}`)
//     const casestudyDat = await res.json()
//     console.log(casestudyDat);
//     // Pass data to the page via props
//     return { props: { casestudyDat } }
// }

// export default index


// {/* {cd.open &&

//                         <div className="sticky top-20 h-fit lg:w-1/2 bg-white px-10 py-4">
//                             <div className="text-center">
//                                 <a href={cd.filename} target="_blank">
//                                     <div className="tracking-wider w-full mt-4 px-8 py-2 m-auto bg-slate-800 uppercase text-white rounded hover:border hover:border-slate-800 hover:shadow-md hover:bg-white hover:text-slate-800 transition duration-150 cursor-pointer mr-16 flex justify-center items-center gap-2" onClick={dataLayerpush}>Download
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="w-8 inline text-right" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
//                                             <path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4l-4-4h3zm6 7H7v-2h10v2z" />
//                                         </svg>
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>
//                     } */}


// {/* <section className="relative bg-gray-100 pt-12">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="absolute lg:w-48 w-32 -right-0 top-10 lg:top-8 lg:right-10 fill-orange-500 blur-md rotate-45" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15">
//                     <path d="M7.932 1.248a.5.5 0 0 0-.864 0l-7 12A.5.5 0 0 0 .5 14h14a.5.5 0 0 0 .432-.752l-7-12Z" />
//                 </svg>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="absolute lg:w-48 w-32 bottom-0 fill-green-400 blur-md -rotate-12" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15">
//                     <path d="M7.932 1.248a.5.5 0 0 0-.864 0l-7 12A.5.5 0 0 0 .5 14h14a.5.5 0 0 0 .432-.752l-7-12Z" />
//                 </svg>
//                 <h2 className="text-center text-4xl font-semibold uppercase mb-2">Case Study</h2>

//                 <div className="relative lg:flex w-full lg:w-5/6 space-y-4 lg:space-y-0 lg:space-x-4 mx-auto pt-4 pb-8 px-4">
//                     <div className="p-4 lg:w-3/4 space-y-6 bg-white">
//                         <h1 className="text-2xl">{cd.title}</h1>
//                         <div className="h-0.5 bg-cyan-500"></div>
//                         <img className="w-screen" src={cd.coverimage} />

//                         {cd.content && cd.content.map((casestudy, key) => (
//                             <div key={key}>
//                                 <h3 className="inline uppercase font-semibold text-xl text-slate-800">{casestudy.heading}:</h3>
//                                 <p className="px-8 mt-4 text-gray-600">
//                                     {casestudy.description}
//                                 </p>
//                             </div>
//                         ))}

//                     </div>

//                     {cd.open &&

//                         <div className={`${formFixed ? "sticky top-20" : "relative"} h-fit lg:w-1/2 bg-white px-10 py-4`}>
//                             {formSubmit ? <div className='relative text-slate-700 p-4 space-y-4 h-full'>
//                                 <h3 className='align-middle font-medium text-4xl'>Thank You for your interest.</h3>
//                                 <h2 className='align-middle text-xl'>The download link for this case study has been sent to the email-id provided.</h2>
//                                 <div><a href='#' className='text-blue-500 underline'>Click here</a> to go to Home Page</div>
//                                 <div className='absolute bottom-0 right-2 rounded-full w-20 h-20 bg-emerald-600 opacity-70 animate-bounce hover:animate-none duration-300 delay-75'></div>
//                             </div> : <form className="space-y-4 md:space-y-6">
//                                 <h3 className="text-center text-xl">Enter your details to download the casestudy.</h3>
//                                 <div className="h-0.5 bg-cyan-600"></div>

//                                 <div className="relative">
//                                     <input type="text" id="fullName" name="fullName" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-b border-slate-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required value={formValues.fullName} onChange={handleChange} />
//                                     <label htmlFor="fullName" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Full Name*</label>
//                                     <p className="text-red-600 text-sm">{formErrors.fullName}</p>
//                                 </div>


//                                 <div className="relative">
//                                     <input type="email" id="email" name="email" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-b border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required value={formValues.email} onChange={handleChange} />
//                                     <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">E-mail*</label>
//                                     <p className="text-red-600 text-sm">{formErrors.email}</p>
//                                 </div>

//                                 <div className="relative">
//                                     <input type="text" id="company" name="company" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-b border-slate-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required value={formValues.company} onChange={handleChange} />
//                                     <label htmlFor="company" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Company*</label>
//                                     <p className="text-red-600 text-sm">{formErrors.company}</p>
//                                 </div>

//                                 <div className="text-center">
//                                     <div className="tracking-wider w-full mt-4 px-8 py-2 m-auto bg-sky-800 uppercase text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150 cursor-pointer" onClick={handleSubmit}>Download
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="w-8 inline text-right" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
//                                             <path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4l-4-4h3zm6 7H7v-2h10v2z" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </form>}
//                         </div>
//                     }

//                      {cd.open &&

//                         <div className="sticky top-20 h-fit lg:w-1/2 bg-white px-10 py-4">
//                             <div className="text-center">
//                                 <a href={cd.filename} target="_blank">
//                                     <div className="tracking-wider w-full mt-4 px-8 py-2 m-auto bg-slate-800 uppercase text-white rounded hover:border hover:border-slate-800 hover:shadow-md hover:bg-white hover:text-slate-800 transition duration-150 cursor-pointer mr-16 flex justify-center items-center gap-2" onClick={dataLayerpush}>Download
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="w-8 inline text-right" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
//                                             <path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4l-4-4h3zm6 7H7v-2h10v2z" />
//                                         </svg>
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>
//                     }

//                 </div>

//             </section> */}