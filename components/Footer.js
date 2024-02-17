import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <>      {/*    
      <section>
    <div className='hidden fxdbtn md:block fixed z-20 w-full h-15 bottom-0 delay-150'>
    <div className='bg-sky-200 md:w-full  md:h-auto mx-auto align-middle px-2 pb-2 shadow-lg shadow-black text-center'>
            <span className='text-red-600 ml-0.5 text-sm font-semibold'>Have you migrated to <span className="font-extrabold text-blue-600">GA4</span> yet! <a href="https://ga4.analyticsliv.com"><button className='btn-freemigration  bg-amber-200 hover:bg-amber-300 capitalize transition-colors delay-100 text-black px-3 py-2 font-bold rounded-lg mt-4'>
                    <p className='animate-pulse text-sm'>Claim free migration now
                    </p>
                </button></a></span>
                
            </div>
    </div>
</section>
*/} 
    <footer>
    <div className="block lg:flex text-sm justify-center bg-slate-900 item">
        <div className="w-10/12 text-center lg:text-left lg:w-1/4 mx-auto py-4">
            <div className="relative text-white">
                <span className="">Connect with us</span>
                <div className="my-2 w-full h-0.5 bg-sky-800"></div>
                
                <div className="ml-0 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 mr-1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                    <span ><Link className="tel" href="tel:+918320576622">+91 83205 76622</Link></span>
                </div>
                
                <div className="ml-0 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 mr-2" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"/>
                    </svg> 
                    <span><Link className="tel" href="mailto:support@analyticsliv.com">support@analyticsliv.com</Link></span>
                    
                </div>
            </div>
            <div className="social flex lg:pl-0 justify-center">
            <Link attr="facebook" href="https://m.facebook.com/100070503960704/"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className="w-7 mt-4 mx-2 fill-white">
                <path  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
            </svg>
            </Link>
                <Link attr="linkedin" href="https://in.linkedin.com/company/analytics-liv-digital/"><svg xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20" className="w-6 mt-4 mx-2 fill-white">
                    <path  d="M5 3c0 1.062-.71 1.976-2.001 1.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1s1.976.91 2 2zM1 19V6h4v13H1zm6-8.556c0-1.545-.051-2.836-.102-3.951h3.594l.178 1.723h.076c.506-.811 1.746-2 3.822-2C17.1 6.216 19 7.911 19 11.558V19h-4v-6.861c0-1.594-.607-2.81-2-2.81c-1.062 0-1.594.86-1.873 1.569c-.102.254-.127.608-.127.963V19H7v-8.556z"/>
                </svg></Link>
                <Link attr="youtube" href="https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className="w-8 mt-4 mx-2 fill-white">
                    <path d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"/>
                </svg></Link>
                <Link attr="instagram" href="https://www.instagram.com/analyticsliv_digital/"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"  viewBox="0 0 256 256" className="w-7 mt-4 mx-2 fill-white">
                    <path d="M128 80a48 48 0 1 0 48 48a48 48 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32Zm44-132H84a56 56 0 0 0-56 56v88a56 56 0 0 0 56 56h88a56 56 0 0 0 56-56V84a56 56 0 0 0-56-56Zm40 144a40 40 0 0 1-40 40H84a40 40 0 0 1-40-40V84a40 40 0 0 1 40-40h88a40 40 0 0 1 40 40Zm-20-96a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"/></svg></Link>
            </div>
        </div>
        <div className="quick-links mt-4 w-5/6 text-white lg:w-1/3 mx-auto md:mb-14">
            <div className="text-center lg:text-right">Quick Links</div>
            <div className="bg-sky-800 w-full h-0.5 my-2"></div>
            <div>
                <ul className="uppercase text-sm tracking-wider space-x-2 flex lg:justify-end text-white">
                    <Link href="/services"><li className="text-white" >Services</li></Link>
                    <Link href="/blogs"><li className="text-white">Blogs</li></Link>
                    <Link href="/about-us"><li className="text-center text-white">About Us</li></Link>
                    <Link href="/contact"><li className="text-white" >Contact</li></Link>
            
                    <Link href="/privacy-policy"><li className="text-white">Privacy Policy</li></Link>
                </ul>
            </div>
            <div className="text-center lg:text-right mt-10 pb-4">© Created by Analytics Liv Digital LLP, All rights Reserved.</div>
        </div>
    </div>
    <div className="bg-gradient-to-l from-cyan-400 to-slate-800 h-8 pt-1"><Link href="/"><img src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" className="h-6 mx-auto"/></Link></div>
   </footer></>
  )
}
