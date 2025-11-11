import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-linear-to-br from-slate-900 via-blue-900 to-indigo-800 text-white flex flex-col-reverse md:flex-row pt-20 md:pt-32 relative z-10 gap-10 pb-10 md:pb-20">
      <div className="flex-1 flex flex-col justify-center items-center text-center md:text-start md:items-start md:pl-4 px-4 md:px-0">
        <h1 className=" text-3xl md:text-4xl font-bold  md:text-left mt-8 md:mt-0">
          Accelerate Your Business Growth Through Research And Data
          Driven Strategies.
        </h1>
        <p className=" md:text-left mt-4">
          We specialize in business research, financial strategy, fraud analytics, and data intelligence helping organizations turn complex information into actionable insights that drive growth, reduce risk, and improve performance.

        </p>
        <div className="flex flex-wrap md:flex-row  md:justify-start  mt-6  mb-8 gap-4">
          <Link href={"/services"} className="bg-gray-600 text-white px-3  md:px-6 py-2 rounded-full hover:bg-gray-700 transition duration-300 w-fit text-nowrap">
            Learn More
          </Link>
          <Link href={"https://calendly.com/chinedukingsley3030/30min"} className="bg-blue-600 text-white px-3 md:px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 w-fit  text-nowrap">
            Book A Consultation
          </Link>
        </div>

        
      </div>
      <div className="flex-1 relative w-full h-[400px] overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          className="flex-1 relative w-full h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden object-cover md:rounded-l-2xl"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
