import { useEffect, useRef, useState } from "react";
import { FaShieldAlt, FaClock, FaSync, FaCheckDouble, FaFileContract, FaHeadset } from "react-icons/fa";

type GuaranteeItem = {
  num: string;
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const guarantees: GuaranteeItem[] = [
  {
    num: "01",
    Icon: FaShieldAlt,
    title: "Satisfacción 100%",
    description: "Si no quedan satisfechos con el resultado, devolvemos tu inversión sin preguntas.",
  },
  {
    num: "02",
    Icon: FaClock,
    title: "Entrega Rápida",
    description: "Archivos finales entregados en máximo 48 horas tras la sesión.",
  },
  {
    num: "03",
    Icon: FaSync,
    title: "Revisiones Ilimitadas",
    description: "Ajustes y modificaciones totalmente gratuitas hasta tu conformidad.",
  },
  {
    num: "04",
    Icon: FaCheckDouble,
    title: "Edición Premium",
    description: "Retoque profesional, color grading y correcciones incluidas en todos los paquetes.",
  },
  {
    num: "05",
    Icon: FaFileContract,
    title: "Derechos Garantizados",
    description: "Derechos de uso completos: comercial, redes, impresos y más.",
  },
  {
    num: "06",
    Icon: FaHeadset,
    title: "Disponibilidad Total",
    description: "Soporte directo durante tu proyecto. Respuestas en menos de 2 horas.",
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

const Guarantee = () => {
  const [sectionRef, inView] = useInView(0.1) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];

  return (
    <section
      id="Guarantee"
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
            <span className="vt-kicker">Nuestro Compromiso</span>
          </div>

          <h2
            className={[
              "vt-title-serif text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6",
              "transition-all duration-1000 ease-out",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            ].join(" ")}
          >
            Garantías que <em className="italic font-normal">te respaldan</em>
          </h2>

          <p
            className={[
              "vt-body-copy max-w-2xl text-lg transition-all duration-1000 ease-out delay-200",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            ].join(" ")}
          >
            Tu inversión está protegida. Nos comprometemos con cada detalle, desde la 
            captura hasta la entrega final, con garantías que responden a lo que realmente importa.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {guarantees.map((guarantee, idx) => {
            const IconComponent = guarantee.Icon;
            return (
              <div
                key={guarantee.title}
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
                    {guarantee.num}
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
                    {guarantee.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                    {guarantee.description}
                  </p>
                </div>

                {/* Border animation */}
                <div className="absolute inset-0 rounded-xl border-2 border-white/0 group-hover:border-white/10 transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA accent */}
        <div
          className={[
            "mt-16 pt-12 border-t border-white/5 text-center transition-all duration-1000 ease-out delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <p className="text-white/50 max-w-2xl mx-auto">
            Cada garantía respalda nuestro <span className="text-white/70 font-medium">compromiso con la excelencia</span> y 
            tu tranquilidad en cada proyecto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
