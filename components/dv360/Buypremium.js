import React from 'react'
import Image from 'next/image'

const Buypremium = () => {
    return (
        <section className='buypremium'>
            <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
                <h2 className='text-[#000] text-[32px] font-semibold leading-normal text-center'>Buy Premium Placements</h2>
                <div className='lg:flex lg:items-start pt-8'>
                    <div className='left-box lg:w-[65%] grid md:grid-cols-2 gap-6 max-[767px]:pb-5'>
                        <div className='premium1 h-[175px] w-[270px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-testishadow p-4'>
                            <div className='flex items-center justify-center pb-5'>
                                <Image
                                    src="/premium1.svg"
                                    width={50}
                                    height={50}
                                    alt="Picture of the author"
                                />
                            </div>
                            <p className='text-[#000] text-xs font-normal leading-normal'>Media Buying Management</p>
                        </div>
                        <div className='premium2 h-[175px] w-[270px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-testishadow p-4'>
                            <div className='flex items-center justify-center pb-5'>
                                <Image
                                    src="/premium2.svg"
                                    width={50}
                                    height={50}
                                    alt="Picture of the author"
                                />
                            </div>
                            <p className='text-[#000] text-xs font-normal leading-normal'>Buy Display, Video, Audio, Native, Connected TV ad slots</p>
                        </div>
                        <div className='premium3 h-[175px] w-[270px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-testishadow p-4'>
                            <div className='flex items-center justify-center pb-5'>
                                <Image
                                    src="/premium3.svg"
                                    width={50}
                                    height={50}
                                    alt="Picture of the author"
                                />
                            </div>
                            <p className='text-[#000] text-xs font-normal leading-normal'>Re-targeting & Re-marketing possibility</p>
                        </div>
                        <div className='premium4 h-[175px] w-[270px] m-auto text-center rounded-[10px] border border-solid border-[#E2E2E2] bg-[#fff] hover:shadow-testishadow p-4'>
                            <div className='flex items-center justify-center pb-5'>
                                <Image
                                    src="/premium4.svg"
                                    width={50}
                                    height={50}
                                    alt="Picture of the author"
                                />
                            </div>
                            <p className='text-[#000] text-xs font-normal leading-normal'>Buy Popular OTTs, Publishers at fixed price</p>
                        </div>
                    </div>
                    <div className='right-img lg:w-[35%] flex lg:justify-end justify-center'>
                        <div className='relative'>
                            <Image
                                src="/Premium.png"
                                width={270}
                                height={226}
                                alt="Picture of the author"
                                className='g'
                            />
                            <Image
                                src="/Boy2.png"
                                width={300}
                                height={180}
                                alt="Picture of the author"
                                className='absolute md:-bottom-[60px] -bottom-[25px]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Buypremium