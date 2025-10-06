import React, { useState, useEffect } from 'react';

const CaseStudyDownloadModal = ({ isOpen, onClose, casestudy, parentContext = "popup", color = "emerald" }) => {
    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        company: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showWaiting, setShowWaiting] = useState(false);
    const [formSubmit, setFormSubmit] = useState(false);

    // Different styling based on parent context
    const isInlineForm = parentContext === "inline";

    // Reset form when modal opens/closes
    useEffect(() => {
        if (!isOpen && parentContext === "popup") {
            setFormValues({ fullName: '', email: '', company: '' });
            setFormErrors({});
            setIsSubmit(false);
            setShowWaiting(false);
            setFormSubmit(false);
        }
    }, [isOpen, parentContext]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.fullName) {
            errors.fullName = "Full name is required!";
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        // Company is optional - no validation needed

        return errors;
    };

    const dataLayerpush = () => {
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
                event: 'casestudy_download_attempt',
                eventCategory: casestudy?.title || 'Unknown Case Study',
                eventAction: 'download_form_submit',
                context: parentContext
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        dataLayerpush();
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setShowWaiting(true);

            // DataLayer push for successful validation
            if (typeof window !== 'undefined' && window.dataLayer) {
                window.dataLayer.push({
                    event: 'casestudy_download',
                    eventCategory: casestudy?.title || 'Unknown Case Study',
                    eventAction: 'download',
                    context: parentContext
                });
            }

            fetch('/api/casestudylead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "fullName": formValues.fullName,
                    "email": formValues.email,
                    "casestudy": casestudy?.title || 'Unknown Case Study',
                    "company": formValues.company || 'Not provided',
                    "id": casestudy?.id,
                    "context": parentContext,
                    "pdf": casestudy?.pdf || null,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    setFormSubmit(true);
                    setShowWaiting(false);

                    // Auto-close only for popup version
                    if (parentContext === "popup") {
                        setTimeout(() => {
                            onClose();
                        }, 2000);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setShowWaiting(false);
                    alert('There is some issue, please try again!');
                });
        }
    }, [formErrors, isSubmit, casestudy, onClose, formValues, parentContext]);

    const colorClass = (variant) => `${color}-${variant}`;

    if (isInlineForm) {
        return (
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm w-full">
                {formSubmit ? (
                    <div className="text-center py-4">
                        <div className={`mx-auto w-12 h-12 bg-${colorClass(100)} rounded-full flex items-center justify-center mb-3`}>
                            <svg className={`w-6 h-6 text-${colorClass(600)}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">Thank you!</h4>
                        <p className="text-slate-600 text-sm">Your case study download link has been sent to your email.</p>
                    </div>
                ) : (
                    <>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Download Full Case Study</h3>
                        <p className="text-sm text-slate-600 mb-5">Fill in your details to access the PDF version with complete insights.</p>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="fullName"
                                    className={`block px-3 pb-2 pt-3 w-full text-sm text-slate-900 bg-white border border-slate-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-${colorClass(500)} focus:border-${colorClass(500)} peer`}
                                    placeholder="Full Name *"
                                    value={formValues.fullName}
                                    onChange={handleChange}
                                />
                                {formErrors.fullName && <p className="text-red-600 text-xs mt-1">{formErrors.fullName}</p>}
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    className={`block px-3 pb-2 pt-3 w-full text-sm text-slate-900 bg-white border border-slate-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-${colorClass(500)} focus:border-${colorClass(500)} peer`}
                                    placeholder="Email *"
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                                {formErrors.email && <p className="text-red-600 text-xs mt-1">{formErrors.email}</p>}
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    name="company"
                                    className={`block px-3 pb-2 pt-3 w-full text-sm text-slate-900 bg-white border border-slate-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-${colorClass(500)} focus:border-${colorClass(500)} peer`}
                                    placeholder="Company (Optional)"
                                    value={formValues.company}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={showWaiting}
                                className={`w-full bg-${colorClass(600)} hover:bg-${colorClass(700)} disabled:bg-${colorClass(400)} text-white font-semibold py-3 px-4 rounded-2xl transition-colors flex items-center justify-center gap-2`}
                            >
                                {showWaiting ? "Processing..." : "Download PDF"}
                            </button>
                        </form>
                    </>
                )}
            </div>
        );
    }


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-start justify-between p-6 border-b border-gray-200">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Download Case Study</h3>
                        <p className="text-sm text-gray-600 mt-1">{casestudy?.title}</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">✕</button>
                </div>

                <div className="p-6">
                    {formSubmit ? (
                        <div className="text-center py-8">
                            <div className={`mx-auto w-16 h-16 bg-${colorClass(100)} rounded-full flex items-center justify-center mb-4`}>
                                <svg className={`w-8 h-8 text-${colorClass(600)}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Thank you!</h4>
                            <p className="text-gray-600">Your case study download link has been sent.</p>
                        </div>
                    ) : (
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="">
                                <input
                                    type="text"
                                    name="fullName"
                                    className={`block px-2.5 py-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-${colorClass(500)} peer`}
                                    placeholder="Full Name*"
                                    value={formValues.fullName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="">
                                <input
                                    type="email"
                                    name="email"
                                    className={`block px-2.5 py-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-${colorClass(500)} peer`}
                                    placeholder="Email*"
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="">
                                <input
                                    type="text"
                                    name="company"
                                    className={`block px-2.5 py-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-${colorClass(500)} peer`}
                                    placeholder="Company (Optional)"
                                    value={formValues.company}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={showWaiting}
                                className={`w-full bg-${colorClass(600)} hover:bg-${colorClass(700)} disabled:bg-${colorClass(400)} text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2`}
                            >
                                {showWaiting ? "Processing..." : "Get Case Study"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CaseStudyDownloadModal;




// if (isInlineForm) {
//     return (
//         <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm w-full">
//             {formSubmit ? (
//                 <div className="text-center py-4">
//                     <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
//                         <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                     </div>
//                     <h4 className="text-lg font-semibold text-slate-900 mb-2">Thank you!</h4>
//                     <p className="text-slate-600 text-sm">Your case study download link has been sent to your email.</p>
//                 </div>
//             ) : (
//                 <>
//                     <h3 className="text-xl font-bold text-slate-900 mb-3">Download Full Case Study</h3>
//                     <p className="text-sm text-slate-600 mb-5">Fill in your details to access the PDF version with complete insights.</p>

//                     <form className="space-y-4" onSubmit={handleSubmit}>
//                         {/* Same form fields but with inline styling */}
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 id="fullName"
//                                 name="fullName"
//                                 className="block px-3 pb-2 pt-3 w-full text-sm text-slate-900 bg-white border border-slate-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 peer"
//                                 placeholder="Full Name *"
//                                 required
//                                 value={formValues.fullName}
//                                 onChange={handleChange}
//                             />
//                             {formErrors.fullName && (
//                                 <p className="text-red-600 text-xs mt-1">{formErrors.fullName}</p>
//                             )}
//                         </div>

//                         <div className="relative">
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 className="block px-3 pb-2 pt-3 w-full text-sm text-slate-900 bg-white border border-slate-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 peer"
//                                 placeholder="Email *"
//                                 required
//                                 value={formValues.email}
//                                 onChange={handleChange}
//                             />
//                             {formErrors.email && (
//                                 <p className="text-red-600 text-xs mt-1">{formErrors.email}</p>
//                             )}
//                         </div>

//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 id="company"
//                                 name="company"
//                                 className="block px-3 pb-2 pt-3 w-full text-sm text-slate-900 bg-white border border-slate-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 peer"
//                                 placeholder="Company (Optional)"
//                                 value={formValues.company}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <button
//                             type="submit"
//                             disabled={showWaiting}
//                             className={`w-full ${color ? `bg-${color}-600 hover:bg-${color}-700 disabled:bg-${color}-400` : 'bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400'} text-white font-semibold py-3 px-4 rounded-2xl transition-colors flex items-center justify-center gap-2`}
//                         >
//                             {showWaiting ? (
//                                 <>
//                                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                     </svg>
//                                     Processing...
//                                 </>
//                             ) : (
//                                 <>
//                                     <span>Download PDF</span>
//                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                     </svg>
//                                 </>
//                             )}
//                         </button>
//                     </form>
//                 </>
//             )}
//         </div>
//     );
// }


    

// <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
//     <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
//         {/* Header */}
//         <div className="flex items-start justify-between p-6 border-b border-gray-200">
//             <div>
//                 <h3 className="text-lg font-semibold text-gray-900">Download Case Study</h3>
//                 <p className="text-sm text-gray-600 mt-1">{casestudy?.title}</p>
//             </div>
//             <button
//                 onClick={onClose}
//                 className="text-gray-400 hover:text-gray-600 transition-colors"
//             >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//             </button>
//         </div>

//         {/* Content */}
//         <div className="p-6">
//             {formSubmit ? (
//                 <div className="text-center py-8">
//                     <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
//                         <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                     </div>
//                     <h4 className="text-lg font-semibold text-gray-900 mb-2">Thank you!</h4>
//                     <p className="text-gray-600">Your case study download link has been sent to your email.</p>
//                     <p className="text-sm text-gray-500 mt-2">This window will close automatically...</p>
//                 </div>
//             ) : (
//                 <form className="space-y-4" onSubmit={handleSubmit}>
//                     {/* Full Name Field */}
//                     <div className="relative">
//                         <input
//                             type="text"
//                             id="fullName"
//                             name="fullName"
//                             className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-emerald-500 peer"
//                             placeholder=" "
//                             required
//                             value={formValues.fullName}
//                             onChange={handleChange}
//                         />
//                         <label
//                             htmlFor="fullName"
//                             className="absolute text-xs text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
//                         >
//                             Full Name*
//                         </label>
//                         {formErrors.fullName && (
//                             <p className="text-red-600 text-xs mt-1">{formErrors.fullName}</p>
//                         )}
//                     </div>

//                     {/* Email Field */}
//                     <div className="relative">
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-emerald-500 peer"
//                             placeholder=" "
//                             required
//                             value={formValues.email}
//                             onChange={handleChange}
//                         />
//                         <label
//                             htmlFor="email"
//                             className="absolute text-xs text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
//                         >
//                             Email*
//                         </label>
//                         {formErrors.email && (
//                             <p className="text-red-600 text-xs mt-1">{formErrors.email}</p>
//                         )}
//                     </div>

//                     {/* Company Field (Optional) */}
//                     <div className="relative">
//                         <input
//                             type="text"
//                             id="company"
//                             name="company"
//                             className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-emerald-500 peer"
//                             placeholder=" "
//                             value={formValues.company}
//                             onChange={handleChange}
//                         />
//                         <label
//                             htmlFor="company"
//                             className="absolute text-xs text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
//                         >
//                             Company (Optional)
//                         </label>
//                     </div>

//                     {/* Submit Button */}
//                     <div className="pt-4">
//                         <button
//                             type="submit"
//                             disabled={showWaiting}
//                             className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
//                         >
//                             {showWaiting ? (
//                                 <>
//                                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                     </svg>
//                                     Processing...
//                                 </>
//                             ) : (
//                                 <>
//                                     <span>Get Case Study</span>
//                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                     </svg>
//                                 </>
//                             )}
//                         </button>
//                     </div>
//                 </form>
//             )}
//         </div>
//     </div>
// </div>