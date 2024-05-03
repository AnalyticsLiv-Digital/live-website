import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import { ScaleLoader } from 'react-spinners'
import { motion } from 'framer-motion';

const PopupForm = () => {
    const initialValues = { firstName: '', lastName: '', email: '',website: '', company: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showWaiting, setShowWaiting] = useState(false);
    const [showform, setShowform] = useState(true);
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
        console.log(formValues);
        console.log(formErrors);
    };

    useEffect(() => {
       // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
            setShowWaiting(true);
          dataLayer.push({
                event:'paid_migration_submission'
            }); 
            fetch('/api/paidmigration', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    'mode': 'no-cors'
                },
                body: JSON.stringify({
                    "firstName": formValues.firstName,
                   "lastName": formValues.lastName,
                   "email": formValues.email,
                   "website" : formValues.website,
                   "company": formValues.company
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

        if (!values.website) {
            errors.website = "Website is required!";
        }

       /* if (!values.role) {
            errors.role = "Role is required!";
        }
        */

     

        

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
    {showform && <motion.div key="modal" initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} id="popup_form" className='hidden fixed overflow-y-auto  z-50 w-full h-full top-0'>
    <div className='fixed w-full h-full bg-black bg-opacity-70 ' ></div>
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className='relative w-5/6 md:w-3/5 h-auto m-auto top-10 bg-white'>
            <div onClick={() => setShowform(false)}  className='ga4migration-close cursor-default  z-30 absolute top-0 right-0 w-auto pr-1 md:pr-4 text-2xl'>X</div>
            <div className='w-full h-full'>
{showWaiting && <div className="fixed z-40 flex backdrop-blur top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"><ScaleLoader
color="#271d90"
loading
size={100}
className="m-auto align-middle"
/></div>}
<section className="relative">

   


    <div className="relative ">

        <div className="relative overflow-hidden lg:w-full lg:p-6 pt-4 rounded-lg mx-2 lg:mx-auto bg-white">
        {formSubmit && <div className='relative text-slate-700 p-4 space-y-4 h-full'>
                        <h1 className='align-middle font-medium text-4xl'>Thank You for submitting the details!</h1>
                        <h2 className='align-middle text-xl'>We will get back to you soon.</h2>
                        
                        <div className='absolute bottom-0 right-2 rounded-full w-20 h-20 bg-emerald-600 opacity-70 animate-bounce hover:animate-none duration-300 delay-75'></div>
                    </div>}
                    {!formSubmit && <div className="relative mx-2 lg:flex">
                <div data-aos="fade-up" data-aos-once="true" className="relative bg-slate-900 md:h-auto overflow-hidden lg:w-2/3 rounded-lg space-y-2 px-4 md:pt-8 py-4 md:pb-8 align-middle text-white">
                   <h1 className='align-middle font-semibold text-2xl'>Services  offered for GA4 Migration</h1>
                   <ul className='text-sky-200 font-light list-disc list-inside text-sm'>
                    <li>Setting up GA4 property</li>
                    <li>Migrating all custom events tracked in UA</li>
                    <li>Tracking newly recommended events</li>
                    <li>Migrating goals and conversions from UA to GA4</li>
                   
                    <li>Configuring cross-domain tracking in GA4</li>
                    <li>Creating custom reports and dashboard</li>
                    <li>Conducting audits and verifying data.</li>
                    <li>Integrating GA4 with other GMP products</li>
                   </ul>
                   <br></br>
                   <ul className='text-white  list-inside text-xs'>
                    <li className="text-sm">Get in touch with our specialist team to start the conversation. </li><br/>
                    <li>Simply provide your information and our team will contact you.</li>
                   </ul>
                   </div>
                <div data-aos="fade-down" data-aos-once="true" className="relative lg:w-1/2 rounded-lg p-4 bg-white font-regular">
                   
                
                   <form className="md:space-y-4 mx-2" onSubmit={handleSubmit}>
                    
                        
                        <div className="relative w-full">
                            <div className="relative mx-4">
                                <input type="text" id="firstname" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder="First Name" name="firstName" value={formValues.firstName} onChange={handleChange} />
                                <p className="text-red-600 text-sm">{formErrors.firstName}</p>
                            </div>
                            
                        </div>

                        <div className="relative w-full ">
                        <div className="relative mx-4">
                                <input type="text" id="lastname" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder="Last Name" name="lastName" value={formValues.lastName} onChange={handleChange} />
                                <p className="text-red-600 text-sm">{formErrors.lastName}</p>
                        </div>
                         </div>

                         <div className="relative w-full ">
                            <div className="relative mx-4">
                            <input type="emaild" id="email" className="px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder="E-mail" name="email" value={formValues.email} onChange={handleChange} />
                                <p className="text-red-600 text-sm">{formErrors.email}</p>
                            </div>
                    </div>

                        <div className="relative w-full">
                        <div className="relative mx-4">
                            <input type="website" id="website" className="px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder="Website" name="website" value={formValues.website} onChange={handleChange} />
                                <p className="text-red-600 text-sm">{formErrors.website}</p>
                                
                        </div>
                        </div>

                        <div className="relative w-full">
                            <div className="relative mx-4">
                                <input type="Cname" id="company" className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-slate-500 appearance-none  focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder="Company Name" name="company" value={formValues.company} onChange={handleChange} />
                                <p className="text-red-600 text-sm">{formErrors.company}</p>
                            </div>
                            
                            
                            
                        </div>

                        <div className="text-center">
                            <button className="tracking-wider my-4 px-8 py-2 m-auto bg-slate-900 text-white rounded hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-shadow delay-150">Submit</button>
                        </div>
                    </form>
                    
                    


                </div>
            </div>}
        </div>
    </div>
</section>
</div>
        </motion.div>
    </motion.div>}
    </>

    
  )
}

export default PopupForm

//   //  //  //  //  //  //  //  //  New PopupForm  //  //  //  //  //  //  //  //  // // // //

// import React, { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { FaWhatsapp } from "react-icons/fa";
// import { LiaLongArrowAltRightSolid } from "react-icons/lia";

// const PopUp = ({ isOpen, onClose }) => {
//     const popUpRef = useRef(null);

//     const handleClickOutside = (event) => {
//         if (popUpRef.current && !popUpRef.current.contains(event.target)) {
//             onClose();
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const whatsappLink = 'https://wa.me/+918320576622?text=Hello%20there!';

//     if (!isOpen) {
//         return null;
//     }

//     return (
//         <div className="popup fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 md:py-5 py-4 md:px-7 px-4">
//             <div className="bg-white rounded-lg p-6 relative " ref={popUpRef}>
//                 <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">
//                     X
//                 </button>
//                 <div className='w-full inline-block font-rbt'>
//                     <div><img alt="logo" aria-label="logo" src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" className="h-10 lg:mr-4 m-2 cursor-pointer" /></div>
//                     <div className='popupmid w-full inline-block mb-5 pb-5 border-b border-solid border-[#d6d6d6]'>
//                         <ul className='flex md:flex-nowrap flex-wrap gap-7 mt-5'>
//                             <li className='md:w-1/2 w-full'>
//                                 <div>
//                                     <form>
//                                         <div><h2 className='text-[20px] leading-7 font-semibold text-[#1e1e1e] mb-[10px]'>Happy to help you today</h2></div>
//                                         <div className="mb-4">
//                                             <input
//                                                 type="text"
//                                                 id="name"
//                                                 className="border rounded px-3 py-2 w-full text-xs"
//                                                 placeholder="Enter your name"
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <input
//                                                 type="email"
//                                                 id="email"
//                                                 className="border rounded px-3 py-2 w-full text-xs"
//                                                 placeholder="Enter your email"
//                                             />
//                                         </div>
//                                         <div className='form-group otherField relative mb-[10px] w-full'>
//                                             <p>
//                                                 <label className='text-xs leading-3 font-semibold text-[#000]'>Business Vertical of Interest</label>
//                                                 <div className='mainchekbox'>
//                                                     <span className='checkboxlist bg-transparen'>
//                                                         <span className='inline-block relative w-1/2 text-xs font-medium'>
//                                                             <label className='flex items-start gap-1'>
//                                                                 <input type="checkbox" value='Media' />
//                                                                 <span>Media</span>
//                                                             </label>
//                                                         </span>
//                                                     </span>
//                                                     <span className='checkboxlist bg-transparent'>
//                                                         <span className='inline-block relative w-1/2 text-xs font-medium'>
//                                                             <label className='flex items-start gap-1'>
//                                                                 <input type="checkbox" value='Analytics' />
//                                                                 <span>Analytics</span>
//                                                             </label>
//                                                         </span>
//                                                     </span>
//                                                     <span className='checkboxlist bg-transparent'>
//                                                         <span className='inline-block relative w-1/2 text-xs font-medium'>
//                                                             <label className='flex items-start gap-1'>
//                                                                 <input type="checkbox" value='data-science' />
//                                                                 <span>Data Science</span>
//                                                             </label>
//                                                         </span>
//                                                     </span>
//                                                     <span className='checkboxlist bg-transparent'>
//                                                         <span className='inline-block relative w-1/2 text-xs font-medium'>
//                                                             <label className='flex items-start gap-1'>
//                                                                 <input type="checkbox" value='cm' />
//                                                                 <span>Conversion Marketing</span>
//                                                             </label>
//                                                         </span>
//                                                     </span>
//                                                     <span className='checkboxlist bg-transparent'>
//                                                         <span className='inline-block relative w-1/2 text-xs font-medium'>
//                                                             <label className='flex items-start gap-1'>
//                                                                 <input type="checkbox" value='sst' />
//                                                                 <span>Server Side Tracking</span>
//                                                             </label>
//                                                         </span>
//                                                     </span>
//                                                     <span className='checkboxlist bg-transparent'>
//                                                         <span className='inline-block relative w-1/2 text-xs font-medium'>
//                                                             <label className='flex items-start gap-1'>
//                                                                 <input type="checkbox" value='others' />
//                                                                 <span>Others</span>
//                                                             </label>
//                                                         </span>
//                                                     </span>
//                                                 </div>
//                                             </p>
//                                         </div>
//                                         <div className="relative mb-[10px] w-full">
//                                             <p className='mb-[10px]'>
//                                                 <span><input type="text" name="help-text" id="" placeholder='How can we help you?' className='inline-block w-full h-[42px] py-[10px] px-[15px] bg-[#F2F2F2] text-xs text-[#9D9D9D] rounded' /></span>
//                                             </p>
//                                         </div>
//                                         <button
//                                             type="submit"
//                                             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                                         >
//                                             Submit
//                                         </button>
//                                     </form>
//                                 </div>
//                             </li>
//                             <li className='md:w-1/2 w-full'>
//                                 <div className='greenBox relative inline-block bg-[#e1f2e5] p-5 rounded'>
//                                     <p className='text-[#1e1e1e] text-xs font-semibold leading-[14px]'>For faster response, send us a message on WhatsApp</p>
//                                     <p className='text-[#1e1e1e] text-xs font-semibold leading-[14px]'>
//                                         <Link href={whatsappLink} className='w-[75%] mt-[10px] flex justify-between bg-[#34a853] rounded p-4 text-xs leading-[14px] font-semibold text-[#fff]'>Message on WhatsApp <FaWhatsapp /></Link>
//                                     </p>
//                                 </div>
//                                 <div className='hidden md:flex dfg'>
//                                     <img src="/popup.png" className='w-[300px] h-[300px]' alt="" />
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className='hidden'>
//                         <div className='popupFtr w-full hidden md:flex md:flex-nowrap flex-wrap items-center justify-between gap-7'>
//                             <Link href='/contact' className='resultBtn w-full flex items-center justify-between gap-2 bg-[#ffd5d3] border border-solid border-[#eb3223] rounded-lg p-5 text-xs leading-[14px] font-semibold text-[#1e1e1e]'> Try our free DIY GA4 Audit & get your results in minutes <LiaLongArrowAltRightSolid /></Link>
//                             <Link href='/services/CRO' className='resultBtn w-full flex items-center justify-between gap-2 bg-[#fff1cc] border border-solid border-[#ffba00] rounded-lg p-5 text-xs leading-[14px] font-semibold text-[#1e1e1e]'>  Get Conversion Rate Optimization Recommendations  <LiaLongArrowAltRightSolid /></Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PopUp