import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const CasestudySlider = ({casestudy}) => {
  return (
    <>
    <div>
                <div aria-hidden="true" className="casestudy m-auto text-center flex justify-center w-[90%]">
                  <div className='first group w-[350px] 2xl:h-[500px] lg:h-[487px] h-[500px]  rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-testishadow p-[25px] text-center relative'>
                    <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                    <a href={`/case-studies/${casestudy.slug}`}>
                      <div>
                        <img src={casestudy.coverimage} alt="" className='w-auto h-auto' />
                      </div>
                      <div className=''>
                        <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>{casestudy.title}</h3>
                        <div className='flex items-center justify-center absolute bottom-[25px]'>
                          <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                            <button className='font-medium group-hover:text-black'>View</button>
                            <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
    </>
  )
}

export default CasestudySlider