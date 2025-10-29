"use client";
import { motion } from "framer-motion";

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

const ServicesCard = ({ icon, title, description, index, isLast }) => {
  return (
    <motion.div
      key={index}
      className={`bg-gray-50 p-8 rounded-lg shadow-sm ${
        isLast ? "md:col-span-3 md:justify-self-center w-full md:w-2/3 lg:w-1/2" : ""
      }`}
      variants={getVariant(index)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
     <div className="rounded-full p-3 w-fit bg-white shadow-md mx-auto mb-4">
                  <img
                    className="h-16"
                    src={icon}
                    alt={title}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServicesCard;
