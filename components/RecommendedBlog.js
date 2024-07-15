import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const RecommendedBlogs = ({ recommendedBlogsdata }) => {
    const [recommendedBlogs, setRecommendedBlogs] = useState([]);

    useEffect(() => {
        if (recommendedBlogsdata) {
            setRecommendedBlogs(recommendedBlogsdata);
        }
    }, [recommendedBlogsdata]);

    return (
        <section className="recommended-blogs mt-3">
            <div className="text-2xl md:text-3xl lg:text-4xl text-[#334155] font-semibold m-3 sm:pl-2">Recommended Blogs</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {recommendedBlogs.map((blog) => (
                                            <Link
                                            to={``}
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            className="text-primary mt-4 inline-block cursor-pointer"
                                        >
                    <div key={blog.id} className="bg-white md:min-h-[40dvh] p-4 rounded-lg shadow-lg flex flex-col justify-between">
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
        </section>
    );
};

export default RecommendedBlogs;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-scroll';

// const RecommendedBlogs = ({ recommendedBlogsdata }) => {
//     const [recommendedBlogs, setRecommendedBlogs] = useState([]);

//     useEffect(() => {
//         if (recommendedBlogsdata) {
//             setRecommendedBlogs(recommendedBlogsdata);
//         }
//     }, [recommendedBlogsdata]);

//     return (
//         <section className="recommended-blogs mt-3">
//             <div className="text-2xl md:text-3xl lg:text-4xl text-[#334155] font-semibold m-3 sm:pl-2">Recommended Blogs</div>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                 {recommendedBlogs.map((blog) => (
//                     <Link key={blog.id} href={`/blogs/${blog.slug}`}>                   
//                         <div className="bg-white p-4 rounded-lg shadow-lg felx flex-col justify-between">
//                             <img src={blog.coverphoto} alt={blog.title} className="w-full h-48 object-contain rounded-t-lg" />
//                             <h3 className="text-xl font-semibold mt-4">{blog.title}</h3>
//                             <a href={``} className="text-primary mt-4 inline-block">Read More</a>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </section>
//         // /blog/${blog.slug}
//     );
// };

// export default RecommendedBlogs;
