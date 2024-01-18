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
      router.push('/admin/dashboard')
      // console.log(session.user.email)
    }else{
      router.push('/admin/')
    }
},[session]);
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
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