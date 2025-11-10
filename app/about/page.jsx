import React from 'react'
import PageHeader from '@/components/pageHeader'

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gray-50">
      <PageHeader 
        title="About Us" 
        subtitle="Learn more about our mission and values" 
      />
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left inter">
        <h2 className="text-3xl font-bold text-[#1E2A38] mb-4">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed">
          SanMara Strategy and Analytics is an international consulting firm
          committed to empowering organizations with data-driven strategies and
          actionable intelligence. We combine business expertise, advanced
          analytics, and fraud risk management experience to help clients
          navigate uncertainty, improve decision-making, and sustain competitive
          advantage.
        </p>
      </div>
    </section>
  )
}

export default AboutPage