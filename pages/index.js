import Blogs from '../components/home/Blog'
import Casestudies from '../components/home/Casestudies'
import Heighlights from '../components/home/Heighlights'
import Home from '../components/home/Home'
import Marketing from '../components/home/Marketing'
import PowerUp from '../components/home/PowerUp'
import ServicesDo from '../components/home/ServicesDo'
import ServicesOffer from '../components/home/ServicesOffer'
import Embed from '../components/home/Embed'
import ScrollProgress from '../components/ScrollProgress';
import StructuredData from '../components/StructuredData';
import React from 'react'
import Head from 'next/head'
import Testimonial from '../components/home/Testimonial'

const page = () => {
  const stuctureData = {"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://analyticsliv.com/","url":"https://analyticsliv.com/","name":"Leading Web and App Analytics Agency in India - AnalyticsLiv","isPartOf":{"@id":"https://analyticsliv.com/#website"},"primaryImageOfPage":{"@id":"https://analyticsliv.com/#primaryimage"},"image":{"@id":"https://analyticsliv.com/#primaryimage"},"thumbnailUrl":"https://storage.googleapis.com/website-bucket-uploads/static/logo.png","datePublished":"2023-01-11T18:27:34+00:00","dateModified":"2023-04-07T20:48:38+00:00","description":"AnalyticsLiv Digital is one of the leading Web and App analytics agency. We help our customers embrace Google Products to improve their customer experiences.","breadcrumb":{"@id":"https://analyticsliv.com/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://analyticsliv.com/"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://analyticsliv.com/#primaryimage","url":"https://storage.googleapis.com/website-bucket-uploads/static/logo.png","contentUrl":"https://storage.googleapis.com/website-bucket-uploads/static/logo.png","width":1200,"height":628},{"@type":"BreadcrumbList","@id":"https://analyticsliv.com/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]},{"@type":"WebSite","@id":"https://analyticsliv.com/#website","url":"https://analyticsliv.com/","name":"Analyticsliv","description":"","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://www.analyticsliv.com/blogs/search?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://www.analyticsliv.com/#organization","name":"Analyticsliv","url":"https://www.analyticsliv.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://www.analyticsliv.com/#/schema/logo/image/","url":"https://storage.googleapis.com/website-bucket-uploads/static/logo.png","contentUrl":"https://storage.googleapis.com/website-bucket-uploads/static/logo.png","width":512,"height":114,"caption":"Analyticsliv"},"image":{"@id":"https://www.analyticsliv.com/#/schema/logo/image/"},"sameAs":["https://m.facebook.com/100070503960704/","https://in.linkedin.com/company/analytics-liv-digital","https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw","https://www.instagram.com/analyticsliv_digital"]}]};

  return (
    <>
  
            <Head>
                <meta name="description" content="AnalyticsLiv Digital is one of the leading Web and App analytics agency. We help our customers embrace Google Products to improve their customer experiences."/>
                <title>Leading Web and App Analytics Agency in India - AnalyticsLiv</title>
                <link rel="canonical"href="https://www.analyticsliv.com/"></link>
            </Head>
            <StructuredData data={stuctureData} />
     <Home/>
     <Embed/>
     <Heighlights/>
     <Marketing/>
     <ServicesDo/>
     <ServicesOffer/>
     <PowerUp/>
     <Testimonial/>
     <Casestudies/>
     <Blogs/>
    </>
  )
}

export default page