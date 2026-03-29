import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";

type Plan = {
  name: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Esencial",
    subtitle: "Para comenzar",
    price: "₡45.000",
    description:
      "Perfecto para sesiones individuales y pequeños proyectos fotográficos.",
    features: [
      "1 hora de sesión",
      "50+ fotos editadas",
      "Galería digital",
      "3 locaciones incluidas",
      "Entregas en 2 semanas",
    ],
    cta: "Comienza ahora",
  },
  {
    name: "Pro",
    subtitle: "Lo más popular",
    price: "₡90.000",
    description: "Ideal para eventos pequeños, sesiones de familia o parejas.",
    features: [
      "3 horas de sesión",
      "150+ fotos editadas",
      "Galería digital + USB",
      "Locaciones ilimitadas",
      "Álbum impreso 20x20",
      "Entregas en 1 semana",
      "Sesión de fotos adicional",
    ],
    cta: "Seleccionar plan",
    highlighted: true,
  },
  {
    name: "Premium",
    subtitle: "Experiencia completa",
    price: "₡180.000",
    description:
      "Cobertura completa con todos los servicios y opciones personalizadas.",
    features: [
      "Cobertura completa (8+ horas)",
      "300+ fotos editadas",
      "Galería digital + USB",
      "Álbum premium personalizado",
      "Video resumen 3-5 min",
      "Sesión de fotos previa",
      "Entregas en 3 días",
      "Retoque adicional incluido",
    ],
    cta: "Reservar sesión",
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

const Pricing = () => {
  const [sectionRef, inView] = useInView(0.1) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];

  return (
    <section
      id="Pricing"
      ref={sectionRef}
      className="vt-section-dark vt-section-divider"
    >
      {/* Noise overlay */}
      <div className="vt-noise-overlay" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 bottom-0 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[100px]" />
      </div>

      <div className="vt-content-layer mx-auto max-w-7xl px-6 vt-section-pad">
        {/* Section header */}
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-white/30" />
            <span className="vt-kicker text-[0.65rem]">Paquetes</span>
            <div className="h-px w-10 bg-white/30" />
          </div>
          <h2 className="vt-title-serif text-4xl md:text-5xl font-light text-white leading-tight mb-6">
            Nuestros <em className="italic text-white/70">Paquetes</em>
          </h2>
          <p className="vt-body-copy max-w-2xl mx-auto mb-2">
            Elige el plan que mejor se adapte a tu sesión fotográfica. Todos
            incluyen edición profesional y galería digital.
          </p>
          <div className="vt-divider mx-auto mt-8" />
        </div>

        {/* Pricing cards grid */}
        <div
          className={[
            "grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10",
            "transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          ].join(" ")}
        >
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={[
                "group relative overflow-hidden rounded-lg border transition-all duration-500",
                "hover:shadow-lg hover:-translate-y-1",
                plan.highlighted
                  ? "border-white/30 bg-white/[0.05] md:scale-[1.05] md:z-10"
                  : "border-white/10 bg-white/[0.02]",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
              ].join(" ")}
              style={{
                transitionDelay: inView ? `${idx * 120}ms` : "0s",
              }}
            >
              {/* Accent bar top */}
              <div
                className={[
                  "absolute top-0 left-0 right-full h-1 transition-all duration-500",
                  plan.highlighted ? "bg-white/60" : "bg-white/20",
                  "group-hover:right-0",
                ].join(" ")}
              />

              {/* Badge popular */}
              {plan.highlighted && (
                <div className="absolute top-6 right-6 z-20">
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 border border-white/30 rounded-full bg-white/[0.05]">
                    Más Popular
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="vt-title-serif text-2xl font-light text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-white/40 font-medium mb-4">
                    {plan.subtitle}
                  </p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="vt-title-serif text-4xl font-light text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-white/40">por sesión</span>
                  </div>
                  <p className="text-xs text-white/35 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-white/10 mb-8 group-hover:bg-white/15 transition-colors duration-300" />

                {/* Features list */}
                <ul className="space-y-3 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheck className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5 group-hover:text-white/60 transition-colors duration-300" />
                      <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={[
                    "w-full py-3 px-6 rounded-lg font-semibold text-sm uppercase tracking-[0.15em]",
                    "transition-all duration-300",
                    plan.highlighted
                      ? "bg-white text-[#050505] hover:bg-white/90 hover:shadow-lg"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40",
                  ].join(" ")}
                >
                  {plan.cta}
                </button>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-4 right-4 w-6 h-6 pointer-events-none border-b border-r border-white/0 group-hover:border-white/15 transition-all duration-500 group-hover:w-8 group-hover:h-8" />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-white/30 mt-16">
          ¿Necesitas algo personalizado? Contáctanos para un presupuesto
          adaptado a tus necesidades.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
