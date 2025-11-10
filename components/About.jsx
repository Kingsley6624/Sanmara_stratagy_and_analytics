import PageHeader from "./pageHeader";

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left inter">

        <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38] mb-4 text-center">
          Who We Are
        </h2>
        <p className="text-gray-700 leading-relaxed ">
          Sanmara Strategy and Analytics is an international consulting firm
          committed to empowering organizations with data driven strategies and
          actionable intelligence. We combine business expertise, advanced
          analytics, and fraud risk management experience to help clients
          navigate uncertainty, improve decision-making, and sustain competitive
          advantage.
        </p>
      </div>
    </section>
  );
};

export default About;
