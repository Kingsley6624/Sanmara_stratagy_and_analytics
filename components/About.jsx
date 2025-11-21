import PageHeader from "./pageHeader";

const About = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left inter">

        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-center">
          Who We Are
        </h2>
        <p className="text-gray-700 leading-relaxed  text-sm md:text-base">
          We combine business expertise, advanced analytics, and risk management experience to help organisations navigate uncertainty, improve decision making, and sustain competitive advantage.
        </p>
      </div>
    </section>
  );
};

export default About;
