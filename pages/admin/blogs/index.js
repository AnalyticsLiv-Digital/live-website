import React from 'react'

const index = ({blogDat}) => {
    const blogsData = blogDat.blog;
    console.log(blogsData);
  return (
    <>
    <h1 className='text-center font-bold text-4xl py-4'>Blogs</h1>
    <h2 className='font-semibold text-2xl md:pl-6 pl-2 py-4'><a href="/admin/blogs/create">Create a New Blog</a></h2>
    <table><tr className='text-center font-semibold'>
        
            <th>Blog Name</th>
            <th>Author</th>
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