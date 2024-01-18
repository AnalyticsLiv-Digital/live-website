import React from 'react'

const index = ({casestudies}) => {
    const casestudy = casestudies.casestudy;
    console.log(casestudy);
  return (
    <>
    <h1 className='text-center font-bold text-4xl py-4'>CaseStudy</h1>
    <h2 className='font-semibold text-2xl md:pl-6 pl-2 py-4'><a href="/admin/casestudies/create">Create a New Casestudy</a></h2>
    <table><tr className='text-center font-semibold'>
        
            <th>Case Study Name</th>
            <th>Link</th>
            <th>Preview</th>
            <th></th>
            </tr>
        
     {casestudy && casestudy.map((casestudy,key) => (
        <><tr key={key}>
            <td>
            {casestudy.title} 
            </td>
            <td>
            <a href={`${casestudy.filename}`}>Link</a>
            </td>
            <td>
             
            </td>
            <td>
            {casestudy.active? 'active':'inactive' }
            </td>
            <td>
            
            <a href={`/casestudies/${casestudy.slug}`}>Preview</a>
            </td>
            <td>
            <a href={`/admin/casestudies/edit/${casestudy.slug}`}>Edit</a>
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

    const res = await fetch(`${process.env.domain}/api/allcasestudiesadmin`)
    const casestudies = await res.json()
  
    // Pass data to the page via props
    return { props: { casestudies } }
  }

export default index