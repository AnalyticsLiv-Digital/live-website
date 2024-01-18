import React from 'react'

const index = ({applications}) => {
    const job = applications.job;
    
  return (
    <>
    <h1 className='text-center font-bold text-4xl py-4'>Applications For {job[0].postName}</h1>
    <table><tr className='text-center font-semibold'>
        
            <th>Name</th>
            <th>Experience</th>
            <th>Resume</th>
            <th>Linkedin</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Notice Period</th>
            </tr>
        
     {job && job.map((job,key) => (
        <><tr key={key}>
            <td>
            {job.firstName} {job.lastName}
            </td>
            <td className='text-center'>
            {job.experience} 
            </td>
            <td>
            <a href={`https://storage.googleapis.com/website-bucket-uploads/${job.resume}`}>Resume</a> 
            </td>
            <td>
            {job.linkedin && <a href={`${job.linkedin}`}>Linkedin</a>} 
            
            </td>
            <td>
            {job.email}
            </td>
            <td>
            {job.contact}
            </td>
            <td>
            {job.noticePeriod}
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

    const res = await fetch(`${process.env.domain}/api/admin/job/applications?post=${context.params.post}`)
    const applications = await res.json()
  
    // Pass data to the page via props
    return { props: { applications } }
  }

export default index