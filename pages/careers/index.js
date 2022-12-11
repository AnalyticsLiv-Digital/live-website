import React , {useEffect} from 'react'
import Head from 'next/head'
import ScrollProgress from '../../components/ScrollProgress'
import AOS from 'aos';
import Link from 'next/link';
import 'aos/dist/aos.css';

const Careers = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
    <Head>
      <title>Test</title>
    </Head>
    <ScrollProgress/>
    <section className="pb-12">
        <div className="relative py-8 ">
            <div className="absolute w-72 h-72 bg-pink-300 rounded-full right-0 md:right-10 top-2 blur-xl"></div>
            <div className="w-4/5 mx-auto relative">
                <div className="border-2 cursor-pointer border-slate-800 hover:border-cyan-500 transform delay-75 w-fit px-4 py-2 rounded">
                    We are hiring!
                </div>
                <div className="relative my-4">
                    <h1 className="font-semibold text-5xl my-8">
                        Be part of the team.
                    </h1>
                    <p className="text-xl lg:w-3/5">
                        We are looking for passionate and enthusiastic  people to join us
                        in the challenging journey of creating space for new ways to help building businesses together. We value full ownership and responsibilities,
                        clear communications and keen learning attitude.
                    </p>
                </div>
            </div>
        </div>

        <div className="w-4/5 mx-auto space-y-4 py-4">
            <div className="h-0.5 w-full bg-gray-300"></div>
            <div className="md:flex space-y-2">
                <div className="md:w-3/5">
                <h2 className="text-lg font-semibold">
                    Product Marketing Manager
                </h2>
                <p>
                    To be responsible for creating assets and to enable marketing activities for the company for its products, solutions, services, internal projects and initiatives with intermittent execution effectively.
                </p>
                <div className="mt-2 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-cyan-500 w-6 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 12q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 7.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4Q9.475 4 7.737 5.737Q6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35ZM12 22q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Zm0-11.8Z"></path>
                    </svg>
                    <span className="mx-2">Location</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 inline fill-cyan-500" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M20.1 5.52V1.5h-.18c-3.36.15-6.15 2.31-7.83 4.02l-.09.09l-.09-.09C10.2 3.81 7.44 1.65 4.08 1.5H3.9v4.02H0v6.93c0 1.68.06 3.36.18 4.74a5.57 5.57 0 0 0 5.19 5.1c2.13.12 4.38.21 6.63.21s4.5-.09 6.63-.24a5.57 5.57 0 0 0 5.19-5.1c.12-1.38.18-3.06.18-4.74v-6.9zm0 6.93c0 1.59-.06 3.15-.18 4.41c-.09.81-.75 1.47-1.56 1.5a90 90 0 0 1-12.72 0c-.81-.03-1.5-.69-1.56-1.5c-.12-1.26-.18-2.85-.18-4.41V5.52c2.82.12 5.64 3.15 6.48 4.32L12 12.09l1.62-2.25c.84-1.2 3.66-4.2 6.48-4.32z"></path>
                    </svg>
                    <span className="mx-2">Experience</span>
                </div>
                </div>
                <div className="md:w-2/5 md:text-right">
                    <Link href="careers/sss"><button className="border-b-2 border-rose-400 px-4 py-2 text-gray-200 rounded bg-slate-800 hover:bg-cyan-500 hover:text-slate-800 hover:border-slate-600 tracking-wider">Apply Now</button></Link>
                </div>
            </div>
        </div>
        <div className="w-4/5 mx-auto space-y-4 py-4">
            <div className="h-0.5 w-full bg-gray-300"></div>
            <div className="md:flex space-y-2">
                <div className="md:w-3/5">
                <h2 className="text-lg font-semibold">
                Data Scientist
                </h2>
                <p>
                To provide value to the clients by deriving actionable insights from the data by defining features, creating ML models, testing and validating models, optimizing models, and presenting the output in an actional format/method to the client to help them make data-backed business decisions.
                    
                    </p>
                <div className="mt-2 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-cyan-500 w-6 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 12q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 7.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4Q9.475 4 7.737 5.737Q6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35ZM12 22q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Zm0-11.8Z"></path>
                    </svg>
                    <span className="mx-2">Location</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 inline fill-cyan-500" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M20.1 5.52V1.5h-.18c-3.36.15-6.15 2.31-7.83 4.02l-.09.09l-.09-.09C10.2 3.81 7.44 1.65 4.08 1.5H3.9v4.02H0v6.93c0 1.68.06 3.36.18 4.74a5.57 5.57 0 0 0 5.19 5.1c2.13.12 4.38.21 6.63.21s4.5-.09 6.63-.24a5.57 5.57 0 0 0 5.19-5.1c.12-1.38.18-3.06.18-4.74v-6.9zm0 6.93c0 1.59-.06 3.15-.18 4.41c-.09.81-.75 1.47-1.56 1.5a90 90 0 0 1-12.72 0c-.81-.03-1.5-.69-1.56-1.5c-.12-1.26-.18-2.85-.18-4.41V5.52c2.82.12 5.64 3.15 6.48 4.32L12 12.09l1.62-2.25c.84-1.2 3.66-4.2 6.48-4.32z"></path>
                    </svg>
                    <span className="mx-2">Experience</span>
                </div>
                </div>
                <div className="md:w-2/5 md:text-right">
                <Link href="careers/sss"><button className="border-b-2 border-rose-400 px-4 py-2 text-gray-200 rounded bg-slate-800 hover:bg-cyan-500 hover:text-slate-800 hover:border-slate-600 tracking-wider">Apply Now</button></Link>
                </div>
            </div>
        </div>
        <div className="w-4/5 mx-auto space-y-4 py-4">
            <div className="h-0.5 w-full bg-gray-300"></div>
            <div className="md:flex space-y-2">
                <div className="md:w-3/5">
                <h2 className="text-lg font-semibold">
                Technical Analyst- Web
                </h2>
                <p>
                To build solutions &amp; help customers with technical challenges by understanding the context/purpose of the requirement, fulfil their end goal.
   
                    </p>
                <div className="mt-2 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-cyan-500 w-6 inline" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M12 12q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 7.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4Q9.475 4 7.737 5.737Q6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35ZM12 22q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Zm0-11.8Z"></path>
                    </svg>
                    <span className="mx-2">Location</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 inline fill-cyan-500" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M20.1 5.52V1.5h-.18c-3.36.15-6.15 2.31-7.83 4.02l-.09.09l-.09-.09C10.2 3.81 7.44 1.65 4.08 1.5H3.9v4.02H0v6.93c0 1.68.06 3.36.18 4.74a5.57 5.57 0 0 0 5.19 5.1c2.13.12 4.38.21 6.63.21s4.5-.09 6.63-.24a5.57 5.57 0 0 0 5.19-5.1c.12-1.38.18-3.06.18-4.74v-6.9zm0 6.93c0 1.59-.06 3.15-.18 4.41c-.09.81-.75 1.47-1.56 1.5a90 90 0 0 1-12.72 0c-.81-.03-1.5-.69-1.56-1.5c-.12-1.26-.18-2.85-.18-4.41V5.52c2.82.12 5.64 3.15 6.48 4.32L12 12.09l1.62-2.25c.84-1.2 3.66-4.2 6.48-4.32z"></path>
                    </svg>
                    <span className="mx-2">Experience</span>
                </div>
                </div>
                <div className="md:w-2/5 md:text-right">
                <Link href="careers/sss"><button className="border-b-2 border-rose-400 px-4 py-2 text-gray-200 rounded bg-slate-800 hover:bg-cyan-500 hover:text-slate-800 hover:border-slate-600 tracking-wider">Apply Now</button></Link>
                </div>
            </div>
        </div>
        
        
        
      </section>
    </>
  )
}

export default Careers