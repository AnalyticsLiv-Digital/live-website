'use client'
import React, { useEffect }  from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <>
            <section className='home'>
                <div className='relative bg-homepagebg'>

                    {/* Back-Ground design  */}
                    <div className='absolute top-28 right-0 w-80 h-80 flex justify-end'>
                        < img className="bgd w-52 h-80 rounded-full blur-2xl opacity-[0.5]" />
                    </div>
                    {/*  */}

                    <div data-aos="fade-down" data-aos-once="true">
                        <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                            <h1 className='text-maintext text-[40px] text-center font-semibold leading-normal not-italic pb-7'>Redefining Possibilities : Empowering Brands through Strategic Media, Analytics & Cloud Solutions</h1>
                            <p className='text-[#000] text-2xl font-medium text-center md:pb-10 pb-8'>Data Analytics and Marketing Solutions helps businesses in gaining digital maturity through optimized utilization of data</p>
                            <div className='flex flex-wrap justify-around'>
                                <a href="/Contact">
                                <button className='butn'>
                                    Contact Us Now
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home