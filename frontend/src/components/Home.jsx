
import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './Herosection'
import Categorycarousel from './Categorycarousel'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import Jobs from './Jobs'
function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Categorycarousel />
      <LatestJobs />
      <Footer />
      <Jobs/>
    </div>
  )
}

export default Home
