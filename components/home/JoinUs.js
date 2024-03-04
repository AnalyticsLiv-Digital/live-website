'use client'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addMonths } from 'date-fns';
import { format } from 'date-fns';
import { MdOutlineAccessTime } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";

import "react-datepicker/dist/react-datepicker.css";

const JoinUs = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    // Update current date and time every second
    setInterval(() => {
        setCurrentDate(new Date());
    }, 1000);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        phone: '',
        howHeard: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <>
            <section className="joinus bg-[#F5F5F5]">
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div className="grid lg:grid-cols-2 gap-7">
                        <div className="bg-white lg:pb-0 pb-6">
                            <div>
                                <div className="mb-5">
                                    <div className="mb-2 flex items-center justify-center">
                                        <img src="/AnalyticsLiv 2.png" alt="" className="max-w-[200px] max-h-[100px]" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div>
                                            <div className="text-center mb-5">
                                                <div className="flex items-center justify-center">
                                                    <img src="/30e09619.png" alt="" className="w-[65px] h-[65px] rounded-[50px]" />
                                                </div>
                                                <div className="text-base leading-6 font-medium text-[#1A1A1A9c]">Netram Sharma</div>
                                                <p className="text-[18px] font-normal text-[#1A1A1A]">Book Us Slot For Media & Analytics Consultancy</p>
                                            </div>
                                            <div className="max-w-[340px] mb-5 mx-auto">
                                                <div className="text-[#1A1A1A9c] font-semibold">
                                                    <div className="flex item-center mb-4">
                                                        <div className="flex items-center">
                                                            <MdOutlineAccessTime className="w-[20px] h-[20px] mr-2" />
                                                        </div>
                                                        <span className="inline-block text-base font-semibold">30 min</span>
                                                    </div>
                                                    <div className="flex item-center mb-4">
                                                        <div className="flex items-center">
                                                            <BsCameraVideo className="w-[25px] h-[40px] mr-2" />
                                                        </div>
                                                        <span className="inline-block text-base font-semibold">Web conferencing details provided upon confirmation.</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="overflow-hidden flex items-center justify-center">
                                <div>
                                    <div className="flex items-center justify-center mb-3">
                                        <p className="text-[20px] font-semibold text-[#1A1A1A]">Select a Day</p>
                                    </div>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={onChange}
                                        minDate={new Date()}
                                        maxDate={addMonths(new Date(), 5)}
                                        startDate={startDate}
                                        endDate={endDate}
                                        selectsRange
                                        inline
                                        showTimeSelect
                                        timeIntervals={15}
                                        dateFormat="MM/dd/yyyy HH:mm"
                                        timeCaption={format(currentDate, 'dd/MM EEEE')}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lg:pt-0 pt-7">
                            <div className="pb-5">
                                <h3 className="text-[20px] font-medium text-homepagebtn leading-[30px]">Fill the form to get in touch with us</h3>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-2 md:space-y-6 md:w-4/5 mx-auto">
                                <div className="relative w-full md:flex justify-between md:space-x-8">
                                    <div className="relative md:w-1/2">
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            placeholder=""
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                                            required
                                        />
                                        <label for="firstname" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">First Name</label>
                                        <p className="text-red-600 text-sm"></p>
                                    </div>
                                    <div className="relative md:w-1/2">
                                        <input
                                            type="text"
                                            name="lasttName"
                                            id="lasttName"
                                            placeholder=""
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                                            required
                                        />
                                        <label for="lastname" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Last Name</label>
                                        <p className="text-red-600 text-sm"></p>
                                    </div>
                                </div>

                                <div className="relative w-full md:flex justify-between md:space-x-8">
                                    <div className="relative md:w-1/2">
                                        <input
                                            type="emaild"
                                            id="email"
                                            name="email"
                                            placeholder=""
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                                            required
                                        />
                                        <label for="firstname" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">E-mail</label>
                                        <p className="text-red-600 text-sm"></p>
                                    </div>
                                    <div className="relative md:w-1/2">
                                        <div className=" react-tel-input w-0 mt-4 md:mt-0 text-sm relative">
                                            <input
                                                type="tel"
                                                placeholder="1 (702) 123-4567"
                                                value={'+91' + formData.phone}
                                                onChange={handleChange}
                                                className="form-control "
                                                required
                                            />
                                            <div className="flag-dropdown ">
                                                <div className="selected-flag"></div>
                                            </div>
                                        </div>
                                        <label for="tel" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Contact No</label>
                                        <p className="text-red-600 text-sm"></p>
                                    </div>
                                </div>

                                
                                <div className="relative md:w-1/2">
                                    <input
                                        type="text"
                                        name="howHeard"
                                        placeholder=""
                                        value={formData.howHeard}
                                        onChange={handleChange}
                                        className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                                    />
                                    <label for="firstname" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">How did you hear about us</label>
                                        <p className="text-red-600 text-sm"></p>
                                </div>
                                <div className="relative md:w-1/2">
                                    
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows={3}
                                        cols={2}
                                        className="w-full block px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-500 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                                    />
                                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Tell us what type of solution you are looking for*</label>
                                </div>
                                <button type="submit" className="butn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default JoinUs