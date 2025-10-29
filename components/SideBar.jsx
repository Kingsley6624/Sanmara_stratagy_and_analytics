"use client";
import { useSidebar } from "./NavigationWrapper";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const SideBar = () => {
  const { isOpen, setIsOpen, expanded, toggleExpand } = useSidebar();

  return (
    <div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/70  z-30 shadow-lg flex justify-end md:hidden mt-12"
          // onClick={() => setIsOpen(false)}
        >
          <div className="w-[50%] max-w-sm h-screen bg-white p-3 pt-8 z-50 shadow-lg slide-in-right flex flex-col overflow-y-auto scroll-smooth">
            <div className=" text-[#696969ff] font-medium text-base z-50">
              <ul className="space-y-6 text-sm font-medium text-gray-700 h-20 flex flex-col divide-y">
                <li>
                  <Link
                    href="/about"
                    className="relative h-full flex items-center px-2 transition-all duration-300 hover:text-blue-900"
                    onClick={()=>setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="flex justify-between items-center">
                  <Link
                    href="/services"
                    className="h-full flex items-center justify-between px-2 transition-all duration-300 hover:text-blue-900"
                    onClick={()=>setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <button
                    className=" h-full"
                    onClick={() => toggleExpand("services")}
                  >
                    {expanded.services ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                  </button>
                </li>
                {expanded.services && (
                  <ul className="text-sm text-gray-700 -mt-2 divide-y">
                    <li>
                      <Link
                        href="/services/consulting"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={()=>setIsOpen(false)}
                      >
                        Consulting
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/analytics"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={()=>setIsOpen(false)}
                      >
                        Analytics
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/strategy"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={()=>setIsOpen(false)}
                      >
                        Strategy
                      </Link>
                    </li>
                  </ul>
                )}
                <li className="flex justify-between items-center">
                  <Link
                    href="/industries"
                    className="flex items-center px-2 transition-all duration-300 hover:text-blue-900"
                    onClick={()=>setIsOpen(false)}
                  >
                    Industries
                  </Link>
                  <button
                    className=" h-full"
                    onClick={() => toggleExpand("industries")}
                  >
                    {expanded.industries ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                  </button>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="relative h-full flex items-center px-2 transition-all duration-300 hover:text-blue-900"
                    onClick={()=>setIsOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="relative h-full flex items-center px-2 transition-all duration-300 hover:text-blue-900"
                    onClick={()=>setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
