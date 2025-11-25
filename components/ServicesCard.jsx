"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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

const ServicesCard = ({ icon, title, desc, index, href }) => {
  return (
    <Link href={href || "#"} target="_blank" rel="noopener noreferrer">
      <motion.div
        key={index}
        className="w-full max-w-full bg-[#EFF6FF] p-4 rounded-lg shadow-sm 
      flex flex-col items-center md:items-start text-center md:text-left overflow-hidden"
        variants={getVariant(index)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="rounded-full p-2 w-fit bg-white shadow-md mb-4 sm:mb-6 mx-auto md:mx-0">
          <img className="h-12 w-12 object-contain" src={icon} alt={title} />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base">{desc}</p>
      </motion.div>
    </Link>
  );
};

export default ServicesCard;
