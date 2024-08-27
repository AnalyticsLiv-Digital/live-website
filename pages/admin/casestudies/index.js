import React from 'react'
import {useSession, signIn , signOut} from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useState,useEffect } from 'react'
import GoogleButton from 'react-google-button'
import Navbar from '../Navbar'

const index = ({casestudies}) => {
    const casestudy = casestudies.casestudy;
    console.log(casestudy);
    const { data: session } = useSession()
    const [loginstate, setLoginstate] = useState(session?true:false);
   
  
  if (session) {
  return (
    <>
    <Navbar />
    <h1 className='text-center font-bold text-4xl py-4'>CaseStudy</h1>
    <h2 className='font-semibold text-2xl md:pl-6 pl-2 py-4'><a href="/admin/casestudies/create">Create a New Casestudy</a></h2>
    <table><tr className='text-center font-semibold'>
        
            <th>Case Study Name</th>
            <th>Link</th>
            <th>Status</th>
            <th>Preview</th>
            <th>Edit</th>
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
  )}
  return (
    <>
      <GoogleButton onClick={() => signIn()}>Sign in</GoogleButton>
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