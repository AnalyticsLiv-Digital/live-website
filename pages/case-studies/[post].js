import Head from 'next/head'
import React from 'react'
import ScrollProgress from '../../components/ScrollProgress'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react'
import { Router, useRouter } from 'next/router';
import { ScaleLoader } from 'react-spinners'

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

    const dataLayerpush = () => {
        dataLayer.push({
            event: 'free_casestudy_download',
            eventCategory: cd.title,
            eventAction: 'download'
        });

    }

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


        return errors;
    };

    var url = "https://analyticsliv.com/case-studies/" + cd.slug;

    return (<>
        <Head>
            <title>AnalyticsLiv - Case Sudies</title>
            <link rel="canonical" href={url}></link>
        </Head>
        <ScrollProgress />
        {showWaiting && <div className="fixed flex backdrop-blur top-0 left-0 right-0 z-40 w-full p-4 md:overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"><ScaleLoader
            color="#271d90"
            loading
            size={100}
            className="m-auto align-middle"
        /></div>}
        <div className=' overflow-hidden'>
            <section className="relative bg-gray-100 pt-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute lg:w-48 w-32 -right-0 top-10 lg:top-8 lg:right-10 fill-orange-500 blur-md rotate-45" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15">
                    <path d="M7.932 1.248a.5.5 0 0 0-.864 0l-7 12A.5.5 0 0 0 .5 14h14a.5.5 0 0 0 .432-.752l-7-12Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute lg:w-48 w-32 bottom-0 fill-green-400 blur-md -rotate-12" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15">
                    <path d="M7.932 1.248a.5.5 0 0 0-.864 0l-7 12A.5.5 0 0 0 .5 14h14a.5.5 0 0 0 .432-.752l-7-12Z" />
                </svg>
                <h2 className="text-center text-4xl font-semibold uppercase mb-2">Case Study</h2>

                <div className="relative lg:flex w-full lg:w-5/6 space-y-4 lg:space-y-0 lg:space-x-4 mx-auto pt-4 pb-8 px-4">
                    <div className="p-4 lg:w-3/4 space-y-6 bg-white">
                        <h1 className="text-2xl">{cd.title}</h1>
                        <div className="h-0.5 bg-cyan-500"></div>
                        <img className="w-screen" src={cd.coverimage} />

                        {cd.content && cd.content.map((casestudy, key) => (
                            <div key={key}>
                                <h3 className="inline uppercase font-semibold text-xl text-slate-800">{casestudy.heading}:</h3>
                                <p className="px-8 mt-4 text-gray-600">
                                    {casestudy.description}
                                </p>
                            </div>
                        ))}

                    </div>

                    {cd.open &&

                        <div className={`${formFixed ? "sticky top-20" : "relative"} h-fit lg:w-1/2 bg-white px-10 py-4`}>
                            {formSubmit ? <div className='relative text-slate-700 p-4 space-y-4 h-full'>
                                <h3 className='align-middle font-medium text-4xl'>Thank You for your interest.</h3>
                                <h2 className='align-middle text-xl'>The download link for this case study has been sent to the email-id provided.</h2>
                                <div><a href='#' className='text-blue-500 underline'>Click here</a> to go to Home Page</div>
                                <div className='absolute bottom-0 right-2 rounded-full w-20 h-20 bg-emerald-600 opacity-70 animate-bounce hover:animate-none duration-300 delay-75'></div>
                            </div> : <form className="space-y-4 md:space-y-6">
                                <h3 className="text-center text-xl">Enter your details to download the casestudy.</h3>
                                <div className="h-0.5 bg-cyan-600"></div>

                                <div className="relative">
                                    <input type="text" id="fullName" name="fullName" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-b border-slate-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required value={formValues.fullName} onChange={handleChange} />
                                    <label htmlFor="fullName" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Full Name*</label>
                                    <p className="text-red-600 text-sm">{formErrors.fullName}</p>
                                </div>


                                <div className="relative">
                                    <input type="email" id="email" name="email" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-b border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required value={formValues.email} onChange={handleChange} />
                                    <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">E-mail*</label>
                                    <p className="text-red-600 text-sm">{formErrors.email}</p>
                                </div>

                                <div className="relative">
                                    <input type="text" id="company" name="company" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-b border-slate-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " value={formValues.company} onChange={handleChange} />
                                    <label htmlFor="company" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Company</label>
                                    <p className="text-red-600 text-sm">{formErrors.company}</p>
                                </div>

                                <div className="text-center">
                                    <div className="tracking-wider w-full mt-4 px-8 py-2 m-auto bg-sky-800 uppercase text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150 cursor-pointer" onClick={handleSubmit}>Download
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 inline text-right" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4l-4-4h3zm6 7H7v-2h10v2z" />
                                        </svg>
                                    </div>
                                </div>
                            </form>}
                        </div>
                    }

                    {/* {cd.open &&

                        <div className="sticky top-20 h-fit lg:w-1/2 bg-white px-10 py-4">
                            <div className="text-center">
                                <a href={cd.filename} target="_blank">
                                    <div className="tracking-wider w-full mt-4 px-8 py-2 m-auto bg-slate-800 uppercase text-white rounded hover:border hover:border-slate-800 hover:shadow-md hover:bg-white hover:text-slate-800 transition duration-150 cursor-pointer mr-16 flex justify-center items-center gap-2" onClick={dataLayerpush}>Download
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 inline text-right" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4l-4-4h3zm6 7H7v-2h10v2z" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    } */}

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