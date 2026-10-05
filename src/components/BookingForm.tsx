import { FormEvent, useState } from "react";

const contactEmail = "hola@daylanifallas.com";
// Endpoint opcional (p. ej. Formspree). Sin él, el formulario abre el correo del visitante.
const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

const sessionTypes = ["Retrato", "Bodas", "Editorial", "Otro"];

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full border-b border-white/20 bg-transparent py-3 text-[14px] text-white placeholder:text-white/30 transition-colors focus:border-white focus:outline-none";
const labelClass = "text-[11px] uppercase tracking-[0.22em] text-white/45";

const BookingForm = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!formEndpoint) {
      const body = `Nombre: ${data.name}\nCorreo: ${data.email}\nSesión: ${data.session}\nFecha tentativa: ${data.date || "Por definir"}\n\n${data.message}`;
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
        `Reserva de sesión · ${data.session}`
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex min-h-[360px] flex-col justify-center">
        <h3 className="font-[Cormorant_Garamond] text-[32px] font-light text-white">
          ¡Gracias por escribir!
        </h3>
        <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/55">
          Recibí tu mensaje y te responderé en menos de 48 horas.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 self-start text-[11px] uppercase tracking-[0.22em] text-white/60 transition-colors hover:text-white"
        >
          Enviar otro mensaje →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 sm:grid-cols-2">
      <label className="flex flex-col gap-1">
        <span className={labelClass}>Nombre</span>
        <input name="name" required autoComplete="name" placeholder="Tu nombre" className={fieldClass} />
      </label>
      <label className="flex flex-col gap-1">
        <span className={labelClass}>Correo</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="tu@correo.com"
          className={fieldClass}
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className={labelClass}>Tipo de sesión</span>
        <select name="session" required defaultValue="" className={`${fieldClass} [&>option]:bg-[#050505]`}>
          <option value="" disabled>
            Selecciona una opción
          </option>
          {sessionTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-1">
        <span className={labelClass}>Fecha tentativa</span>
        <input name="date" type="date" className={`${fieldClass} [color-scheme:dark]`} />
      </label>
      <label className="flex flex-col gap-1 sm:col-span-2">
        <span className={labelClass}>Cuéntame tu idea</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Lugar, estilo, número de personas…"
          className={`${fieldClass} resize-none`}
        />
      </label>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center border border-white/40 px-8 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black disabled:opacity-50"
        >
          {status === "sending" ? "Enviando…" : "Enviar mensaje"}
        </button>
        {status === "error" && (
          <p className="text-[13px] text-white/60">
            No se pudo enviar. Escríbeme directo a{" "}
            <a href={`mailto:${contactEmail}`} className="underline">
              {contactEmail}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
};

export default BookingForm;
