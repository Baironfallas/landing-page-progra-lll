import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AboutUs = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="AboutUs"
      className="hero-section vt-section-dark"
      ref={sectionRef}
    >
      <div className="hero-inner">
        {/* ── LEFT COLUMN ── */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className={`hero-eyebrow ${visible ? "show" : ""}`}>
            <div className="eyebrow-line" />
            <span className="eyebrow-label">Fotografía de autor</span>
          </div>

          <h2 className={`hero-headline ${visible ? "show" : ""}`}>
            Transforma tus
            <br />
            Momentos <em>en</em>
            <br />
            Arte
          </h2>

          <div className={`hero-divider ${visible ? "show" : ""}`} />

          <p className={`hero-body ${visible ? "show" : ""}`}>
            Capturamos cada emoción, cada detalle, para que cada recuerdo sea
            inolvidable. Nuestra pasión es convertir instantes en piezas únicas
            que perduren para siempre.
          </p>

          <div className={`hero-cta-row ${visible ? "show" : ""}`}>
            <button
              className="btn-primary"
              onClick={() => scrollToSection("ContactForm")}
            >
              Descubre tu Sesión
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="btn-link"
              onClick={() => scrollToSection("Gallery")}
            >
              Ver portafolio
            </button>
          </div>
        </motion.div>

        {/* ── RIGHT COLUMN ── */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        >
          <div className="img-glow" />

          {/* Floating stat */}
          <motion.div
            className={`stat-card ${visible ? "show" : ""}`}
            animate={
              visible ? { y: [0, 6, 0] } : { y: 0 }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="stat-num">+340</span>
            <span className="stat-label">Sesiones realizadas</span>
          </motion.div>

          <motion.div
            className={`img-frame ${visible ? "show" : ""}`}
            animate={
              visible ? { y: [0, -8, 0] } : { y: 0 }
            }
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="img-inner">
              <img
                src="https://i.ibb.co/rHkNqGP/imagen-about-me.jpg"
                alt="Sesión fotográfica profesional"
                loading="lazy"
              />
              <div className="img-overlay-bottom" />
              <div className="img-overlay-left" />

              <div className="img-tag">
                <span className="img-tag-label">Estudio</span>
                <span className="img-tag-value">Sesión Perfecta</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
