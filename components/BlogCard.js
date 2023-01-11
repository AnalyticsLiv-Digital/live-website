import React from 'react'
import Link from 'next/link'


const BlogCard = ({blog}) => {
  return (
    <div className="blogcard relative lg:block bg-gray-50 rounded text-center shadow-md shadow-gray-500 ">
                                <Link href={`/blogs/${blog.slug}`}>
                                    <img src={blog.thumbnail} className=" rounded-t w-screen " />
                                    <div className="mx-4 mt-2 mb-2 lg:mb-8 text-left">
                                        <div className="flex justify-between text-xs text-gray-400">
                                            <span>9 Nov, 2022</span>
                                        </div>
                                        <h1 className="font-medium text-base text-slate-800  ">{blog.title}</h1>
                                        <span className="font-normal text-xs text-gray-400 py-2">{blog.author}</span>
                                        <p className="font-normal text-sm text-gray-600 py-1">
                                            {blog.description}
                                        </p>
                                        <div className="lg:absolute 
                w-full h-10 bg-gradient-to-t from-gray-300 to-transparent 
                bottom-0 left-0 text-center pt-2 cursor-pointer 
                font-medium text-gray-800 hover:text-cyan-500">
                                            Read More
                                        </div>
                                    </div>
                                    </Link>
                                </div>
  )
}

export default BlogCard