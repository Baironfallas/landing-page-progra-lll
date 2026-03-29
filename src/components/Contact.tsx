import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="Contact" className="vt-section-dark vt-section-pad px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="vt-kicker inline-block mb-4">Contáctanos</span>
          <h2 className="vt-title-serif text-4xl md:text-5xl font-light text-white leading-tight">
            Hablemos de tu{" "}
            <em className="italic text-white/70">próximo proyecto</em>
          </h2>
          <div className="vt-divider mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Info column */}
          <div className="flex flex-col gap-8">
            <p className="vt-body-copy max-w-md">
              ¿Tienes una idea en mente? Nos encantaría escucharte. Completa el
              formulario o contáctanos directamente y te responderemos lo antes
              posible.
            </p>

            <div className="flex flex-col gap-5">
              {/* Email */}
              <a
                href="mailto:contacto@snapsy.com"
                className="vt-contact-link group flex items-center gap-4"
              >
                <div className="vt-contact-icon">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <span className="text-sm">contacto@snapsy.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+50612345678"
                className="vt-contact-link group flex items-center gap-4"
              >
                <div className="vt-contact-icon">
                  <FaPhone className="w-4 h-4" />
                </div>
                <span className="text-sm">+506 1234 5678</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 text-white/50">
                <div className="vt-contact-icon">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <span className="text-sm">San José, Costa Rica</span>
              </div>
            </div>
          </div>

          {/* Form column */}
          <form
            id="ContactForm"
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="text" placeholder="Nombre" className="vt-field" />
              <input type="email" placeholder="Email" className="vt-field" />
            </div>

            <input type="text" placeholder="Asunto" className="vt-field" />

            <textarea
              rows={5}
              placeholder="Tu mensaje..."
              className="vt-field resize-none"
            />

            <button type="submit" className="vt-btn-primary">
              Enviar Mensaje
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
