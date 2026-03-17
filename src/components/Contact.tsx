import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="Contact" className="bg-[#050505] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.25em] text-white/40 mb-4">
            Contáctanos
          </span>
          <h2
            className="text-4xl md:text-5xl font-light text-white leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Hablemos de tu{" "}
            <em className="italic text-white/70">próximo proyecto</em>
          </h2>
          <div className="w-12 h-px bg-white/20 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Info column */}
          <div className="flex flex-col gap-8">
            <p
              className="text-sm leading-relaxed text-white/45 max-w-md"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              ¿Tienes una idea en mente? Nos encantaría escucharte. Completa el
              formulario o contáctanos directamente y te responderemos lo antes
              posible.
            </p>

            <div className="flex flex-col gap-5">
              {/* Email */}
              <a
                href="mailto:contacto@snapsy.com"
                className="group flex items-center gap-4 text-white/50 transition-colors duration-300 hover:text-white"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 group-hover:border-white/30 transition-colors duration-300">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <span
                  className="text-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  contacto@snapsy.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+50612345678"
                className="group flex items-center gap-4 text-white/50 transition-colors duration-300 hover:text-white"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 group-hover:border-white/30 transition-colors duration-300">
                  <FaPhone className="w-4 h-4" />
                </div>
                <span
                  className="text-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  +506 1234 5678
                </span>
              </a>

              {/* Location */}
              <div className="group flex items-center gap-4 text-white/50">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <span
                  className="text-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  San José, Costa Rica
                </span>
              </div>
            </div>
          </div>

          {/* Form column */}
          <form
            id="ContactForm"
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full bg-transparent border border-white/10 text-white text-sm px-4 py-3
                  placeholder:text-white/25 outline-none
                  transition-colors duration-300 focus:border-white/40"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-white/10 text-white text-sm px-4 py-3
                  placeholder:text-white/25 outline-none
                  transition-colors duration-300 focus:border-white/40"
              />
            </div>

            <input
              type="text"
              placeholder="Asunto"
              className="w-full bg-transparent border border-white/10 text-white text-sm px-4 py-3
                placeholder:text-white/25 outline-none
                transition-colors duration-300 focus:border-white/40"
            />

            <textarea
              rows={5}
              placeholder="Tu mensaje..."
              className="w-full bg-transparent border border-white/10 text-white text-sm px-4 py-3
                placeholder:text-white/25 outline-none resize-none
                transition-colors duration-300 focus:border-white/40"
            />

            <button
              type="submit"
              className="self-start inline-flex items-center gap-3 px-8 py-3 bg-white text-[#050505]
                text-xs font-semibold uppercase tracking-[0.18em] cursor-pointer
                transition-all duration-300
                hover:bg-transparent hover:text-white hover:outline hover:outline-1 hover:outline-white/40 hover:-translate-y-0.5
                active:translate-y-0"
            >
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
