import React, { useEffect, useState } from "react";

const NewPopup = ({ onClose, onRegister }) => {
    const initialValues = { fullName: "", email: "", contact: "" };
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
            fetch("/api/popupContacttt", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    mode: "no-cors",
                },
                body: JSON.stringify({
                    fullName: formValues?.fullName,
                    email: formValues?.email,
                    contact: formValues?.contact,
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
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="flex z-50 flex-col md:flex-row gap-2 items-center font-lato fixed inset-0 bg-white 
                            p-0 px-4 xl:px-0 rounded-lg shadow-lg md:overflow-y-auto max-w-[95%] md:max-w-[90%] lg:max-w-[600px] 2xl:max-w-[540px] 
                            mx-auto my-auto top-0 bottom-0 left-0 right-0 max-h-fit lg:max-h-[600px] 2xl:max-h-[650px]">
                <div className=" w-full flex pt-5 flex-col md:px-4 xl:px-8 2xl:px-6 items-center justify-center z-20">
                    <img src="/AnalyticsLiv Logo 2 1.png" alt="logo" />
                    <div className="text-sm pt-3 font-normal">
                        B&nbsp;O&nbsp;O&nbsp;S&nbsp;T&nbsp; &nbsp;&nbsp;Y&nbsp;O&nbsp;U&nbsp;R
                    </div>
                    <div className="text-[#08A6F8] text-2xl sm:text-2xl md:text-[25px] lg:text-[25px] xl:text-4xl font-extrabold pb-2 pt-2 2xl:pt-5">CONVERSIONS</div>
                    <img src="/Rectangle 175.png" alt="linear" />
                    <div className=" text-sm md:text-base lg:text-base 2xl:text-[17px] pt-5 2xl:pt-6 font-normal text-center md:text-center">
                        Using Conversion Rate Optimization (CRO) strategies, we help to maximize your website's conversions.
                    </div>

                    <form
                        className="flex flex-col gap-3 md:gap-3 2xl:gap-4 pt-3 2xl:pt-6 w-full"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            placeholder="Name*"
                            style={{ boxShadow: "1px 1px 3px #00000040" }}
                            className="px-3 py-2 text-sm border border-[#3C292A] rounded-[5px] "
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
                            className="px-3 py-2 text-sm border border-[#3C292A] rounded-[5px] "
                            id="email"
                            name="email"
                            value={formValues?.email}
                            required
                            onChange={handleChange}
                        />
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

                        <p className="text-red-600 text-sm">{formErrors.contact}</p>

                        <button className="gtmbutn4 mt-0.5 bg-gradient-to-l from-[#2273EC] to-[#5496ED] hover:border-black hover:border-[1px] hover:text-[#2273EC] border border-[#FFFFFF] rounded-md shadow-[2px_2px_3px_1px_rgba(0,0,0,0.25)]  py-1.5 md:py-2 text-[10px] lg:text-sm font-extrabold">
                            Let's connect
                        </button>
                    </form>
                    <div className="flex justify-start w-full sm:ml-10">
                        <img
                            src="/Frame-popup.png"
                            alt="Frame-popup"
                        />
                    </div>
                    <img
                        src="/Character.png"
                        alt="Character"
                        className="absolute bottom-0 right-10 z-50"
                    />
                    <img
                        src="/close_icon.png"
                        alt="cross-img"
                        className="absolute top-5 right-5 bg-white rounded-full p-0.5 cursor-pointer z-50"
                        onClick={onClose}
                    />
                </div>
            </div>
        </div>
    );
};

export default NewPopup;
