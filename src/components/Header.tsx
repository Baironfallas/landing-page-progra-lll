import { useEffect, useRef, useState } from "react";
import { LuCamera } from "react-icons/lu";

const navLinks = [
  { id: "AboutUs", label: "About", href: "#AboutUs", number: "01" },
  { id: "Services", label: "Services", href: "#Services", number: "02" },
  { id: "Gallery", label: "Gallery", href: "#Gallery", number: "03" },
  { id: "Pricing", label: "Pricing", href: "#Pricing", number: "04" },
  { id: "Contact", label: "Contact", href: "#Contact", number: "05" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState("AboutUs");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const pct = height > 0 ? Math.min(1, scrollY / height) : 0;

      setIsScrolled(scrollY > 60);
      setShowProgress(scrollY > 100);
      setProgress(pct);

      if (scrollY < 120) {
        setActiveId("AboutUs");
      }

      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 },
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    observerRef.current = observer;

    return () => observer.disconnect();
  }, []);

  const headerClass = [
    "fixed top-0 z-50 w-full transition-all duration-300 ease-out",
    isScrolled
      ? "border-b border-white/10 bg-[#050505]/75 shadow-[0_4px_32px_rgba(0,0,0,0.5)] backdrop-blur-[20px] backdrop-saturate-[180%]"
      : "border-b border-transparent bg-transparent",
  ].join(" ");

  return (
    <header className={headerClass}>
      <div className="relative">
        <div
          className="absolute left-0 top-0 h-[2px] w-full"
          aria-hidden="true"
        >
          <div
            className="h-full bg-gradient-to-r from-[#7BD0C4] to-[#F5D08B] transition-opacity duration-300"
            style={{
              width: `${progress * 100}%`,
              opacity: showProgress ? 1 : 0,
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <a
          href="#"
          className="group flex items-center gap-3 select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5D08B]/70"
          aria-label="Snapsy home"
        >
          <span className="text-[26px] font-[300] tracking-[0.18em] text-white transition-transform duration-200 group-hover:scale-[1.02] font-[Cormorant_Garamond]">
            SNAP
            <span
              className="mx-1 text-[#7BD0C4] text-[8px] align-super"
              aria-hidden="true"
            >
              ·
            </span>
            <span className="text-[#F5D08B]">SY</span>
          </span>
        </a>

        <nav className="hidden md:block" role="navigation" aria-label="Primary">
          <ul className="flex items-center gap-6">
            {navLinks.map(({ label, href, id }) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <a
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "relative py-2 text-[11px] font-[500] uppercase tracking-[0.22em]",
                      "text-white/80 transition-colors duration-200",
                      "after:absolute after:-bottom-1 after:left-1/2 after:h-[1px] after:w-0",
                      "after:-translate-x-1/2 after:bg-[#F5D08B]",
                      "after:transition-all after:duration-[250ms] after:ease-out",
                      "hover:text-[#F5D08B] hover:after:w-full",
                      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5D08B]/70",
                      isActive ? "text-[#F5D08B] after:w-full" : "",
                    ].join(" ")}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#Contact"
            className="inline-flex items-center gap-2 border border-[#F5D08B]/50 px-6 py-[10px] text-[11px] uppercase tracking-[0.22em] text-[#F5D08B] font-[500] font-[Montserrat] transition-all duration-200 hover:bg-[#F5D08B] hover:text-[#050505] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5D08B]/70"
          >
            <LuCamera className="h-[14px] w-[14px]" />
            Book a Session
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden relative h-10 w-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5D08B]/70"
          aria-label="Toggle menu"
        >
          <span
            className={[
              "absolute left-1/2 top-1/2 h-[2px] w-[20px] -translate-x-1/2 -translate-y-[8px] bg-white transition-all duration-300",
              mobileOpen ? "translate-y-0 rotate-45" : "",
            ].join(" ")}
          />
          <span
            className={[
              "absolute left-1/2 top-1/2 h-[2px] w-[20px] -translate-x-1/2 bg-white transition-all duration-300",
              mobileOpen ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "absolute left-1/2 top-1/2 h-[2px] w-[20px] -translate-x-1/2 translate-y-[8px] bg-white transition-all duration-300",
              mobileOpen ? "translate-y-0 -rotate-45" : "",
            ].join(" ")}
          />
        </button>
      </div>

      <div
        className={[
          "fixed inset-0 z-40 md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={[
            "absolute right-0 top-0 h-full w-full max-w-sm bg-[#050505]/95 backdrop-blur-[20px]",
            "px-8 py-20 transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <nav role="navigation" aria-label="Mobile" className="h-full">
            <ul className="flex flex-col gap-8">
              {navLinks.map(({ id, href, label, number }) => (
                <li key={id}>
                  <a
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={activeId === id ? "page" : undefined}
                    className="flex items-baseline gap-3 text-[32px] font-[Cormorant_Garamond] text-white/90 transition-colors duration-200 hover:text-[#F5D08B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5D08B]/70"
                  >
                    <span className="text-[14px] tracking-[0.28em] text-[#F5D08B]">
                      {number}
                    </span>
                    <span>
                      · {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-12">
              <a
                href="#Contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 border border-[#F5D08B]/50 px-6 py-[12px] text-[12px] uppercase tracking-[0.22em] text-[#F5D08B] font-[500] font-[Montserrat] transition-all duration-200 hover:bg-[#F5D08B] hover:text-[#050505]"
              >
                <LuCamera className="h-[14px] w-[14px]" />
                Book a Session
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
