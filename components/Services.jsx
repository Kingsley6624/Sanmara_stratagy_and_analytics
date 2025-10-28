"use client";
// import { getServicesData } from "../lib/getservicesData";
import { motion } from "framer-motion";
import services from "../data/services.json";

const getVariant = (index) => {
  const direction = index % 2 === 0 ? -50 : 50;
  return {
    hidden: { opacity: 0, x: direction },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
};

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
          {services.map((service, i) => (
            <motion.div
              key={i}
              className={`bg-gray-50 p-8 rounded-lg shadow-sm ${
                i === services.length - 1
                  ? "md:col-span-3 md:justify-self-center w-full md:w-2/3 lg:w-1/2"
                  : ""
              }`}
              variants={getVariant(i)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              
                <div className="rounded-full p-3 w-fit bg-white shadow-md mx-auto mb-4">
                  <img
                    className="h-16"
                    src={service.icon}
                    alt={service.title}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
