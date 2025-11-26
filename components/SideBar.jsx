"use client";
import { useSidebar } from "./NavigationWrapper";
import Link from "next/link";
import { useEffect, useState } from "react";

const SideBar = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const [showSidebar, setShowSidebar] = useState(false);

  // Trigger sidebar slide animation
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowSidebar(true), 10);
    } else {
      setShowSidebar(false);
    }
  }, [isOpen]);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact", isButton: true },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/70 z-30 flex justify-end md:hidden transition-opacity duration-300 mt-12"
          onClick={() => setIsOpen(false)}
        >
          <div
            className={`w-1/2 max-w-sm h-screen bg-white p-6 pt-8 z-50 flex flex-col overflow-y-auto transform transition-transform duration-500 ease-in-out ${
              showSidebar ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()} // prevent overlay click
          >
            <ul className="flex flex-col space-y-4 w-full">
              {navItems.map((item) => (
                <li key={item.href} className="w-full">
                  <Link
                    href={item.href}
                    className={`w-full block py-2 px-4 rounded-md font-medium transition-colors duration-300 ${
                      item.isButton
                        ? "bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 text-center"
                        : "text-gray-700 hover:text-blue-900"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
