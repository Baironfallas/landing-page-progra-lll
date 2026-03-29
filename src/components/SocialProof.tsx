import { useEffect, useRef, useState } from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

type Stat = {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  description?: string;
};

const stats: Stat[] = [
  {
    icon: FaCheckCircle,
    value: "+340",
    label: "Sesiones",
    description: "Proyectos completados con éxito",
  },
  {
    icon: FaStar,
    value: "4.9/5",
    label: "Calificación",
    description: "Basado en testimonios reales",
  },
  {
    icon: FaCheckCircle,
    value: "12+",
    label: "Ciudades",
    description: "Cobertura en todo el país",
  },
];

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
};

const SocialProof = () => {
  const [sectionRef, inView] = useInView(0.1) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];

  return (
    <section
      id="SocialProof"
      ref={sectionRef}
      className="vt-section-dark relative py-16 md:py-24 overflow-hidden"
    >
      {/* Noise overlay */}
      <div className="vt-noise-overlay opacity-50" />

      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Left accent */}
        <div className="absolute -left-40 top-1/2 w-80 h-80 rounded-full bg-white/[0.02] blur-[80px] -translate-y-1/2" />
        {/* Right accent */}
        <div className="absolute -right-40 top-1/2 w-80 h-80 rounded-full bg-white/[0.02] blur-[80px] -translate-y-1/2" />
      </div>

      <div className="vt-content-layer mx-auto max-w-7xl px-6 relative z-10">
        {/* Stats banner */}
        <div
          className={[
            "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8",
            "transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className={[
                  "group relative text-center p-8 rounded-lg border",
                  "transition-all duration-500",
                  "hover:border-white/30 hover:bg-white/[0.05] hover:-translate-y-1",
                  "border-white/10 bg-white/[0.02]",
                ].join(" ")}
                style={{
                  transitionDelay: inView ? `${idx * 150}ms` : "0s",
                }}
              >
                {/* Icon */}
                <div
                  className={[
                    "inline-flex items-center justify-center w-12 h-12 rounded-full mb-4",
                    "transition-all duration-500",
                    inView
                      ? "text-white/60 bg-white/[0.08]"
                      : "text-white/30 bg-white/[0.02]",
                    "group-hover:text-white/80 group-hover:bg-white/[0.12]",
                  ].join(" ")}
                >
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Value (animated counter style) */}
                <div className="mb-2">
                  <span className="vt-title-serif text-4xl md:text-5xl font-light text-white block leading-tight">
                    {stat.value}
                  </span>
                </div>

                {/* Label */}
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/60 mb-2">
                  {stat.label}
                </p>

                {/* Description */}
                {stat.description && (
                  <p className="text-xs text-white/40 leading-relaxed">
                    {stat.description}
                  </p>
                )}

                {/* Bottom accent line */}
                <div
                  className={[
                    "absolute bottom-0 left-0 right-full h-0.5",
                    "transition-all duration-500",
                    inView ? "bg-white/20" : "bg-white/5",
                    "group-hover:right-0 group-hover:bg-white/30",
                  ].join(" ")}
                />
              </div>
            );
          })}
        </div>

        {/* Trust statement */}
        <div
          className={[
            "mt-12 text-center",
            "transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
          style={{
            transitionDelay: inView ? "450ms" : "0s",
          }}
        >
          <p className="text-sm text-white/40 max-w-2xl mx-auto leading-relaxed">
            Cada número representa la confianza de clientes que eligieron
            capturar sus momentos más especiales con nosotros.
          </p>

          {/* Star rating inline display */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={[
                    "w-3 h-3 transition-all duration-500",
                    i < 5 ? "text-white/50" : "text-white/10",
                    inView ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  style={{
                    transitionDelay: inView ? `${500 + i * 50}ms` : "0s",
                  }}
                />
              ))}
            </div>
            <span className="text-xs text-white/40">
              Promedio 4.9/5 en todos nuestros proyectos
            </span>
          </div>
        </div>

        {/* Divider connecting to testimonials */}
        <div
          className={[
            "mt-16 flex justify-center",
            "transition-all duration-500",
            inView ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{
            transitionDelay: inView ? "600ms" : "0s",
          }}
        >
          <div className="w-1 h-12 bg-gradient-to-b from-white/30 to-white/0" />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
