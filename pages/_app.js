import '../styles/globals.css'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import Head from 'next/head'
import TagManager from 'react-gtm-module';
import { useEffect, useState } from 'react'
import Router,{ useRouter } from 'next/router'
import { HashLoader } from 'react-spinners'


function MyApp({ Component, pageProps }) {
  const [showLoader, setShowloader] = useState(false);
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NLH25K8' });
}, []);

Router.events.on('routeChangeStart', ()=>{
  setShowloader(true);
})

Router.events.on('routeChangeComplete', ()=>{
  setShowloader(false);
})
const router = useRouter();
  return <>
  {router.pathname.includes("liv-admin") ? <Component {...pageProps} /> :<><Head>
  <link rel="icon" href="https://storage.googleapis.com/website-bucket-uploads/static/favicon.png" type="image/icon type"></link>
  <link
          href="https://fonts.googleapis.com/css2?family=Poppins"
          rel="stylesheet"
        />
  </Head>
  <Header />
  {showLoader ? <div className='flex h-screen'><HashLoader
  color="#271d90"
  loading
  size={100}
  className="m-auto align-middle"
/></div> :
<>

  <Component {...pageProps} />
  <Footer/></>}</>}
  
  </>
}

export default MyApp
