import Link from "next/link";
import { footerData } from "../data/links";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="py-6 bg-slate-900 text-white px-[3%]">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row mb-6 md:mb-12 justify-center md:justify-start items-center md:items-start">
        {/* Logo */}
        <div>
          <Link href="/">
            <img
              src="/white-logo.png"
              alt="SanMara Logo"
              className="h-12 md:h-14"
            />
          </Link>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[auto_auto_auto_auto] gap-4 w-full mt-4 md:mt-0 md:ml-20 justify-between">
          {footerData.map((section) => (
            <ul key={section.id} className="w-fit">
              <li className="font-bold mb-2 text-base">{section.category}</li>

              {section.links.map((sublink, i) => {
                const Icon = sublink.icon;
                return (
                  <li
                    key={i}
                    className="mb-1 text-gray-400 text-sm flex items-center"
                  >
                    {Icon && <Icon className="mr-2" />}
                    {sublink.href ? (
                      <Link href={sublink.href} className="hover:text-[#f6c23e]">
                        {sublink.title || sublink.address}
                      </Link>
                    ) : (
                      <span>{sublink.title || sublink.address}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div>
        <hr className="border-gray-400 w-[80%] mx-auto" />
      </div>

      {/* Bottom Section */}
      <div className="text-center text-white flex flex-col md:flex-row gap-4 mt-6 md:mt-12 font-extralight justify-between text-sm md:text-base">
        {/* Terms & Privacy */}
        <div className="flex justify-center">
          <p className="text-nowrap">Terms & Conditions</p>
          <span className="mx-2">|</span>
          <Link className="text-nowrap hover:text-[#f6c23e]" href="/privacy">
            Privacy Policy
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center  space-x-4 text-xl 2xl:text-4xl">
          <Link href="https://www.facebook.com/" aria-label="Facebook">
            <FaFacebookF className="hover:text-[#f6c23e] hover:scale-110 transition-transform duration-200" />
          </Link>
          <Link href="https://twitter.com/" aria-label="Twitter">
            <FaTwitter className="hover:text-[#f6c23e] hover:scale-110 transition-transform duration-200" />
          </Link>
          <Link href="https://www.linkedin.com/" aria-label="LinkedIn">
            <FaLinkedinIn className="hover:text-[#f6c23e] hover:scale-110 transition-transform duration-200" />
          </Link>
          <Link href="https://www.instagram.com/" aria-label="Instagram">
            <FaInstagram className="hover:text-[#f6c23e] hover:scale-110 transition-transform duration-200" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center ">
          <p className="text-white">
            &copy; {new Date().getFullYear()} SanMara. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
