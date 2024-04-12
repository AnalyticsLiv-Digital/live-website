import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const CaseStudyBlock = ({ casestudy }) => {
    return (
        <><div className='casestudyblock'>
            <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                <a href={`/case-studies/${casestudy.slug}`}>
                    <div>
                        <img src={casestudy.coverimage} alt="" className='w-[350px] h-auto' />
                    </div>
                    <div className=''>
                        <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>{casestudy.title}</h3>
                        <div className='flex items-center justify-center absolute bottom-[25px]' >
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                                <button className='font-medium group-hover:text-black'>View</button>
                                <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div></>
    )
}

export default CaseStudyBlock