import Advertising from '../components/dv360/Advertising'
import AnalyticsLiv from '../components/dv360/AnalyticsLiv'
import Businessfacing from '../components/dv360/Businessfacing'
import Buypremium from '../components/dv360/Buypremium'
import Casestudy from '../components/dv360/Casestudy'
import Clients from '../components/dv360/Clients'
import Contact from '../components/dv360/Contact'
import Discuss from '../components/dv360/Discuss'
import Globalreach from '../components/dv360/Globalreach'
import Home from '../components/dv360/Home'
import Leaders from '../components/dv360/Leaders'
import Services from '../components/dv360/Services'
import Targeting from '../components/dv360/Targeting'

const page = () => {
  return (
    <>
     <Home/>
     <AnalyticsLiv/>
     <Clients/>
     <Advertising/>
     <Services/>
     <Globalreach/>
     <Discuss/>
     <Buypremium/>
     <Targeting/>
     <Businessfacing/>
     <Leaders/>
     <Casestudy/>
     <Contact/>
    </>
  )
}

export default page
