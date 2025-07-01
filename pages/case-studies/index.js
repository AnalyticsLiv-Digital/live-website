import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Link from 'next/link';
import Casestudy from '../../components/Casestudy';
import { useRouter } from 'next/router';

const index = ({ casestudyDat }) => {

  const router = useRouter();
  const { s } = router.query;

  const [casestudyData, setCasestudyData] = useState(casestudyDat?.casestudy || []);
  const [searchQuery, setSearchQuery] = useState(s || '');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(casestudyData?.length / itemsPerPage);

  const currentData = casestudyData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleScrollToTop = () => {
    const targetElement = document.getElementById("case-studies");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchFilteredData = async () => {
      if (s) {
        try {
          const res = await fetch(`/api/casestudiesfilter?search=${s}`);
          const data = await res.json();
          setCasestudyData(data.casestudy);
        } catch (error) {
          console.error("Error fetching filtered case studies:", error);
        }
      } else {
        setCasestudyData(casestudyDat?.casestudy || []);
      }
    };

    fetchFilteredData();
  }, [s, casestudyDat]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/case-studies?s=${searchQuery}`);
    } else {
      router.push(`/case-studies`);
    }
  };

  function handleScrollDown() {
    const element = document.getElementById('case-studies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Element to scroll into view not found.");
    }
  }

  return (<>
    <Head>
      <title>AnalyticsLiv - Case Studies</title>
      <meta name="description" content="Google Marketing Platform Partner - Our Case Studies" />
      <link rel="canonical" href="https://analyticsliv.com/case-studies"></link>
    </Head>
    <div className='font-sans mb-16'>
      <section>
        <div className='bg-header-linear max-sm:py-10 max-sm:pb-12 px-[3%] xl:px-[3%] md:pt-5 flex justify-around h-full items-center md:items-end lg:items-center relative mb-14'>
          <div className='sm:w-[70%] md:w-[50%] xl:w-[43%] 2xl:w-[45%] max-sm:text-center flex flex-col items-center sm:items-start justify-around gap-7 sm:gap-5 md:gap-7 lg:gap-12'>
            <h1 className='text-white text-[22px] sm:text-2xl xl:text-4xl font-bold'>Real Results, Real Growth : AnalyticsLiv Case Studies</h1>
            <div className='text-xs xl:text-sm text-white font-normal flex flex-col gap-3 lg:gap-5'>
              <div>Explore how data-driven strategies transform businesses! see how we help brands maximize performance, improve conversions, and drive success. </div>
              <div>Proven Success. Actionable Insights. Smarter Decisions.</div>
            </div>
            <a href='/contact'><button className='csbutn md:mb-2'>Contact Us Now</button></a>
          </div>
          <div className='max-sm:hidden w-[50%] flex justify-end 2xl:justify-center 2xl:pl-24'>
            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/CaseStudy_Main_Page_Image_png.png' alt='Improved Conversion Rate' />
          </div>
          <button onClick={handleScrollDown} className='absolute bottom-[-23px] z-20'>
            <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Vector%20(2).svg' alt='Vector'
              className='border-[5px] border-[#97C4DF] rounded-full p-2 py-[13px] bg-[#ECF8FF]' />
          </button>
          <div id='case-studies' className='absolute bottom-[80px] z-20'></div>
        </div>

        <div className='px-[6%] mb-12'>
          <div className='flex max-md:flex-col max-md:gap-7 items-center justify-between'>
            <h1 className='text-[#0E1947] text-3xl sm:text-2xl xl:text-4xl font-bold'>Case Studies</h1>

            <form onSubmit={handleSearch} className='flex items-center mx-auto md:w-[35%] 2xl:w-[45%]'>
              <input
                type="search"
                id='search'
                placeholder="Search"
                className="w-full rounded-l-lg border-l border-t border-b border-[#C1E9FF] text-[#08A4F7] placeholder-[#08A4F7] py-2 pl-6 pr-3 focus:outline-[#08A4F7]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[#08A4F7] text-white rounded-r-lg border border-[#08A4F7] -ml-1 py-[10px] md:py-[9px] px-4 focus:outline-none"
              >
                <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/search_icon_white.svg' alt='Search'
                  className='w-6' />
              </button>
            </form>

            {/* <div class="relative inline-block md:w-60 2xl:w-72">
              <select
                class="block w-full bg-white text-[#08A4F7] py-2 2xl:py-2.5 px-4 pr-10 font-medium rounded-md border border-[#C1E9FF] focus:outline-[#08A4F7] cursor-pointer appearance-none relative"
              >
                <option
                  value=""
                  class="bg-white text-[#08A4F7] py-2 px-3 border-b border-[#08A4F7]"
                >
                  - Select a type -
                </option>

                <option
                  value="ga"
                  class="text-[#08A4F7] border-b border-[#08A4F7] py-2 px-3 hover:bg-[#08A4F7] hover:text-white"
                >
                  Google Ads
                </option>
                <option
                  value="dv360"
                  class="text-[#08A4F7] border-b border-[#08A4F7] py-2 px-3 hover:bg-[#08A4F7] hover:text-white"
                >
                  Display & Video 360
                </option>
                <option
                  value="ga4"
                  class="text-[#08A4F7] border-b border-[#08A4F7] py-2 px-3 hover:bg-[#08A4F7] hover:text-white"
                >
                  Google Analytics 4
                </option>
                <option
                  value="looker-studio"
                  class="text-[#08A4F7] border-b border-[#08A4F7] py-2 px-3 hover:bg-[#08A4F7] hover:text-white"
                >
                  Looker Studio
                </option>
                <option
                  value="cro"
                  class="text-[#08A4F7] border-b border-[#08A4F7] py-2 px-3 hover:bg-[#08A4F7] hover:text-white"
                >
                  Conversion Rate Optimization
                </option>
                <option
                  value="gtm"
                  class="text-[#08A4F7] border-b border-[#08A4F7] py-2 px-3 hover:bg-[#08A4F7] hover:text-white"
                >
                  Google Tag Manager
                </option>
                <option
                  value="merchant-center"
                  class="text-[#08A4F7] border-b border-[#08A4F7] py-2 px-3 hover:bg-[#08A4F7] hover:text-white"
                >
                  Google Merchant Center
                </option>
                <option
                  value="gdpr"
                  class="text-[#08A4F7] py-2 px-3 hover:bg-[#08A4F7] hover:text-white"
                >
                  GDPR
                </option>
              </select>

              <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-[#08A4F7]"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div> */}

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center px-[10%] lg:px-[5%] gap-14">

          {currentData?.length > 0 ? (
            currentData?.map((casest, key) => <Casestudy key={key} casestudy={casest} />)
          ) : (
            <p className="text-center col-span-full text-gray-500">No case studies found.</p>
          )}
        </div>

        <div className="flex justify-center items-center mt-12 space-x-4">
          <button
            className={`px-4 py-3 rounded-md ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#08A4F7] text-white"
              }`}
            disabled={currentPage === 1}
            onClick={() => {
              handlePageChange(currentPage - 1);
              handleScrollToTop();
            }}
          >
            {currentPage === 1 ? <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/Stroke%201.svg' alt='arrow left' className='' />
              : <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Stroke%20right%20white.svg' alt='arrow left' className='' />}
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md ${currentPage === index + 1
                ? "bg-[#08A4F7] text-white"
                : "bg-white text-[#08A4F7] border border-[#08A4F7]"
                }`}
              onClick={() => {
                handlePageChange(index + 1);
                handleScrollToTop();
              }}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={`px-4 py-3 rounded-md ${currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#08A4F7] text-white"
              }`}
            disabled={currentPage === totalPages}
            onClick={() => {
              handlePageChange(currentPage + 1);
              handleScrollToTop();
            }}
          >
            {currentPage === totalPages ? <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Stroke%201.svg' alt='arrow right' className='' />
              : <img src='https://storage.googleapis.com/website-bucket-uploads/home_page/Homepage_Img/Stroke%20left%20white.svg' alt='arrow right' className='' />}
          </button>
        </div>

      </section>

    </div></>
  )
}


export async function getServerSideProps(context) {
  const { s } = context.query;
  let apiUrl = `${process.env.domain}/api/allcasestudies`;

  if (s) {
    apiUrl = `${process.env.domain}/api/casestudiesfilter?search=${s}`;
  }

  const res = await fetch(apiUrl);
  const casestudyDat = await res.json();

  return { props: { casestudyDat } };
}

export default index




// import React, { useState } from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Head from 'next/head';
// import Link from 'next/link';
// import Casestudy from '../../components/Casestudy';

// const index = ({ casestudyDat }) => {

//   const [casestudydata, setBlogsData] = useState(casestudyDat.casestudy);
//   //console.log(casestudyDat);
//   return (<>
//     <Head>
//       <title>AnalyticsLiv - Case Studies</title>
//       <meta name="description" content="Google Marketing Platform Partner - Our Case Studies" />
//       <link rel="canonical" href="https://analyticsliv.com/case-studies"></link>
//     </Head>
//     <div>
//       <section>
//         <div className="bg-gray-50 py-8 pb-20">
//           <div className="text-center md:mx-auto mx-8 py-2 bg-white md:w-2/5">
//             <h1 className="font-bold text-4xl uppercase tracking-wide">Case Study</h1>
//           </div>

//           {/* <div className="space-y-6 lg:w-4/5 mx-2 md:mx-5 lg:mx-auto mt-8 "> */}
//           <div className="space-y-6 xl:w-4/5 mx-2 md:mx-5 xl:mx-auto mt-8 ">



//             {casestudydata && casestudydata.map((casest, key) => (
//               <Casestudy key={key} casestudy={casest} />
//             ))}


//           </div>
//         </div>
//       </section>

//     </div></>
//   )
// }

// export async function getServerSideProps(context) {
//   // Fetch data from external API

//   const res = await fetch(`${process.env.domain}/api/allcasestudies`)
//   const casestudyDat = await res.json()
//   console.log(casestudyDat);
//   // Pass data to the page via props
//   return { props: { casestudyDat } }
// }


// export default index