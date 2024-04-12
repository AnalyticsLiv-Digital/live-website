'use client'
import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const CasestudyMain = () => {

  function handleSubmit(event) {
    event.preventDefault();

    const searchValue = event.target.elements.s.value;

    console.log("Search value:", searchValue);
  }

  // // // // // // // // // //
  const [isCheckedAFO, setIsCheckedAFO] = useState(true);
  const [isCheckedMedia, setIsCheckedMedia] = useState(true);
  const [isCheckedAutomation, setIsCheckedAutomation] = useState(true);
  const [isCheckedCRO, setIsCheckedCRO] = useState(true);
  const [isCheckedGCP, setIsCheckedGCP] = useState(true);
  const [isCheckedGA4, setIsCheckedGA4] = useState(true);
  const [isCheckedLeadScoring, setIsCheckedLeadScoring] = useState(true);
  const [sortBy, setSortBy] = useState('Newest');

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case 'AFO':
        setIsCheckedAFO(checked);
        break;
      case 'Media':
        setIsCheckedMedia(checked);
        break;
      case 'Automation':
        setIsCheckedAutomation(checked);
        break;
      case 'CRO':
        setIsCheckedCRO(checked);
        break;
      case 'GCP':
        setIsCheckedGCP(checked);
        break;
      case 'GA4':
        setIsCheckedGA4(checked);
        break;
      case 'LeadScoring':
        setIsCheckedLeadScoring(checked);
        break;
      default:
        break;
    }
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const allChecked = isCheckedAFO && isCheckedMedia && isCheckedAutomation && isCheckedCRO && isCheckedGCP && isCheckedGA4 && isCheckedLeadScoring;


  var settings = {
    dots: null,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 988,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  };
  return (
    <>
    {/* // // // // // Section 1 // // // // // */}
      <section className='castdyMain'>
        <div className='relative px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
          <div className='relative z-20'>
            <h1 className='text-[30px] font-gilroy font-semibold text-[#30486a] py-10'>CASE STUDY</h1>
          </div>
          <div className='xl:w-[70%] w-[90%] m-auto'>
            <div className='flex lg:flex-nowrap flex-wrap lg:gap-[70px] gap-10'>
              <div className='lg:w-[40%] w-full'>
                <div className='as'>
                  <img src="/castdyinner1.png" alt="" className=''/>
                </div>
              </div>
              <div className='lg:w-[60%] w-full'>
                <div className=''>
                  <h3 className='text-[22px] text-[#ffffff] font-semibold text-left mb-5 font-gilroy'>Optimizing Email Marketing with Custom Data Pipeline</h3>
                  <p className='align-middle flex items-center text-left text-[17px] mb-5 font-gilroy2 font-medium text-[#ffffff]'>Our client, a leading e-commerce brand, was struggling to keep track of their email campaign performance on Klaviyo, their email marketing platform. Despite having a wealth of data, they were unable to efficiently analyse and visualise their email campaign data to make informed business decisions.</p>
                  <div>
                    <div className='flex w-[150px] group text-center justify-center gap-4 items-center p-3 font-gilroy2 border border-solid hover:border-black cursor-pointer rounded-[10px] text-[15px] font-medium'>
                      <button className='font-medium text-[#ffffff] group-hover:text-black'>View</button>
                      <span className='text-[#ffffff] group-hover:text-black'><FaLongArrowAltRight /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // // // // // Section 2 // // // // // */}
      <section className='castdyMainslidr'>
        <div className='relative px-4 md:px-20 pt-8 md:pt-11 pb-8 md:pb-16'>
          <div className='w-[97%] m-auto'>
            <Slider {...settings}>
              <div>
                <div aria-hidden="true" className="casestudy m-auto text-center flex justify-center w-[90%]">
                  <div className='first group w-[350px] 2xl:h-[500px] lg:h-[487px] h-[500px]  rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-testishadow p-[25px] text-center relative'>
                    <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                    <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                      <div>
                        <img src="/castdyinner2.png" alt="" className='w-auto h-auto' />
                      </div>
                      <div className=''>
                        <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Skyrocket Your Campaign's CTR with a 95% Surge in 14 Days!</h3>
                        <div className='flex items-center justify-center absolute bottom-[25px]'>
                          <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                            <button className='font-medium group-hover:text-black'>View</button>
                            <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div aria-hidden="true" className="casestudy m-auto text-center flex justify-center w-[90%]">
                  <div className='first group w-[350px] 2xl:h-[500px] lg:h-[487px] h-[500px]  rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-testishadow p-[25px] text-center relative'>
                    <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                    <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                      <div>
                        <img src="/castdyinner3.png" alt="" className='w-auto h-auto' />
                      </div>
                      <div className=''>
                        <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Driving the Campaigns in DV360 to Post Click Attribution Success with a 36% reduction in CPI</h3>
                        <div className='flex items-center justify-center absolute bottom-[25px]'>
                          <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                            <button className='font-medium group-hover:text-black'>View</button>
                            <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div aria-hidden="true" className="casestudy m-auto text-center flex justify-center w-[90%]">
                  <div className='first group w-[350px] 2xl:h-[500px] lg:h-[487px] h-[500px]  rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-testishadow p-[25px] text-center relative'>
                    <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                    <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                      <div>
                        <img src="/castdyinner4.png" alt="" className='w-auto h-auto' />
                      </div>
                      <div className=''>
                        <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>From Inefficiency to Precision: Learn How AnalyticsLiv Achieved a 78% CPC Reduction for a News Publisher Giant</h3>
                        <div className='flex items-center justify-center absolute bottom-[25px]'>
                          <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                            <button className='font-medium group-hover:text-black'>View</button>
                            <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div aria-hidden="true" className="casestudy m-auto text-center flex justify-center w-[90%]">
                  <div className='first group w-[350px] 2xl:h-[500px] lg:h-[487px] h-[500px]  rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-testishadow p-[25px] text-center relative'>
                    <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                    <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                      <div>
                        <img src="/castdyinner5.png" alt="" className='w-auto h-auto' />
                      </div>
                      <div className=''>
                        <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>55% Increase in Avg. Session Duration</h3>
                        <div className='flex items-center justify-center absolute bottom-[25px]'>
                          <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                            <button className='font-medium group-hover:text-black'>View</button>
                            <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div aria-hidden="true" className="casestudy m-auto text-center flex justify-center w-[90%]">
                  <div className='first group w-[350px] 2xl:h-[500px] lg:h-[487px] h-[500px]  rounded border border-solid border-[#DBDBDB] hover:border-[#979797] hover:shadow-testishadow p-[25px] text-center relative'>
                    <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                    <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                      <div>
                        <img src="/castdyinner6.png" alt="" className='w-auto h-auto' />
                      </div>
                      <div className=''>
                        <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Impact of Data First Approach in Marketing - ROAS Improvement from 2.4x to 7.8x</h3>
                        <div className='flex items-center justify-center absolute bottom-[25px]'>
                          <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                            <button className='font-medium group-hover:text-black'>View</button>
                            <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* // // // // // Section 3 // // // // // */}
      <section className='castdyMainfilter bg-cover bg-no-repeat'>
        <div className='relative px-4 md:px-20 pt-4 md:pt-4 pb-8 md:pb-4'>
          <div className='flex flex-wrap items-start justify-between'>
            <div className='lg:w-[30%] w-full flex lg:items-end items-center justify-center ml-auto'>
              <div className=''>
                <div className='text-end pb-8'>
                  <form onSubmit={handleSubmit} className='flex'>
                    <input name='s' type="search" placeholder='Search' className='bg-[#ffffff] w-[200px] rounded-[10px] border border-[#9ca3af] py-2 pl-9 focus:outline-none focus:caret-gray-400' />
                  </form>
                </div>
                <div className='allfilters ml-[10px]'>
                  <div>
                    <label htmlFor="AFO" className='relative inline-flex items-center cursor-pointer'>
                      <input
                        type="checkbox"
                        name='AFO'
                        id='AFO'
                        aria-label=''
                        className='invisible hidden float-left w-0 h-0'
                        checked={isCheckedAFO}
                        onChange={handleCheckboxChange}
                      />
                      <div className='text-[#30486a] flex items-center gap-2'>
                        <span className='opacity-[100] text-[15px] w-5 h-5 border border-solid border-[#000000] flex items-center justify-center'><FaCheck style={{ opacity: (allChecked || isCheckedAFO) ? 100 : 0 }} /></span>
                        <span className='font-gilroy2 font-medium'>AFO</span>
                      </div>
                    </label>
                  </div>
                  <div className='pt-2'>
                    <label htmlFor="Media" className='relative inline-flex items-center cursor-pointer'>
                      <input
                        type="checkbox"
                        name='Media'
                        id='Media'
                        aria-label=''
                        className='invisible hidden float-left w-0 h-0'
                        checked={isCheckedMedia}
                        onChange={handleCheckboxChange}
                      />
                      <div className='text-[#30486a] flex items-center gap-2'>
                        <span className='opacity-[100] text-[15px] w-5 h-5 border border-solid border-[#000000] flex items-center justify-center'><FaCheck style={{ opacity: (allChecked || isCheckedMedia) ? 100 : 0 }} /></span>
                        <span className='font-gilroy2 font-medium'>Media</span>
                      </div>
                    </label>
                  </div>
                  <div className='pt-2'>
                    <label htmlFor="Automation" className='relative inline-flex items-center cursor-pointer'>
                      <input
                        type="checkbox"
                        name='Automation'
                        id='Automation'
                        aria-label=''
                        className='invisible hidden float-left w-0 h-0'
                        checked={isCheckedAutomation}
                        onChange={handleCheckboxChange}
                      />
                      <div className='text-[#30486a] flex items-center gap-2'>
                        <span className='opacity-[100] text-[15px] w-5 h-5 border border-solid border-[#000000] flex items-center justify-center'><FaCheck style={{ opacity: (allChecked || isCheckedAutomation) ? 100 : 0 }} /></span>
                        <span className='font-gilroy2 font-medium'>Automation</span>
                      </div>
                    </label>
                  </div>
                  <div className='pt-2'>
                    <label htmlFor="GA4" className='relative inline-flex items-center cursor-pointer'>
                      <input
                        type="checkbox"
                        name='GA4'
                        id='GA4'
                        aria-label=''
                        className='invisible hidden float-left w-0 h-0'
                        checked={isCheckedGA4}
                        onChange={handleCheckboxChange}
                      />
                      <div className='text-[#30486a] flex items-center gap-2'>
                        <span className='opacity-[100] text-[15px] w-5 h-5 border border-solid border-[#000000] flex items-center justify-center'><FaCheck style={{ opacity: (allChecked || isCheckedGA4) ? 100 : 0 }} /></span>
                        <span className='font-gilroy2 font-medium'>GA4</span>
                      </div>
                    </label>
                  </div>
                  <div className='pt-2'>
                    <label htmlFor="CRO" className='relative inline-flex items-center cursor-pointer'>
                      <input
                        type="checkbox"
                        name='CRO'
                        id='CRO'
                        aria-label=''
                        className='invisible hidden float-left w-0 h-0'
                        checked={isCheckedCRO}
                        onChange={handleCheckboxChange}
                      />
                      <div className='text-[#30486a] flex items-center gap-2'>
                        <span className='opacity-[100] text-[15px] w-5 h-5 border border-solid border-[#000000] flex items-center justify-center'><FaCheck style={{ opacity: (allChecked || isCheckedCRO) ? 100 : 0 }} /></span>
                        <span className='font-gilroy2 font-medium'>CRO</span>
                      </div>
                    </label>
                  </div>
                  <div className='pt-2'>
                    <label htmlFor="GCP" className='relative inline-flex items-center cursor-pointer'>
                      <input
                        type="checkbox"
                        name='GCP'
                        id='GCP'
                        aria-label=''
                        className='invisible hidden float-left w-0 h-0'
                        checked={isCheckedGCP}
                        onChange={handleCheckboxChange}
                      />
                      <div className='text-[#30486a] flex items-center gap-2'>
                        <span className='opacity-[100] text-[15px] w-5 h-5 border border-solid border-[#000000] flex items-center justify-center'><FaCheck style={{ opacity: (allChecked || isCheckedGCP) ? 100 : 0 }} /></span>
                        <span className='font-gilroy2 font-medium'>Google Cloud Platform</span>
                      </div>
                    </label>
                  </div>
                  <div className='pt-2'>
                    <label htmlFor="leadScoring" className='relative inline-flex items-center cursor-pointer'>
                      <input
                        type="checkbox"
                        name='leadScoring'
                        id='leadScoring'
                        aria-label=''
                        className='invisible hidden float-left w-0 h-0'
                        checked={isCheckedLeadScoring}
                        onChange={handleCheckboxChange}
                      />
                      <div className='text-[#30486a] flex items-center gap-2'>
                        <span className='opacity-[100] text-[15px] w-5 h-5 border border-solid border-[#000000] flex items-center justify-center'><FaCheck style={{ opacity: (allChecked || isCheckedLeadScoring) ? 100 : 0 }} /></span>
                        <span className='font-gilroy2 font-medium'>Lead Scoring</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:w-[70%] lg:mt-0 mt-10 w-full'>
              <div className='flex items-center gap-4'>
                <div><h5 className='text-base font-gilroy2'>Short By:</h5></div>
                <select
                  name="sort-by"
                  id="sort-by"
                  value={sortBy}
                  onChange={handleSortChange}
                  className='bg-transparent text-base font-gilroy font-semibold'
                >
                  <option value="Newest">Newest</option>
                  <option value="Oldest">Oldest</option>
                </select>
              </div>
              <div className='allcasestdy flex items-center justify-center pt-6'>
                <div className='grid sm:grid-cols-2 gap-10'>
                  <div className='castdyfirst' style={{ display: ((sortBy === 'Newest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedAFO) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner1.png" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Optimizing Email Marketing with Custom Data Pipeline</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]' >
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='castdysecond' style={{ display: ((sortBy === 'Newest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedMedia) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner2.png" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Skyrocket Your Campaign's CTR with a 95% Surge in 14 Days!</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]' >
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='castdthird' style={{ display: ((sortBy === 'Oldest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedAFO) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner3.png" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Driving the Campaigns in DV360 to Post Click Attribution Success with a 36% reduction in CPI</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]' >
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='castdfourth' style={{ display: ((sortBy === 'Oldest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedMedia) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner4.png" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>From Inefficiency to Precision: Learn How AnalyticsLiv Achieved a 78% CPC Reduction for a News Publisher Giant</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]' >
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='castdfive' style={{ display: ((sortBy === 'Oldest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedMedia) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner5.png" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>55% Increase in Avg. Session Duration</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]' >
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='castdsixth' style={{ display: ((sortBy === 'Oldest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedMedia) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner6.png" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Impact of Data First Approach in Marketing - ROAS Improvement from 2.4x to 7.8x</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]' >
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='castdseven' style={{ display: ((sortBy === 'Oldest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedMedia) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner7.jpg" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Maximising Revenue and User Insights using Firebase In App Purchases for Mobile Apps</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]' >
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='castdeight' style={{ display: ((sortBy === 'Oldest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedMedia) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner8.png" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Universal Analytics (GA3) to GA4 Migration for a Website</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]' >
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='castdnine' style={{ display: ((sortBy === 'Oldest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedMedia) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner9.jpg" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>GA4 Enhanced Ecommerce Implementation Using GTM and Shopify Integration</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]' >
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='castdten' style={{ display: ((sortBy === 'Oldest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedMedia) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner10.png" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Impact of Creative Analysis in DV360 for Automotive Manufacturer Company</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]' >
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='castdeleven' style={{ display: ((sortBy === 'Oldest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedMedia) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner11.png" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>A strategic guide to scaling the Ad Spend without affecting the ROAS</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]' >
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='castdtwelth' style={{ display: ((sortBy === 'Oldest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedMedia) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner12.png" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Driving 41% more engagement with Google Search Ads</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]' >
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='castdthirteen' style={{ display: ((sortBy === 'Oldest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedMedia) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner13.png" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Elevate the brand reach with Discovery Campaigns 17% higher CTR compared to Pmax</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]' >
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='castdfourteen' style={{ display: ((sortBy === 'Oldest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedMedia) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner14.png" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>How shopify users benefitted from looker studio visualisation</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]' >
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='castdfifteen' style={{ display: ((sortBy === 'Oldest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedMedia) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner15.png" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Reforming the AD Inventory : DV360 unmatched capabilities yield</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]' >
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='castdsixteen' style={{ display: ((sortBy === 'Oldest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedMedia) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner16.jpg" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>How Seasonality and Data can come together to drive scale-up in Black Friday Sale</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]' >
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='castdseventeen' style={{ display: ((sortBy === 'Oldest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedMedia) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner17.jpg" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Looker Studio as One Stop for All Advertising Platform Performance</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]'>
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='castdeighteen' style={{ display: ((sortBy === 'Oldest' && (allChecked || isCheckedAFO || isCheckedMedia)) || sortBy === 'Oldest' || isCheckedMedia) ? 'block' : 'none' }}>
                    <div className='group xl:w-[360px] lg:w-[285px] w-[300px] xl:h-[490px] h-[460px] rounded border border-solid shadow-filtershadow p-[25px] text-center relative'>
                      <span className='text-[#34a353] text-xs font-bold py-1 px-3 absolute top-0 left-0'>CASE STUDY</span>
                      <a href="https://storage.googleapis.com/website-bucket-uploads/cs/mnedfr45893kjswl.pdf" target='_blank'>
                        <div>
                          <img src="/castdyinner18.png" alt="" className='w-[350px] h-auto' />
                        </div>
                        <div className=''>
                          <h3 className='text-bas text-slate-900 font-gilroy font-semibold leading-[1.3em] text-left pt-4'>Optimizing PMax Campaign For Scalability and Consistency</h3>
                          <div className='flex items-center justify-center absolute bottom-[25px]'>
                            <div className='flex w-[200px] m-auto items-center text-[#34a353] p-3 justify-center gap-[10px] border border-solid border-[#34a353] group-hover:border-black text-center border-homepagebtn cursor-pointer rounded-[10px] text-[13px] font-medium'>
                              <button className='font-medium group-hover:text-black'>View</button>
                              <span className='group-hover:text-black'><FaLongArrowAltRight /></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
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

export default CasestudyMain
