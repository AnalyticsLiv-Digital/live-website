import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Advertising = () => {
  return (
    <>
     <section className='advertising'>
        <div className='px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-11'>
            <div className='flex flex-wrap items-center justify-between gap-7'>
                <h5 className='text-[#fff] text-[25px] font-semibold leading-normal'>41% of Online Advertising Budgets are being wasted</h5>
                <div className='flex items-center justify-between gap-4 border border-solid border-[#fff] p-5 rounded-[10px] text-[#fff] text-base font-bold leading-normal hover:bg-[#fff] hover:text-homepagebtn'>
                  <button>Reduce Your Ad Wastage</button>
                  <FaArrowRightLong />
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default Advertising