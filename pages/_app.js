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
// import WebinarPopup from '../components/webinarPopup';
// import useWebinarPopup from '../components/hooks/usePopup'
import ContactPopup from '../components/ContactPopup';
import useContactPopup from '../components/hooks/useContactPopup';
import Script from "next/script";
import Navbar from '../components/navbar';
import Footer1 from '../components/home/Footer1';


function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  // const { showPopup, closePopup, registerUser, clickHere } = useWebinarPopup();
  const routerr = useRouter();
  const { showPopup, closePopup, registerUser } = useContactPopup();
  const [showLoader, setShowloader] = useState(false);
  useEffect(() => {
    if (!router.pathname.includes("admin")) {
      TagManager.initialize({ gtmId: 'GTM-NLH25K8' });
    }

  }, []);

  Router.events.on('routeChangeStart', () => {
    setShowloader(true);
  })

  Router.events.on('routeChangeComplete', () => {
    setShowloader(false);
  })
  const router = useRouter();
  return <>
    <Script
      id="customfitpreinit"
      strategy="beforeInteractive" // This ensures the script loads after the page is interactive
      dangerouslySetInnerHTML={{
        __html: `!function(e,t,i,s){var n=t.getElementById("customfitpreinit");if(n){n.insertAdjacentHTML("beforebegin",'<style type="text/css">.customfit-invisible-preinit-block{visibility:hidden !important; opacity:0 !important}</style>');var r=document.querySelector("html");r.classList.add("customfit-invisible-preinit-block"),setTimeout(function(){r.classList.remove("customfit-invisible-preinit-block")},5e3);var c=t.getElementsByTagName("script")[0],o=t.createElement("script");o.id="customfitinit",o.setAttribute("crossorigin","*"),o.async=!0,o.src="https://sdk.customfit.ai/3dea8570-8ba1-11ef-be42-6746678c203d/cf-js-sdk-min.js",o.type="text/javascript",c.parentNode.insertBefore(o,c),o.onerror=function(){var e=t.getElementById("customfit-invisible-preinit-block");e&&e.parentNode.removeChild(e)}}}(window,document);`,
      }}
    />
    <SessionProvider session={session}>
      {router.pathname == "/server-side-tracking" || router.pathname == "/dv360-a" || router.pathname.includes("admin") || router.pathname == "/ecommerce" || router.pathname == "/ga4" || router.pathname == "/dv360" || router.pathname == "/gtm" || router.pathname == "/ContactPopup" || router.pathname == "/webinar/cookie-consent" || router.pathname == "/gtmNew" || router.pathname == "/ga41" ? <Component {...pageProps} /> : <><Head>
        <link rel="icon" href="https://storage.googleapis.com/website-bucket-uploads/static/favicon.png" type="image/icon type"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins"
          rel="stylesheet"
        />
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-5L8TQ26"></script>

        <script src="/antiflicker.js" />
        <meta name="google-site-verification" content="O18N4BhbU7y11EzEu_fOYfNHdp-fCahcKZUpriC3hyQ" />
      </Head>
        {/* <Header /> */}
        <Navbar />
        {showLoader ? <div className='flex h-screen'><HashLoader
          color="#271d90"
          loading
          size={100}
          className="m-auto align-middle"
        /></div> :
          <>

            <Component {...pageProps} />
            {routerr.pathname === '/home_trial' ? <Footer1 /> : <Footer />}

          </>}</>}
          {/* {showPopup && (
              <ContactPopup onClose={closePopup} onRegister={registerUser} />
            )} */}
    </SessionProvider>
  </>
}

export default MyApp
