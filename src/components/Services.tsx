import { useEffect, useRef, useState } from "react";
import {
  Aperture,
  Briefcase,
  Calendar,
  Film,
  Sliders,
  Wind,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Portrait Photography",
    description:
      "Editorial portraiture with refined lighting, styling, and timeless direction.",
    Icon: Aperture,
  },
  {
    number: "02",
    title: "Event Coverage",
    description:
      "Discreet, cinematic documentation for private and corporate events.",
    Icon: Calendar,
  },
  {
    number: "03",
    title: "Commercial & Branding",
    description:
      "Campaign-ready visuals built to elevate brands and product storytelling.",
    Icon: Briefcase,
  },
  {
    number: "04",
    title: "Drone Cinematography",
    description:
      "Aerial perspectives with smooth motion and cinematic depth of field.",
    Icon: Wind,
  },
  {
    number: "05",
    title: "Video Production",
    description:
      "Concept-to-edit production for brand films, promos, and visual essays.",
    Icon: Film,
  },
  {
    number: "06",
    title: "Photo Editing & Retouching",
    description:
      "High-end retouching, color grading, and tonal consistency for every frame.",
    Icon: Sliders,
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="Services"
      ref={sectionRef}
      className="vt-section-dark vt-section-divider"
    >
      <div className="vt-content-layer mx-auto max-w-7xl px-6 vt-section-pad">
        <div className="grid items-end gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="font-[Montserrat] text-[10px] uppercase tracking-[0.4em] text-white/40">
              What We Do
            </p>
            <h2 className="mt-4 vt-title-serif text-[clamp(40px,5vw,68px)] leading-[0.98] text-white">
              Services Built for
              <br />
              <em className="italic text-[#F5D08B] font-normal">
                Every Frame.
              </em>
            </h2>
          </div>
          <p className="font-[Montserrat] text-[14px] font-light leading-[1.7] text-white/55 max-w-xl">
            A curated suite of services shaped for editorial portraits, premium
            campaigns, and cinematic storytelling across every medium.
          </p>
        </div>

        <div
          className="mt-14 border"
          style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#050505]">
            {services.map((service, index) => {
              const Icon = service.Icon;
              return (
                <button
                  key={service.number}
                  type="button"
                  className={[
                    "group relative cursor-pointer overflow-hidden bg-white/[0.03]",
                    "px-8 py-10 text-left transition-colors duration-300",
                    "hover:bg-white/[0.07] focus-visible:outline-none",
                    "focus-visible:ring-1 focus-visible:ring-[#F5D08B]/70",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
                  ].join(" ")}
                  style={{
                    transitionDelay: inView ? `${index * 80}ms` : "0ms",
                  }}
                >
                  <span className="absolute right-5 top-4 vt-title-serif text-[72px] font-light text-white/[0.04] transition-colors duration-[400ms] group-hover:text-white/[0.08]">
                    {service.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#7BD0C4]/10 text-[#7BD0C4] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-4 vt-title-serif text-[22px] font-medium text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-[22rem] font-[Montserrat] text-[13px] font-light leading-[1.6] text-white/55">
                    {service.description}
                  </p>

                  <span className="mt-6 inline-flex items-center font-[Montserrat] text-[11px] uppercase tracking-[0.15em] text-[#F5D08B] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    Learn more →
                  </span>

                  <span className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 bg-[#F5D08B] transition-transform duration-300 group-hover:scale-x-100" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
