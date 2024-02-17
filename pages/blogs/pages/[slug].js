import React, { useState,useEffect } from 'react'
import ScrollProgress from '../../../components/ScrollProgress'
import Head from 'next/head';
import BlogCard from '../../../components/BlogCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { ScaleLoader } from 'react-spinners'
import { useRouter } from 'next/router'


const index = ({blogDat,count}) => {
    const router = useRouter()
  const {slug} = router.query;
  console.log(slug);
    const blogData = blogDat.blog;
    
    const [blogsData, setBlogsData] = useState(blogData);
    var rows = [], i = 0, len = count.pages;
    while (++i <= len) rows.push(i);
 
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

                

                <section className='relative'>

                    <div className="relative lg:flex flex-row  w-full">

                        <div className='bg-cover py-5 lg:pt-8 pb-20 bg-scroll' style={{backgroundImage: `url("https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?t=st=1671082381~exp=1671082981~hmac=659665427411ee225ef245d30444c4a2513e113dcfebb8e1dabf685749e40e1e")`}} >
                           
                        <div className="text-center pb-8 z-2">
                       <form method="get" action="/blogs/search">
                       <input name="s" type="search" placeholder="Search" className="bg-stone-100 w-3/5 lg:w-2/5 rounded-l-full border border-cyan-500 py-2 pl-9 focus:outline-none focus:caret-gray-400" />
                       <input type="submit" value="Search" id="Search" className="bg-cyan-500 text-white rounded-r-full border border-cyan-500 py-2 px-4 -ml-2 focus:outline-none" />
                       </form>
                   </div>
                           
                            <div className="mx-8 lg:mx-24 grid grid-rows-1 lg:grid-cols-3 gap-6 lg:gap-10 ">
                                
                                {blogsData && blogsData.map((blog,key) => (
            <BlogCard key={key} blog={blog}/>
          ))}
                             
                            </div>

                        </div>
                    </div>

                    <nav className="absolute w-full bottom-0 m-auto inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <div className="m-auto py-4">

        
        
       

        {rows && rows.map((pages,key) => (
            key == (slug-1) ?  <span aria-current="page" className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{key+1}</span> : <a href={"https://analyticsliv.com/blogs/pages/"+(key+1)} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">{key+1}</a>
             
           
          ))}

          

</div>
      </nav>
                    </section>
            
    </div >
    </>
  )
}

export async function getServerSideProps(context) {
    // Fetch data from external API

    const res = await fetch(`${process.env.domain}/api/allblogs?page=${context.params.slug}`)
    const blogDat = await res.json()
    const res1 = await fetch(`${process.env.domain}/api/blogtotal`)
    const count = await res1.json()
    // Pass data to the page via props
    return { props: { blogDat, count } }
  }

export default index