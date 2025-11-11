import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group">
      <div
        className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-xs sm:text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500 whitespace-nowrap 
        after:content-[''] after:absolute after:top-full after:right-4 after:border-8 after:border-transparent after:border-t-gray-900"
      >
        Contact us on WhatsApp
      </div>

      <Link
        href="https://wa.me/13099970173"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <button
          className="group relative w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#25D366] focus:ring-opacity-30"
          tabIndex="0"
          style={{ transform: "translateY(-3.5353px)" }}
        >
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>

          {/* WhatsApp Icon */}
          <FaWhatsapp className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:scale-110" />
        </button>
      </Link>
    </div>
  );
};

export default WhatsAppButton;
