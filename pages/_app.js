import '../styles/globals.css'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
  <Header />
  
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
