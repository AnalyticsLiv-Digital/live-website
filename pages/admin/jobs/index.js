import React from 'react'

const index = ({jobs}) => {
    const job = jobs.job;
    console.log(job);
  return (
    <>
    <h1 className='text-center font-bold text-4xl py-4'>CaseStudy</h1>
    <h2 className='font-semibold text-2xl md:pl-6 pl-2 py-4'><a href="/admin/casestudies/create">Create a New Casestudy</a></h2>
    <table><tr className='text-center font-semibold'>
        
            <th>Job Title</th>
            <th>Edit</th>
            <th>Preview</th>
            <th>Applications</th>
            </tr>
        
     {job && job.map((job,key) => (
        <><tr key={key}>
            <td>
            {job.title} 
            </td>
            <td>
            <a href={`/admin/jobs/edit/${job.id}`}>Edit</a>
            </td>
            <td>
             
            </td>
            <td>
            {job.active? 'active':'inactive' }
            </td>
            <td>
            
            <a href={`/careers/${job.id}`}>Preview</a>
            </td>
            <td>
            <a href={`/admin/jobs/candidates/${job.id}`}>Applications</a>
            </td>
        </tr>
        </>
          ))}
          </table>
    </>
  )
}


export async function getServerSideProps(context) {
    // Fetch data from external API

    const res = await fetch(`${process.env.domain}/api/alljobs`)
    const jobs = await res.json()
  
    // Pass data to the page via props
    return { props: { jobs } }
  }

export default index