import React from "react";

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#1E2A38] mb-8">
          Our Core Services
        </h2>
        <p className="text-gray-700 mb-4">
          At SanMara, our services are built around four strategic pillars
          designed to help you thrive in a data-driven world:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="rounded-full p-3 w-fit bg-white shadow-md mx-auto mb-4">
              <img
                className="h-16"
                src="/case-study.png"
                alt="Brokerage Services"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Business & Market Research
            </h3>
            <p className="text-gray-600">
              We provide deep, evidence-based insights into your markets,
              competitors, and customers. Our research helps organizations make
              confident strategic moves, identify new opportunities, and
              anticipate industry trends.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="rounded-full p-3 w-fit bg-white shadow-md mx-auto mb-4">
              <img
                className="h-16"
                src="/broker.png"
                alt="Brokerage Services"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Financial & Strategic Consulting
            </h3>
            <p className="text-gray-600">
              We partner with businesses to align financial performance with
              long-term strategy. From forecasting and cost analysis to capital
              strategy and business transformation, we ensure that every
              decision adds value.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="rounded-full p-3 w-fit bg-white shadow-md mx-auto mb-4">
              <img
                className="h-16"
                src="/risk-management.png"
                alt="Risk Management"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Fraud Analytics & Risk Management
            </h3>
            <p className="text-gray-600">
              Fraud erodes trust and profitability we help you stay ahead of it.
              Our data-driven fraud analytics framework identifies suspicious
              patterns, enhances transaction monitoring, and strengthens fraud
              defense mechanisms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
