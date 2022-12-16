import '../styles/globals.css'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import Head from 'next/head'
import TagManager from 'react-gtm-module';
import { useEffect } from 'react'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-M98J2SJ' });
}, []);
  return <>
  <Header />
  
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
