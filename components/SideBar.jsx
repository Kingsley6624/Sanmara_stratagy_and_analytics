"use client";
import { useSidebar } from "./NavigationWrapper";
import Link from "next/link";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const SideBar = () => {
  const { isOpen, setIsOpen, expanded, toggleExpand } = useSidebar();
  const [showSidebar, setShowSidebar] = useState(false);

  // Helps trigger animation after mount
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowSidebar(true), 10);
    } else {
      setShowSidebar(false);
    }
  }, [isOpen]);

  return (
    <div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/70 z-30 shadow-lg flex justify-end md:hidden mt-12 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div
            className={`w-[50%] max-w-sm h-screen bg-white p-3 pt-8 z-50 shadow-lg flex flex-col overflow-y-auto scroll-smooth transform transition-transform duration-500 ease-in-out ${
              showSidebar ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()} // prevent overlay click from closing immediately
          >
            <div className="text-[#696969ff] font-medium text-base z-50">
              <ul className="space-y-6 text-sm font-medium text-gray-700 h-20 flex flex-col divide-y">
                {[
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/industries", label: "Industries" },
                  { href: "/blog", label: "Blog" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="relative h-full flex items-center px-2 transition-all duration-300 hover:text-blue-900"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
