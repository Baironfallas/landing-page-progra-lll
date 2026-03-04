import { useState, useEffect, useRef } from "react";
import { MdCamera } from "react-icons/md";
import { PiDroneLight, PiDroneFill } from "react-icons/pi";
import { IoCalendarNumberSharp } from "react-icons/io5";

const services = [
  {
    num: "01",
    title: "Fotografía Profesional",
    Icon: MdCamera,
    tag: "Retratos · Moda · Producto",
    desc: "Imágenes de alta calidad para eventos, retratos, productos y publicidad, adaptadas con precisión a cada narrativa visual.",
  },
  {
    num: "02",
    title: "Fotografía con Dron",
    Icon: PiDroneLight,
    tag: "Aérea · Arquitectura",
    desc: "Perspectivas aéreas únicas que transforman cualquier escenario en una composición cinematográfica de gran impacto.",
  },
  {
    num: "03",
    title: "Videos con Dron",
    Icon: PiDroneFill,
    tag: "Eventos · Promo · Aérea",
    desc: "Secuencias aéreas dinámicas y fluidas, ideales para elevar la producción de eventos, marcas y proyectos visuales.",
  },
  {
    num: "04",
    title: "Cobertura de Eventos",
    Icon: IoCalendarNumberSharp,
    tag: "Bodas · Corp · Fiestas",
    desc: "Documentamos cada momento con autenticidad: bodas, eventos corporativos y celebraciones que merecen ser recordadas.",
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

const Services = () => {
  const [sectionRef, inView] = useInView(0.1) as [
    React.RefObject<HTMLElement>,
    boolean,
  ];
  const [, setHovered] = useState<number | null>(null);

  return (
    <section id="Services" className="srv-section" ref={sectionRef}>
      <div className="srv-inner">
        {/* Header */}
        <header className="srv-header">
          <div className="srv-header-left">
            <div className={`srv-eyebrow ${inView ? "show" : ""}`}>
              <div className="eyebrow-dash" />
              <span className="eyebrow-text">Lo que hacemos</span>
            </div>
            <h2 className={`srv-title ${inView ? "show" : ""}`}>
              Nuestros <em>Servicios</em>
            </h2>
          </div>
          <div className={`srv-header-right ${inView ? "show" : ""}`}>
            <p className="srv-header-desc">
              Cada proyecto es una historia única. Trabajamos con precisión y
              sensibilidad artística para capturar lo que las palabras no
              pueden.
            </p>
          </div>
        </header>

        {/* Grid */}
        <div className="srv-grid">
          {services.map(({ num, title, Icon, tag, desc }, i) => (
            <article
              key={num}
              className={`srv-card ${inView ? "show" : ""}`}
              style={{ transitionDelay: inView ? `${0.3 + i * 0.1}s` : "0s" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="srv-card-bg" />
              <div className="srv-card-accent" />

              <div className="srv-card-inner">
                <div className="srv-card-top">
                  <span className="srv-card-num">{num}</span>
                  <div className="srv-icon-wrap">
                    <Icon />
                  </div>
                </div>

                <div className="srv-card-body">
                  <span className="srv-card-tag">{tag}</span>
                  <h3 className="srv-card-title">{title}</h3>
                  <p className="srv-card-desc">{desc}</p>
                </div>

                <div className="srv-card-footer">
                  <span className="srv-card-link">Ver más</span>
                  <div className="srv-card-arrow" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={`srv-bottom ${inView ? "show" : ""}`}>
          <div className="srv-bottom-line" />
          <span className="srv-bottom-text">
            Disponible para nuevos proyectos
          </span>
          <div className="srv-bottom-line" />
          <button className="srv-cta-btn">
            Consulta gratuita
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1 6h10M7 2l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
