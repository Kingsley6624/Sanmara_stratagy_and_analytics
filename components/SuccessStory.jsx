"use client";
import React from "react";
import Link from "next/link";

const pillars = [
  {
    logo: "/customers/weafriq.png",
    title: "WeAfriq",
    description:
      "Delivered tailored business intelligence dashboards that empowered WeAfriq to optimize market strategies and improve operational efficiency.",
    href: "https://www.weafriq.net/",
  },
  {
    logo: "/customers/weafriq.png",
    title: "Justin and Bros",
    description:
      "Built a predictive analytics system to enhance fraud detection and reduce financial risk across their digital finance operations.",
    href: "/services/consulting",
  },
  {
    logo: "/customers/weafriq.png",
    title: "Jufrem Investment Limited",
    description:
      "Designed a smart data and reporting system that empowered Jufrem to make informed decisions and boost efficiency in the auto parts industry.",
    href: "/services/market-intelligence",
  },
];

const SuccessStory = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38] mb-4">
          Our Success Story
        </h2>
        <p className="text-gray-700 mb-8 text-lg">
          At SanMara, our success is defined by the impact we create for our
          clients. Each partnership tells a story of transformation, growth, and
          innovation driven by data and insight.
        </p>

        {/* Centered Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto place-items-center">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
            >
              {/* Logo */}
              {pillar.logo && (
                <div className=" mb-5 flex items-center justify-center overflow-hidden">
                  <img
                    src={pillar.logo}
                    alt={pillar.title}
                    className=" object-contain"
                  />
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-[#1E2A38]">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base mb-4">
                {pillar.description}
              </p>

              {/* Learn More Link */}
              <Link
                href={pillar.href}
                className="text-blue-600 font-medium hover:underline hover:text-blue-800 transition-colors"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
