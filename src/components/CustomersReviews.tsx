import { useEffect, useRef, useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

type Review = {
  name: string;
  text: string;
  avatar: string;
  role?: string;
  rating: number;
};

const reviews: Review[] = [
  {
    name: "Fio Barrantes",
    role: "Evento",
    text: "Estoy encantado con el trabajo realizado. Capturaron cada detalle y emoción de nuestro evento. ¡Las fotos son espectaculares!",
    avatar: "https://i.ibb.co/YjjdBWB/d2d1b83f9aeb282efe4d510a18fe6657.jpg",
    rating: 5,
  },
  {
    name: "Bairon Fallas",
    role: "Sesión",
    text: "Las imágenes superaron todas mis expectativas. La atención al detalle y la creatividad hacen que cada foto sea única.",
    avatar: "https://i.ibb.co/x8R4xfF/bf1e96ab228573b5f14cca020f781bad.jpg",
    rating: 5,
  },
  {
    name: "Levi Baltodano",
    role: "Retratos",
    text: "La mejor experiencia con un fotógrafo. Supo guiarnos y hacer que nos sintiéramos cómodos. Las fotos son simplemente hermosas.",
    avatar: "https://i.ibb.co/mcDHVG8/6415993e7dc60fd63bd21043ef4f9ebf.jpg",
    rating: 5,
  },
];

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-[3px]">
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar
        key={i}
        className={[
          "h-3 w-3",
          i < rating ? "text-white/70" : "text-white/10",
        ].join(" ")}
      />
    ))}
  </div>
);

const CustomersReviews = () => {
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
    <section ref={sectionRef} className="vt-section-dark">
      {/* Noise overlay */}
      <div className="vt-noise-overlay" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 bottom-0 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[100px]" />
      </div>

      <div className="vt-content-layer mx-auto max-w-7xl px-6 vt-section-pad">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-white/30" />
            <span className="vt-kicker text-[0.65rem]">
              Testimonios
            </span>
            <div className="h-px w-10 bg-white/30" />
          </div>
          <h2 className="vt-title-serif text-4xl md:text-5xl font-light text-white leading-tight">
            Lo que dicen{" "}
            <em className="italic text-white/70">nuestros clientes</em>
          </h2>
          <p className="vt-body-copy mt-4 max-w-md mx-auto">
            La confianza de quienes nos eligen es nuestro mayor reconocimiento.
          </p>
          <div className="vt-divider mx-auto mt-6" />
        </div>

        {/* Reviews grid */}
        <div
          className={[
            "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8",
            "transition-all duration-1000 ease-out",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          ].join(" ")}
        >
          {reviews.map((r, idx) => (
            <article
              key={r.name}
              className="group relative overflow-hidden border border-white/[0.08] bg-white/[0.02]
                backdrop-blur-sm p-8 md:p-10
                transition-all duration-500
                hover:border-white/15 hover:bg-white/[0.04]"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-full h-px bg-white/60 transition-all duration-500 ease-out group-hover:right-0" />

              {/* Quote icon */}
              <FaQuoteLeft className="h-5 w-5 text-white/[0.07] mb-6" />

              {/* Review text */}
              <p className="vt-body-copy leading-[1.9] font-light tracking-wide mb-8">
                "{r.text}"
              </p>

              {/* Stars */}
              <div className="mb-6">
                <Stars rating={r.rating} />
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-white/[0.07] mb-6 transition-colors duration-300 group-hover:bg-white/[0.12]" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="h-12 w-12 rounded-full object-cover
                      filter grayscale-[30%] contrast-[1.05]
                      ring-1 ring-white/10
                      transition-all duration-500
                      group-hover:grayscale-0 group-hover:ring-white/25"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="vt-title-serif text-base font-light text-white/90">
                    {r.name}
                  </h3>
                  {r.role && (
                    <p className="text-[0.6rem] uppercase tracking-[0.22em] text-white/30 font-medium mt-0.5">
                      {r.role}
                    </p>
                  )}
                </div>
                <span className="ml-auto text-[0.55rem] uppercase tracking-[0.2em] text-white/20 font-medium transition-colors duration-300 group-hover:text-white/40">
                  Verificado
                </span>
              </div>

              {/* Corner decorations */}
              <div
                className="absolute bottom-3 right-3 w-6 h-6 pointer-events-none
                border-b border-r border-white/0
                transition-all duration-500
                group-hover:border-white/15 group-hover:w-8 group-hover:h-8"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersReviews;
