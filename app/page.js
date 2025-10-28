import React from 'react'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Approach from './components/Approach'
import Services from './components/Services'

const HomePage = () => {
  return (
<main className='bg-[#F5E9D3] mt-[3.1rem] md:mt-24 min-h-screen'>
  <HeroSection />
  <About />
  <Approach />
  <Services />
</main>
  )
}

export default HomePage
 