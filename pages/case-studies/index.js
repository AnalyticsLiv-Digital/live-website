import React, { useState } from 'react'
import ScrollProgress from '../../components/ScrollProgress'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Link from 'next/link';
import Casestudy from '../../components/Casestudy';

const index = ({ casestudyDat }) => {

  const [casestudydata, setBlogsData] = useState(casestudyDat.casestudy);
  //console.log(casestudyDat);
  return (<>
    <Head>
      <title>AnalyticsLiv - Case Studies</title>
      <meta name="description" content="Google Marketing Platform Partner - Our Case Studies" />
      <link rel="canonical" href="https://analyticsliv.com/case-studies"></link>
    </Head>
    <ScrollProgress />
    <div>
      <section>
        <div className="bg-gray-50 py-8">
          <div className="text-center md:mx-auto mx-8 py-2 bg-white md:w-2/5">
            <h1 className="font-bold text-4xl uppercase tracking-wide">Case Study</h1>
          </div>

          {/* <div className="space-y-6 lg:w-4/5 mx-2 md:mx-5 lg:mx-auto mt-8 "> */}
          <div className="space-y-6 xl:w-4/5 mx-2 md:mx-5 xl:mx-auto mt-8 ">



            {casestudydata && casestudydata.map((casest, key) => (
              <Casestudy key={key} casestudy={casest} />
            ))}


          </div>
        </div>
      </section>

    </div></>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API

  const res = await fetch(`${process.env.domain}/api/allcasestudies`)
  const casestudyDat = await res.json()
  console.log(casestudyDat);
  // Pass data to the page via props
  return { props: { casestudyDat } }
}


export default index