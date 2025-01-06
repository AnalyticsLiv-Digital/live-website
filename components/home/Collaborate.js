import React from 'react'

const Collaborate = () => {
    return (
        <section className='flex max-lg:flex-col overflow-hidden font-lato'>
            <div className='lg:w-[40%] bg-[#30486A] flex flex-col justify-center items-start gap-7 max-lg:py-7 px-4 lg:px-20'>
                <div className='text-3xl md:text-4xl font-bold text-white'>Let's Collaborate for Mutual Success</div>
                <div className='text-lg font-normal text-[#E2DEDC]'>Your success story begins with a click, explore our consulting solutions for transformative results.</div>
                <button className='mainbutn'>Contact Us Now</button>
            </div>
            <div className='lg:w-[60%] min-h-[250px] sm:min-h-[350px] overflow-hidden 2xl:min-h-[430px] flex'>
                <div className='w-full lg:w-[70%] relative'>
                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/people_collaborate.png' alt='people_collaborate' className='absolute sm:w-full sm:h-full' />
                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Frame%2047.png' alt='Frame 47' className='absolute px-5 md:right-[50px] 2xl:right-[16%] pt-8' />
                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Rectangle%2026.png' alt='Rectangle 26' className='absolute right-0 top-16' />
                </div>
                <div className='bg-[#08A4F7] w-[30%] flex justify-center max-md:hidden items-start'>
                    <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Frame%2049.png' alt='Frame 49' className='' />
                </div>
            </div>
        </section>
    )
}

export default Collaborate
