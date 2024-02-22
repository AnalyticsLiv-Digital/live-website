'use client'
import React, { useState, useEffect } from 'react';
import { FaRegPlayCircle } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Embed = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    const playVideo = () => {
        if (!isPlaying) {
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className='embed'>
            <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                <div className="flex items-center justify-center gap-10" data-aos="fade-up">
                    <div className="relative" key="image">
                        {!isPlaying && (
                            <div className="relative w-full h-64 md:h-96 lg:h-[600px] overflow-hidden rounded-3xl">
                                <img src="Testimonial.png" className="" data-aos="zoom-in" alt="Video Placeholder" />
                                <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={playVideo}>
                                    <FaRegPlayCircle className="text-white w-20 h-20" />
                                </div>
                            </div>
                        )}
                        {isPlaying && (
                            <div className="video-container w-full h-64 md:h-96 lg:h-[600px]" key="video">
                            <iframe
                              src="https://www.youtube.com/embed/JFOc7x5ZgaA?autoplay=1"
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full aspect-video rounded-2xl"
                            ></iframe>
                          </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Embed;