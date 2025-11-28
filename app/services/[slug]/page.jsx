import PageHeader from "@/components/pageHeader";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHeader
        title="Business & Market Research"
        subtitle="Evidence-Driven Insights for Smarter, Strategic Decisions."
      />
      <main>
        <section className="py-20 px-6 max-w-5xl mx-auto text-center">
          <p className="mt-6 text-gray-700 italic">
            "In today’s competitive and rapidly changing market, guessing is
            costly. Businesses that win are those that understand their
            environment, their customers, and their competitors. At Sanmara
            Strategy & Analytics, we help you make confident, data backed
            decisions through comprehensive, evidence based research designed
            for growth and competitive advantage."
          </p>
        </section>

        {/* WHAT WE DO */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="mb-6 space-y-2">
            <h2 className="text-2xl font-bold ">What We Do</h2>
            <p>
              Our Business & Market Research service delivers deep insights that
              help you:
            </p>
          </div>

          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-semibold">Understand Your Market</h3>
              <p className="mt-2">
                We analyze your industry trends, market size, growth
                projections, and external forces that shape your business
                environment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Identify Your Real Competitors
              </h3>
              <p className="mt-2">
                We examine direct and indirect competitors pricing, positioning,
                strengths, weaknesses, and opportunities for you to
                differentiate.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Discover What Your Customers Want
              </h3>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Customer needs</li>
                <li>Spending behavior</li>
                <li>Pain points</li>
                <li>Buying motivations</li>
                <li>Customer satisfaction & loyalty drivers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Validate New Business Ideas
              </h3>
              <p className="mt-2">
                Thinking of launching a new product or entering a new market? We
                conduct feasibility and market-entry studies to reduce risks and
                guide smart decisions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Provide Clear, Actionable Roadmaps
              </h3>
              <p className="mt-2">
                Every research engagement ends with strategic recommendations
                that are practical and immediately actionable.
              </p>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">Our Research Capabilities</h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Market Trend Analysis",
              "Competitor Benchmarking",
              "Customer Surveys & Feedback Analysis",
              "Product/Service Feasibility Studies",
              "SWOT & Market Gap Analysis",
              "Industry Reports & Desk Research",
              "Data Modeling & Forecasting",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-blue-100 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-12 bg-gray-50 rounded-xl">
          <h2 className="text-2xl font-bold">Why Businesses Choose Sanmara</h2>
          <p className="mt-2 text-gray-700">
            We don’t deliver reports we deliver strategy.
          </p>

          <ul className="list-disc ml-5 mt-4 grid md:grid-cols-2 gap-2">
            <li>Reduce risk</li>
            <li>Improve decision-making</li>
            <li>Increase revenue</li>
            <li>Enter markets with confidence</li>
            <li>Understand your customers better</li>
            <li>Beat larger competitors with data-driven precision</li>
          </ul>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">Who This Service Is For</h2>

          <ul className="grid md:grid-cols-2 gap-3 list-disc ml-5">
            <li>Small & medium businesses seeking growth</li>
            <li>Startups validating new ideas</li>
            <li>Entrepreneurs planning new ventures</li>
            <li>Consulting firms needing research support</li>
            <li>Organizations entering new markets</li>
          </ul>
        </section>

        {/* DELIVERABLES */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">Sample Deliverables</h2>

          <ul className="grid md:grid-cols-2 gap-3 list-disc ml-5">
            <li>Full Research Report (PDF / Dashboard)</li>
            <li>Competitor Insights Map</li>
            <li>Target Customer Profiles</li>
            <li>Market Opportunity Summary</li>
            <li>Pricing & Positioning Recommendations</li>
            <li>Actionable Next-Step Strategy</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center py-16 bg-linear-to-r from-indigo-900 to-blue-700 text-white mt-12">
          <h2 className="text-3xl font-bold">
            Ready to Make Smarter Business Decisions?
          </h2>
          <p className="mt-2 text-lg">
            Let’s help you turn insights into measurable growth.
          </p>

          <div className="mt-6 flex flex-col items-center space-y-3">
            <a
              href="#"
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow"
            >
              Book a Consultation
            </a>
            <a href="#" className="underline text-blue-100">
              Request a Custom Research Quote
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default page;
