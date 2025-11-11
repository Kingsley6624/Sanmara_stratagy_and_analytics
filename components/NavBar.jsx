"use client";

import React from "react";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import ToggleMenu from "./ToggleMenu";
import { useEffect, useState } from "react";

const NavBar = () => {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger color change after scrolling 50px
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us", isButton: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full max-w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-md text-gray-800"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto px-4 py-2 flex justify-between items-center overflow-hidden">
        {/* Logo */}
        <Link href="/" className="">
          <img
            src={scrolled ? "/logo.png" : "/white-logo.png"}
            alt="SanMara Logo"
            className="h-8 md:h-12 "
          />
        </Link>

        {/* Navigation Links */}

        <ul className="hidden md:flex space-x-6 font-medium text-sm h-16 items-center">
          {links.map((link) => (
            <li key={link.href}>
              {link.isButton ? (
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-md border transition-colors duration-300 font-medium ${
                    scrolled
                      ? "bg-blue-600 text-white hover:bg-blue-900"
                      : "bg-white text-blue-600 hover:bg-blue-100"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className={`relative h-full flex items-center px-2 transition-all duration-300
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0  after:transition-all after:duration-300 hover:after:w-full
                ${
                  pathname === `/${link.label}`
                    ? "after:w-full text-gray-800"
                    : ""
                }
                ${
                  scrolled
                    ? "text-gray-800 hover:text-blue-900 after:bg-blue-900"
                    : "text-white hover:text-blue-200 after:bg-blue-200"
                }
                    `}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <ToggleMenu scrolled={scrolled} />
      </div>
    </nav>
  );
};

export default NavBar;

{
  /* <li>
            <Link
              href="/about"
              className={`relative h-full flex items-center px-2 transition-all duration-300 hover:text-blue-900
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full
                ${pathname === "/about" ? "after:w-full text-blue-900" : ""}`}
            >
              About
            </Link>
          </li> */
}
