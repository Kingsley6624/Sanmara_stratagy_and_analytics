import React from "react";

const whyChoose = [
  {
    title: "Analytical Precision",
    desc: "We transform complex data into clear strategic direction — turning information into intelligent business action.",
  },
  {
    title: "Fraud Expertise",
    desc: "Our deep background in fraud analytics helps safeguard your organization’s integrity, trust, and financial health.",
  },
  {
    title: "Strategic Impact",
    desc: "Every solution we deliver is built to move the needle — measurable results, sustainable growth, lasting impact.",
  },
];

const WhyChoseUs = () => {
  return (
    <section className="py-24 px-6 bg-linear-to-br from-blue-900 to-indigo-800 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose Sanmara
        </h2>
        <p className="text-blue-100 mb-12">
          Insight. Integrity. Impact. — the principles that define our work.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {whyChoose.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-blue-100 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoseUs;
