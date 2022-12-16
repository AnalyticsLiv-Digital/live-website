import '../styles/globals.css'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import Head from 'next/head'
import TagManager from 'react-gtm-module';
import { useEffect, useState } from 'react'
import Router from 'next/router'
import { HashLoader } from 'react-spinners'


function MyApp({ Component, pageProps }) {
  const [showLoader, setShowloader] = useState(false);
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-M98J2SJ' });
}, []);

Router.events.on('routeChangeStart', ()=>{
  setShowloader(true);
})

Router.events.on('routeChangeComplete', ()=>{
  setShowloader(false);
})
  return <>
  
  {showLoader ? <div className='flex h-screen'><HashLoader
  color="#271d90"
  loading
  size={100}
  className="m-auto align-middle"
/></div> :
<>
<Header />
  <Component {...pageProps} />
  <Footer/></>}
  </>
}

export default MyApp
