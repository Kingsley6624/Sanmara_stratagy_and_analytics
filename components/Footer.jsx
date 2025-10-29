import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="py-6 bg-gray-800 mt-[3.1rem] text-white px-[5%]">
      <div className="flex flex-col md:flex-row">
        <div>
          <Link href="/">
          <img src="/logo.jpg" alt="SanMara Logo" className="h-8 md:12" />
        </Link>
        </div>
        <ul className="w-full">
          <li>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <hr className="border-gray-400 mb-4 w-[80%] mx-auto" />
      </div>
      <div className="mx-auto px-4 pag-4 text-center text-white inter grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Link href="/terms" className="">
            Terms & Conditions
          </Link>
          <span className="mx-2">|</span>
          <Link href="/privacy" className="">
            Privacy Policy
          </Link>
        </div>
        <div className="flex justify-center space-x-4 text-xl 2xl:text-4xl">
          <Link href="https://www.facebook.com/">
            <FaFacebookF className="hover:text-blue-500 hover:scale-110 transition-transform duration-200" />
          </Link>
          <Link href="https://twitter.com/">
            <FaTwitter className="hover:text-blue-500 hover:scale-110 transition-transform duration-200" />
          </Link>
          <Link href="https://www.linkedin.com/">
            <FaLinkedinIn className="hover:text-blue-500 hover:scale-110 transition-transform duration-200" />
          </Link>
        </div>
        <div className="container mx-auto text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} SanMara. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
