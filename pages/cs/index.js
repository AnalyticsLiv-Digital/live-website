'use client'
import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import CasestudySlider from '../../components/CasestudySlider';
import CaseStudyBlock from '../../components/CaseStudyBlock';
import Link from 'next/link';

const CasestudyMain = ({casestudyDat}) => {
  const [casestudydata, setCasestudyData] = useState(casestudyDat.casestudy);

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
                  <img src={casestudydata[0].coverimage} alt="" className=''/>
                </div>
              </div>
              <div className='lg:w-[60%] w-full'>
                <div className=''>
                  <h3 className='text-[22px] text-[#ffffff] font-semibold text-left mb-5 font-gilroy'>{casestudydata[0].title}</h3>
                  <p className='align-middle flex items-center text-left text-[17px] mb-5 font-gilroy2 font-medium text-[#ffffff]'>{casestudydata[0].description}</p>
                  <div><Link href={`/case-studies/${casestudydata[0].slug}`}>
                    <div className='flex w-[150px] group text-center justify-center gap-4 items-center p-3 font-gilroy2 border border-solid hover:border-black cursor-pointer rounded-[10px] text-[15px] font-medium'>
                      <button className='font-medium text-[#ffffff] group-hover:text-black'>View</button>
                      <span className='text-[#ffffff] group-hover:text-black'><FaLongArrowAltRight /></span>
                    </div></Link>
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
              
            {casestudydata && casestudydata.map((casest,key) => (
            <CasestudySlider key={key} casestudy={casest}/>
          ))}


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

                {casestudydata && casestudydata.map((casest,key) => (
            <CaseStudyBlock key={key} casestudy={casest}/>
          ))}
                

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
