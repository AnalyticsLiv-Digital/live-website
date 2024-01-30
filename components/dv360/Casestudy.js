import React from 'react'
import Image from 'next/image'
import { FaLongArrowAltRight } from "react-icons/fa";

const Casestudy = () => {
    
    return (
        <>
            <section className='blog'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <h2 className='text-maintext text-[32px] font-semibold not-italic text-center tracking-widest'>Success that we Achieved</h2>
                    <div className='text-center grid lg:grid-cols-3 gap-4 p-8 md:p-12'>
                        <div className='first group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-testishadow p-[25px] text-center relative'>
                            <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                            <a href="">
                                <div>
                                    <Image
                                        src="/casestudy2.png"
                                        width={300}
                                        height={300}
                                        alt="Picture of the author"
                                        priority={true}
                                        className='w-full'
                                    />
                                </div>
                                <div className='grid grid-rows-2 gap-10'>
                                    <h3 className='text-bas text-slate-900 font-semibold text-left pt-5'>From Inefficiency to Precision: Learn How AnalyticsLiv Achieved a 78% CPC Reduction for a News Publisher Giant</h3>
                                    <p className='align-middle text-left text-xs font-medium text-[#3B3C3B]'>By eliminating underperforming areas and focusing on a more relevant audience, the client achieved significant cost savings through a substantial decrease in CPC. This was achieved without compromising the quality of website traffic</p>
                                    <div>
                                        <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn text-[10px] font-medium'>
                                            <button className='font-medium text-[#4186F5] group-hover:text-white'>View</button>
                                            <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className='second group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-testishadow p-[25px] text-center relative'>
                            <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                            <a href="">
                                <div>
                                    <Image
                                        src="/casestudy1.png"
                                        width={300}
                                        height={300}
                                        alt="Picture of the author"
                                        priority={true}
                                        className='w-full'
                                    />
                                </div>
                                <div className='grid grid-rows-2 gap-10'>
                                    <h3 className='text-base text-slate-900 font-semibold text-left pt-5'>55% Increase in Avg. Session Duration</h3>
                                    <p className='align-middle text-left text-xs font-medium text-[#3B3C3B] pt-2'>Increasing the Session Duration of the Website is a difficult challenge, with steady growth in acquiring new users, holding the returning users and other KPIs. It's not a quick trick but a journey of hard work and discipline that Leads to the conversion. </p>
                                    <div className='lg:pt-[15px]'>
                                        <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn text-[10px] font-medium'>
                                            <button className='font-medium text-[#4186F5] group-hover:text-white'>View</button>
                                            <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className='third group home-blog rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-testishadow p-[25px] text-center relative'>
                            <span className='bg-[#5BF0B2] text-[#000] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                            <a href="">
                                <div>
                                    <Image
                                        src="/casestudy3.png"
                                        width={300}
                                        height={300}
                                        alt="Picture of the author"
                                        priority={true}
                                        className='w-full'
                                    />
                                </div>
                                <div className='grid grid-rows-2 gap-10'>
                                    <h3 className='text-base text-slate-900 font-semibold text-left pt-5'>Skyrocket Your Campaign's CTR with a 95% Surge in 14 Days!</h3>
                                    <p className='align-middle text-left text-xs font-medium text-[#3B3C3B] pt-2'>Through the strategic removal of underperforming components and the targeting of a more relevant settings, the campaign effectively increased website traffic. Remarkably, this success was achieved without compromising the caliber of website traffic.</p>
                                    <div className='lg:pt-[12px]'>
                                        <div className='flex w-[200px] m-auto items-center p-3 justify-evenly border border-solid text-center border-homepagebtn cursor-pointer rounded-[10px] group-hover:bg-homepagebtn text-[10px] font-medium'>
                                            <button className='font-medium text-[#4186F5] group-hover:text-white'>View</button>
                                            <span className='text-homepagebtn group-hover:text-white'><FaLongArrowAltRight /></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Casestudy