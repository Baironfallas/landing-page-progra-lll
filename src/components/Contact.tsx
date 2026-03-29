import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheck,
  FaExclamationCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formState, setFormState] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!formState.nombre.trim()) {
      setErrorMessage("Por favor, ingresa tu nombre");
      setSubmitStatus("error");
      return;
    }

    if (!formState.email.trim()) {
      setErrorMessage("Por favor, ingresa tu email");
      setSubmitStatus("error");
      return;
    }

    if (!validateEmail(formState.email)) {
      setErrorMessage("Por favor, ingresa un email válido");
      setSubmitStatus("error");
      return;
    }

    if (!formState.asunto.trim()) {
      setErrorMessage("Por favor, ingresa un asunto");
      setSubmitStatus("error");
      return;
    }

    if (!formState.mensaje.trim()) {
      setErrorMessage("Por favor, ingresa tu mensaje");
      setSubmitStatus("error");
      return;
    }

    setSubmitStatus("loading");
    setErrorMessage("");

    // Simular envío (en producción, aquí iría la API call)
    setTimeout(() => {
      setSubmitStatus("success");
      setFormState({ nombre: "", email: "", asunto: "", mensaje: "" });

      // Volver a estado idle después de 3 segundos
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 1200);
  };

  return (
    <section
      id="Contact"
      className="vt-section-dark vt-section-divider vt-section-pad px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="vt-kicker inline-block mb-3 sm:mb-4 text-[0.6rem]">
            Contáctanos
          </span>
          <h2 className="vt-title-serif text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight mb-4 sm:mb-6">
            Hablemos de tu{" "}
            <em className="italic text-white/70 block sm:inline">
              próximo proyecto
            </em>
          </h2>
          <div className="vt-divider mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Info column */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <p className="vt-body-copy text-sm sm:text-base max-w-md">
              ¿Tienes una idea en mente? Nos encantaría escucharte. Completa el
              formulario o contáctanos directamente y te responderemos lo antes
              posible.
            </p>

            {/* Trust statement */}
            <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10">
              <p className="text-xs sm:text-sm text-white/60 flex items-start gap-3">
                <span className="text-green-400/80 flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span>
                  <strong className="text-white/80">
                    Respondemos en menos de 24h
                  </strong>
                  <br />
                  Tu mensaje llegará a nuestro equipo inmediatamente.
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-5">
              {/* Email */}
              <a
                href="mailto:contacto@snapsy.com"
                className="vt-contact-link group flex items-center gap-3 sm:gap-4"
              >
                <div className="vt-contact-icon flex-shrink-0">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm break-all">
                  contacto@snapsy.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+50612345678"
                className="vt-contact-link group flex items-center gap-3 sm:gap-4"
              >
                <div className="vt-contact-icon flex-shrink-0">
                  <FaPhone className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm">+506 1234 5678</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 sm:gap-4 text-white/50">
                <div className="vt-contact-icon flex-shrink-0">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm">San José, Costa Rica</span>
              </div>
            </div>
          </div>

          {/* Form column */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:gap-5"
          >
            {/* Success message */}
            {submitStatus === "success" && (
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <FaCheck className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-green-300">
                  <p className="font-semibold">¡Mensaje enviado!</p>
                  <p className="text-green-200/70 mt-1">
                    Gracias por contactarnos. Responderemos pronto.
                  </p>
                </div>
              </div>
            )}

            {/* Error message */}
            {submitStatus === "error" && errorMessage && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <FaExclamationCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-red-300">
                  <p className="font-semibold">Error</p>
                  <p className="text-red-200/70 mt-1">{errorMessage}</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
              <input
                type="text"
                name="nombre"
                value={formState.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                disabled={submitStatus === "loading"}
                className="vt-field text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Email"
                disabled={submitStatus === "loading"}
                className="vt-field text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <input
              type="text"
              name="asunto"
              value={formState.asunto}
              onChange={handleChange}
              placeholder="Asunto"
              disabled={submitStatus === "loading"}
              className="vt-field text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            />

            <textarea
              rows={5}
              name="mensaje"
              value={formState.mensaje}
              onChange={handleChange}
              placeholder="Tu mensaje..."
              disabled={submitStatus === "loading"}
              className="vt-field resize-none text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            />

            <button
              type="submit"
              disabled={submitStatus === "loading"}
              className={[
                "vt-btn-primary text-xs sm:text-sm relative",
                "transition-all duration-300",
                submitStatus === "loading"
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:shadow-lg",
              ].join(" ")}
            >
              {submitStatus === "loading" ? (
                <>
                  <span className="opacity-0">Enviar Mensaje</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" />
                      <span
                        className="w-1.5 h-1.5 bg-current rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <span
                        className="w-1.5 h-1.5 bg-current rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
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
                </>
              )}
            </button>

            {/* Loading state hint */}
            {submitStatus === "loading" && (
              <p className="text-xs text-white/40 text-center">
                Enviando tu mensaje...
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
