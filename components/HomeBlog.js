import React from 'react'
import Link from 'next/link';

const HomeBlog = ({blog, num}) => {
  return (
    <>
    <div className={`${num>0 ? "hidden md:block" : ""}  home-blog rounded backdrop-blur-xl border-1 border-amber-100 bg-white shadow-lg shadow-gray-800/40 h-84 lg:w-1/4 p-4 text-center`}>
                                <Link href={`/blogs/${blog.slug}`}>
                                    <img src={`${blog.thumbnail}`} className="stretch" />
                                    <h2 className="text-lg text-slate-900 font-semibold whitespace-relaxed ">{blog.title}</h2>
                                    <p className="align-middle text-left text-ellipsis pt-4 overflow-hidden  h-36 text-m text-gray-500">
                                       {`${blog.description.substring(0,140)}...`}
                                    </p></Link>
                            </div>
    </>
  )
}

export default HomeBlog