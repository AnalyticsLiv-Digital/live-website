import React, { useEffect } from 'react'
import Head from 'next/head'
import AOS from 'aos';
import Link from 'next/link';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';

const aboutus = () => {

  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    });
    return () => clearTimeout(timer);
  }, [router]);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>AnalyticsLiv - Page Not Found</title>
      </Head>
      <div className='lg:w-4/5 mx-auto p-8 my-4'>
        <img src="https://storage.googleapis.com/website-bucket-uploads/static/404.svg" className="lg:w-3/4 mx-auto" />
        <div className='text-center font-semibold lg:text-lg text-blue-600 hover:text-blue-400'><Link href="/"  >Click Here to Go to Home Page</Link> </div>
      </div>
    </>
  )
}

export default aboutus