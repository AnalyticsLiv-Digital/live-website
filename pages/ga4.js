import Head from 'next/head'
import React from 'react'
import { useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';

const { Element: ScrollElement } = Scroll;

const ga4 = () => {

    const initialValues = { fullName: '', email: '', contact: '',message : ''};
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


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
            setShowWaiting(true);
            dataLayer.push({
                event:'ga4_submission'
            });
            fetch('/api/ga4contact', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    'mode': 'no-cors'
                },
                body: JSON.stringify({
                    "fullName": formValues.fullName,
                   "email": formValues.email,
                   "contact": formValues.contact,
                   "message": formValues.message
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

    const scrolling = () => {
        {
            Scroll.scroller.scrollTo("contact-form", {
              duration: 500,
              smooth: true,
              offset: -100,
            });
          }
    }


  return (
    <><Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins"
          rel="stylesheet"
        />
    </Head>
    <div style={{fontFamily: "'Poppins', sans-serif"}}>
    <section>
    <div className="flex items-center mt-4 md:px-20 pl-4">
      <div className=" m-2 md:float-none"><img src="https://storage.googleapis.com/website-bucket-uploads/static/Ga4_logo.png"/></div>
      <h1 className="  md:text-5xl text-2xl font-bold ml-4">Google Analytics 4</h1>
    </div>

    <div className="relative md:flex items-center mt-4 md:px-20 pl-4">
      <div className="absolute z-0 bg-gradient-to-r from-sky-200 to-transparent md:w-96 md:h-96 w-40 h-40 md:top-0 md:-left-36 top-12 -left-16 rounded-full"></div>
      <div className="mt-12 md:w-3/4 z-10">
        <h1 className="text-2xl font-bold">Is your GA4 ready to </h1>
        <ul style={{color: '#E37400'}} className="mt-6 mx-2 font-semibold">
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="lightblue" fill-rule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clip-rule="evenodd"/></svg>
            Explore new features of analytics</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="lightblue" fill-rule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clip-rule="evenodd"/></svg>
            Better understand website traffic</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="lightblue" fill-rule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clip-rule="evenodd"/></svg>
            Spend Marketing Budgets more wisely</li>
        </ul>
        <img className="" src="https://storage.googleapis.com/website-bucket-uploads/static/IMG_GROUP.png"/>
      </div>
      <div className="text-center bg-sky-50 p-4 md:p-8 md:w-3/5 rounded-xl shadow-xl">
       
      {!formSubmit &&<div className="block">
          <h2 className="md:text-xl text-sky-900">We Understand setting up GA4 can be complex sometimes.</h2>
        <h1 className="font-semibold text-2xl p-4 md:p-8 border-dashed border-b-2 border-sky-200">Let us help you !!</h1>
        <ScrollElement
        id="contact-form"
        name="contact-form"
      ></ScrollElement>
        <form className="px-8 pt-8 pb-2 space-y-6" onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="FULL NAME" className="bg-sky-50 border-b-2 w-full pb-2" id="fullName" name="fullName" value={formValues.fullName} onChange={handleChange} />
            <span className="text-xs text-red-600 float-left">{formErrors.fullName}</span>
          </div>
          <div>
            <input pattern="[0-9]{12}" type="tel" placeholder="CONTACT NO." className="bg-sky-50 border-b-2 w-full pb-2" id="contact" name="contact" value={formValues.contact} onChange={handleChange} />
           
          </div>
          <div>
            <input type="email" placeholder="EMAIL" className="bg-sky-50 border-b-2 w-full pb-2" id="email" name="email" value={formValues.email} onChange={handleChange}/>
            <span className="text-xs text-red-600 float-left">{formErrors.email}</span>
          </div>
          <div>
            <textarea type="" placeholder="TYPE MESSAGE" className="bg-sky-50 border-b-2 w-full pb-2" id="message" name="message" value={formValues.message} onChange={handleChange}></textarea>
            <span className="text-xs text-red-600 float-left">{formErrors.message}</span>
          </div>
          <div>
            <button className="bg-amber-600 font-semibold text-white px-8 py-2 rounded-xl shadow-md shadow-gray-600">CONTACT US </button>
            
          </div>
        </form>
        </div>}

        {formSubmit && <div>
          <h2 className="md:text-xl text-sky-900">Thank you for showing interest with us!</h2>
        <h1 className="font-semibold text-2xl p-4 md:p-8 border-dashed border-b-2 border-sky-200">We will get back to you shortly !!</h1>
        <img src="https://storage.googleapis.com/website-bucket-uploads/static/Na_Dec_46.jpg"/>
        </div>}

      </div>
    </div>    
  </section>

  <section>
    <div className="bg-sky-300 relative md:flex md:justify-around md:mt-4 px-4 md:px-20 pt-8 pb-16">
      <div className="text-center mb-8 md:mb-0">
        <h1 className="text-4xl font-bold md:mb-16">Our experts can help you</h1>
        <ul className="my-6 mx-2 text-sm text-left font-semibold space-y-4 mb-8">
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="DarkSlateGray" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Set up your GA4 account and configure the tracking code</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="DarkSlateGray" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Import your historical data from Universal Analytics</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="DarkSlateGray" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Create custom reports and dashboards</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="DarkSlateGray" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Track your website traffic and marketing campaigns</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="DarkSlateGray" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Analyse your data and identify trends</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="DarkSlateGray" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Make data-driven decisions that will help you grow your business</li>
      </ul>
      <button onClick={scrolling} className="schedule-button bg-white p-4 rounded-xl shadow-lg shadow-gray-600 text-slate-800 font-semibold">Schedule Free Consultation</button>
      </div>
      <div className="text-center">
        <img src="https://storage.googleapis.com/website-bucket-uploads/static/graph.png" />
      </div>
    </div>
  </section>

  <section>
    <div className="relative md:flex justify-around md:mt-4 px-4 md:px-20 md:pt-4 md:pb-16">
      <div className="text-center">
        <img src="https://storage.googleapis.com/website-bucket-uploads/static/Offer.png" />
      </div>
      <div>
        <h1 className="text-4xl font-bold md:mb-16">Menu of Services</h1>
        <ul className="my-6 mx-2 text-sm font-semibold space-y-4 mb-8">
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="DarkSlateGray" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            GA4 Audit :
            <div className="pl-9 text-amber-500">Know about your current GA4 configuration and its gaps</div>
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="DarkSlateGray" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Full Service Management :
            <div className="pl-9 text-amber-500">Configuration, management, and analysis of your GA4 account </div>
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="DarkSlateGray" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Consulting :
            <div className="pl-9 text-amber-500">Get guidance and support on how GA4 can help improve your business. </div> 
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-2" viewBox="0 0 24 24"><path fill="DarkSlateGray" fillRule="evenodd" d="M5.5 5.938a1 1 0 0 0-1.5.866v10.392a1 1 0 0 0 1.5.866L8 16.62V7.38L5.5 5.938Zm2.898-.636L6.5 4.206l-.5.866l.5-.866C4.5 3.05 2 4.494 2 6.804v10.392c0 2.31 2.5 3.753 4.5 2.598l1.898-1.096c.785 1.355 2.587 1.971 4.102 1.096l9-5.196c2-1.155 2-4.041 0-5.196l-9-5.196c-1.515-.875-3.317-.259-4.102 1.096Z" clipRule="evenodd"/></svg>
            Training :
            <div className="pl-9 text-amber-500">Get trained by Analytics veterans on how to use GA4 & manage
              your account yourself. </div>
          </li>
      </ul>
      </div>
    </div>
  </section>

  <section className='casestudy'>
    <div className="bg-sky-300 relative text-center md:px-20 px-2 md:pt-8 py-4 md:pb-16 space-y-8">
      <h1 className="text-4xl text-left font-bold md:mb-16">Case Studies</h1>
      <div className="cstudy md:flex text-left justify-evenly bg-white md:px-20 px-2 md:py-8 py-4 md:rounded-full rounded-xl shadow-md shadow-gray-600">
      <div className="md:w-3/4">
        <h1 className="text-2xl font-bold mb-4"><svg xmlns="http://www.w3.org/2000/svg" className="inline mr-4" width="24" height="24" viewBox="0 0 24 24"><path fill="DarkSlateGray" fillRule="evenodd" d="M17.9 4.2A3 3 0 0 0 15.5 3h-11a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h11a3 3 0 0 0 2.4-1.2l4.5-6a3 3 0 0 0 0-3.6l-4.5-6Z" clipRule="evenodd"/></svg>
          Universal Analytics (GA3) to GA4 Migration for a Website</h1>
        <p className="text-amber-600">The migration process was smooth and successful without any data loss,
          increasing efficiency and reducing manual effort by 30%. The client now has a more comprehensive understanding of user behaviour across devices and sessions, enabling them to make more informed decisions and improve website performance.
        </p>
      </div>
      <div className="text-center space-x-4">
        <img src="https://storage.googleapis.com/website-bucket-uploads/static/UA_Logo.png" className="inline" />
        <img src="https://storage.googleapis.com/website-bucket-uploads/static/curved_arrow.png" className="inline" />
        <img src="https://storage.googleapis.com/website-bucket-uploads/static/Ga4_logo_png 1.png" className="inline" />
        <a href="https://analyticsliv.com/case-studies/ua-to-ga4-migration-for-a-website"><button className="bg-amber-500 px-16 py-2 text-white font-semibold rounded-full shadow-lg shadow-gray-400 mt-8">View</button></a>
      </div>
      
      </div>

      <div className="cstudy md:flex text-left justify-evenly bg-white px-2 md:px-20 py-4 md:py-8 md:rounded-full rounded-xl shadow-md shadow-gray-600">
        <div className="md:w-3/4">
          <h1 className="text-2xl font-bold mb-4"><svg xmlns="http://www.w3.org/2000/svg" className="inline mr-4" width="24" height="24" viewBox="0 0 24 24"><path fill="DarkSlateGray" fillRule="evenodd" d="M17.9 4.2A3 3 0 0 0 15.5 3h-11a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h11a3 3 0 0 0 2.4-1.2l4.5-6a3 3 0 0 0 0-3.6l-4.5-6Z" clipRule="evenodd"/></svg>
            GA4 Enhanced Ecommerce Implementation
            Using GTM and Shopify Integration</h1>
          <p className="text-sky-600">We successfully implemented 90% of purchase events, with the exception of UA, which is at 70% and all GA4 enhanced ecommerce events and Shopify parameters are being successfully sent to GA4.
          </p>
        </div>
        <div className="text-center pt-4 md:pt-0 space-x-4">
          <img src="https://storage.googleapis.com/website-bucket-uploads/static/GTM_logo.png" className="inline" />
          <img src="https://storage.googleapis.com/website-bucket-uploads/static/AI.png" className="inline" />
          <img src="https://storage.googleapis.com/website-bucket-uploads/static/Shopify_logo.png" className="inline" />
          <a href="https://analyticsliv.com/case-studies/ga4-enhanced-ecommerce-implementation-using-gtm-and-shopify-integration"><button className="bg-sky-500 px-16 py-2 text-white font-semibold rounded-full shadow-lg shadow-gray-400 mt-8">View</button></a>
        </div>        
        </div>
        <a href="https://analyticsliv.com/case-studies"><button className="more-casestudy my-5 bg-amber-600 text-white font-semibold px-8 py-3 shadow-md shadow-gray-600 rounded-full">More Case Studies</button></a>
    </div>
  </section>

   <section>
    <div className="relative h-full pb-16" style={{backgroundImage: 'url(https://storage.googleapis.com/website-bucket-uploads/static/Working_woman.png)'}} >
      <h1 className="font-bold text-4xl py-8 md:py-16 text-center">Let's See What Our Clients Have To Say</h1>
      <div className="relative z-10 md:w-1/3 mx-4 md:mx-auto mt-4 bg-sky-100/80  px-8 pt-4 pb-0">
        <div className="absolute rounded-full bg-white p-4 -top-12 mx-28 md:mx-36 shadow-md shadow-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12" viewBox="0 0 24 24">
            <path fill="CornflowerBlue" d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
          </svg>
        </div>
        <div className="relative flex items-center my-8 w-full justify-center space-x-4 text-center">
          <img src="https://storage.googleapis.com/website-bucket-uploads/static/Character_1.png" className=""/>
          <h1 className="font-bold text-3xl">Una</h1>
        </div>
        <p className=" mx-auto">"AnalyticsLiv helped us set up and manage our GA4 account, and we're so glad 
          we did. They were patient and knowledgeable, and they always made sure we 
          understood what they were doing. We're now able to track our website traffic and 
          marketing campaigns more effectively, and we're confident that we're making better 
          business decisions as a result."</p>
      </div>
      <div className="relative md:w-1/3 z-0 bg-sky-100/80 h-52 rounded-b-full mx-4 md:mx-auto pb-0"></div>
    </div>
    
  </section> </div>
    </>
  )
}

export default ga4