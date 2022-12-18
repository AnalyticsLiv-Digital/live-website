import React, {useEffect} from 'react'
import ScrollProgress from '../components/ScrollProgress'
import Head from 'next/head'
import AOS from 'aos';
import Link from 'next/link';
import 'aos/dist/aos.css';

const aboutus = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <Head>
      <title>AnalyticsLiv - Page Not Found</title>
    </Head>
    <div className='lg:
    w-4/5 mx-auto p-8 my-4'>
    <img  src="static/404.svg" className="lg:w-3/4 mx-auto"/>
     <div className='text-center font-semibold lg:text-lg text-blue-600 hover:text-blue-400'><Link href="/"  >Click Here to Go to Home Page</Link> </div>
      </div>
    </>
  )
}

export default aboutus