"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ToggleMenu from "./ToggleMenu";


const NavBar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);




  const isSingleBlogPage =
    pathname.startsWith("/blog/") && pathname !== "/blog";
  const isScrollEnabled = !isSingleBlogPage;


  const isWhiteNavbar =  scrolled || isSingleBlogPage;


  // Scroll listener
  useEffect(() => {
    if (!isScrollEnabled) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrollEnabled]);

  // Navbar background class
  const navbarBgClass = isWhiteNavbar
    ? "bg-white text-gray-800 shadow-md"
    : "bg-transparent text-white";

  const links = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us", isButton: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navbarBgClass}`}
    >
      <div className="mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img
            src={isWhiteNavbar ? "/logo.png" : "/white-logo.png"}
            alt="SanMara Logo"
            className="h-12 md:h-14"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium text-sm h-16 items-center">
          {links.map((link) => (
<li key={link.href}>
              {link.isButton ? (
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-md border transition-colors duration-300 font-medium ${
                    isWhiteNavbar
                      ? "bg-blue-600 text-white hover:bg-blue-900"
                      : "bg-white text-blue-600 hover:bg-blue-100"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className={`relative flex items-center px-2 transition-all duration-300 
                    after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:transition-all 
                    hover:after:w-full
                    ${
                      isWhiteNavbar
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

        <ToggleMenu scrolled={isWhiteNavbar} />
      </div>
    </nav>
  );
};

export default NavBar;
