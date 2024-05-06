"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import * as Scroll from 'react-scroll';


const Businessfacing = () => {
    const { Element: ScrollElement } = Scroll;
    const scrolling = () =>{
        {
          Scroll.scroller.scrollTo("top", {
            duration: 500,
            smooth: true,
            offset: -100,
          });
        }}

    const [salesText, setSalesText] = useState('[ LOW SALES ]');

    useEffect(() => {
        // Change the sales text after 5 seconds
        const timeoutId = setTimeout(() => {
            setSalesText('[ POOR ROI ]');
        }, 1000);

        // Change the sales text every 10 seconds
        const intervalId1 = setInterval(() => {
            setSalesText('[ NOT ENOUGH LEADS ]');
        }, 2000);

        const intervalId2 = setInterval(() => {
            setSalesText('[ LOW TARGETED TRAFFIC ]');
        }, 3000);

        const intervalId3 = setInterval(() => {
            setSalesText('[ FLAT GROWTH ]');
        }, 4000);

        // Cleanup function to clear timeout and intervals
        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId1);
            clearInterval(intervalId2);
            clearInterval(intervalId3);
        };
    }, []);

    return (

        <section className='busines-facing overflow-hidden'>
            <div className='w-full relative'>
                <div className='firstbg lg:w-[99%] z-20 relative'>
                    <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-11'>
                        <div className='r w-[70%]'>
                            <h3 className='text-[#fff] text-[30px] font-medium'>Is your business facing challenges in
                                achieving profit due to
                                <span className='text-red-500 anim py-3 inline-block ml-2'> {salesText} </span>
                                 </h3>
                            <p className='text-[#fff] text-xs font-medium pt-4 pb-8'>At Analytics Liv, we're experts at sidestepping marketing pitfalls. <br />
                                Say GOODBYE to Frustration, and HELLO to Success</p>
                            <div className='w-[250px]'>
                                <div onClick={scrolling} className='flex items-center justify-between cursor-pointer gap-4 border border-solid border-[#fff] p-5 rounded-[10px] text-[#fff] text-[21px] font-bold leading-normal hover:bg-[#fff] hover:text-homepagebtn'>
                                    <button >Get in Touch</button>
                                    <FaArrowRightLong />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='secondbg absolute top-0 right-0 z-0 hidden lg:block'>
                    <Image
                        src="/Laptop hand.png"
                        width={500}
                        height={500}
                        alt="Picture of Media_planing"
                        className='lg:w-[500px] w-[270px] rr h-[382px]'
                    />
                </div>
            </div>
        </section>
    )
}

export default Businessfacing