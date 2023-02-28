import React from 'react'
import Link from 'next/link';

const HomeBlog = ({blog, num}) => {
  return (
    <>
    <div className={`${num>0 ? "hidden md:block" : ""}  home-blog rounded backdrop-blur-xl border-1 border-amber-100 bg-white shadow-lg shadow-gray-800/40 h-84 lg:w-1/4 p-4 text-center`}>
                                <Link href={`/blogs/${blog.slug}`}>
                                    <img src={`${blog.thumbnail}`} className="w-full" />
                                    <h2 className="text-lg text-slate-900 font-semibold whitespace-relaxed ">{blog.title}</h2>
                                    <p className="align-middle text-left text-ellipsis pt-4 overflow-hidden  h-36 text-m text-gray-500">
                                       {`${blog.description.substring(0,140)}...`}
                                    </p>
                                    <div className="lg:absolute 
                w-full h-10 bg-gradient-to-t from-gray-300 to-transparent 
                bottom-0 left-0 text-center pt-2 cursor-pointer 
                font-medium text-gray-800 hover:text-cyan-500">
                                            Read More
                                        </div></Link>
                            </div>
    </>
  )
}

export default HomeBlog