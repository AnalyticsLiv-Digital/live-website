import React from 'react'
import Link from 'next/link'

const BlogCard = ({blog}) => {
  return (
    <div data-aos="zoom-in" data-aos-once="true" className="relative rounded text-center shadow-lg shadow-gray-500 ">
            <Link href={`/blogs/${blog.slug}`}><img src={blog.thumb} className="rounded-t "/></Link>
            <div className="mx-4 mt-2 mb-8 text-left">
                <div className="flex justify-between text-xs text-gray-400">
                    <span>{blog.date}</span>
                </div>
                <Link href={`/blogs/${blog.slug}`}><h1 className="font-medium text-base text-slate-800  "></h1></Link>
                <span className="font-normal text-xs text-gray-400 py-2">{blog.author}</span> 
                <p className="font-normal text-sm text-gray-600 py-1">
                   {blog.excerpt}
                </p>
                <Link href={`/blogs/${blog.slug}`}><div className="absolute 
                w-full h-10 bg-gradient-to-t from-gray-300 to-transparent 
                bottom-0 left-0 text-center pt-2 cursor-pointer 
                font-medium text-gray-800 hover:text-cyan-500">
                    Read More
            </div></Link>
            </div>
           </div>
  )
}

export default BlogCard