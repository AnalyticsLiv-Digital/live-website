import React from 'react'
import Marquee from "react-fast-marquee";

const AnalyticsLiv = () => {
  const Trusteddata = {
    brand: [
      { logo: "/ThoughtSpot_logo.png", alt: "ThoughtSpot" },
      { logo: "/Brizo_logo.png", alt: "Brizo" },
      { logo: "/bluecrew.png", alt: "BlueCrew" },
      { logo: "/edanz_logo.png", alt: "Edanz" },
      { logo: "/shoebacca.png", alt: "Shoebacca" },
      { logo: "/wholesalesockdeals.png", alt: "WholesaleSockDeals" }
    ]
  };

  return (
    <section>
      <div className='bg-dvbackgrnd py-10 border border-solid border-blue-300 border-opacity-20'>
        <h2 className='text-center font-semibold text-[32px] text-[#000] leading-normal'>Trusted by 25+ Hyper-Growth & Satisfied Business</h2>
        <div className='brandsimages flex space-x-8 justify-center py-4 px-4'>
          <div className='w-[90%] m-auto'>
            <Marquee gradient={false} pauseOnHover="true">
              <div className='flex space-x-8 justify-center py-4 px-4 mt-[10px]'>
                {Trusteddata.brand.map((brand, index) => (
                  <div key={index}>
                    <img src={brand.logo} alt={brand.alt} className='h-[50px] mx-5' />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnalyticsLiv