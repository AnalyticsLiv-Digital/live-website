'use client'
import React, { useState } from 'react';
// import { FaRegPlayCircle } from 'react-icons/fa';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { FaYoutube } from "react-icons/fa";

const Embed = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [counterOn, setCounterOn] = useState(true);

    const playVideo = () => {
        if (!isPlaying) {
            setIsPlaying(true);
        }
    };

    return (
        <section className='embed font-gilroy'>
            <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
            <div className="flex items-center lg:flex-nowrap flex-wrap justify-center gap-10">
                        <div className="relative lg:w-1/2 w-full" key="image">
                            {!isPlaying && (
                                <div className="relative w-full h-full overflow-hidden rounded-3xl">
                                    <img src="Testimonial.png" className="" alt="Video Placeholder" />
                                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={playVideo}>
                                        <FaYoutube className="text-[#f20000] w-16 h-20" />
                                    </div>
                                </div>
                            )}
                            {isPlaying && (
                                <div className="video-container w-full h-full" key="video">
                                    <iframe
                                        src="https://www.youtube.com/embed/JFOc7x5ZgaA"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full aspect-video rounded-2xl"
                                    ></iframe>
                                </div>
                            )}
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <div className='grid lg:grid-cols-2 grid-cols-1 items-center justify-between text-center'>
                                <div className='lg:border-r-2 lg:border-b-2 border-solid border-[yellow]'>
                                    <div className='py-7'>
                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                            <h1 className='text-[25px] text-[#000] font-medium'>
                                                {counterOn && <CountUp start={0} end={200} duration={2} delay={0} />}
                                                +
                                            </h1>
                                            <span className='text-[20px] text-[#000] font-medium'>Satisfied Clients</span>
                                        </ScrollTrigger>
                                    </div>
                                </div>
                                <div className=' lg:border-b-2 lg:border-solid border-[yellow]'>
                                    <div className='py-7'>
                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                            <h1 className='text-[25px] text-[#000] font-medium'>
                                                {counterOn && <CountUp start={0} end={500} duration={2} delay={0} />}
                                                +
                                            </h1>
                                            <span className='text-[20px] text-[#000] font-medium'>Successful Projects</span>
                                        </ScrollTrigger>
                                    </div>
                                </div>
                                <div className='lg:border-r-2 border-solid border-[yellow]'>
                                    <div className='py-7'>
                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                            <h1 className='text-[25px] text-[#000] font-medium'>
                                                {counterOn && <CountUp start={0} end={30} duration={2} delay={0} />}
                                                +
                                            </h1>
                                            <span className='text-[20px] text-[#000] font-medium'>Certified Experts</span>
                                        </ScrollTrigger>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='py-7'>
                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                            <h1 className='text-[25px] text-[#000] font-medium'>
                                                {counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}
                                                +
                                            </h1>
                                            <span className='text-[20px] text-[#000] font-medium'>Solutions</span>
                                        </ScrollTrigger>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Embed;