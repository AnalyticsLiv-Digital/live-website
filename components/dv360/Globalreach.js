import React from 'react'
import Image from 'next/image'

const Globalreach = () => {
    return (
        <>
            <section className='globalreach bg-dvbackgrnd'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                    <div className='innerglobl'>
                        <h2 className='text-[#000] text-[32px] font-semibold leading-normal text-center'>Get Global Reach</h2>
                        <div className='grid lg:grid-cols-2 gap-7 pt-10'>
                            <div className='relative'>
                                <Image
                                    src="/global.png"
                                    width={500}
                                    height={500}
                                    alt="Picture of client"
                                    className=''
                                />
                                <Image
                                    src="/Boy.png"
                                    width={500}
                                    height={500}
                                    alt="Picture of client"
                                    className='absolute d bottom-[44px] -left-[132px]'
                                />
                            </div>
                            <div className='global-points grid gap-5'>
                                <div className="point1 bg-[#fff] flex gap-5 rounded-[10px] border border-solid border-[#E2E2E2] hover:shadow-testishadow p-5">
                                    <Image
                                        src="/point1.svg"
                                        width={40}
                                        height={40}
                                        alt="Picture of client"
                                    />
                                    <div>
                                        <h4 className='text-[#000] text-sm font-semibold leading-normal'>Exchanges</h4>
                                        <p className='text-[#000] text-xs font-normal leading-normal'>100+ Exchanges and Sub Exchanges</p>
                                    </div>
                                </div>
                                <div className="point2 bg-[#fff] flex gap-5 rounded-[10px] border border-solid border-[#E2E2E2] hover:shadow-testishadow p-5">
                                    <Image
                                        src="/point2.svg"
                                        width={40}
                                        height={40}
                                        alt="Picture of client"
                                    />
                                    <div>
                                        <h4 className='text-[#000] text-sm font-semibold leading-normal'>Programmatic Advertising Platforms</h4>
                                        <p className='text-[#000] text-xs font-normal leading-normal'>Buy Display, Video, Audio, Native, Connected TV Ads</p>
                                    </div>
                                </div>
                                <div className="point3 bg-[#fff] flex gap-5 rounded-[10px] border border-solid border-[#E2E2E2] hover:shadow-testishadow p-5">
                                    <Image
                                        src="/point3.svg"
                                        width={40}
                                        height={40}
                                        alt="Picture of client"
                                    />
                                    <div>
                                        <h4 className='text-[#000] text-sm font-semibold leading-normal'>Audience Segmentation</h4>
                                        <p className='text-[#000] text-xs font-normal leading-normal'>3rd Party Audience Availability</p>
                                    </div>
                                </div>
                                <div className="point4 bg-[#fff] flex gap-5 rounded-[10px] border border-solid border-[#E2E2E2] hover:shadow-testishadow p-5">
                                    <Image
                                        src="/point4.svg"
                                        width={40}
                                        height={40}
                                        alt="Picture of client"
                                    />
                                    <div>
                                        <h4 className='text-[#000] text-sm font-semibold leading-normal'>Ads Frequency</h4>
                                        <p className='text-[#000] text-xs font-normal leading-normal'>Consolidated Frequency Management</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Globalreach