import { useEffect, useMemo, useRef, useState } from "react";
import {
  Film,
  MapPin,
  Package,
  Shield,
  Star,
  Zap,
} from "lucide-react";

type Benefit = {
  id: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  metric?: {
    value: number;
    suffix: string;
  };
};

const benefits: Benefit[] = [
  {
    id: "same-day",
    title: "Same-Day Previews",
    description:
      "Curated previews delivered within 24 hours of your session. Share fresh moments while the energy is still vivid.",
    Icon: Zap,
    metric: { value: 24, suffix: "h" },
  },
  {
    id: "cinematic",
    title: "Cinematic Editing",
    description:
      "Film-inspired grading, texture, and tonal control for every gallery. Your story lands with depth and atmosphere.",
    Icon: Film,
  },
  {
    id: "licensed",
    title: "Licensed Drone Ops",
    description:
      "Certified drone operations with safety-first planning on every flight. Aerials delivered with compliance and polish.",
    Icon: Shield,
  },
  {
    id: "location",
    title: "On-Location Flexibility",
    description:
      "We travel to studios, homes, and remote locations on demand. Lighting kits and crews adapt to your environment.",
    Icon: MapPin,
  },
  {
    id: "raw",
    title: "RAW File Delivery",
    description:
      "Secure access to RAW selections for archival and flexibility. Ideal for brands needing full post control.",
    Icon: Package,
  },
  {
    id: "guarantee",
    title: "Satisfaction Guarantee",
    description:
      "If you are not thrilled, we reshoot to make it right. Your confidence is protected from first click to final export.",
    Icon: Star,
    metric: { value: 100, suffix: "%" },
  },
];

const WhyUs = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [metricValues, setMetricValues] = useState<Record<string, number>>({});
  const [metricDone, setMetricDone] = useState<Record<string, boolean>>({});

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

  const metrics = useMemo(
    () => benefits.filter((benefit) => benefit.metric),
    [],
  );

  useEffect(() => {
    if (!inView) return undefined;

    const timeouts: number[] = [];
    const rafs: number[] = [];

    metrics.forEach((benefit, index) => {
      const metric = benefit.metric;
      if (!metric) return;

      const delay = index * 100;
      const timeoutId = window.setTimeout(() => {
        const start = performance.now();
        const duration = 1200;

        const animate = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const value = Math.round(metric.value * progress);

          setMetricValues((prev) => ({
            ...prev,
            [benefit.id]: value,
          }));

          if (progress < 1) {
            rafs.push(window.requestAnimationFrame(animate));
          } else {
            setMetricDone((prev) => ({
              ...prev,
              [benefit.id]: true,
            }));
          }
        };

        rafs.push(window.requestAnimationFrame(animate));
      }, delay);

      timeouts.push(timeoutId);
    });

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id));
      rafs.forEach((id) => window.cancelAnimationFrame(id));
    };
  }, [inView, metrics]);

  return (
    <section
      id="WhyUs"
      ref={sectionRef}
      className="vt-section-dark vt-section-divider relative py-12 md:py-16"
    >
      <div className="vt-noise-overlay opacity-50" />

      <div className="vt-content-layer mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <h2 className="vt-title-serif text-[clamp(40px,5vw,64px)] leading-[0.95] text-white">
              Why Clients
              <br />
              <em className="italic font-normal text-white/80">
                Choose Us.
              </em>
            </h2>
          </div>
          <p className="font-[Montserrat] text-[14px] font-light leading-[1.7] text-white/55 max-w-xl">
            We combine technical precision with artistic vision to deliver work
            that exceeds expectations every time.
          </p>
        </div>

        <div className="mt-10 h-px w-full bg-white/10" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.Icon;
            const metric = benefit.metric;
            const metricValue = metricValues[benefit.id] ?? 0;
            const metricReady = metric ? metricDone[benefit.id] : true;

            return (
              <button
                key={benefit.id}
                type="button"
                className={[
                  "group relative overflow-hidden rounded-[4px] border bg-white/[0.03] p-8 text-left",
                  "transition-all duration-300 ease-out",
                  "hover:bg-white/[0.06] hover:border-white/20",
                  "border-white/10 cursor-pointer",
                  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5D08B]/70",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6",
                ].join(" ")}
                style={{ transitionDelay: inView ? `${index * 100}ms` : "0ms" }}
              >
                {metric && (
                  <div
                    className={[
                      "absolute inset-0 flex items-center justify-center pointer-events-none",
                      "vt-title-serif text-[120px] text-white/[0.03]",
                      "transition-opacity duration-300",
                      metricDone[benefit.id] ? "opacity-0" : "opacity-100",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    {metricValue}
                    {metric.suffix}
                  </div>
                )}

                <div
                  className={[
                    "transition-opacity duration-300",
                    metricReady ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "relative flex h-12 w-12 items-center justify-center",
                      "transition-shadow duration-300",
                      "shadow-[0_0_0_rgba(123,208,196,0)]",
                      "group-hover:shadow-[0_0_32px_rgba(123,208,196,0.2)]",
                    ].join(" ")}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <span className="mt-5 inline-block h-px w-6 bg-[#F5D08B] transition-all duration-300 group-hover:w-12" />

                  <h3 className="mt-5 vt-title-serif text-[20px] font-semibold text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 font-[Montserrat] text-[13px] font-light leading-[1.65] text-white/55">
                    {benefit.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
