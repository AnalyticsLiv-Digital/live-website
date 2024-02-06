import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import * as Scroll from 'react-scroll';

const Discuss = () => {
    const { Element: ScrollElement } = Scroll;
    const scrolling = () =>{
        {
          Scroll.scroller.scrollTo("top", {
            duration: 500,
            smooth: true,
            offset: -100,
          });
        }}
    return (
        <>
            <section className='discuss'>
                <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-11'>
                    <div className='flex flex-wrap items-center justify-between gap-7'>
                        <h5 className='text-[#fff] text-[23px] font-semibold leading-normal'>Unlock Success with Programmatic Advertising Excellence. <br />
                            Transform Your Campaigns Today!
                        </h5>
                        <div className='flex items-center justify-between gap-4 border border-solid border-[#fff] p-5 rounded-[10px] text-[#fff] text-base font-bold leading-normal hover:bg-[#fff] hover:text-homepagebtn'>
                            <button onClick={scrolling}>Discuss Your Project</button>
                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Discuss