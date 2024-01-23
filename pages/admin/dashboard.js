


import React from 'react'
import GoogleButton from 'react-google-button'
import {useSession, signIn , signOut} from "next-auth/react"
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'


const index = ({data}) => {

  const { data: session } = useSession()
  const [loginstate, setLoginstate] = useState(session?true:false);
  const router = useRouter();
  useEffect(() => {

    if(session){
      if(!session.user.email.includes('analyticsliv.com')){
        router.push('/admin/')
      }
       
    }else{
      router.push('/admin/')
    }
},[session]);
  if (session) {
    return (
      <><div className='w-1/3 mx-auto mt-36 flex flex-wrap text-center gap-24 justify-center pb-4'>
         <a href="/admin/blogs"><div className='space-y-4'>
          <h1 className='font-semibold text-2xl'>Blogs</h1>
          <h2 className='font-bold text-5xl text-gray-500'>{data.blog}</h2>
          </div>
          </a>
        <a href="/admin/casestudies">
        <div className='space-y-4'>
          <h1 className='font-semibold text-2xl'>Casestudy</h1>
          <h2 className='font-bold text-5xl text-gray-500'>{data.casestudy}</h2>
          </div>
          </a>
        <a href="/admin/jobs">
        <div className='space-y-4'>
          <h1 className='font-semibold text-2xl'>Jobs/Applications</h1>
          <h2 className='font-bold text-5xl text-gray-500'>{data.job}/{data.jobapplications}</h2>
          </div>
          </a>
        <a href="/admin/leads">
        <div className='space-y-4'>
          <h1 className='font-semibold text-2xl'>Leads</h1>
          <h2 className='font-bold text-5xl text-gray-500'>{data.leads}</h2>
          </div>
          </a>
          </div>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <GoogleButton onClick={() => signIn()}>Sign in</GoogleButton>
    </>
  )

}

export async function getServerSideProps(context) {
  // Fetch data from external API

  const res = await fetch(`${process.env.domain}/api/admin/total`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
export default index