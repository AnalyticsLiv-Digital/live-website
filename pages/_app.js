import '../styles/globals.css'
import Header from '../components/Header'
//import { Footer } from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import Head from 'next/head'
import TagManager from 'react-gtm-module';
import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import { HashLoader } from 'react-spinners'
import { SessionProvider } from "next-auth/react"
import Footer from '../components/home/Footer'
import WebinarPopup from '../components/webinarPopup';
import useWebinarPopup from '../components/hooks/usePopup'
import { loadCustomFitScript } from '../utils/customScript';


function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  const { showPopup, closePopup, registerUser, clickHere } = useWebinarPopup();
  const [showLoader, setShowloader] = useState(false);
  useEffect(() => {
    if (!router.pathname.includes("admin")) {
      TagManager.initialize({ gtmId: 'GTM-NLH25K8' });
    }
    loadCustomFitScript();

  }, []);

  Router.events.on('routeChangeStart', () => {
    setShowloader(true);
  })

  Router.events.on('routeChangeComplete', () => {
    setShowloader(false);
  })
  const router = useRouter();
  return <>
    <SessionProvider session={session}>
      {router.pathname == "/server-side-tracking" || router.pathname == "/dv360-a" || router.pathname.includes("admin") || router.pathname == "/ecommerce" || router.pathname == "/ga4" || router.pathname == "/dv360" || router.pathname == "/gtm" || router.pathname == "/webinar/cookie-consent" || router.pathname == "/gtmNew" || router.pathname == "/ga41" ? <Component {...pageProps} /> : <><Head>
        <link rel="icon" href="https://storage.googleapis.com/website-bucket-uploads/static/favicon.png" type="image/icon type"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins"
          rel="stylesheet"
        />
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-5L8TQ26"></script>

        <script src="/antiflicker.js" />
        <meta name="google-site-verification" content="O18N4BhbU7y11EzEu_fOYfNHdp-fCahcKZUpriC3hyQ" />
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
            <Footer />

          </>}</>}
          {/* {showPopup && (
              <WebinarPopup onClose={closePopup} onRegister={registerUser} onClick ={clickHere} />
            )} */}
    </SessionProvider>
  </>
}

export default MyApp
