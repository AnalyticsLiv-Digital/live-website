import React from 'react'
import ScrollProgress from '../../components/ScrollProgress';
import Head from 'next/head'
import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ScaleLoader } from 'react-spinners'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const contact = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const initialValues = { firstName: '', lastName: '', email: '', contactno: '', company: '', purpose: '', requirements: '' };
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
                    'mode': 'no-cors'
                },
                body: JSON.stringify({
                    "firstName": formValues.firstName,
                    "lastName": formValues.lastName,
                    "email": formValues.email,
                    "contact": formValues.contactno,
                    "company": formValues.company,
                    "purpose": formValues.purpose,
                    "requirments": formValues.requirements,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    setFormSubmit(true);
                    setShowWaiting(false);
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setShowWaiting(false);
                });
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const mobile = /^(?=.*\d).{8,}$/i;
        if (!values.firstName) {
            errors.firstName = "Name is required!";
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

        return errors;
    };

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
                />
            </Head>
            <ScrollProgress />

            <section className="">
                <div className="relative h-[350px] sm:h-[420px] lg:h-[460px] 2xl:h-[540px] bg-header-linear sm:px-[10%] 2xl:px-[5%] pt-24">
                    <div className="absolute top-0 left-0 sm:px-[5%] lg:px-[10%] 2xl:px-[5%] w-full h-[350px] md:h-[400px]">
                        <img
                            src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Contact_Team_Image.svg"
                            alt="AnalyticsLiv Contact"
                            className="mx-auto mt-14 object-top max-sm:hidden"
                        />
                        <img
                            src="https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Contact_Team_Image%20(2).svg"
                            alt="AnalyticsLiv Contact"
                            className="mx-auto w-full px-3 mt-14 object-top sm:hidden"
                        />
                    </div>
                    <div className="relative z-10 flex flex-col items-center sm:pt-12">
                        <h1 className="text-base sm:text-[35px] 2xl:text-[40px] font-bold text-white">Contact our Support Team</h1>
                        <p className="text-[8px] sm:text-sm 2xl:text-base font-normal text-white pt-2 sm:pt-4 md:pt-8">Questions, bug reports, feedback — we’re here for it all.</p>
                    </div>
                </div>

                <div className='relative -mt-[160px]'>
                    <div className="relative z-30 mx-auto w-[95%] lg:w-[1000px] 2xl:w-[1240px] bg-white rounded-[18px] md:rounded-[37px] shadow-contactShadow max-md:px-6 max-md:py-6 md:p-10 2xl:p-14">
                        <div className='flex max-md:flex-col md:justify-between gap-10'>
                            <div className='md:w-[50%] flex flex-col justify-between'>
                                <div className='text-xl 2xl:text-[26px] font-semibold text-center pt-2'>Trusted by clients, proven by top reviews</div>
                                <div className='grid grid-cols-2 place-content-center max-md:place-content-between max-md:justify-items-start md:mx-auto'>
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/clutch_review_4.9.svg' alt='clutch_review' className='pt-10 sm:pt-10 lg:pt-14 max-md:w-[100px] w-[125px] lg:w-[180px]' />
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Trustpilot_mobile.svg' alt='Trustpilot review' className='pt-10 sm:pt-10 lg:pt-14 max-md:w-[100px] lg:w-[200px]' />
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Google_Review.svg' alt='Google_Review' className='pt-10 lg:pt-14 max-md:w-[100px] max-lg:w-[125px]' />
                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Ambitiuon_Box_Review.svg' alt='Ambitiuon_Box_Review' className='pt-10 lg:pt-14 max-md:w-[200px] max-lg::w-[125px]' />
                                </div>
                                <div className='w-full md:pt-10 lg:pt-16'>
                                    <div className='text-left'>
                                        <div className='relative max-md:hidden flex max-lg:flex-wrap max-lg:justify-around justify-between max-sm:flex-col text-black'>
                                            <div className='mb-4'>
                                                <div className='text-[10px] 2xl:text-xs 2xl:text-[14px] font-semibold leading-5 text-black'>For Business Enquiries</div>
                                                <div className='max-[381px]:flex-wrap max-sm:flex max-[381px]:gap-2 max-[400px]:gap-5 max-sm:gap-12 max-sm:w-[90dvw] py-4 2xl:py-5'>
                                                    <div className='ml-0 flex items-start [381px]:mb-[3px] max-[381px]:gap-2'>
                                                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Vector%20(3).svg' className='w-[17px] 2xl:w-[21px] h-[18px] 2xl:h-[22px] sm:mr-[7px]' />
                                                        <div className='text-[10px] 2xl:text-xs font-normal leading-5'>
                                                            <a href="mailto:sales@analyticsliv.com" className='text-black text-[10px] 2xl:text-xs'>sales@analyticsliv.com</a>
                                                        </div>
                                                    </div>
                                                    <div className='ml-0 msm:pt-2 flex items-center md:pt-1'>
                                                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Viber.svg' className='w-[14px] 2xl:w-[18px] h-[14px] 2xl:h-[18px] mr-[7px] max-[374px]:ml-1' />
                                                        <span className='text-[10px] 2xl:text-xs font-normal leading-5 text-black'><a href="tel:+918320576622">+91 83205 76622</a></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='mb-4'>
                                                <div className='text-[10px] 2xl:text-xs 2xl:text-[14px] font-semibold leading-5 text-black'>For Job Enquiries</div>
                                                <div className='max-[381px]:flex-wrap max-sm:flex max-[381px]:gap-2 max-[400px]:gap-5 max-sm:gap-12 max-sm:w-[90dvw] py-4 2xl:py-5'>
                                                    <div className='ml-0 flex items-start [381px]:mb-[3px] max-[381px]:gap-2'>
                                                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Vector%20(3).svg' className='w-[17px] 2xl:w-[21px] h-[18px] 2xl:h-[22px] sm:mr-[7px]' />
                                                        <div className='text-[10px] 2xl:text-xs font-normal leading-5'>
                                                            <a href="mailto:hr@analyticsliv.com" className='text-black text-[10px] 2xl:text-xs'>hr@analyticsliv.com</a>
                                                        </div>
                                                    </div>
                                                    <div className='ml-0 msm:pt-2 flex items-center md:pt-1'>
                                                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Viber.svg' className='w-[14px] 2xl:w-[18px] h-[14px] 2xl:h-[18px] mr-[7px] max-[374px]:ml-1' />
                                                        <span className='text-[10px] 2xl:text-xs font-normal leading-5 text-black'><a href="tel:+918320576622">+91 83205 76622</a></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='mb-4'>
                                                <div className='text-[10px] 2xl:text-xs 2xl:text-[14px] font-semibold leading-5 text-black'>For Other Support</div>
                                                <div className='max-[381px]:flex-wrap max-sm:flex max-[381px]:gap-2 max-[400px]:gap-5 max-sm:gap-12 max-sm:w-[90dvw] py-4 2xl:py-5'>
                                                    <div className='ml-0 flex items-start [381px]:mb-[3px] max-[381px]:gap-2'>
                                                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Vector%20(3).svg' className='w-[17px] 2xl:w-[21px] h-[18px] 2xl:h-[22px] sm:mr-[7px]' />
                                                        <div className='text-[10px] 2xl:text-xs font-normal leading-5'>
                                                            <a href="mailto:support@analyticsliv.com" className='text-black text-[10px] 2xl:text-xs'>support@analyticsliv.com</a>
                                                        </div>
                                                    </div>
                                                    <div className='ml-0 msm:pt-2 flex items-center md:pt-1'>
                                                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Viber.svg' className='w-[14px] 2xl:w-[18px] h-[14px] 2xl:h-[18px] mr-[7px] max-[374px]:ml-1' />
                                                        <span className='text-[10px] 2xl:text-xs font-normal leading-5 text-black'><a href="tel:+918320576622">+91 83205 76622</a></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='max-md:hidden flex items-center md:pt-10 justify-center'>
                                            <div className='w-full flex items-center justify-evenly max-sm:justify-evenly'>
                                                <a title='Facebook' href="https://m.facebook.com/100070503960704/">
                                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/facebook.svg' className='w-[47px] hover:shadow-mediaIcons rounded-full transition-all duration-100' alt='facebook' />
                                                </a>
                                                <a title='Twitter' href="https://twitter.com/AnalyticsLiv">
                                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/twitter.svg' className='w-[47px] hover:shadow-mediaIcons rounded-full transition-all duration-100' alt='twitter' />
                                                </a>
                                                <a title='Instagram' href="https://www.instagram.com/analyticsliv_digital/">
                                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/instagram.svg' className='w-[47px] hover:shadow-mediaIcons rounded-full transition-all duration-100' alt='instagram' />
                                                </a>
                                                <a title='Linkedin' href="https://in.linkedin.com/company/analytics-liv-digital/">
                                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/linkedin.svg' className='w-[47px] hover:shadow-mediaIcons rounded-full transition-all duration-100' alt='linkedin' />
                                                </a>
                                                <a title='Youtube' href="https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw">
                                                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/youtube.svg' className='w-[47px] hover:shadow-mediaIcons rounded-full transition-all duration-100' alt='youtube' />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {formSubmit && <div className='md:w-[45%] flex flex-col justify-between items-center gap-4 relative text-slate-700 p-4 space-y-4 h-full'>
                                <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Thank_You_img.png' alt='analyticsLiv' />
                                <h2 className='align-middle text-xl'>We will get back to you soon.</h2>
                                <div><a href='/' className='text-blue-500 underline'>Click here</a> to go to Home Page</div>
                            </div>}

                            {!formSubmit && <form className="md:w-[45%] flex flex-col justify-between gap-4" onSubmit={handleSubmit}>
                                <div className='w-full'>
                                    <div className='text-sm 2xl:text-lg font-semibold text-[#14183E] pb-1 2xl:pb-1.5'>Full Name*</div>
                                    <input type="text" placeholder="Enter Your Full Name" className="px-5 py-2 2xl:py-3 border-[0.5px] border-[#08A4F7] rounded-md w-full focus:outline-none placeholder-[#747582] placeholder-opacity-75"
                                        id="firstname" name="firstName" value={formValues?.firstName} onChange={handleChange} />
                                    <p className="text-red-600 text-sm">{formErrors?.firstName}</p>
                                </div>

                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                    <div className='w-full'>
                                        <div className='text-sm 2xl:text-lg font-semibold text-[#14183E] pb-1 lg:pb-[5px] lg:pt-1 2xl:pt-0 2xl:pb-1.5'>Email*</div>
                                        <input type="email" placeholder="Enter Your Email" className="px-5 py-2 2xl:py-3 border-[0.5px] border-[#08A4F7] rounded-md w-full focus:outline-none placeholder-[#747582] placeholder-opacity-75"
                                            name="email" value={formValues?.email} onChange={handleChange} />
                                        <p className="text-red-600 text-sm">{formErrors?.email}</p>

                                    </div>
                                    <div className="w-full">
                                        <label className="text-sm 2xl:text-lg font-semibold text-[#14183E]">Contact No</label>
                                        <PhoneInput
                                            containerClass="custom-phone-input-container"
                                            inputClass="custom-phone-input"
                                            required
                                            containerStyle={{
                                                width: '100%',
                                            }}
                                            inputStyle={{
                                                width: '100%',
                                                marginTop: '5px',
                                                border: '0.5px solid #08A4F7',
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
                                            value={formValues?.contactno}
                                            onChange={handleContactChange}
                                            country={"in"}
                                            preferredCountries={['in', 'us', 'au']}
                                            enableSearch={true}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className='text-sm 2xl:text-lg font-semibold text-[#14183E] pb-1 2xl:pb-1.5'>Company Name or Website</div>
                                    <input type="text" placeholder="Enter Company Name or Website" className="px-5 py-2 2xl:py-3 border-[0.5px] border-[#08A4F7] rounded-md w-full focus:outline-none placeholder-[#747582] placeholder-opacity-75"
                                        name="company" value={formValues?.company} onChange={handleChange} />
                                    <p className="text-red-600 text-sm">{formErrors?.company}</p>

                                </div>

                                <div>
                                    <div className='text-sm 2xl:text-lg font-semibold text-[#14183E] pb-1 2xl:pb-1.5'>Contact For*</div>
                                    <select className="px-5 py-2 2xl:py-3 border-[0.5px] border-[#08A4F7] rounded-md w-full focus:outline-none placeholder-[#747582] placeholder-opacity-75"
                                        id="purpose" name="purpose" value={formValues?.purpose} onChange={handleChange}>
                                        <option>Contact For</option>
                                        <option>Web Analytics Service</option>
                                        <option>Display &amp; Video 360 Self Serve</option>
                                        <option>Google Cloud Platform</option>
                                        <option>Mobile App Analytics Service</option>
                                        <option>Advanced Funnel Optimization</option>
                                        <option>Training</option>
                                        <option>Others</option>
                                    </select>
                                    <p className="text-red-600 text-sm">{formErrors?.purpose}</p>

                                </div>

                                <div className=''>
                                    <div className='text-sm 2xl:text-lg font-semibold text-[#14183E] pb-1 2xl:pb-1.5'>Requirenments*</div>
                                    <textarea placeholder="Write Message..." rows={2} className="px-5 py-2 border-[0.5px] border-[#08A4F7] rounded-md md:col-span-2 max-h-28 overflow-auto w-full focus:outline-none placeholder-[#747582] placeholder-opacity-75"
                                        id="requirements" name="requirements" value={formValues?.requirements} onChange={handleChange}></textarea>

                                    <p className="text-red-600 text-sm">{formErrors?.requirements}</p>

                                    <div className='text-[#747582] text-[10px] 2xl:text-xs'>By submitting this form, you agreed to our <a href='/privacy-policy' target='_blank'>privacy policy</a>. We promise we don’t spam.</div>
                                </div>
                                {showWaiting &&
                                    <button type="submit" style={{ cursor: 'not-allowed' }} disabled className="group mainbutn cursor-not-allowed flex items-center justify-center gap-2">
                                        <div className="flex items-center">
                                            <div className="w-4 h-4 border-2 border-t-transparent group-hover:border-[#08A4F7] border-white rounded-full animate-spin"></div>
                                            <span className="ml-2">Submitting</span>
                                            <div className="flex ml-2 gap-1 pt-2">
                                                <span className="dot h-1 w-1 group-hover:bg-[#08A4F7] bg-white rounded-full"></span>
                                                <span className="dot h-1 w-1 group-hover:bg-[#08A4F7] bg-white rounded-full"></span>
                                                <span className="dot h-1 w-1 group-hover:bg-[#08A4F7] bg-white animate-bounce rounded-full"></span>
                                            </div>
                                        </div>
                                    </button>}
                                {!showWaiting && <button type='submit' className="mainbutn">Submit</button>}
                            </form>}

                            <div className='md:hidden flex items-center md:pt-10 justify-center'>
                                <div className='w-full flex items-center justify-evenly max-sm:justify-evenly'>
                                    <a title='Facebook' href="https://m.facebook.com/100070503960704/">
                                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/facebook.svg' className='w-[30px] hover:shadow-mediaIcons rounded-full transition-all duration-100' alt='facebook' />
                                    </a>
                                    <a title='Twitter' href="https://twitter.com/AnalyticsLiv">
                                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/twitter.svg' className='w-[30px] hover:shadow-mediaIcons rounded-full transition-all duration-100' alt='twitter' />
                                    </a>
                                    <a title='Instagram' href="https://www.instagram.com/analyticsliv_digital/">
                                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/instagram.svg' className='w-[30px] hover:shadow-mediaIcons rounded-full transition-all duration-100' alt='instagram' />
                                    </a>
                                    <a title='Linkedin' href="https://in.linkedin.com/company/analytics-liv-digital/">
                                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/linkedin.svg' className='w-[30px] hover:shadow-mediaIcons rounded-full transition-all duration-100' alt='linkedin' />
                                    </a>
                                    <a title='Youtube' href="https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw">
                                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/youtube.svg' className='w-[30px] hover:shadow-mediaIcons rounded-full transition-all duration-100' alt='youtube' />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="absolute h-[375px] md:h-[460px] 2xl:h-[540px] bottom-[-250px] md:bottom-[-300px] 2xl:bottom-[-370px] w-full z-10 bg-gradient-to-b from-[#003366] to-[#00509E] text-white pt-40 pb-10 flex justify-center items-end">
                        <div className="h-full w-[95%] lg:w-[1000px] 2xl:w-[1240px] grid grid-cols-3 place-items-start justify-items-center text-center gap-3 sm:gap-10 md:pt-20 2xl:pt-28">
                            <div className='flex flex-col items-center lg:w-[70%]'>
                                <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/office_1.svg' alt='AnalyticsLiv Adress' className='pb-6' />
                                <p className='pb-1 text-[10px] sm:text-sm 2xl:text-lg font-medium'>503, 31Five, Corporate Road, Prahaladnagar, S.G. Highway, Ahmedabad 380015, Gujarat, India</p>
                            </div>
                            <div className='flex flex-col items-center lg:w-[70%]'>
                                <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/office_2.svg' alt='AnalyticsLiv Adress' className='pb-6' />
                                <p className='pb-1 text-[10px] sm:text-sm 2xl:text-lg font-medium'>3104 E Camelback Rd ,Suite #7406, Phoenix, AZ 85016, USA</p>
                            </div>
                            <div className='flex flex-col items-center lg:w-[70%]'>
                                <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/office_3.svg' alt='AnalyticsLiv Adress' className='pb-6' />
                                <p className='pb-1 text-[10px] sm:text-sm 2xl:text-lg font-medium'>Via Natale Prampolini, 15 - 00132, Roma, Italy</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-[300px] md:mt-[350px] 2xl:mt-[420px] px-[5%] pb-14'>
                    <div className='bg-header-linear p-[2.5%]'>
                        <div className='w-full h-[200px]'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.660556214622!2d72.4981082753132!3d22.9995064791899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x613f5a1e7cb48aa3%3A0xaef382143b118f7!2sAnalyticsLiv!5e0!3m2!1sen!2sin!4v1704214142520!5m2!1sen!2sin" className='w-full h-full z-100'></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default contact