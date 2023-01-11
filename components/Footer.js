import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
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
                    <span ><Link href="tel:+918008783679">+91 80087 83679</Link></span>
                </div>
                
                <div className="ml-0 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 mr-2" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"/>
                    </svg> 
                    <span><Link href="mailto:support@analyticsliv.com">support@analyticsliv.com</Link></span>
                    
                </div>
            </div>
            <div className="flex lg:pl-0 justify-center">
                <Link href="https://in.linkedin.com/company/analytics-liv-digital"><svg xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20" className="w-6 mt-4 mx-2 fill-white">
                    <path  d="M5 3c0 1.062-.71 1.976-2.001 1.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1s1.976.91 2 2zM1 19V6h4v13H1zm6-8.556c0-1.545-.051-2.836-.102-3.951h3.594l.178 1.723h.076c.506-.811 1.746-2 3.822-2C17.1 6.216 19 7.911 19 11.558V19h-4v-6.861c0-1.594-.607-2.81-2-2.81c-1.062 0-1.594.86-1.873 1.569c-.102.254-.127.608-.127.963V19H7v-8.556z"/>
                </svg></Link>
                <Link href="https://www.youtube.com/channel/UCSU9utLB2PDe4VcXiI5kMFw"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className="w-8 mt-4 mx-2 fill-white">
                    <path d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"/>
                </svg></Link>
                <Link href="https://www.instagram.com/analyticsliv_digital"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className="w-8 mt-4 mx-2 fill-white">
                    <path  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/>
                </svg></Link>
            </div>
        </div>
        <div className="mt-4 w-5/6 text-white lg:w-1/3 mx-auto">
            <div className="text-center lg:text-right">Quick Links</div>
            <div className="bg-sky-800 w-full h-0.5 my-2"></div>
            <div>
                <ul className="uppercase text-sm tracking-wider space-x-2 flex lg:justify-end ">
                    <Link href="/services"><li>Services</li></Link>
                    <Link href="/blogs"><li>Blogs</li></Link>
                    <Link href="/about-us"><li className="text-center">About Us</li></Link>
                    <Link href="/contact"><li>Contact</li></Link>
                    <Link href="/careers"><li>Careers</li></Link>
                </ul>
            </div>
            <div className="text-center lg:text-right mt-10">© Created by Analytics Liv Digital LLP, All rights Reserved.</div>
        </div>
    </div>
    <div className="bg-gradient-to-l from-cyan-400 to-slate-800 h-8 pt-1"><Link href="/"><img src="https://storage.googleapis.com/website-bucket-uploads/static/logo.png" className="h-6 mx-auto"/></Link></div>
   </footer>
  )
}
