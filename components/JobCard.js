import React from 'react'
import Link from 'next/link'

const JobCard = ({job}) => {
  return (
    <>
    <div className="jobcard w-4/5 mx-auto space-y-4 py-4">
            <div className="h-0.5 w-full bg-gray-300"></div>
            <div className="md:flex space-y-2">
                <div className="md:w-3/5">
                <h2 className="text-lg font-semibold">
                <Link href={`careers/${job.id}`}> {job.title}</Link>
                </h2>
                <p>
                    {job.brief}
                </p>
                <div className="mt-2 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-cyan-500 w-6 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 12q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 7.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4Q9.475 4 7.737 5.737Q6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35ZM12 22q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Zm0-11.8Z"></path>
                    </svg>
                    <span className="mx-2">{job.location}</span>
                   
                    
                </div>
                </div>
                <div className="md:w-2/5 md:text-right">
                    <Link href={`careers/${job.id}`}><button className="border-b-2 border-rose-400 px-4 py-2 text-gray-200 rounded bg-slate-800 hover:bg-cyan-500 hover:text-slate-800 hover:border-slate-600 tracking-wider">Apply Now</button></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default JobCard