import React from "react";

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800 font-medium">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-blue-400 text-white border border-gray-200 rounded-2xl py-6 px-6 hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
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
  );
};

export default IndustriesWeServe;
