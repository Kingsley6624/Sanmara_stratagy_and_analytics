import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Approach from '../components/Approach'
import Services from '../components/Services'
import PlatformsSection from '@/components/Platform'
import SuccessStory from '@/components/SuccessStory'
import StatsSection from '@/components/StatsSection'

const HomePage = () => {

  return (
<main className='bg-[#F5E9D3] min-h-screen'>
  <HeroSection />
  <About />
  <StatsSection /> 
  {/* <Approach /> */}
  <Services />
  <SuccessStory />
  <PlatformsSection />
</main>
  )
}

export default HomePage
 