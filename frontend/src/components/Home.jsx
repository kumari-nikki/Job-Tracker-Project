
import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './Herosection'
import Categorycarousel from './Categorycarousel'
import LatestJobs from './LatestJobs'
function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
    <Categorycarousel/>
    <LatestJobs/>

    </div>
  )
}

export default Home
