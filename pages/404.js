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
    <div>404 Page</div>
    </>
  )
}

export default aboutus