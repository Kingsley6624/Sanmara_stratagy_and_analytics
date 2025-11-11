"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const HeroSection = () => {
  const slides = [
    "/hero_images/person-using-tablet.jpg",
    "/hero_images/representation-user-experience-interface.jpg",
    "/hero_images/company-employees-discussing.jpg",
    "/hero_images/stacks-coins-arranged-bar-graph.jpg",
    "/hero_images/20546.jpg",
    "/hero_images/5899821.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const length = slides.length;
  const slideRef = useRef(null);

  // Duplicate first slide at the end for smooth looping
  const extendedSlides = [...slides, slides[0]];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Handle jump back to first slide after reaching duplicate
  useEffect(() => {
    if (current === extendedSlides.length - 1) {
      // wait for transition to finish
      const timeout = setTimeout(() => {
        setTransitionEnabled(false); // remove transition
        setCurrent(0); // jump back to real first slide
      }, 1000); // match duration-1000 of Tailwind
      return () => clearTimeout(timeout);
    } else {
      setTransitionEnabled(true); // enable transition normally
    }
  }, [current, extendedSlides.length]);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <div
        className={`flex h-full ${transitionEnabled ? "transition-transform duration-1000 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${current * 100}%)` }}
        ref={slideRef}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="min-w-full relative h-full">
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
