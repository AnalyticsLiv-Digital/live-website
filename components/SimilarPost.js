import React from 'react'
import Link from 'next/link'


const SimilarBlogCard = ({blog}) => {
  return (
    <div className="min-w-full px-3">
    <Link href={`/blogs/${blog.slug}`}><img src={blog.thumbnail} />
    <h3 className="font-medium">{blog.title}</h3>
    </Link>
</div>
  )
}

export default SimilarBlogCard