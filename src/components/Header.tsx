import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { TbAperture } from "react-icons/tb";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#AboutUs" },
  { label: "Services", href: "#Services" },
  { label: "Contact", href: "#Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3 select-none">
          <TbAperture className="w-9 h-9 text-gray-900 stroke-[1.5] transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110" />
          <span className="text-2xl font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-gray-500">
            Snapsy
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-600 rounded-lg
                    transition-colors duration-300 hover:text-black hover:bg-gray-100
                    after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                    after:h-[2px] after:w-0 after:bg-gray-900 after:rounded-full
                    after:transition-all after:duration-300 hover:after:w-3/4"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="ml-3">
              <a
                href="#Contact"
                className="inline-flex items-center px-5 py-2 text-sm font-semibold text-white
                  bg-gray-900 rounded-full shadow-md
                  transition-all duration-300
                  hover:bg-black hover:shadow-lg hover:-translate-y-0.5
                  active:translate-y-0 active:shadow-md"
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 pb-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-gray-600 rounded-lg
                    transition-all duration-300 hover:text-black hover:bg-gray-100 hover:pl-6"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#Contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-5 py-3 text-sm font-semibold text-white
                  bg-gray-900 rounded-full shadow-md
                  transition-all duration-300
                  hover:bg-black hover:shadow-lg"
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
