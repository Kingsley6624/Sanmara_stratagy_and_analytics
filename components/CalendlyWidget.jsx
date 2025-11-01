"use client";
import Script from "next/script";
import { useEffect } from "react";

export default function CalendlyBadge() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/chinedukingsley3030/30min?month=2025-11",
          text: "Schedule time with me",
          color: "#0069ff",
          textColor: "#ffffff",
          branding: true,
        });
      }
    }, 1000); // wait 1s to ensure Calendly script loads

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
