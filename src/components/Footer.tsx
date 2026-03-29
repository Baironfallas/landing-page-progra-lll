import { TbAperture } from "react-icons/tb";

const footerLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#AboutUs" },
  { label: "Services", href: "#Services" },
  { label: "Gallery", href: "#Gallery" },
];

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#050505]">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-[1] max-w-7xl mx-auto px-6 py-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3 select-none">
            <TbAperture className="w-7 h-7 text-white stroke-[1.5] transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110" />
            <span className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-white/70">
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
                    className="relative px-4 py-2 text-sm font-medium text-white/65 rounded-lg
                      transition-colors duration-300 hover:text-white hover:bg-white/5
                      after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                      after:h-[2px] after:w-0 after:bg-white after:rounded-full
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
        <div className="mt-6 pt-5 border-t border-white/10">
          <p className="text-center text-xs text-white/35">
            © 2025 Bairon. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
