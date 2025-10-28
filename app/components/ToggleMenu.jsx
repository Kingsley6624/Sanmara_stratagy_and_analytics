

import {useSidebar} from './NavigationWrapper'

export default function HamburgerButton() {
  const { isOpen, setIsOpen } = useSidebar();
  


  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-8 h-8 flex flex-col justify-center items-center group md:hidden"
    >
      {/* Top Line */}
      <span
        className={`block absolute h-0.5 w-6 bg-blue-900 transform transition duration-300 ease-in-out
          ${isOpen ? "rotate-45 top-3.5" : "top-2"}
        `}
      />
      {/* Middle Line */}
      <span
        className={`block absolute h-0.5 w-6 bg-blue-900 transition duration-300 ease-in-out
          ${isOpen ? "opacity-0" : "top-4"}
        `}
      />
      {/* Bottom Line */}
      <span
        className={`block absolute h-0.5 w-6 bg-blue-900 transform transition duration-300 ease-in-out
          ${isOpen ? "-rotate-45 top-3.5" : "top-6"}
        `}
      />
    </button>
  );
}