import { useEffect, useState } from "react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 z-50 w-full transition-colors duration-300",
        scrolled ? "bg-[#050505]/85 backdrop-blur-md border-b border-white/10" : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#inicio" className="leading-tight select-none font-[Cormorant_Garamond]">
          <span className="block text-[16px] font-medium tracking-[0.22em] text-white">
            DAYLANI FALLAS
          </span>
        </a>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center border border-white/30 px-5 py-[10px] text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
        >
          Contacto
        </a>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden relative h-9 w-9"
          aria-label="Abrir menú"
        >
          <span className={`absolute left-1/2 top-[14px] h-[2px] w-5 -translate-x-1/2 bg-white transition-transform ${mobileOpen ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`absolute left-1/2 top-[22px] h-[2px] w-5 -translate-x-1/2 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`absolute left-1/2 top-[30px] h-[2px] w-5 -translate-x-1/2 bg-white transition-transform ${mobileOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-white/10 bg-[#050505] px-6 py-6">
          <ul className="flex flex-col gap-5 text-[15px] text-white/80">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} onClick={() => setMobileOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center border border-white/30 px-5 py-3 text-[12px] uppercase tracking-[0.2em] text-white"
          >
            Contacto
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
