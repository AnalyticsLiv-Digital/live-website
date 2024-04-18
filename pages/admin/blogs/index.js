import React from 'react'
import {useSession, signIn , signOut} from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useState,useEffect } from 'react'
import GoogleButton from 'react-google-button'

const index = ({blogDat}) => {
  
  

  
    const blogsData = blogDat.blog;
    console.log(blogsData);
    const { data: session } = useSession()
  const [loginstate, setLoginstate] = useState(session?true:false);
 

if (session) {
return (
    <>
    <h1 className='text-center font-bold text-4xl py-4'>Blogs</h1>
    <h2 className='font-semibold text-2xl md:pl-6 pl-2 py-4'><a href="/admin/blogs/create">Create a New Blog</a></h2>
    <table><tr className='text-center font-semibold'>
        
            <th>Blog Name</th>
            <th>Author</th>
            <th>Document ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Preview</th>
            <th></th>
            </tr>
        
     {blogsData && blogsData.map((blog,key) => (
        <><tr key={key}>
            <td>
            {blog.title} 
            </td>
            <td>
            {blog.author} 
            </td>
            <td>
            {blog.document_id} 
            </td>
            <td>
            {blog.date} 
            </td>
            <td>
            {blog.active? 'active':'inactive' }
            </td>
            <td>
            
            <a href={`/blogs/${blog.slug}`}>Preview</a>
            </td>
            <td>
            <a href={`/admin/blogs/edit/${blog.slug}`}>Edit</a>
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

    const res = await fetch(`${process.env.domain}/api/allblogsadmin`)
    const blogDat = await res.json()
  
    // Pass data to the page via props
    return { props: { blogDat } }
  }

export default index