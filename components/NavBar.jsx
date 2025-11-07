"use client";

import React from "react";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

import { usePathname } from "next/navigation";
import ToggleMenu from "./ToggleMenu";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-[5%] py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img src="/logo.jpg" alt="SanMara Logo" className="h-8 md:12" />
        </Link>

        {/* Navigation Links */}
        <ul className="space-x-6 text-sm font-medium text-gray-700 h-20 md:flex hidden">
          <li>
            <Link
              href="/about"
              className={`relative h-full flex items-center px-2 transition-all duration-300 hover:text-blue-900
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full
                ${pathname === "/about" ? "after:w-full text-blue-900" : ""}`}
            >
              About
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/services"
              className={`h-full flex items-center px-2 transition-all duration-300 hover:text-blue-900
              after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full
              ${pathname === "/services" ? "after:w-full text-blue-900" : ""}
            `}>
              Services
              {/* <RiArrowDropDownLine className="inline" /> */}
            </Link>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-48 z-50">
              {/* <ul className="py-2 text-sm text-gray-700">
                <li>
                  <Link
                    href="/services/consulting"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/analytics"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/strategy"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Strategy
                  </Link>
                </li>
              </ul> */}
            </div>
          </li>
          <li>
            <Link
              href="/industries"
              className={`relative h-full flex items-center px-2 transition-all duration-300 hover:text-blue-900
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full
                ${
                  pathname === "/industries" ? "after:w-full text-blue-900" : ""
                }
              `}
            >
              Industries
              {/* <RiArrowDropDownLine className="inline" /> */}
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`relative h-full flex items-center px-2 transition-all duration-300 hover:text-blue-900
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full
                ${pathname === "/blog" ? "after:w-full text-blue-900" : ""}
              `}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`relative h-full flex items-center px-2 transition-all duration-300 hover:text-blue-900
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full
                ${pathname === "/contact" ? "after:w-full text-blue-900" : ""}
              `}
            >
              Contact
            </Link>
          </li>
        </ul>
        <ToggleMenu />
      </div>
    </nav>
  );
};

export default NavBar;
