import React, { useEffect, useState } from 'react'
import GoogleButton from 'react-google-button'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const index = () => {
  const { data: session } = useSession()
  const router = useRouter();

  useEffect(() => {
    if (session) {
      setTimeout(() => {
        router.push('/admin/dashboard')
      }, 2000)
      console.log(session.user.email)
    } else {
      router.push('/admin/')
    }
  }, [session])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 text-center">
        {session ? (
          <>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Welcome, {session.user.name}</h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg flex justify-center items-center space-x-1.5">
              <span>Redirecting you to the Dashboard</span>
              <span className="bg-gray-500 h-1.5 w-1.5 mt-2.5 rounded-full"></span>
              <span className="bg-gray-500 h-1.5 w-1.5 mt-2.5 rounded-full"></span>
              <span className="bg-gray-500 h-1.5 w-1.5 mt-2.5 rounded-full animate-bounce"></span>
            </p>
            <button
              onClick={() => signOut()}
              className="mt-6 bg-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-red-600 transition duration-200 text-sm sm:text-base md:text-lg"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Please Sign In To Access Dashboard</h1>
            <div className="flex justify-center">
              <GoogleButton onClick={() => signIn()} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default index