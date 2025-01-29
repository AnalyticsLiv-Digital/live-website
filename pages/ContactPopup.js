import React, { useEffect, useState } from "react";

export default function ContactPopup  ({ onClose, onRegister })  {
    const initialValues = { fullName: "", email: "", contact: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            fetch("/api/popupContact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    mode: "no-cors",
                },
                body: JSON.stringify({
                    fullName: formValues?.fullName,
                    email: formValues?.email,
                    contact: formValues?.contact,
                    message: formValues?.message,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    onRegister();
                    dataLayer.push({
                        event: "contactFormSubmitted",
                    });
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.fullName) {
            errors.fullName = "Name is required!";
        }

        const mobile = /^\+?(\d{1,3})[-.\s]?(\d{5,14})$/;

        if (!values.contact) {
            errors.contact = "Contact is required!";
        } else if (!mobile.test(values.contact)) {
            errors.contact = "This is not a valid phone number!";
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        return errors;
    };

    return (
        <div className="flex flex-col md:flex-row gap-2 items-center font-lato fixed inset-0 bg-white 
    p-5 md:p-5 xl:p-0 rounded-lg shadow-lg md:overflow-y-auto lg:overflow-y-hidden max-md:max-w-[95%] max-lg:max-w-[95%] lg:w-full max-lg:mx-auto max-lg:my-auto top-0 bottom-0 
    left-0 right-0 z-50 max-h-fit lg:max-h-screen">
            <img src="/pngwing.com - 2024-10-16T154233.410 1.png" alt="waves" className="absolute left-[-120px] h-full z-10" />
            <div className="max-md:w-full max-lg:w-[50%] lg:w-[50%] flex flex-col md:px-4 xl:px-8 2xl:px-6 items-center justify-center z-20">
                <img src="/AnalyticsLiv Logo 2 1.png" alt="logo" />
                <h1 className="text-sm pt-3 font-normal">
                    B&nbsp;O&nbsp;O&nbsp;S&nbsp;T&nbsp; &nbsp;&nbsp;Y&nbsp;O&nbsp;U&nbsp;R
                </h1>
                <div className="text-[#08A6F8] text-2xl sm:text-2xl md:text-[25px] lg:text-[25px] xl:text-4xl font-extrabold pb-2 pt-2 2xl:pt-5">CONVERSIONS</div>
                <img src="/Rectangle 175.png" alt="linear" />
                <h2 className=" text-sm md:text-base lg:text-base 2xl:text-[17px] pt-5 2xl:pt-6 font-normal text-center md:text-center">
                    We offer expert Conversion Rate Optimization (CRO) services to maximize your website's potential.
                </h2>

                <form
                    className="flex flex-col gap-3 md:gap-3 2xl:gap-4 pt-3 2xl:pt-6 w-full"
                    onSubmit={handleSubmit}
                >
                    <div className="flex justify-between w-full gap-5">
                        <input
                            type="text"
                            placeholder="Name*"
                            style={{ boxShadow: "1px 1px 3px #00000040" }}
                            className="px-3 py-2 text-sm border border-[#3C292A] rounded-[5px] w-[50%]"
                            id="fullName"
                            name="fullName"
                            value={formValues?.fullName}
                            required
                            onChange={handleChange}
                        />

                        <input
                            type="email"
                            placeholder="Email*"
                            style={{ boxShadow: "1px 1px 3px #00000040" }}
                            className="px-3 py-2 text-sm border border-[#3C292A] rounded-[5px] w-[50%]"
                            id="email"
                            name="email"
                            value={formValues?.email}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        type="number"
                        placeholder="Contact No*"
                        style={{ boxShadow: "1px 1px 3px #00000040" }}
                        className="px-3 py-2 text-sm border border-[#3C292A] rounded-[5px]"
                        id="contact"
                        name="contact"
                        required
                        value={formValues?.contact}
                        onChange={handleChange}
                    />

                    <textarea rows={4}
                        type="text"
                        placeholder="Message"
                        id="message"
                        name="message"
                        value={formValues?.message}
                        onChange={handleChange}
                        style={{ boxShadow: "1px 1px 3px #00000040" }}
                        className="px-3 py-2 text-sm border border-[#3C292A] rounded-[5px]" />

                    <p className="text-red-600 text-sm">{formErrors.contact}</p>

                    <div className="text-center text-xs font-semibold">Get a free Consultancy call today, see how we can help!</div>
                    <button className="gtmbutn4 mt-0.5 bg-gradient-to-l from-[#2273EC] to-[#5496ED] hover:border-black hover:border-[1px] hover:text-[#2273EC] border border-[#FFFFFF] rounded-md shadow-[2px_2px_3px_1px_rgba(0,0,0,0.25)]  py-1.5 md:py-2 text-[10px] lg:text-sm font-extrabold">
                        Book Now !
                    </button>
                </form>
            </div>
            {/* <div className="relative max-md:w-full max-lg:w-[50%] lg:w-[50%] lg:h-auto">
                <img
                    src="/25084 1.png"
                    alt="webinar-img"
                    className="hidden max-md:hidden md:block  "
                />
            </div> */}
            <div className="relative max-md:w-full max-lg:w-[50%] lg:w-[50%] lg:h-auto z-20">
                <img
                    src="/25084 1.png"
                    alt="webinar-img"
                    className="hidden max-md:hidden md:block w-full h-auto min-w-[100%] max-w-[100%] object-cover"
                />
            </div>

            {/* <img
                src="/close_icon.png"
                alt="cross-img"
                className="absolute top-5 right-5 bg-white rounded-full p-0.5 cursor-pointer z-50"
                onClick={onClose}
            /> */}
        </div>
    );
};

// export default ContactPopup;
