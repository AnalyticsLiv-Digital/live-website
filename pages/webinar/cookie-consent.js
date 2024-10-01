import React, { useEffect, useState } from 'react';
import '@fontsource/lato';
import { scroller } from 'react-scroll';

const CookieConsent = () => {

    const initialValues = { fullName: '', email: '', contact: '', company: '' };
    const [formSubmit, setFormSubmit] = useState(false);
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const scrolling1 = () => {
        scroller.scrollTo("webinarForm", {
            duration: 500,
            smooth: true,
            offset: -100,
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
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
                event: 'gtm_submission'
            });
            fetch('/api/gtmcontact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'mode': 'no-cors'
                },
                body: JSON.stringify({
                    "fullName": formValues.fullName,
                    "email": formValues.email,
                    "contact": formValues.contact,
                    "company": formValues.company,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
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
        if (!values.fullName) {
            errors.fullName = "Name is required!";
        }

        if (!values.company) {
            errors.company = "company is required!";
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        return errors;
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollPosition / totalHeight) * 100;

            if (scrollPercent > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className='font-lato'>
            <div className='bg-[#2E2C37]'>
                <div className="flex justify-between max-sm:gap-2 px-2 md:px-16 pt-5 ">
                    <img
                        src="/AnalyticsLiv Logo.png"
                        alt="analyticsliv-logo"
                        className="max-sm:h-11 max-md:h-16 max-sm:w-[140px] max-md:w-[30%] bg-white rounded-full px-4"
                    />
                    <img
                        src="/Google_Marketing_Plateform_Certified_Logo 1.png"
                        alt="google-partner"
                        className='max-sm:h-11 max-md:h-16 max-sm:w-[140px] max-md:w-[30%] '
                    />
                </div>
                <div className=" 2xl:h-[750px] max-lg:h-[400px] max-md:h-[250px] max-2xl:h-[525px]"
                    style={{
                        backgroundImage: 'url(/vectormain.png)',
                        backgroundSize: 'contain',
                        backgroundPosition: 'bottom right',
                        backgroundRepeat: 'no-repeat',
                    }}
                >

                    <div
                        className="flex-grow flex justify-between items-center relative max-sm:px-2 sm:pr-5 2xl:px-10"
                    >
                        <div className="text-left max-md:pt-5 flex-1 sm:pl-[5dvw] md:pl-[10dvw] 2xl:pl-[11dvw]">
                            <div className="text-2xl md:text-3xl 2xl:text-4xl font-black text-white mb-6 font-lato max-md:text-center">
                                Google Basic Consent vs. Advanced Consent - Optimising Your Data Strategy
                            </div>
                            <div className="text-base text-white mb-8 font-lato max-md:text-center">
                                Watch the recorded session with Shubhangi and Abhishek from AnalyticsLiv Digital, as they break down Google Consent Mode.
                            </div>
                        </div>

                        <div className="flex-none">
                            <img
                                src="/IMG.png"
                                alt="main-img"
                                className="2xl:h-[750px] max-2xl:h-[525px] max-lg:h-[400px] max-md:h-[250px] max-sm:hidden"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <section className='flex justify-end max-lg:flex-col'>
                {formSubmit ? <div className='webinarForm lg:absolute max-md:mx-4 overflow-auto z-10 h-[400px] md:h-[450px] 2xl:h-[450px] md:my-10 lg:left-[8%] xl:left-[11%] 2xl:left-[13%] max-md:mt-4 md:top-[460px] xl:top-[400px] 2xl:top-[550px] lg:w-[350px] xl:w-[420px] border-[5px] rounded-lg border-[#FFFFFF] shadow-[0_5px_10px_0_rgba(0,0,0,0.25)]
                 text-center flex flex-col justify-around items-center px-3 md:px-4 py-2 md:py-5 bg-white'>
                    <h2 className="md:text-xl text-[#3C292A]">Thank you for showing interest with us!</h2>
                    <h2 className="font-extrabold text-3xl p-4 md:p-8 border-dashed border-b-2 border-sky-200">We will get back to you shortly !!</h2>
                    <img alt="Thankyou" className="w-64 mx-auto" src="https://storage.googleapis.com/website-bucket-uploads/static/Na_Dec_46.jpg" />
                </div> :
                    <div className='webinarForm lg:absolute max-md:mx-4 max-lg:mx-28 overflow-auto z-10 h-[400px] md:h-[450px] 2xl:h-[450px] md:my-10 lg:left-[8%] xl:left-[11%] 2xl:left-[13%] max-md:mt-4 md:top-[460px] xl:top-[400px] 2xl:top-[550px] lg:w-[350px] xl:w-[420px] border-[5px] rounded-lg border-[#FFFFFF] shadow-[0_5px_10px_0_rgba(0,0,0,0.25)] 
                text-center flex flex-col justify-around items-center px-3 md:px-4 py-2 md:py-3 bg-white'>

                        <h1 className='font-extrabold text-3xl md:text-[28px] text-[#3C292A]'>On Demand Webinar</h1>

                        <div className='text-sm font-normal leading-4 text-[#3C292A]'>Register Now to optimize your data strategy while staying compliant with evolving privacy regulations.</div>

                        <form className='flex flex-col gap-3.5 md:gap-5 w-[90%] md:w-[80%]' onSubmit={handleSubmit}>

                            <input type='text' placeholder='Name*' style={{ boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.3)' }}
                                className='px-3 py-2 text-sm border border-[#3C292A] rounded-md' id="fullName" name="fullName" value={formValues.fullName} required onChange={handleChange} />

                            <input type='email' placeholder='Email*' style={{ boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.3)' }}
                                className='px-3 py-2 text-sm border border-[#3C292A] rounded-md' id="email" name="email" value={formValues.email} required onChange={handleChange} />

                            <input type='number' placeholder='Contact No' style={{ boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.3)' }}
                                className='px-3 py-2 text-sm border border-[#3C292A] rounded-md' id="contact" name="contact" value={formValues.contact} onChange={handleChange} />

                            <input type='text' placeholder='Your company*' style={{ boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.3)' }}
                                className='px-3 py-2 text-sm border border-[#3C292A] rounded-md' id="company" name="company" value={formValues.company} required onChange={handleChange} />

                            <button className='gtmbutn4 bg-gradient-to-l from-[#EB5442] to-[#ED7754] hover:border-black hover:border-[1px] hover:text-[#EB5442] border border-[#FFFFFF] rounded-md shadow-[2px_2px_3px_1px_rgba(0,0,0,0.25)] py-2 text-sm font-extrabold'>REGISTER NOW</button>

                        </form>

                    </div>}
                <div className='max-lg:px-5 lg:pr-[0px] xl:pr-[30px] 2xl:pr-[10dvw] pt-10 lg:pt-20 flex max-lg:flex-col items-center gap-2 2xl:gap-5'>
                    <img src='/Point_Icon.png' alt='point-img' className='max-sm:h-8 max-sm:w-9' />
                    <div className='max-md:text-center'>Whether you're in marketing, web management, or data analytics, this webinar will <br className='max-md:hidden'></br>simplify the process of managing consent for you.</div></div>
            </section>
            <section className='flex max-xl:flex-col max-xl:items-center xl:justify-around mt-14 lg:mt-60 2xl:mt-32 mb-24'>
                <div className='w-full xl:w-[50%]'>
                    <div className='text-[35px] font-bold text-[#3C292A] pb-2 xl:pb-8 xl:font-extrabold text-center'>
                        <span className='inline-block relative'>
                            Meet&nbsp;
                            <span
                                className='absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]'
                                style={{
                                    width: '80px',
                                    height: '5px',
                                    borderRadius: '10px',
                                    top: 'calc(100% )',
                                    left: '0',
                                }}
                            ></span>
                        </span>
                        Our Presenters
                    </div>

                    <div className=' flex max-sm:flex-col max-sm:gap-14 items-center justify-around xl:justify-between pt-12'>
                        <div className='flex flex-col'>
                            <img src="/Shubhangi_Webinar_Profile_Pic.png" alt="" className='pb-7' />
                            <div className='text-base font-black text-center text-[#3C292A] pb-2'>Shubhangi Chauhan</div>
                            <div className='text-sm font-normal text-center'>Account Manager</div>
                        </div>
                        <div className='flex flex-col'>
                            <img src="/Abhishek_Webinar_Profile_Pic.png" alt="" className='pb-7' />
                            <div className='text-base font-black text-center text-[#3C292A] pb-2'>Abhishek Tiwari</div>
                            <div className='text-sm font-normal text-center'>CSM & GA4 Expert</div>
                        </div>
                        <div className='flex flex-col'>
                            <img src="/Anshul_Webinar_Profile_Pic.png" alt="" className='pb-7' />
                            <div className='text-base font-black text-center text-[#3C292A] pb-2'>Anshul Dhurandhar</div>
                            <div className='text-sm font-normal text-center'>GTM Expert</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-[35px] max-lg:mt-14 max-xl:mt-12 font-bold text-[#3C292A] pb-2 xl:pb-8 xl:font-extrabold text-center'>
                        <span className='inline-block relative'>
                            Timings&nbsp;
                            <span
                                className='absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]'
                                style={{
                                    width: '90px',
                                    height: '5px',
                                    borderRadius: '10px',
                                    top: 'calc(100% )',
                                    left: '0',
                                }}
                            ></span>
                        </span>
                    </div>
                    <div className='shadow-cookiePageShadow w-[330px] sm:w-[350px] rounded-3xl mt-[40px]'>
                        <div className='border-b-[#D3D3D3] border-b flex justify-center gap-7 py-3'>
                            <img src='/Time.png' alt='time' />
                            <div className='flex flex-col'>
                                <div className='text-lg font-bold text-left'>Saturday, Oct 5th</div>
                                <div className='text-sm font-normal text-left'>11 AM  IST</div>
                            </div>
                        </div>
                        <div className='flex justify-evenly py-5'>
                            <div className='text-sm font-normal text-center'><img className='pb-2' src='/Duration.png' alt='time' />1 Hour</div>
                            <div className='text-sm font-normal text-center'><img className='pb-2' src='/reduce-cost (2) 1.png' alt='time' />Free</div>
                        </div>
                        <div className='flex justify-center pb-5'>
                            <button onClick={scrolling1} className='gtmbutn4 bg-gradient-to-l from-[#EB5442] to-[#ED7754] hover:border-black hover:text-[#EB5442] hover:border-[1px] border border-[#FFFFFF] rounded-md shadow-[2px_2px_3px_1px_rgba(0,0,0,0.25)] py-2 text-xs px-4 font-extrabold'>RESERVE YOUR SPOT</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#FFE6E2]'>
                <div className='text-2xl md:text-[35px] font-bold text-[#3C292A] pt-16 pb-16 xl:font-extrabold text-center'>
                    <span className='inline-block relative'>
                        In this&nbsp;
                        <span
                            className='absolute block bg-gradient-to-r from-[#59C3EC] to-[#297AB6]'
                            style={{
                                width: '90px',
                                marginTop: '8px',
                                height: '5px',
                                borderRadius: '10px',
                                top: 'calc(100% )',
                                left: '0',
                            }}
                        ></span>
                    </span>
                    webinar, you'll learn :
                </div>
                <div className='flex max-lg:grid max-lg:grid-cols-2 max-md:gap-8 max-lg:gap-16 max-sm:grid-cols-1 justify-around md:px-14 2xl:px-36 pb-20'>
                    <div className='flex flex-col items-center max-md:gap-4 md:gap-10'>
                        <img src='/image 1 1.png' className=' h-32 w-32' alt='privacy' />
                        <div className='text-sm font-medium text-center'>The fundamentals of consent <br></br>
                            & its role in data privacy.</div>
                    </div>
                    <div className='flex flex-col items-center max-md:gap-4 md:gap-10'>
                        <img src='/image 2 1.png' className=' h-32 w-32' alt='privacy' />
                        <div className='text-sm font-medium text-center'>A comparison of Basic & <br></br>Advanced Consent Modes.</div>
                    </div>
                    <div className='flex flex-col items-center max-md:gap-4 md:gap-10'>
                        <img src='/image 3 1.png' className=' h-32 w-32' alt='online-privacy' />
                        <div className='text-sm font-medium text-center'>How to implement Google’s <br></br>Consent Mode for websites and<br></br> PPC campaigns.</div>
                    </div>
                    <div className='flex flex-col items-center max-md:gap-4 md:gap-10'>
                        <img src='/image 4 1.png' className=' h-32 w-32' alt='settings' />
                        <div className='text-base font-medium text-center'>Insights on tools like Cookiebot<br></br> and OneTrust for effective <br></br>consent management.</div>
                    </div>
                </div>
            </section>

            <section className='bg-[#2E2C37] w-full h-full flex justify-center py-2 px-2 md:px-4 md:py-4 lg:py-8 lg:px-10'>
                <img onClick={scrolling1} src='/Concent_webinar_Bottom_Banner (1440 x 400 px) (1) 1 (1).png' alt='footer-banner' className='w-full cursor-pointer' />
            </section>

            <section id="sticky-section" className={`bg-gradient-to-l from-[#EB5442] to-[#ED7754] max-md:py-3 md:py-5 max-md:gap-0 flex items-center justify-between lg:justify-center 
                    lg:gap-16 xl:gap-16 px-3.5 md:px-5 lg:px-8 xl:px-16 2xl:px-56  transform transition-all duration-1000 ease-in-out ${isSticky ? 'sticky translate-y-0  transform transition-all duration-1000 ease-out' : 'transform transition-all duration-1000 ease-in-out translate-y-10'}`}>
                <div className='text-[12px] max-sm:w-[60%] max-lg:w-[77%] md:text-xl font-semibold text-white'>Are you looking for the right partner to implement Cookie consent for your business?</div>
                <a onClick={scrolling1}
                    target='_blank' className='max-sm:w-[107px] bg-white text-[#ED7754] cursor-pointer shadow-foter 
                        py-2 border rounded-[5px] px-2 sm:px-3 text-[11px] md:text-sm font-semibold sm:hover:text-[14.1px]'>
                    Contact Us Now</a>
            </section>
        </main>
    );
};

export default CookieConsent;


{/* <footer className='bg-white py-2'>
                <div className='text-sm md:text-base 2xltext-lg text-center font-medium'>Copyright @ 2024 AnalyticsLiv</div>
            </footer> */}