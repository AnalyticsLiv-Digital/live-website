import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const RecommendedBlogs = ({ recommendedBlogsdata }) => {
    const [recommendedBlogs, setRecommendedBlogs] = useState([]);

    useEffect(() => {
        if (recommendedBlogsdata) {
            setRecommendedBlogs(recommendedBlogsdata);
            // console.log("inininin",recommendedBlogsdata)
        }
    }, [recommendedBlogsdata]);


    return (
        <section className='lg:flex lg:ml-[5.5%] lg:w-[67%] lg:justify-start mb-5 pb-5 max-lg:mx-7 space-y-2 lg:space-y-0 bg-white'>

            <div className="recommended-blogs mt-3 lg:p-5">
                {recommendedBlogs.length >= 2 && (
                    <div className="text-2xl md:text-3xl lg:text-4xl text-[#334155] font-semibold m-3 sm:pl-2">
                        Recommended Blogs
                    </div>
                )}            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {recommendedBlogs.length >= 2 && recommendedBlogs.slice(0, 2).map((blog) => (
                        <Link
                            key={blog.id}
                            // to={``}
                            href={`/blogs/${blog.slug}`}
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="text-primary mt-4 inline-block cursor-pointer"
                        >
                            <div className="bg-white md:min-h-[45dvh] p-2 rounded-lg shadow-lg flex flex-col justify-between">
                                <img src={blog.coverphoto} alt={blog.title} className="w-full md:w-[100dvw] max-lg:w-[100dvw] object-contain rounded-t-lg" />
                                <h3 className="text-xl font-semibold mt-4">{blog.title}</h3>
                                <a
                                    to={``}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className="text-primary mt-4 inline-block cursor-pointer"
                                >
                                    Read More
                                </a>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecommendedBlogs;