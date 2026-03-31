import { useEffect, useRef, useState } from "react";
import {
  FaAward,
  FaCheckCircle,
  FaUsers,
  FaLightbulb,
  FaHeadset,
  FaHeart,
} from "react-icons/fa";

type Benefit = {
  num: string;
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    num: "01",
    Icon: FaAward,
    title: "Experiencia Comprobada",
    description:
      "Más de 340 proyectos exitosos con clientes satisfechos en todo el país.",
  },
  {
    num: "02",
    Icon: FaUsers,
    title: "Equipo Especializado",
    description:
      "Profesionales certificados y apasionados por la excelencia visual.",
  },
  {
    num: "03",
    Icon: FaLightbulb,
    title: "Innovación Constante",
    description:
      "Utilizamos la última tecnología en fotografía y cinematografía aérea.",
  },
  {
    num: "04",
    Icon: FaCheckCircle,
    title: "Calidad Premium",
    description:
      "Cada proyecto es tratado con atención al detalle y máxima profesionalismo.",
  },
  {
    num: "05",
    Icon: FaHeadset,
    title: "Atención Personalizada",
    description:
      "Comunicación directa y seguimiento constante durante todo el proceso.",
  },
  {
    num: "06",
    Icon: FaHeart,
    title: "Garantía de Satisfacción",
    description:
      "Nos comprometemos con resultados que superan tus expectativas.",
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

const WhyUs = () => {
  const [sectionRef, inView] = useInView(0.1) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];

  return (
    <section
      id="WhyUs"
      ref={sectionRef}
      className="vt-section-dark vt-section-divider relative py-10 md:py-16 overflow-hidden"
    >
      {/* Noise overlay */}
      <div className="vt-noise-overlay opacity-50" />

      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 w-80 h-80 rounded-full bg-white/[0.02] blur-[80px]" />
        <div className="absolute -right-40 bottom-1/4 w-80 h-80 rounded-full bg-white/[0.02] blur-[80px]" />
      </div>

      <div className="vt-content-layer mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div
            className={[
              "flex items-center gap-3 mb-4 transition-all duration-700 ease-out",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
            ].join(" ")}
          >
            <div className="w-3 h-0.5 bg-white/30" />
            <span className="vt-kicker">Por Qué Elegirnos</span>
          </div>

          <h2
            className={[
              "vt-title-serif text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6",
              "transition-all duration-1000 ease-out",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            ].join(" ")}
          >
            Razones para{" "}
            <em className="italic font-normal">confiar en nosotros</em>
          </h2>

          <p
            className={[
              "vt-body-copy max-w-2xl text-lg transition-all duration-1000 ease-out delay-200",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            ].join(" ")}
          >
            Somos más que profesionales de la imagen. Nos comprometemos con tu
            visión, transformando ideas en realidades visuales excepcionales que
            generan impacto.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.Icon;
            return (
              <div
                key={benefit.title}
                className={[
                  "group relative p-8 rounded-xl border backdrop-blur-sm",
                  "transition-all duration-500 ease-out",
                  "hover:border-white/30 hover:bg-white/[0.08] hover:-translate-y-2",
                  "border-white/10 bg-white/[0.02]",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12",
                ].join(" ")}
                style={{
                  transitionDelay: inView ? `${idx * 80}ms` : "0s",
                }}
              >
                {/* Number */}
                <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                  <span className="vt-title-serif text-5xl font-light text-white/20">
                    {benefit.num}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-5 inline-flex">
                  <div className="w-12 h-12 rounded-lg bg-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.12] transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-white/70 group-hover:text-white/90 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white/95 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Border animation */}
                <div className="absolute inset-0 rounded-xl border-2 border-white/0 group-hover:border-white/10 transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Bottom accent */}
        <div
          className={[
            "mt-16 pt-12 border-t border-white/5 text-center transition-all duration-1000 ease-out delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <p className="text-white/50 max-w-2xl mx-auto">
            Con nosotros obtienes más que un servicio: obtienes un{" "}
            <span className="text-white/70 font-medium">partner visual</span>{" "}
            que entiende tus necesidades y se dedica a materializarlas con
            excelencia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
