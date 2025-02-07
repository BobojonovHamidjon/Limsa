import React from 'react'
import { Outlet } from 'react-router-dom'
import Section from '../Section/Section'
import Services from '../Services/Services'
import Work from '../Work/Work'
import FaqSection from '../FaqSelection/FaqSection'
import Prices from '../Prices/Prices'

function Home() {
  return (
   <>
   <Outlet/>

   <Section/>
   <FaqSection/>
   <Work/>
   <Services/>
   <Prices/>
     
   </>
  )
}

export default Home