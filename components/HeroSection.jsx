import Link from "next/link";
import React from "react";
import HeroImages from "./HeroImages";
import { FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="bg-linear-to-br from-slate-900 via-blue-900 to-indigo-800 text-white flex flex-col md:flex-row pt-10 md:pt-20 relative z-10 md:gap-10 ">
      <div className="flex-1 flex flex-col justify-center items-center text-center md:text-start md:items-start md:pl-4 px-4 md:px-0">
        <h1 className=" text-2xl md:text-4xl font-bold  md:text-left mt-8 md:mt-0">
          Accelerate Your Business Growth Through Research And <span className="text-[#f6c23e]">Data
          Driven Insights.</span> 
        </h1>
        <p className=" md:text-left mt-4 text-start">
          We specialize in business research, financial strategy, fraud analytics, and data intelligence helping organizations turn complex information into actionable insights that drive growth, reduce risk, and improve performance.

        </p>
        <div className="flex flex-row flex-wrap md:self-center  md:justify-start  mt-6  mb-8 gap-4">
          <Link href={"https://calendly.com/chinedukingsley3030/30min"} className="flex items-center gap-2 bg-blue-600 text-white px-3 md:px-6 py-2 rounded-sm hover:bg-blue-700 transition duration-300 w-fit  text-nowrap">
            Book Free Consulting
            <FaArrowRight />
          </Link>
          <Link href={"/services"} className="flex items-center gap-2 bg-gray-600 text-white px-3  md:px-6 py-2 rounded hover:bg-gray-700 transition duration-300 w-fit text-nowrap">
            Our Services
            <FaArrowRight />
          </Link>
        </div>

        
      </div>
      <div className="flex-1 relative w-full h-[400px] overflow-hidden z-0">
        <HeroImages />
        
      </div>
    </section>
  );
};

export default HeroSection;
