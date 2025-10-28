import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white flex flex-col-reverse md:flex-row py-6">
      <div className="flex-1 flex flex-col justify-center items-center md:items-start px-4 md:px-0">
        <h1 className="text-4xl font-bold text-center md:text-left mt-8 md:mt-0 md:ml-16">
          Accelerate Your Business Growth Through Research And Data
          Driven Strategies.
        </h1>
        <p className="text-center md:text-left mt-4 md:ml-16 md:mr-16">
          We specialize in business research, financial strategy, fraud analytics, and data intelligence helping organizations turn complex information into actionable insights that drive growth, reduce risk, and improve performance.

        </p>
        <div className="flex justify-center md:justify-start mt-6 md:ml-16 mb-8">
          <Link href={"/services"} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Learn More
          </Link>
          <Link href={"/contact"} className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300 ml-4">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex-1 relative w-full h-[400px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          className="flex-1 relative w-full h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
