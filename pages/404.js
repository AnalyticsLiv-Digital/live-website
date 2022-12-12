import React, {useEffect} from 'react'
import ScrollProgress from '../components/ScrollProgress'
import Head from 'next/head'
import AOS from 'aos';
import 'aos/dist/aos.css';

const aboutus = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <Head>
      <title>Test</title>
    </Head>
    <div className='w-4/5 mx-auto p-8 my-4'>
    <img  src="static/404.svg" className="w-3/4 mx-auto"/>
     <div><a >Click Here</a> to Go to Home Page</div>
      </div>
    </>
  )
}

export default aboutus