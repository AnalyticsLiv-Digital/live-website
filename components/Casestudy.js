import React from 'react'
import Link from 'next/link'

const Casestudy = ({ casestudy }) => {
  return (
    <>

      <a href={`/case-studies/${casestudy?.slug}`} className="font-sans bg-white border border-[#E5E5E5] rounded-[30px] shadow-lg p-4 2xl:p-6 relative">
        <div className='flex flex-col justify-evenly h-full'>
          {/* <div className="absolute w-[100px] text-center top-4 2xl:top-6 left-4 2xl:left-6 bg-[#A2EC4E99] text-white font-semibold px-3 py-1 rounded-tl-2xl 2xl:rounded-tl-[20px] rounded-br-md text-sm">Marketing</div> */}
          <img
            src={casestudy?.coverimage}
            alt={casestudy?.title}
            className="rounded-2xl mb-4 w-full"
          />
          <h3
            className="text-lg font-semibold text-[#100F1B] mb-2 truncate"
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {casestudy?.title}
          </h3>
          <p
            className="text-sm text-[#373642] mb-4"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              WebkitLineClamp: 2,
            }}
          >
            {casestudy?.description}
          </p>
          <div className="flex justify-between items-center text-sm text-[#0066cc]">
            <span className="text-[#6B7280]">25th Nov 2024</span>
            <button className="text-[#08A4F7] text-base font-medium hover:underline">Read Full</button>
          </div>
        </div>
      </a>
    </>
  )
}

export default Casestudy






// import React from 'react'
// import Link from 'next/link'

// const Casestudy = ({ casestudy }) => {
//   return (
//     <><div className="casestudy-card bg-white md:flex gap-4 shadow-md shadow-gray">
//       <img src={casestudy.coverimage} className="w-full md:w-[300px] h-auto" />
//       <div className="p-2 mt-5 md:flex md:flex-wrap space-y-4">
//         <div className="md:flex md:w-full md:space-x-4 text-center md:text-left">
//           <h1 className="font-semibold text-xl md:w-[70%] lg:w-4/5 text-justify tracking-wider"><Link href={`/case-studies/${casestudy.slug}`}>
//             {casestudy.title}</Link></h1>
//           <div className="bg-slate-900 mx-auto text-lg text-white hover:bg-white hover:text-slate-900 hover:border hover:border-slate-900
//           w-36 md:w-[30%] lg:w-1/5 h-8 text-center pt-0.5 max-md:mt-2 uppercase tracking-wide transition-all duration-100 ease-linear">
//             <Link href={`/case-studies/${casestudy.slug}`}>Read Now</Link></div>
//         </div>
//         <p className="min-w-[100%] md:h-full text-justify text-slate-600 font-light">
//           {casestudy.description}
//         </p>

//       </div>
//     </div></>
//   )
// }

// export default Casestudy