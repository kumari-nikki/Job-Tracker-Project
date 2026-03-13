import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './Herosection'
import Categorycarousel from './Categorycarousel'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
  useGetAllJobs()

  const { user } = useSelector(store => store.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (user?.role === 'Recruiter') {
      navigate("/admin/companies")
    }
  }, [user, navigate])

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Categorycarousel />
      <LatestJobs />
      <Footer />
    </div>
  )
}

export default Home