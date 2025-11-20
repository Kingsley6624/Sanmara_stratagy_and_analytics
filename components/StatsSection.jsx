import React from "react";
import StatCounter from "./StatCounter";

const StatsSection = () => (
  <section className="bg-gray-50 py-12 sm:py-16">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <StatCounter end={98} suffix="%" label="Customer Satisfaction" />
      <StatCounter end={70} suffix="+" label="Successful Projects" />
      <StatCounter end={2} label="Years of Experience" />
    </div>
  </section>
);

export default StatsSection;
