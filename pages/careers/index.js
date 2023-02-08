import React , {useEffect} from 'react'
import Head from 'next/head'
import ScrollProgress from '../../components/ScrollProgress'
import AOS from 'aos';
import Link from 'next/link';
import 'aos/dist/aos.css';
import JobCard from '../../components/JobCard';

const Careers = ({jobsdata}) => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
    <Head>
      <title>AnalyticsLiv - Careers</title>
    </Head>
    <ScrollProgress/>
    <section className="pb-12">
        <div className="relative py-8 ">
            <div className="absolute w-72 h-72 bg-pink-300 rounded-full right-0 md:right-10 top-2 blur-xl"></div>
            <div className="w-4/5 mx-auto relative">
                <div className="border-2 cursor-pointer border-slate-800 hover:border-cyan-500 transform delay-75 w-fit px-4 py-2 rounded">
                    We are hiring!
                </div>
                <div className="relative my-4">
                    <h1 className="font-semibold text-5xl my-8">
                        Be part of the team
                    </h1>
                    <p className="text-xl lg:w-3/5">
                        We are looking for passionate and enthusiastic  people to join us
                        in the challenging journey of creating space for new ways to help building businesses together. We value full ownership and responsibilities,
                        clear communications and keen learning attitude.
                    </p>
                </div>
            </div>
        </div>
        {jobsdata && jobsdata.job.map((job,key) => (
                <JobCard job={job} key={key}/>
            
          ))}
        
        
        
        
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
    // Fetch data from external API
  
    const res = await fetch(`${process.env.domain}/api/alljobs`)
    const jobsdata = await res.json()

  //console.log(brandsdata);
    // Pass data to the page via props
    return { props: { jobsdata } }
  }

export default Careers