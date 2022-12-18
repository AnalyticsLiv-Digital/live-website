import React from 'react'
import ScrollProgress from '../../components/ScrollProgress'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Link from 'next/link';

const index = () => {
  return (<>
  <Head>
	<title>AnalyticsLiv - Case Studies</title>
  </Head>
  <ScrollProgress/>
    <div>
         <section>
        <div  className="bg-gray-50 py-8">
          <div className="text-center md:mx-auto mx-8 py-2 bg-white md:w-2/5">
            <h1 className="font-bold text-4xl uppercase tracking-wide">Case Study</h1>
          </div>

          <div className="space-y-6 md:w-4/5 mx-2 md:mx-auto mt-8 ">
		  <div className="bg-white md:flex gap-4 shadow-md shadow-gray">
			  <img  src="/static/cs1.png" className="mx-auto w-screen "/>
                <div className="p-2 space-y-4">
                <div className="md:flex md:justify-between md:space-x-2 text-center md:text-left">
                    <h1  className="font-semibold text-xl md:w-4/5 tracking-wider"><Link href="/case-studies/mdaudit-transforms-the-healthcare">MDaudit transforms the healthcare industry with 
                    ThoughtSpot Everywhere to drive compliance and revenue outcomes</Link></h1>
                    <div className="bg-slate-900 mx-auto text-lg text-white w-36 md:w-1/5 h-8 text-center pt-0.5 mt-2 uppercase tracking-wide"><Link href="/case-studies/mdaudit-transforms-the-healthcare">Read Now</Link></div>
                </div>
                <p className="text-justify text-slate-600 font-light">
                    MDaudit, is a leading healthcare technology SaaS platform that partners with the nations premier 
                    healthcare organizations to improve revenue, mitigate risk, and streamline operations to succeed 
                    in an evolving healthcare landscape. Their flagship revenue integrity software platform enables 
                    organizations to reduce compliance risk, improve efficiency, and allow customers to retain more 
                    of their revenue stream by providing workflow automation, risk monitoring, and built-in analytics 
                    and benchmarking capabilities – all in a single, integrated cloud-based platform.
                </p>
                
                </div>
              </div>

              <div className="bg-white md:flex gap-4 shadow-md shadow-gray">
                <img  src="/static/cs2.png" className="mx-auto w-screen "/>
                <div className="p-2 space-y-4">
                <div className="md:flex md:justify-between md:space-x-2 text-center md:text-left">
                    <h1 className="font-semibold text-xl md:w-4/5 tracking-wider"><Link href="/case-studies/how-to-optimize-images-in-wordPress">How to optimize images in WordPress for faster 
                    loading (complete guide)</Link></h1>
                    <div className="bg-slate-900 mx-auto text-lg text-white w-36 md:w-1/5 h-8 text-center pt-0.5 mt-2 uppercase tracking-wide"><Link href="/case-studies/how-to-optimize-images-in-wordPress">Read Now</Link></div>
                </div>
                <p className="text-justify text-slate-600 font-light">
                    In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge 
                    in which knowledge about space can be both a priori and synthetic. According to Kant, knowledge 
                    about space is synthetic, in that statements about space are not simply true by virtue of the 
                    meaning of the words in the statement. In his work, Kant rejected the view that space must be 
                    either a substance or relation. Instead he came to the conclusion that space and time are not 
                    discovered by humans to be objective features of the world, but imposed by us as part of a 
                    framework for organizing experience.
                </p>
                
                </div>
              </div>

              <div className="bg-white md:flex gap-4 shadow-md shadow-gray">
                <img  src="/static/cs3.png" className="mx-auto w-screen "/>
                <div className="p-2 space-y-4">
                    <div className="md:flex md:justify-between md:space-x-2 text-center md:text-left">
                      <h1 className="font-semibold text-xl md:w-4/5 tracking-wider"><Link href="/case-studies/why-choose-a-theme-that-looks-good-with-wooCommerce">Why choose a theme that looks good with WooCommerce?</Link></h1>
                      <div className="bg-slate-900 mx-auto text-lg text-white w-36 md:w-1/5 h-8 text-center pt-0.5 mt-2 uppercase tracking-wide"><Link href="/case-studies/why-choose-a-theme-that-looks-good-with-wooCommerce">Read Now</Link></div>
                    </div>
                <p className="text-justify text-slate-600 font-light">
                    Physical space is often conceived in three linear dimensions, although modern physicists usually 
                    consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. 
                    The concept of space is considered to be of fundamental importance to an understanding of the 
                    physical universe. However, disagreement continues between philosophers over whether it is itself 
                    an entity, a relationship between entities, or part of a conceptual framework.
                </p>
                
                </div>
              </div>

              <div className="bg-white md:flex gap-4 shadow-md shadow-gray ">
               
                <img  src="/static/cs4.png" className="mx-auto  w-screen md:w-auto rounded"/>
                <div className="p-2 space-y-4">
                <div className="md:flex md:justify-between md:space-x-2 text-center md:text-left">
                <h1 className="font-semibold text-xl md:w-4/5 tracking-wider"><Link href="/case-studies/any-mechanical-keyboard-enthusiasts-in-design">Any mechanical keyboard enthusiasts in design?</Link></h1>
                <div className="bg-slate-900 mx-auto text-lg text-white w-36 md:w-1/5 h-8 text-center pt-0.5 mt-2 uppercase tracking-wide"><Link href="/case-studies/any-mechanical-keyboard-enthusiasts-in-design">Read Now</Link></div>
                </div>
                <p className="text-justify text-slate-600 font-light">
                    Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the prison 
                    to combat diseases…and it was a Roaring Success (as in Roaring Drunk) I mean we had Long lines 
                    of prisoners fist fighting to use them.
                </p>
                
                </div>
              </div>

              
          </div>
        </div>
      </section>

    </div></>
  )
}

export default index