import { TbAperture } from "react-icons/tb";

const footerLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#AboutUs" },
  { label: "Services", href: "#Services" },
  { label: "Gallery", href: "#Gallery" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3 select-none">
            <TbAperture className="w-7 h-7 text-gray-900 stroke-[1.5] transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110" />
            <span className="text-xl font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-gray-500">
              Snapsy
            </span>
          </a>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center items-center gap-1">
              {footerLinks.map(({ label, href }) => (
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
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-center text-xs text-gray-400">
            © 2025 Bairon. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
