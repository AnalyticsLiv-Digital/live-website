'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <>
            <section className='home h-full overflow-hidden'>
                <div className='relative bg-homepagebg h-full overflow-hidden'>

                    {/* Back-Ground design  */}
                    <div className='absolute top-28 right-0 w-80 h-80 flex justify-end'>
                        < img className="bgd w-52 h-80 rounded-full blur-2xl opacity-[0.5]" />
                    </div>
                    {/*  */}
                    <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16 h-full'>
                            <div data-aos="fade-down" data-aos-once="true" className='vb pb-10'>
                                <h1 className='text-maintext text-[26px] md:text-[40px] text-center font-medium leading-[1.3em] md:leading-[1.5em] not-italic pb-[30px] pt-16'> <span className='md:text-[27px] text-[24px] md:font-normal font-light'> Redefining Possibilities: Empowering Brands through </span> <br /> <b> Strategic Media, Analytics & Cloud Solutions</b> </h1>
                                <p className='text-[#000] md:text-[18px] text-base font-medium leading-[1.5em] text-center md:pb-10 pb-[30px]'>Data Analytics and Marketing Solutions helps businesses in gaining digital maturity <br /> through optimized utilization of data</p>
                                <div className='flex flex-wrap justify-around mb-3'>
                                    <a href="/contact">
                                        <button className='butn'>
                                            Talk to our Experts
                                        </button>
                                    </a>
                                </div>
                            </div>
                            {/*  */}
                            <section className=''>
                                <div className='w-[90%] m-auto'>
                                    <div data-aos="fade-down" data-aos-once="true">
                                        <h2 className='text-center font-bold text-base text-maintext leading-[24px]'>Trusted by Organisations Worldwide</h2>
                                    </div>
                                    <div data-aos="fade-left" data-aos-once="true">
                                        <div className='brandsimages flex space-x-8 justify-center py-4 px-8 mt-8'>
                                            <div className='marquee-container'>
                                                <div className='marquee whitespace-nowrap gap-5'>
                                                    <div>
                                                        <img src="/ThoughtSpot_logo.png" alt="" className='h-[50px] mx-5'/>
                                                    </div>
                                                    <div>
                                                        <img src="/Brizo_logo.png" alt="" className='h-[50px] mx-5'/>
                                                    </div>
                                                    <div>
                                                        <img src="/bluecrew.png" alt="" className='h-[50px] mx-5' />
                                                    </div>
                                                    <div>
                                                        <img src="/edanz_logo.png" alt="" className='h-[50px] mx-5' />
                                                    </div>
                                                    <div>
                                                        <img src="/shoebacca.png" alt="" className='h-[50px] mx-5'/>
                                                    </div>
                                                    <div>
                                                        <img src="/wholesalesockdeals.png" alt="" className='h-[50px] mx-5'/>
                                                    </div>
                                                </div>
                                                <div className='marquee whitespace-nowrap gap-5'>
                                                    <div>
                                                        <img src="/ThoughtSpot_logo.png" alt="" className='h-[50px] mx-5'/>
                                                    </div>
                                                    <div>
                                                        <img src="/Brizo_logo.png" alt="" className='h-[50px] mx-5'/>
                                                    </div>
                                                    <div>
                                                        <img src="/bluecrew.png" alt="" className='h-[50px] mx-5' />
                                                    </div>
                                                    <div>
                                                        <img src="/edanz_logo.png" alt="" className='h-[50px] mx-5' />
                                                    </div>
                                                    <div>
                                                        <img src="/shoebacca.png" alt="" className='h-[50px] mx-5'/>
                                                    </div>
                                                    <div>
                                                        <img src="/wholesalesockdeals.png" alt="" className='h-[50px] mx-5'/>
                                                    </div>
                                                </div>
                                                <div className='marquee whitespace-nowrap gap-5'>
                                                    <div>
                                                        <img src="/ThoughtSpot_logo.png" alt="" className='h-[50px] mx-5'/>
                                                    </div>
                                                    <div>
                                                        <img src="/Brizo_logo.png" alt="" className='h-[50px] mx-5'/>
                                                    </div>
                                                    <div>
                                                        <img src="/bluecrew.png" alt="" className='h-[50px] mx-5' />
                                                    </div>
                                                    <div>
                                                        <img src="/edanz_logo.png" alt="" className='h-[50px] mx-5' />
                                                    </div>
                                                    <div>
                                                        <img src="/shoebacca.png" alt="" className='h-[50px] mx-5'/>
                                                    </div>
                                                    <div>
                                                        <img src="/wholesalesockdeals.png" alt="" className='h-[50px] mx-5'/>
                                                    </div>
                                                </div>
                                                <div className='marquee whitespace-nowrap gap-5'>
                                                    <div>
                                                        <img src="/ThoughtSpot_logo.png" alt="" className='h-[50px] mx-5'/>
                                                    </div>
                                                    <div>
                                                        <img src="/Brizo_logo.png" alt="" className='h-[50px] mx-5'/>
                                                    </div>
                                                    <div>
                                                        <img src="/bluecrew.png" alt="" className='h-[50px] mx-5' />
                                                    </div>
                                                    <div>
                                                        <img src="/edanz_logo.png" alt="" className='h-[50px] mx-5' />
                                                    </div>
                                                    <div>
                                                        <img src="/shoebacca.png" alt="" className='h-[50px] mx-5'/>
                                                    </div>
                                                    <div>
                                                        <img src="/wholesalesockdeals.png" alt="" className='h-[50px] mx-5'/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        {/*  */}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home