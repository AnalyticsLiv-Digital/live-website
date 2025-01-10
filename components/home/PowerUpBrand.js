import React from 'react'

const PowerUpBrand = () => {
    return (
        <section className='py-10 px-4 md:px-10 xl:px-16'>
            <div className='text-[#100F1B] text-2xl md:text-3xl font-bold text-center'>
                How We Power Up Your Brand
            </div>
            <div className='pt-16 flex max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:justify-items-center max-lg:gap-16 lg:gap-10 
            justify-around items-start'>
                <div className='w-[75%] lg:w-[27%]'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/01.png' alt='01' className='absolute' />
                        <div className='text-3xl font-normal tracking-[6px] text-[#30486A] pt-14 z-10'>COLLECT</div>
                    </div>
                    <div className='pt-8 text-[#6C6C6C] text-base font-normal text-center'>
                        We start by comprehensively understanding the client's business potential and scope,
                        tracking customer movements to grasp user interactions, experiences, and accurately attribute conversions.
                    </div>
                </div>
                <div className='w-[75%] lg:w-[25%]'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/02.png' alt='02' className='absolute' />
                        <div className='text-3xl font-normal tracking-[6px] text-[#30486A] pt-14 z-10'>REPORT</div>
                    </div>
                    <div className='pt-8 text-[#6C6C6C] text-base font-normal text-center'>
                        Visualize your business KPIs and metrics from multiple data sources in one place and keep stakeholders
                        updated with real time data and trend visualizations
                    </div>
                </div>
                <div className='w-[75%] lg:w-[25%]'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/03.png' alt='03' className='absolute' />
                        <div className='text-3xl font-normal tracking-[6px] text-[#30486A] pt-14 z-10'>ANALYZE</div>
                    </div>
                    <div className='pt-8 text-[#6C6C6C] text-base font-normal text-center'>
                        Know your customers and their Journeys. Get a deeper understanding of your customers journey to find who
                        they are, what they like, how they interact & more.
                    </div>
                </div>
                <div className='w-[75%] lg:w-[25%]'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/04.png' alt='04' className='absolute' />
                        <div className='text-3xl font-normal tracking-[6px] text-[#30486A] pt-14 z-10'>ACTIVATE</div>
                    </div>
                    <div className='pt-8 text-[#6C6C6C] text-base font-normal text-center'>
                        Combining the data collected with other data sources to generate one of a kind insights to take the right
                        action at the right time backed by first party data.
                    </div>
                </div>

            </div>
        </section>
    )
}

export default PowerUpBrand
