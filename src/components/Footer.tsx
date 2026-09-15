import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#050505]">
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between md:px-10">
      <span className="font-[Cormorant_Garamond] text-[15px] tracking-[0.22em] text-white/80">
        DAYLANI FALLAS
      </span>

      <nav>
        <ul className="flex flex-wrap justify-center gap-6 text-[11px] uppercase tracking-[0.2em] text-white/50">
          {footerLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="hover:text-white">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-4 text-white/50">
        <a href="#" aria-label="Instagram" className="hover:text-white">
          <FaInstagram className="h-4 w-4" />
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-white">
          <FaFacebookF className="h-4 w-4" />
        </a>
        <a href="#" aria-label="YouTube" className="hover:text-white">
          <FaYoutube className="h-4 w-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
