import { getServicesData } from "../lib/getservicesData";
import ServicesCard from "./ServicesCard";

const Services = async () => {
  const services = await getServicesData();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38] mb-6">
          Our Core Services
        </h2>
        <p className="text-gray-700 mb-8 text-lg">
          At Sanmara, our services are built around four strategic pillars
          designed to help you thrive in a data driven world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <ServicesCard
              key={i}
              {...service}
              index={i}
              isLast={i === services.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
