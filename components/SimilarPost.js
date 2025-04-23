import React from 'react'
import Link from 'next/link'


const SimilarBlogCard = ({blog}) => {
  return (
    <div className="similar-post min-w-full px-3">
    <Link href={`/blogs/${blog.slug}`}><img src={blog.thumbnail} />
    <div className="font-medium max-2xl:text-xs">{blog.title}</div>
    </Link>
</div>
  )
}

export default SimilarBlogCard