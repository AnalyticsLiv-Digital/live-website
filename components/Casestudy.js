import React from 'react'
import Link from 'next/link'

const Casestudy = ({casestudy}) => {
  return (
    <><div className="casestudy-card bg-white md:flex gap-4 shadow-md shadow-gray">
    <img src={casestudy.coverimage} className="mx-auto w-[300px] h-auto"/>
      <div className="p-2 space-y-4">
      <div className="md:flex md:justify-between md:space-x-2 text-center md:text-left">
          <h1  className="font-semibold text-xl md:w-4/5 tracking-wider"><Link href={`/case-studies/${casestudy.slug}`}> 
          {casestudy.title}</Link></h1>
          <div className="bg-slate-900 mx-auto text-lg text-white w-36 md:w-1/5 h-8 text-center pt-0.5 mt-2 uppercase tracking-wide"><Link href={`/case-studies/${casestudy.slug}`}>Read Now</Link></div>
      </div>
      <p className="text-justify text-slate-600 font-light">
          {casestudy.description}
      </p>
      
      </div>
    </div></>
  )
}

export default Casestudy