import { useEffect, useMemo, useRef, useState } from "react";
import { Camera, Download, Layout, MessageSquare } from "lucide-react";

type Step = {
  id: string;
  title: string;
  description: string;
  duration: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const steps: Step[] = [
  {
    id: "discovery",
    title: "Discovery Call",
    description: "We learn about your vision, goals and style preferences.",
    duration: "~30 min",
    Icon: MessageSquare,
  },
  {
    id: "planning",
    title: "Creative Planning",
    description: "We design the shot list, locations and mood board together.",
    duration: "~1–2 days",
    Icon: Layout,
  },
  {
    id: "shoot",
    title: "The Shoot",
    description: "Professional session with direction, lighting and creative execution.",
    duration: "~4–8 hours",
    Icon: Camera,
  },
  {
    id: "delivery",
    title: "Delivery & Revisions",
    description: "Edited gallery delivered within 72h, with revision rounds.",
    duration: "72 hours",
    Icon: Download,
  },
];

const ProcessFlow = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const progress = useMemo(() => {
    if (activeIndex < 0) return 0;
    const ratio = (activeIndex + 1) / (steps.length - 1);
    return Math.min(ratio, 1);
  }, [activeIndex]);

  useEffect(() => {
    if (!sectionRef.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return undefined;

    const timers: number[] = [];
    steps.forEach((_, index) => {
      const timer = window.setTimeout(() => setActiveIndex(index), index * 400);
      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [inView]);

  return (
    <section
      id="Process"
      ref={sectionRef}
      className="vt-section-dark vt-section-divider"
    >
      <div className="vt-noise-overlay" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[50rem] rounded-full bg-white/[0.015] blur-[120px]" />
      </div>

      <div className="vt-content-layer mx-auto max-w-7xl px-6 vt-section-pad">
        <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <p className="font-[Montserrat] text-[10px] uppercase tracking-[0.4em] text-white/40">
              How It Works
            </p>
            <h2 className="mt-4 vt-title-serif text-[clamp(40px,5vw,64px)] leading-[0.95] text-white">
              From Idea to
              <br />
              <em className="italic text-white/70">Delivery.</em>
            </h2>
          </div>
          <p className="font-[Montserrat] text-[14px] font-light leading-[1.7] text-white/55 max-w-xl">
            A structured flow that keeps every decision intentional, from the
            first conversation through the final gallery.
          </p>
        </div>

        <div className="mt-10 relative">
          <div className="hidden lg:block absolute left-6 right-6 top-6 h-px bg-white/10">
            <div
              className="h-full bg-[#F5D08B] transition-all duration-[600ms]"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="lg:hidden absolute left-6 top-6 bottom-6 w-[2px] bg-white/10">
            <div
              className="w-full bg-[#F5D08B] transition-all duration-[600ms]"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.Icon;
              const isActive = activeIndex >= index;

              return (
                <div
                  key={step.id}
                  className="relative"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="grid grid-cols-[60px_1fr] gap-4 lg:grid-cols-1 lg:gap-6">
                    <div className="relative z-10 flex items-start lg:items-center">
                      <div
                        className={[
                          "flex h-12 w-12 items-center justify-center rounded-full border",
                          "transition-all duration-300",
                          isActive
                            ? "border-[#F5D08B] bg-white/[0.05] shadow-[0_0_22px_rgba(245,208,139,0.25)]"
                            : "border-white/20 bg-white/[0.04]",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "vt-title-serif text-[22px] transition-colors duration-300",
                            isActive ? "text-white" : "text-white/50",
                          ].join(" ")}
                        >
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    <div
                      className={[
                        "group rounded-[4px] border bg-white/[0.02] p-6",
                        "transition-all duration-500",
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4",
                        "border-white/10",
                        "focus-within:outline-none focus-within:ring-1 focus-within:ring-[#F5D08B]/60",
                      ].join(" ")}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-9 w-9 items-center justify-center text-[#7BD0C4]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="rounded-full border border-[#F5D08B]/40 px-2 py-1 font-[Montserrat] text-[10px] uppercase tracking-[0.2em] text-[#F5D08B]/80">
                          {step.duration}
                        </span>
                      </div>

                      <span className="mt-5 inline-block h-px w-6 bg-[#F5D08B] transition-all duration-300 group-hover:w-12" />

                      <h3 className="mt-4 vt-title-serif text-[18px] font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 font-[Montserrat] text-[13px] leading-[1.65] text-white/55">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/55">
            Ready to start your project?
          </p>
          <a
            href="#Contact"
            className="inline-flex items-center justify-center rounded-[2px] bg-[#F5D08B] px-7 py-3 font-[Montserrat] text-[12px] uppercase tracking-[0.2em] text-[#050505] transition-all duration-200 hover:brightness-110 hover:shadow-[0_8px_32px_rgba(245,208,139,0.35)]"
          >
            Book a Discovery Call →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
