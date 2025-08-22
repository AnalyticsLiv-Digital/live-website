import StructuredData from '../components/StructuredData';
import React from 'react'
import Landing from '../components/home/Landing'
import Stats from '../components/home/Stats'
import Services from '../components/home/Services'
import TrustedByWorldwide from '../components/home/TrustedByWorldwide'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Collaborate from '../components/home/Collaborate'
import PowerUpBrand from '../components/home/PowerUpBrand'
import GoogleMarketing from '../components/home/GoogleMarketing'
import Testimonials from '../components/home/Testimonials'
import HomeBlogs from '../components/home/HomeBlogs'
import HomeCaseStudies from '../components/home/HomeCaseStudies'
import GetInTouch from '../components/home/GetInTouch'
import FAQ from '../components/home/FAQ'
import MetaSchemaOg from '../components/MetaSchemaOg'
import Head from 'next/head';
import { schemaHome } from '../utils/schema';
// import YtPlaylist from '../components/YtPlaylist';
import { content } from '../components/home/FAQ';

const page = ({ ytPlaylistdata }) => {
  const stuctureData = { "@context": "https://schema.org", "@graph": [{ "@type": "WebPage", "@id": "https://analyticsliv.com/", "url": "https://analyticsliv.com/", "name": "Leading Web and App Analytics Agency in India - AnalyticsLiv", "isPartOf": { "@id": "https://analyticsliv.com/#website" }, "primaryImageOfPage": { "@id": "https://analyticsliv.com/#primaryimage" }, "image": { "@id": "https://analyticsliv.com/#primaryimage" }, "thumbnailUrl": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png", "datePublished": "2023-01-11T18:27:34+00:00", "dateModified": "2023-04-07T20:48:38+00:00", "description": "AnalyticsLiv Digital is one of the leading Web and App analytics agency. We help our customers embrace Google Products to improve their customer experiences.", "breadcrumb": { "@id": "https://analyticsliv.com/#breadcrumb" }, "inLanguage": "en-US", "potentialAction": [{ "@type": "ReadAction", "target": ["https://analyticsliv.com/"] }] }, { "@type": "ImageObject", "inLanguage": "en-US", "@id": "https://analyticsliv.com/#primaryimage", "url": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png", "contentUrl": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png", "width": 1200, "height": 628 }, { "@type": "BreadcrumbList", "@id": "https://analyticsliv.com/#breadcrumb", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home" }] }, { "@type": "WebSite", "@id": "https://analyticsliv.com/#website", "url": "https://analyticsliv.com/", "name": "Analyticsliv", "description": "", "potentialAction": [{ "@type": "SearchAction", "target": { "@type": "EntryPoint", "urlTemplate": "https://analyticsliv.com/blogs/search?s={search_term_string}" }, "query-input": "required name=search_term_string" }], "inLanguage": "en-US" }, { "@type": "Organization", "@id": "https://analyticsliv.com/#organization", "name": "Analyticsliv", "url": "https://analyticsliv.com/", "logo": { "@type": "ImageObject", "inLanguage": "en-US", "@id": "https://analyticsliv.com/#/schema/logo/image/", "url": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png", "contentUrl": "https://storage.googleapis.com/website-bucket-uploads/static/logo.png", "width": 512, "height": 114, "caption": "Analyticsliv" }, "image": { "@id": "https://analyticsliv.com/#/schema/logo/image/" }, "sameAs": ["https://m.facebook.com/100070503960704/", "https://in.linkedin.com/company/analytics-liv-digital", "https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw", "https://www.instagram.com/analyticsliv_digital"] }] };

  return (
    <>
      <Head>
        {schemaHome()}
      </Head>
      <MetaSchemaOg
        url="https://analyticsliv.com/"
        title="Google Marketing Platform (GMP) Certified Partner | AnalyticsLiv"
        description="AnalyticsLiv, a certified GMP partner, helps brands optimize the customer journey from acquisition to conversion and retention through personalized data driven solutions."
        twitterTitle="Google Marketing Platform (GMP) Certified Partner | AnalyticsLiv"
        twitterDescription="Data Influences every touchpoint. As GMP partner we help brands from acquisition to conversion and better retention using personalized data driven solutions"
        extraHead={
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
          />
        }
        faqData={content}
      />
      {/* <StructuredData data={stuctureData} /> */}
      <div className="">
        <Landing />
        <Stats />
        <Services />
        {/* <YtPlaylist ytPlaylistdata={ytPlaylistdata} name={'LookerBi'} /> */}
        <TrustedByWorldwide />
        <WhyChooseUs />
        <Collaborate />
        <PowerUpBrand />
        <GoogleMarketing />
        <Testimonials />
        <HomeBlogs />
        <HomeCaseStudies />
        <GetInTouch />
        <FAQ />
      </div>
    </>
  )
}
// export async function getServerSideProps(context) {
//   // Fetch data from external API
//   console.log("-------------------HOLA--------------------------")
//   const res = await fetch(`${process.env.domain}/api/allytplaylists`)
//   const ytPlaylistdata = await res.json()
//   console.log("server ytPlaylistdata -----", ytPlaylistdata)


//   //console.log(ytPlaylistdata);
//   // Pass data to the page via props
//   return { props: { ytPlaylistdata } }
// }
// description="Data Influences every touchpoint. As GMP partner we help brands from acquisition to conversion and better retention using personalized data driven solutions"

export default page
