import Advertising from '../Components/dv360/Advertising'
import AnalyticsLiv from '../Components/dv360/AnalyticsLiv'
import Businessfacing from '../Components/dv360/Businessfacing'
import Buypremium from '../Components/dv360/Buypremium'
import Casestudy from '../Components/dv360/Casestudy'
import Clients from '../Components/dv360/Clients'
import Contact from '../Components/dv360/Contact'
import Discuss from '../Components/dv360/Discuss'
import Globalreach from '../Components/dv360/Globalreach'
import Home from '../Components/dv360/Home'
import Leaders from '../Components/dv360/Leaders'
import Services from '../Components/dv360/Services'
import Targeting from '../Components/dv360/Targeting'

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
