'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Aos from 'aos';
import 'aos/dist/aos.css'

const AnalyticsLiv = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <section className='bg-homepagebg'>
            <div className='px-4 md:px-20 pb-8 md:pb-16'>
                <div className='w-[80%] m-auto'>
                    <div data-aos="fade-down" data-aos-once="true">
                        <h2 className='text-center font-bold text-base text-maintext leading-[24px]'>Trusted by Organisations Worldwide</h2>
                    </div>
                    <div data-aos="fade-left" data-aos-once="true">
                        <div className='brandsimages flex space-x-8 justify-center py-4 px-8 mt-8'>
                            <div className='marquee-container'>
                                <div className='marquee whitespace-nowrap gap-5'>
                                    <div>
                                        <Image
                                            src="/ThoughtSpot_logo.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/Brizo_logo.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/bluecrew.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/edanz_logo.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/shoebacca.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/wholesalesockdeals.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                </div>
                                <div className='marquee whitespace-nowrap gap-5'>
                                    <div>
                                        <Image
                                            src="/ThoughtSpot_logo.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/Brizo_logo.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/bluecrew.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/edanz_logo.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/shoebacca.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/wholesalesockdeals.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                </div>
                                <div className='marquee whitespace-nowrap gap-5'>
                                    <div>
                                        <Image
                                            src="/ThoughtSpot_logo.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/Brizo_logo.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/bluecrew.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/edanz_logo.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/shoebacca.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/wholesalesockdeals.png"
                                            width={130}
                                            height={130}
                                            alt="Picture of the author"
                                            className='h-12 mx-5'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnalyticsLiv