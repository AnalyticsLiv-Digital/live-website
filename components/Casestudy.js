import React from 'react'
import Link from 'next/link'

const Casestudy = ({ casestudy }) => {
  return (
    <><div className="casestudy-card bg-white md:flex gap-4 shadow-md shadow-gray">
      <img src={casestudy.coverimage} className="w-full md:w-[300px] h-auto" />
      <div className="p-2 mt-5 md:flex md:flex-wrap space-y-4">
        <div className="md:flex md:w-full md:space-x-4 text-center md:text-left">
          <h1 className="font-semibold text-xl md:w-[70%] lg:w-4/5 text-justify tracking-wider"><Link href={`/case-studies/${casestudy.slug}`}>
            {casestudy.title}</Link></h1>
          <div className="bg-slate-900 mx-auto text-lg text-white hover:bg-white hover:text-slate-900 hover:border hover:border-slate-900 
          w-36 md:w-[30%] lg:w-1/5 h-8 text-center pt-0.5 max-md:mt-2 uppercase tracking-wide transition-all duration-100 ease-linear">
            <Link href={`/case-studies/${casestudy.slug}`}>Read Now</Link></div>
        </div>
        <p className="min-w-[100%] md:h-full text-justify text-slate-600 font-light">
          {casestudy.description}
        </p>

      </div>
    </div></>
  )
}

export default Casestudy