import React, { useEffect, useState } from "react";

const WebinarPopup = () => {
  const initialValues = { fullName: "", email: "", contact: "", company: "" };
  const [formSubmit, setFormSubmit] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showWaiting, setShowWaiting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const closePopup = (e) => {
    e.preventDefault();
    // setFormErrors(validate(formValues));
    // setIsSubmit(true);
    console.log("popup close object");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setShowWaiting(true);
      // dataLayer.push({
      //     event: 'gtm_submission'
      // });
      fetch("/api/webinar/cookieContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify({
          fullName: formValues.fullName,
          email: formValues.email,
          contact: formValues.contact,
          company: formValues.company,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setFormSubmit(true);
          setShowWaiting(false);
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

    if (!values.company) {
      errors.company = "Company name is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-5 lg:gap-10 items-center my-8 mx-8 font-lato">
      <div className="max-md:w-full max-lg:w-[50%]">
        <div className="text-2xl sm:text-2xl md:text-[25px] lg:text-[30px] font-bold text-[#3C292A] pt-6 pb-5 xl:font-black text-center md:text-left">
          Join&nbsp;&nbsp;
          <span className="inline-block relative">
            <span className="bg-gradient-to-r from-[#04BEF8] to-[#00990F] bg-clip-text text-transparent">
              WEBINAR&nbsp;&nbsp;
            </span>
            <span
              className="absolute block bg-gradient-to-r from-[#00990F] to-[#04BEF8]"
              style={{
                width: "90px",
                marginTop: "5px",
                height: "3px",
                borderRadius: "10px",
                top: "calc(100% )",
                left: "0",
              }}
            ></span>
          </span>
          for,
        </div>

        <div className=" text-sm md:text-base lg:text-xl lg:text-[20px] font-black text-center md:text-left">
          <div>Google Basic Consent vs. Advanced Consent-</div>
          <div>Optimising Your Data Strategy</div>
        </div>

        <div className="flex justify-around items-center pt-5">
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white p-2 lg:p-3 flex justify-center items-center max-w-max rounded-full shadow-cookiePageShadow">
              <img
                src="/calendar (7) 1.png"
                alt="calendar"
                className=" max-lg:w-4 max-lg:h-4"
              />
            </div>
            <div className="pt-4 text-[#EB5442] text-[10px] lg:text-sm font-extrabold">
              15 Oct, 2024
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white p-2 lg:p-3 flex justify-center items-center max-w-max rounded-full shadow-cookiePageShadow">
              <img
                src="/time_webinar.png"
                alt="time"
                className=" max-lg:w-4 max-lg:h-4"
              />
            </div>
            <div className="pt-4 text-[#EB5442] text-[10px] lg:text-sm font-extrabold">
              9:00 PM IST / 11:30 AM EST
              {/* <br className="lg:hidden"></br>  */}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white p-2 lg:p-3 flex justify-center items-center max-w-max rounded-full shadow-cookiePageShadow">
              <img
                src="/hourglass (1).png"
                alt="hourglass"
                className=" max-lg:w-4 max-lg:h-4"
              />
            </div>
            <div className="pt-4 text-[#EB5442] text-[10px] lg:text-sm font-extrabold">
              1 Hour
            </div>
          </div>
        </div>

        <div className="text-[10px] sm:text-xs lg:text-sm max-md:text-center font-medium pt-5">
          Whether you're in marketing, web management, or data analytics,
          <br className="max-lg:hidden" />
          this webinar will simplify the process of managing consent for you.
        </div>

        <form
          className="flex flex-col gap-3 md:gap-3 pt-5"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name*"
            style={{ boxShadow: "1px 1px 3px #00000040" }}
            className="px-3 py-1.5 md:py-2 text-sm border border-[#3C292A] rounded-md"
            id="fullName"
            name="fullName"
            value={formValues.fullName}
            required
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Email*"
            style={{ boxShadow: "1px 1px 3px #00000040" }}
            className="px-3 py-1.5 md:py-2 text-sm border border-[#3C292A] rounded-md"
            id="email"
            name="email"
            value={formValues.email}
            required
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Contact No*"
            style={{ boxShadow: "1px 1px 3px #00000040" }}
            className="px-3 py-1.5 md:py-2 text-sm border border-[#3C292A] rounded-md"
            id="contact"
            name="contact"
            required
            value={formValues.contact}
            onChange={handleChange}
          />

          <p className="text-red-600 text-sm">{formErrors.contact}</p>

          <button className="gtmbutn4 bg-gradient-to-l from-[#EB5442] to-[#ED7754] hover:border-black hover:border-[1px] hover:text-[#EB5442] border border-[#FFFFFF] rounded-md shadow-[2px_2px_3px_1px_rgba(0,0,0,0.25)]  py-1.5 md:py-2 text-[10px] lg:text-sm font-extrabold">
            REGISTER NOW
          </button>
        </form>

        <div className="text-sm font-normal pt-1 lg:pt-4">
          Check more detail&nbsp;
          <a className="text-[#2252FF]" href="/webinar/cookie-consent">
            here
          </a>
        </div>
      </div>
      <div className="relative max-md:w-full max-lg::w-[50%]">
        <img
          src="/close_icon.png"
          alt="cross-img"
          className="max-md:hidden absolute right-5 top-5 bg-white rounded-full p-0.5 cursor-pointer"
          onClick={closePopup}
        />
        <img
          src="/webinar-right.png"
          alt="webinar-img"
          className="max-md:hidden md:h-[500px] lg:h-[530px] xl:h-[530px] md:w-[380px] lg:w-[390px] xl:w-[380px]"
        />
      </div>
    </div>
  );
};

export default WebinarPopup;
