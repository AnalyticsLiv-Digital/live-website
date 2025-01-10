import Head from 'next/head'
import React from 'react'
import ScrollProgress from '../../components/ScrollProgress'
import AOS from 'aos';
import Link from 'next/link';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react'
import { Router, useRouter } from 'next/router';
import { ScaleLoader } from 'react-spinners'
import SimilarPost from '../../components/SimilarPost'
import RecommendedBlogs from '../../components/RecommendedBlog';
import BlogBanner from '../../components/BlogBanner';

const index = ({ blogDat, similarBlogs }) => {
    const blogData = blogDat.blog[0];
    const similarBlogsdata = similarBlogs.blog;
    const [recommendedBlogsdata, setrecommendedBlogsdata] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isSticky, setIsSticky] = useState(false);
    const [formFixed, setFormFixed] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            if (scrollPosition > windowHeight / 1.25) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const mainFnc = async () => {
        if (!userId) return null;
        const res2 = await fetch(`/api/recommendedBlogs?user=${userId}&blog_id=${blogData?.id}&blog_title=${blogData?.title}`);
        const recommendedBlogs = await res2.json();
        return recommendedBlogs;
    };

    useEffect(() => {
        (async () => {
            if (userId) {
                const recommendedBlogsVal = await mainFnc();
                setrecommendedBlogsdata(recommendedBlogsVal);
            }

            AOS.init();

            if (screen.width < 800) {
                const imgs = document.querySelectorAll('.blog-cont img');

                imgs.forEach(img => {
                    img.style.width = "100%";
                    img.style.height = "auto";
                    const span = img.closest('span');
                    if (span) {
                        span.style.width = "100%";
                        span.style.height = "auto";
                    }
                });
            }
        })();

        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        };

        const gaCookie = getCookie('_ga');
        if (gaCookie) {
            const userId = gaCookie.split('.').slice(2).join('.');
            setUserId(userId);
        } else {
            console.log('_ga cookie not found');
        }
    }, [blogData, userId]);


    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'blog-page',
            'author': blogData.author,
            'title': blogData.title,
            'publish_date': blogData.date
        })

    }, []);

    useEffect(() => {

        let headerSize = () => {

            const totalScroll = document.documentElement.scrollTop;

            if ((totalScroll > 50)) {
                setFormFixed(true);
            } else if ((totalScroll < 45)) {
                setFormFixed(false);
            }


        }

        window.addEventListener("scroll", headerSize);

        return () => window.removeEventListener("scroll", headerSize);
    });




    var url = "https://analyticsliv.com/blogs/" + blogData.slug;

    return (<>
        <Head>
            <meta name="description" content={blogData && blogData.description} />
            <title>{blogData && blogData.title}</title>
            <link rel="canonical" href={url}></link>
        </Head>
        <ScrollProgress />

        <div>
            <section className="relative lg:bg-gray-100 md:pt-12 overflow-scroll">



                <div className="relative lg:flex w-full lg:w-11/12 space-y-2 lg:space-y-0 mx-auto pt-4 pb-8 px-4">
                    <div className="p-1 lg:p-8 lg:w-3/4 space-y-6 bg-white">

                        <h1 className="blog-title text-4xl font-bold tracking-wide text-slate-800">
                            {blogData && blogData.title}
                        </h1>

                        <div className=" flex md:space-x-2 justify-between">
                            <div>
                                <span className="flex text-sm font-medium text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-cyan-500 mr-1 py-4 -mt-0.5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                        <path d="M12 14q-.425 0-.712-.288Q11 13.425 11 13t.288-.713Q11.575 12 12 12t.713.287Q13 12.575 13 13t-.287.712Q12.425 14 12 14Zm-4 0q-.425 0-.713-.288Q7 13.425 7 13t.287-.713Q7.575 12 8 12t.713.287Q9 12.575 9 13t-.287.712Q8.425 14 8 14Zm8 0q-.425 0-.712-.288Q15 13.425 15 13t.288-.713Q15.575 12 16 12t.712.287Q17 12.575 17 13t-.288.712Q16.425 14 16 14Zm-4 4q-.425 0-.712-.288Q11 17.425 11 17t.288-.712Q11.575 16 12 16t.713.288Q13 16.575 13 17t-.287.712Q12.425 18 12 18Zm-4 0q-.425 0-.713-.288Q7 17.425 7 17t.287-.712Q7.575 16 8 16t.713.288Q9 16.575 9 17t-.287.712Q8.425 18 8 18Zm8 0q-.425 0-.712-.288Q15 17.425 15 17t.288-.712Q15.575 16 16 16t.712.288Q17 16.575 17 17t-.288.712Q16.425 18 16 18ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10Z" />
                                    </svg>
                                    <h4>{blogData && blogData.date}</h4>
                                </span>
                            </div>
                            <div className="flex space-x-2 pr-4">
                                <span className="flex text-sm font-medium text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-amber-400 py-4 mr-1 -mt-0.5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                        <path d="M9 3V1h6v2Zm2 11h2V8h-2Zm1 8q-1.85 0-3.488-.712q-1.637-.713-2.862-1.938t-1.938-2.862Q3 14.85 3 13t.712-3.488Q4.425 7.875 5.65 6.65t2.862-1.937Q10.15 4 12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4l1.4 1.4l-1.4 1.4Q20 8.6 20.5 10.025Q21 11.45 21 13q0 1.85-.712 3.488q-.713 1.637-1.938 2.862t-2.862 1.938Q13.85 22 12 22Z" />
                                    </svg>
                                    <h4>{blogData && blogData.duration} Minutes Read</h4>
                                </span>
                                <span className="flex text-sm font-medium text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 fill-purple-700 mr-1 -mt-0.5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                        <path d="M232 92.7L163.3 24a16.1 16.1 0 0 0-22.6 0l-25.1 25.1l-58.1 21.8a15.9 15.9 0 0 0-10.1 12.3L26.6 207.8a4 4 0 0 0 6.8 3.5l55-55.1A31.7 31.7 0 0 1 84 140a32 32 0 1 1 32 32a31.7 31.7 0 0 1-16.2-4.4l-55.1 55a4 4 0 0 0 3.5 6.8l124.6-20.7a16.2 16.2 0 0 0 12.3-10.2l21.8-58.1l25.1-25.1a15.9 15.9 0 0 0 0-22.6Zm-32 32L131.3 56L152 35.3l68.7 68.7ZM116 156a16 16 0 1 1 16-16a16 16 0 0 1-16 16Z" />
                                    </svg>
                                    <h4 className="blog-author">By {blogData && blogData.author}</h4>
                                </span>
                            </div>
                        </div>
                        <div className="mb-2 flex justify-between mr-8">
                            <div>
                                {blogData && blogData.category.map((category, key) => (
                                    <span key={key} className="bg-gray-100 px-2 py-0.5 font-medium text-sm rounded text-gray-400">{category}</span>
                                ))}



                            </div>
                            <div className='blog-share flex space-x-4'>
                                <Link share="facebook" className="" href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fanalyticsliv.com%2Fblogs%2F${blogData && blogData.slug}`}><svg xmlns="http://www.w3.org/2000/svg" className='w-4 fill-slate-800 hover:fill-blue-700' preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                                </svg>
                                </Link>
                                <Link share="linkedin" href={`http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fanalyticsliv.com%2Fblogs%2F${blogData && blogData.slug}&title=`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 fill-slate-800 hover:fill-indigo-900' preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                        <path d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                                    </svg>
                                </Link>
                                <Link share="twitter" href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fanalyticsliv.com%2Fblogs%2F${blogData && blogData.slug}&text=`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 fill-slate-800 hover:fill-sky-700' preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </Link>
                                <Link share="mail" href={`mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://analyticsliv.com/blogs/${blogData && blogData.slug}.`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 fill-slate-800 hover:fill-green-700' preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                        <path d="M232 96a16 16 0 0 0-16-16h-32V48a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v128a7.9 7.9 0 0 0 4.6 7.2a8.1 8.1 0 0 0 3.4.8a7.7 7.7 0 0 0 5-1.8L72 154v30a16 16 0 0 0 16 16h93.6l37.4 30.2a7.8 7.8 0 0 0 8.4 1a7.9 7.9 0 0 0 4.6-7.2ZM66.6 137.8L40 159.2V48h128v88H71.6a7.7 7.7 0 0 0-5 1.8Zm122.8 48a7.7 7.7 0 0 0-5-1.8H88v-32h80a16 16 0 0 0 16-16V96h32v111.2Z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <img src={blogData && blogData.coverphoto} className="w-screen" />
                        <div className="py-2 blog-cont">

                            {blogData && <div dangerouslySetInnerHTML={{ __html: blogData.content }}></div>}

                        </div>

                    </div>
                    <div className='flex flex-col lg:w-1/4'>
                        <div className={`${formFixed ? "sticky top-10 lg:z-20" : "relative lg:z-20"} h-fit bg-white px-2 py-2 lg:ml-3`}>
                            <div className="space-y-6">

                                <h3 className="w-full text-slate-700 pt-2 px-3 font-bold tracking-wider">Similar Posts</h3>

                                {similarBlogsdata && similarBlogsdata.map((blog, key) => (
                                    <SimilarPost blog={blog} key={key} />
                                ))}
                            </div>
                        </div>

                        <div
                            className={`${!blogData.relatedTo ? 'hidden' : 'block'} lg:sticky-banner bg-white px-2 py-2 lg:ml-3 ${isSticky ? "lg:fixed mt-10 lg:mt-[-50px] lg:z-10" : "lg:z-10 mt-10 lg:mt-36"}`}
                        >
                            <BlogBanner relatedTo={blogData.relatedTo} />
                        </div>
                    </div>
                </div>

                {recommendedBlogsdata?.length > 0 ? <RecommendedBlogs recommendedBlogsdata={recommendedBlogsdata} /> : <></>}
            </section>

        </div></>
    )
}

export async function getServerSideProps(context) {
    // Fetch data from external API

    const res = await fetch(`${process.env.domain}/api/fullblog?slug=${context.params.slug}`)
    const blogDat = await res.json()

    const res1 = await fetch(`${process.env.domain}/api/similarblogs?slug=${context.params.slug}`)
    const similarBlogs = await res1.json()

    // Pass data to the page via props
    return { props: { blogDat, similarBlogs } }
}

export default index