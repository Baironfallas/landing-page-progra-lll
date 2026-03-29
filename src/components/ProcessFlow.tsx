import { useEffect, useRef, useState } from "react";
import {
  FaCalendar,
  FaCamera,
  FaWandMagicSparkles,
  FaImages,
} from "react-icons/fa6";

type Step = {
  icon: React.ComponentType<{ className?: string }>;
  number: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: FaCalendar,
    number: 1,
    title: "Brief",
    description:
      "Conversamos sobre tu visión, estilo y necesidades para la sesión.",
  },
  {
    icon: FaCamera,
    number: 2,
    title: "Sesión",
    description:
      "Realizamos la sesión fotográfica con profesionalismo y creatividad.",
  },
  {
    icon: FaWandMagicSparkles,
    number: 3,
    title: "Edición",
    description:
      "Retocamos y editamos cada foto para obtener resultados impecables.",
  },
  {
    icon: FaImages,
    number: 4,
    title: "Entrega",
    description:
      "Recibes tus fotos editadas en galería digital y formatos adicionales.",
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

const ProcessFlow = () => {
  const [sectionRef, inView] = useInView(0.1) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];

  return (
    <section
      id="Process"
      ref={sectionRef}
      className="vt-section-dark vt-section-divider"
    >
      {/* Noise overlay */}
      <div className="vt-noise-overlay" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[50rem] rounded-full bg-white/[0.015] blur-[120px]" />
      </div>

      <div className="vt-content-layer mx-auto max-w-7xl px-6 vt-section-pad">
        {/* Section header */}
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-white/30" />
            <span className="vt-kicker text-[0.65rem]">Cómo Funciona</span>
            <div className="h-px w-10 bg-white/30" />
          </div>
          <h2 className="vt-title-serif text-4xl md:text-5xl font-light text-white leading-tight mb-6">
            Nuestro <em className="italic text-white/70">Proceso</em>
          </h2>
          <p className="vt-body-copy max-w-2xl mx-auto mb-2">
            Un flujo simple y transparente que garantiza resultados
            excepcionales en cada etapa.
          </p>
          <div className="vt-divider mx-auto mt-8" />
        </div>

        {/* Process steps */}
        <div
          className={[
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4",
            "transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          ].join(" ")}
        >
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.title}
                className={[
                  "group relative",
                  "transition-all duration-500",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                ].join(" ")}
                style={{
                  transitionDelay: inView ? `${idx * 100}ms` : "0s",
                }}
              >
                {/* Connector line (hidden on last item and on mobile) */}
                {idx < steps.length - 1 && (
                  <div
                    className={[
                      "hidden lg:block absolute top-20 -right-3 w-6 h-px z-0",
                      "transition-colors duration-500",
                      inView ? "bg-white/30" : "bg-white/10",
                    ].join(" ")}
                  />
                )}

                {/* Card container */}
                <div
                  className={[
                    "relative h-full p-8 rounded-lg border",
                    "transition-all duration-500",
                    "hover:shadow-lg hover:-translate-y-1 hover:border-white/30",
                    "border-white/10 bg-white/[0.02]",
                  ].join(" ")}
                >
                  {/* Number badge + Icon */}
                  <div className="relative z-10 mb-6 flex items-center gap-4">
                    {/* Circle with number */}
                    <div
                      className={[
                        "relative w-14 h-14 rounded-full flex items-center justify-center",
                        "border transition-all duration-500",
                        "group-hover:scale-110",
                        inView
                          ? "border-white/30 bg-white/[0.05]"
                          : "border-white/10 bg-white/[0.02]",
                      ].join(" ")}
                    >
                      <span className="vt-title-serif text-2xl font-light text-white/80">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <IconComponent
                      className={[
                        "w-6 h-6 transition-all duration-500",
                        inView ? "text-white/50" : "text-white/30",
                        "group-hover:text-white/70",
                      ].join(" ")}
                    />
                  </div>

                  {/* Step title */}
                  <h3
                    className={[
                      "vt-title-serif text-xl font-light text-white mb-3",
                      "transition-colors duration-500",
                    ].join(" ")}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={[
                      "text-sm text-white/45 leading-relaxed",
                      "transition-colors duration-500",
                      "group-hover:text-white/60",
                    ].join(" ")}
                  >
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className={[
                      "absolute bottom-0 left-0 right-full h-0.5 transition-all duration-500",
                      "bg-white/30",
                      "group-hover:right-0",
                    ].join(" ")}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA section */}
        <div
          className={[
            "mt-16 p-10 rounded-lg border",
            "text-center transition-all duration-500",
            "border-white/10 bg-white/[0.02]",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          ].join(" ")}
          style={{
            transitionDelay: inView ? `${steps.length * 100}ms` : "0s",
          }}
        >
          <p className="text-sm text-white/50 mb-6">
            ¿Listo para comenzar tu sesión? Reserva tu brevé hoy mismo.
          </p>
          <button className="inline-block px-8 py-3 bg-white text-[#050505] rounded-lg font-semibold text-sm uppercase tracking-[0.15em] hover:bg-white/90 transition-all duration-300 hover:shadow-lg">
            Agendar Sesión
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
