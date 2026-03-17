import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { galleryItems } from "../data/galleryData";

const GalleryServices = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    obs.observe(sectionRef.current);

    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="Gallery"
      ref={sectionRef}
      className="relative bg-[#050505] overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-[2] mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-white/30" />
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-white/40">
              Galería
            </span>
            <div className="h-px w-10 bg-white/30" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-light text-white leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Nuestro <em className="italic text-white/70">Trabajo</em>
          </h2>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Cada imagen cuenta una historia. Descubre los estilos que definen
            nuestra visión fotográfica.
          </p>
          <div className="w-12 h-px bg-white/20 mx-auto mt-6" />
        </div>

        {/* Gallery grid */}
        <div
          className={[
            "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8",
            "transition-all duration-1000 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          ].join(" ")}
        >
          {galleryItems.map((item, i) => (
            <Link
              key={item.slug}
              to={`/galeria/${item.slug}`}
              className="group relative overflow-hidden cursor-pointer"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Image container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover
                    filter grayscale-[20%] contrast-[1.05]
                    transition-all duration-[1.2s] ease-out
                    group-hover:scale-[1.06] group-hover:grayscale-0"
                />

                {/* Cinematic overlays */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/20 opacity-80" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050505]/30 via-transparent to-transparent" />

                {/* Decorative corner border */}
                <div
                  className="absolute top-4 left-4 w-10 h-10 pointer-events-none
                    border-t border-l border-white/0
                    transition-all duration-500
                    group-hover:border-white/30 group-hover:w-14 group-hover:h-14"
                />
                <div
                  className="absolute bottom-4 right-4 w-10 h-10 pointer-events-none
                    border-b border-r border-white/0
                    transition-all duration-500
                    group-hover:border-white/30 group-hover:w-14 group-hover:h-14"
                />

                {/* "Ver" badge */}
                <div
                  className="absolute top-5 right-5 z-10
                    opacity-0 translate-y-2
                    transition-all duration-400
                    group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/80">
                    Ver serie
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7h10M8 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                {/* Caption */}
                <figcaption className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <p className="text-[0.6rem] uppercase tracking-[0.22em] text-white/40 mb-1">
                    Servicio
                  </p>
                  <p
                    className="text-xl md:text-2xl font-light text-white mb-2
                      transition-transform duration-500 group-hover:translate-x-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs text-white/40 leading-relaxed max-w-[18rem]
                      opacity-0 translate-y-3
                      transition-all duration-500 delay-100
                      group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    {item.description}
                  </p>
                </figcaption>
              </div>

              {/* Offset decorative border */}
              <div
                className="absolute inset-0 pointer-events-none
                  border border-white/0
                  transition-all duration-700
                  group-hover:inset-[-6px] group-hover:border-white/[0.08]"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryServices;
