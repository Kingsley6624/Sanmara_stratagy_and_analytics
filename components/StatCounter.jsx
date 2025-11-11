"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const StatCounter = ({ end, suffix, label }) => {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.unobserve(ref.current); // stop observing after triggering once
        }
      },
      {
        threshold: 0.3, // 30% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700">
        {startCount ? <CountUp end={end} duration={2.5} separator="," /> : 0}
        {suffix && <span>{suffix}</span>}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base mt-2">{label}</p>
    </div>
  );
};

export default StatCounter;
