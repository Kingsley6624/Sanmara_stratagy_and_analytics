import Link from "next/link";
import Links from "../data/links.json"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { ul } from "framer-motion/client";

const Footer = () => {
  
  return (
    <section className="py-6 bg-gray-800 text-white px-[5%]">
      <div className="flex flex-col md:flex-row mb-6 md:mb-12 justify-center md:justify-start items-center md:items-start">
        <div>
          <Link href="/">
          <img src="/white-logo.png" alt="SanMara Logo" className="h-8 md:h-12" />
        </Link>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 md:mt-0 md:ml-20 space-y-2 md:space-y-0">
          {Links.map((section) => (
            <ul key={section.id}>
              <li className="font-bold mb-2 text-xl">{section.category}</li>
              {section.links.map((sublink, index) => (
                <li key={index} className="mb-1">
                  <Link
                    href={sublink.href}
                    className="hover:underline"
                  >
                    {sublink.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div>
        <hr className="border-gray-400 w-[80%] mx-auto" />
      </div>
      <div className="mx-auto px-4 pag-4 text-center text-white inter grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 md:mt-12">
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
