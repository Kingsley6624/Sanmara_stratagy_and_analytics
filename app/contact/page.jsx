import React from 'react'
import ContactForm from '../../components/ContactForm'

const ContactPage = () => {
  return (
    <section className="py-20 bg-gray-50 mt-[3.1rem]">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left inter">
        <h2 className="text-3xl font-bold text-[#1E2A38] mb-4">Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
           We'd love to hear from you. Fill out the form and we'll get back to you shortly.
        </p>
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactPage