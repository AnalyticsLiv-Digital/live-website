import React, { useEffect, useState } from 'react'
import GoogleButton from 'react-google-button'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'



const index = () => {

  const { data: session } = useSession()
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push('/admin/dashboard')
      console.log(session.user.email)
    } else {
      router.push('/admin/')
    }
  }, [session])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-10 text-center">
        {session ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Welcome, {session.user.email}</h1>
            <button
              onClick={() => signOut()}
              className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4">Please Sign In</h1>
            <GoogleButton onClick={() => signIn()} />
          </>
        )}
      </div>
    </div>
  )
}

export default index