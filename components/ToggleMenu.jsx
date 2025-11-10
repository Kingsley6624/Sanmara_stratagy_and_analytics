

import {useSidebar} from './NavigationWrapper'

export default function HamburgerButton({scrolled}) {
  const { isOpen, setIsOpen } = useSidebar();
  


  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-8 h-8 flex flex-col justify-center items-center group md:hidden text-white"
    >
      {/* Top Line */}
      <span
        className={`block absolute h-0.5 w-6  transform transition duration-300 ease-in-out
          ${isOpen ? "rotate-45 top-3.5" : "top-2"}
          ${scrolled ? "bg-blue-900" : "bg-blue-200"}
        `}
      />
      {/* Middle Line */}
      <span
        className={`block absolute h-0.5 w-6 transition duration-300 ease-in-out
          ${isOpen ? "opacity-0" : "top-4"}
          ${scrolled ? "bg-blue-900" : "bg-blue-200"}
        `}
      />
      {/* Bottom Line */}
      <span
        className={`block absolute h-0.5 w-6 transform transition duration-300 ease-in-out
          ${isOpen ? "-rotate-45 top-3.5" : "top-6"}
          ${scrolled ? "bg-blue-900" : "bg-blue-200"}
        `}
      />
    </button>
  );
}