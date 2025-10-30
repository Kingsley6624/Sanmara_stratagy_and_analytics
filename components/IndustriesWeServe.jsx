import React from 'react'

const industries = [
    "Financial Services & Fintech",
    "E-commerce & Retail",
    "Technology & Startups",
    "Telecommunications",
    "Healthcare & Insurance",
    "Government & Nonprofit",
  ];

const IndustriesWeServe = () => {
  return (
     <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
            Industries We Serve
          </h2>
          <p className="text-gray-700 mb-10 max-w-3xl mx-auto">
            Sanmara’s expertise spans multiple sectors, giving us the versatility
            to adapt to any business landscape. Our key industries include:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-800 font-medium">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl py-6 hover:shadow-lg transition"
              >
                {ind}
              </div>
            ))}
          </div>
          <p className="mt-10 text-gray-600 max-w-3xl mx-auto">
            Each industry faces unique challenges — our mission is to decode them
            through analytics and deliver tailored strategies that work.
          </p>
        </div>
      </section>
  )
}

export default IndustriesWeServe