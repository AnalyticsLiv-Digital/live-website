import React, { useState,useEffect } from 'react'
import ScrollProgress from '../../components/ScrollProgress'
import Head from 'next/head';
import BlogCard from '../../components/BlogCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { ScaleLoader } from 'react-spinners'
import { useRouter } from 'next/router'


const index = ({blogDat,search}) => {
    const router = useRouter()
  const {slug} = router.query;
  
  console.log(slug);
    const blogData = blogDat.blog;
    
    const [blogsData, setBlogsData] = useState(blogData);
 
 
    useEffect(() => {
        
        AOS.init();
    }, []);
    return (
        <><Head>
            <title>AnalyticsLiv - Blogs</title>
 
        </Head>
        <ScrollProgress/>

            <div>
                
                <div className="relative lg:mb-32">
                    <div className="">
                        <div className="absolute right-0 bg-slate-900 w-4/5 lg:w-4/5 lg:h-80 h-full rounded-bl-full"></div>
                        <div className="absolute right-0 top-0 -bottom-10 lg:left-32  lg:mt-20 bg-red-700 opacity-70 w-20 h-20 lg:w-60 lg:h-60 rounded-full"></div>
                        <div className="absolute right-6 -bottom-8 lg: lg:left-52  lg:top-0 bg-yellow-300 opacity-80 w-28 h-28 lg:w-48 lg:h-48 rounded-full"></div>
                    </div>
                    <img src="https://storage.googleapis.com/website-bucket-uploads/static/marketing.jpg" className="absolute h-32 lg:h-48 lg:top-2 lg:right-56 rounded-lg" />
                    <div className="relative lg:border-2 lg:border-slate-900 lg:flex rounded-lg backdrop-blur-xl bg-white h-20 lg:h-36 w-4/5 md:w-3/5 lg:w-1/3 p-6 lg:top-20 top-10 text-left mx-auto mb-6">
                        <div className="lg:pt-8 ">
                            <h2 className="lg:text-2xl text-slate-700 font-semibold whitespace-relaxed ">B L O G S.</h2>
                            <div className="bg-slate-700 h-1 w-6 ml-12 lg:ml-20"></div>
                        </div>

                    </div>

                </div>

                <section className="">
                    <div className="text-center bg-cyan-50 md:bg-white pt-7 lg:pt-16 z-2">
                        <h1 className="text-center mb-4 text-lg font-medium tracking-wide text-cyan-800 text-lg">Search results for <b>{search}</b></h1>
                        
                    </div>
                </section>

                <section className='relative'>
                    <div className="relative lg:flex flex-row  w-full">

                        <div className="hidden bg-gray-50  h-100% w-1/2 my-8 p-4 space-y-4 mx-4">
                            <div className="flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#65217a" strokeWidth="2" d="m12 3l9 4.5l-9 4.5l-9-4.5L12 3Zm4.5 7.25L21 12.5L12 17l-9-4.5l4.5-2.25m9 5L21 17.5L12 22l-9-4.5l4.5-2.25" />
                                </svg>
                                <h2 className="font-medium py-1">Resources</h2>
                            </div>
                            <div>
                                <h2 className="text-cyan-500 font-medium ml-8">Blogs</h2>
                            </div>
                            <div className="space-y-2 text-sm text-left pl-10">
                                <h2 className="text-base text-sm text-slate-800 font-medium pl-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-6 left-12 fill-purple-900" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                        <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
                                    </svg>
                                    Categories
                                </h2>
                                <div>GA 4</div>
                                <div>Social Media Marketing</div>
                                <div>Analytics</div>
                                <div>Data Reporting</div>
                                <div>Media</div>
                            </div>

                        </div>

                        <div className='bg-cover py-8 lg:py-16 bg-scroll' style={{backgroundImage: `url("https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?t=st=1671082381~exp=1671082981~hmac=659665427411ee225ef245d30444c4a2513e113dcfebb8e1dabf685749e40e1e")`}} >
                            <div className="mx-8 lg:mx-24 grid grid-rows-1 lg:grid-cols-3 gap-6 lg:gap-10 ">
                                
                                {blogsData && blogsData.map((blog,key) => (
            <BlogCard key={key} blog={blog}/>
          ))}
                             
                            </div>

                        </div>
                    </div>

                    <nav className="absolute w-full bottom-0 m-auto inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <div className="m-auto py-4">

        

          

</div>
      </nav>
                    </section>
            
    </div >
    </>
  )
}

export async function getServerSideProps(context) {
    // Fetch data from external API

    const res = await fetch(`${process.env.domain}/api/blogsearch?search=${context.query.s}`)
    const blogDat = await res.json()
    const search = context.query.s;
    // Pass data to the page via props
    return { props: { blogDat,search} }
  }

export default index