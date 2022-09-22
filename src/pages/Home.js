import React from 'react'
import Customer from '../components/Customer'
import Hero from '../components/Hero'
import Refer from '../components/Level'
import Promo from '../components/Promo'
import Works from '../components/Works'
import Footer from '../components/Footer'
import HomePagePro from '../components/Foots'
const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
          <Hero/>
          <Refer/>
          <Promo/>
          <Customer/>
          <Works/>
          <Footer/>
          {/* <HomePagePro/> */}
          
      </div>
    </>
  )
}

export default Home