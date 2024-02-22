import Blogs from '../components/home/Blog'
import Casestudies from '../components/home/Casestudies'
import Heighlights from '../components/home/Heighlights'
import Home from '../components/home/Home'
import Marketing from '../components/home/Marketing'
import PowerUp from '../components/home/PowerUp'
import ServicesDo from '../components/home/ServicesDo'
import ServicesOffer from '../components/home/ServicesOffer'
import Embed from '../components/home/Embed'

import React from 'react'
import Testimonial from '../components/home/Testimonial'

const page = () => {
  return (
    <>
     <Home/>
     <Embed/>
     <Heighlights/>
     <Marketing/>
     <ServicesDo/>
     <ServicesOffer/>
     <PowerUp/>
     <Testimonial/>
     <Casestudies/>
     <Blogs/>
    </>
  )
}

export default page