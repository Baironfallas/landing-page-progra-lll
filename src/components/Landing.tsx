import { useState } from "react";
import { Link } from "react-router";
import { galleryItems } from "../data/galleryData";

const aboutImg =
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=1200&q=80";
const heroMain =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80";
const bandImg =
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80";
const ctaBg =
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80";

const filters = [
  "Todos",
  ...Array.from(new Set(galleryItems.map((item) => item.label))),
];

const Landing = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const visibleItems =
    activeFilter === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.label === activeFilter);

  return (
    <>
      {/* Hero */}
      <section id="inicio" className="relative flex h-screen min-h-[640px] items-end overflow-hidden">
        <img
          src={heroMain}
          alt="Retrato con el cabello al viento"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30" />

        <div className="relative z-[1] mx-auto w-full max-w-7xl px-6 pb-20 md:px-10">
          <h1 className="max-w-2xl font-[Cormorant_Garamond] text-[52px] font-light uppercase leading-[1.05] text-white md:text-[76px]">
            Momentos
            <br />
            que inspiran
          </h1>
          <p className="mt-5 max-w-md text-[13px] uppercase tracking-[0.28em] text-white/60">
            Fotografía para personas, marcas y lugares auténticos
          </p>
          <a
            href="#portafolio"
            className="mt-8 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.24em] text-white transition-colors hover:text-white/60"
          >
            <span className="h-px w-8 bg-white" />
            Explorar →
          </a>
        </div>
      </section>

      {/* Second band */}
      <section className="relative flex h-[70vh] min-h-[440px] items-center overflow-hidden">
        <img
          src={bandImg}
          alt="Camino de montaña al atardecer"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.4] grayscale"
        />
        <div className="relative z-[1] mx-auto w-full max-w-7xl px-6 text-right md:px-10">
          <h2 className="font-[Cormorant_Garamond] text-[40px] font-light uppercase leading-[1.1] text-white md:text-[56px]">
            Lugares
            <br />
            Personas
            <br />
            Historias
          </h2>
          <p className="mt-4 text-[12px] uppercase tracking-[0.28em] text-white/50">
            Un mundo, muchas perspectivas
          </p>
          <a
            href="#portafolio"
            className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.24em] text-white transition-colors hover:text-white/60"
          >
            Ver portafolio →
          </a>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portafolio" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/40">
          Portafolio
        </p>

        <div className="mb-10 flex flex-wrap gap-6 border-b border-white/10 pb-4 text-[12px] uppercase tracking-[0.2em]">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={[
                "pb-1 transition-colors",
                activeFilter === filter
                  ? "border-b border-white text-white"
                  : "text-white/40 hover:text-white/70",
              ].join(" ")}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {visibleItems.map(({ slug, label, src, alt }) => (
            <Link
              key={slug}
              to={`/galeria/${slug}`}
              className="group relative block aspect-[3/4] overflow-hidden"
            >
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover grayscale-[20%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-[12px] uppercase tracking-[0.15em] text-white">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* About / quote */}
      <section id="sobre-mi" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <img
            src={aboutImg}
            alt="Daylani Fallas con su cámara"
            className="h-[440px] w-full object-cover grayscale"
          />

          <div>
            <h2 className="font-[Cormorant_Garamond] text-[34px] font-light leading-tight text-white md:text-[42px]">
              Creo en fotografías
              <br />
              que se sienten.
            </h2>
            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-white/55">
              Soy Daylani Fallas, fotógrafa apasionada por contar historias a
              través de imágenes. Me inspira la gente real, los lugares
              extraordinarios y los momentos que parecen simples, pero lo
              dicen todo.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center border border-white/30 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black"
            >
              Conoce más
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="relative flex h-[50vh] min-h-[360px] items-center justify-center overflow-hidden text-center">
        <img
          src={ctaBg}
          alt="Furgoneta en camino desértico"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.35] grayscale"
        />
        <div className="relative z-[1] px-6">
          <h2 className="font-[Cormorant_Garamond] text-[32px] font-light uppercase tracking-[0.05em] text-white md:text-[46px]">
            Hagamos algo extraordinario
          </h2>
          <a
            href="mailto:hola@daylanifallas.com"
            className="mt-8 inline-flex items-center border border-white/40 px-7 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black"
          >
            Escríbeme
          </a>
        </div>
      </section>
    </>
  );
};

export default Landing;
