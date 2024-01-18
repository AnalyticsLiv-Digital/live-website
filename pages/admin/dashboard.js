


import React from 'react'
import GoogleButton from 'react-google-button'
import {useSession, signIn , signOut} from "next-auth/react"
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'


const index = () => {

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
      <>
         <a href="/admin/blogs">Blogs</a><br/>
        <a href="/admin/casestudies">Casestudy</a><br/>
        <a href="/admin/jobs">Jobs</a><br/>
        <a href="/admin/leads">Leads</a><br/>
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

export default index