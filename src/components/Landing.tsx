import { useState } from "react";
import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa";
import { galleryItems } from "../data/galleryData";
import BookingForm from "./BookingForm";

const aboutImg =
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=1200&q=80";
const heroMain =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80";
const bandImg =
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80";
const ctaBg =
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80";

const filters = [
  "Todos",
  ...Array.from(new Set(galleryItems.map((item) => item.label))),
];

const imageOf = (slug: string) =>
  galleryItems.find((item) => item.slug === slug)?.src ?? "";

const services = [
  {
    title: "Retrato",
    description:
      "Sesiones personales y de pareja con dirección natural, en exteriores o estudio.",
    details: ["1 a 2 horas", "25 fotos editadas", "Galería privada online"],
    price: "Desde $120",
    src: imageOf("retrato-1"),
    slug: "retrato-1",
  },
  {
    title: "Bodas",
    description:
      "Cobertura documental del día completo, de los preparativos a la última canción.",
    details: ["Cobertura de 8 horas", "400+ fotos editadas", "Álbum impreso opcional"],
    price: "Desde $950",
    src: imageOf("bodas-1"),
    slug: "bodas-1",
  },
  {
    title: "Editorial",
    description:
      "Imágenes para marcas, productos y prensa con una estética cuidada y coherente.",
    details: ["Concepto creativo", "Licencia comercial", "Entrega en 7 días"],
    price: "Desde $400",
    src: imageOf("editorial-1"),
    slug: "editorial-1",
  },
];

const steps = [
  {
    title: "Conversamos",
    text: "Me cuentas tu idea, el estilo que buscas y lo que quieres sentir al ver las fotos.",
  },
  {
    title: "Planificamos",
    text: "Elegimos locación, horario de luz, vestuario y armamos juntas la propuesta visual.",
  },
  {
    title: "La sesión",
    text: "Un espacio relajado, sin poses forzadas. Te guío para que todo fluya con naturalidad.",
  },
  {
    title: "Entrega",
    text: "Edición artesanal y una galería privada lista para descargar y compartir.",
  },
];

const testimonials = [
  {
    name: "Mariana & Luis",
    role: "Boda en Monteverde",
    quote:
      "Daylani logró capturar cosas que ni siquiera vimos ese día. Cada vez que abrimos el álbum volvemos a sentirlo todo.",
  },
  {
    name: "Andrea Solís",
    role: "Sesión de retrato",
    quote:
      "Nunca me había sentido tan cómoda frente a una cámara. Las fotos se sienten honestas, como yo.",
  },
  {
    name: "Casa Brava",
    role: "Campaña editorial",
    quote:
      "Entendió nuestra marca desde la primera reunión. Las imágenes elevaron por completo nuestra presencia digital.",
  },
];

const faqs = [
  {
    question: "¿Cuánto tiempo tardan en estar listas las fotos?",
    answer:
      "Las sesiones de retrato se entregan en 7 a 10 días hábiles. Las bodas, entre 4 y 6 semanas, con un adelanto de 20 fotos durante la primera semana.",
  },
  {
    question: "¿Cómo reservo una fecha?",
    answer:
      "Escríbeme por el formulario con la fecha tentativa. Si está disponible, la fecha queda apartada con un adelanto del 30 % y un contrato sencillo.",
  },
  {
    question: "¿Viajas fuera de la ciudad?",
    answer:
      "Sí. Trabajo en todo el país y también en el extranjero. Los gastos de traslado y hospedaje se cotizan aparte según el destino.",
  },
  {
    question: "¿Qué me pongo para la sesión?",
    answer:
      "Antes de la sesión te envío una guía de vestuario. En general recomiendo tonos neutros, texturas naturales y ropa con la que te sientas tú.",
  },
  {
    question: "¿Entregas los archivos originales sin editar?",
    answer:
      "No. Cada imagen entregada pasa por una edición cuidada para mantener un estilo coherente. Sí puedes elegir más fotos de la selección final.",
  },
];

const instagramUrl = "https://www.instagram.com/";
const instagramShots = galleryItems.flatMap((item) => item.gallery.slice(1, 2)).slice(0, 6);

const Landing = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonial = testimonials[activeTestimonial];

  const visibleItems =
    activeFilter === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.label === activeFilter);

  return (
    <>
      {/* Hero */}
      <section id="inicio" className="relative flex h-screen min-h-[640px] items-end overflow-hidden">
        <img
          src={heroMain}
          alt="Retrato con el cabello al viento"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30" />

        <div className="relative z-[1] mx-auto w-full max-w-7xl px-6 pb-20 md:px-10">
          <h1 className="max-w-2xl font-[Cormorant_Garamond] text-[52px] font-light uppercase leading-[1.05] text-white md:text-[76px]">
            Momentos
            <br />
            que inspiran
          </h1>
          <p className="mt-5 max-w-md text-[13px] uppercase tracking-[0.28em] text-white/60">
            Fotografía para personas, marcas y lugares auténticos
          </p>
          <a
            href="#portafolio"
            className="mt-8 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.24em] text-white transition-colors hover:text-white/60"
          >
            <span className="h-px w-8 bg-white" />
            Explorar →
          </a>
        </div>
      </section>

      {/* Second band */}
      <section className="relative flex h-[70vh] min-h-[440px] items-center overflow-hidden">
        <img
          src={bandImg}
          alt="Camino de montaña al atardecer"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.4] grayscale"
        />
        <div className="relative z-[1] mx-auto w-full max-w-7xl px-6 text-right md:px-10">
          <h2 className="font-[Cormorant_Garamond] text-[40px] font-light uppercase leading-[1.1] text-white md:text-[56px]">
            Lugares
            <br />
            Personas
            <br />
            Historias
          </h2>
          <p className="mt-4 text-[12px] uppercase tracking-[0.28em] text-white/50">
            Un mundo, muchas perspectivas
          </p>
          <a
            href="#portafolio"
            className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.24em] text-white transition-colors hover:text-white/60"
          >
            Ver portafolio →
          </a>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portafolio" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/40">
          Portafolio
        </p>

        <div className="mb-10 flex flex-wrap gap-6 border-b border-white/10 pb-4 text-[12px] uppercase tracking-[0.2em]">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={[
                "pb-1 transition-colors",
                activeFilter === filter
                  ? "border-b border-white text-white"
                  : "text-white/40 hover:text-white/70",
              ].join(" ")}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {visibleItems.map(({ slug, label, src, alt }) => (
            <Link
              key={slug}
              to={`/galeria/${slug}`}
              className="group relative block aspect-[3/4] overflow-hidden"
            >
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover grayscale-[20%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-[12px] uppercase tracking-[0.15em] text-white">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* About / quote */}
      <section id="sobre-mi" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <img
            src={aboutImg}
            alt="Daylani Fallas con su cámara"
            className="h-[440px] w-full object-cover grayscale"
          />

          <div>
            <h2 className="font-[Cormorant_Garamond] text-[34px] font-light leading-tight text-white md:text-[42px]">
              Creo en fotografías
              <br />
              que se sienten.
            </h2>
            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-white/55">
              Soy Daylani Fallas, fotógrafa apasionada por contar historias a
              través de imágenes. Me inspira la gente real, los lugares
              extraordinarios y los momentos que parecen simples, pero lo
              dicen todo.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center border border-white/30 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black"
            >
              Conoce más
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/40">
              Servicios
            </p>
            <h2 className="font-[Cormorant_Garamond] text-[34px] font-light uppercase leading-tight text-white md:text-[46px]">
              Cada historia
              <br />
              merece su encuadre
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-white/55">
            Sesiones pensadas a tu medida. Todos los paquetes incluyen
            asesoría previa y edición profesional.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {services.map(({ title, description, details, price, src, slug }, i) => (
            <article key={title} className="group flex flex-col">
              <Link to={`/galeria/${slug}`} className="relative block aspect-[4/5] overflow-hidden">
                <img
                  src={src}
                  alt={`Fotografía de ${title.toLowerCase()}`}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <span className="absolute left-4 top-4 font-[Cormorant_Garamond] text-[15px] tracking-[0.2em] text-white/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
              <div className="flex flex-1 flex-col border-b border-white/10 pb-6 pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-[Cormorant_Garamond] text-[28px] font-light uppercase text-white">
                    {title}
                  </h3>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                    {price}
                  </span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-white/55">{description}</p>
                <ul className="mt-5 space-y-2 text-[12px] uppercase tracking-[0.16em] text-white/40">
                  {details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3">
                      <span className="h-px w-4 bg-white/30" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/40">
            Proceso
          </p>
          <h2 className="mb-16 font-[Cormorant_Garamond] text-[34px] font-light leading-tight text-white md:text-[42px]">
            Así trabajamos juntos.
          </h2>

          <ol className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map(({ title, text }, i) => (
              <li key={title} className="relative border-t border-white/15 pt-8">
                <span className="absolute -top-px left-0 h-px w-10 bg-white" />
                <span className="font-[Cormorant_Garamond] text-[48px] font-light leading-none text-white/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[13px] font-medium uppercase tracking-[0.24em] text-white">
                  {title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/55">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="mx-auto max-w-5xl px-6 py-28 text-center md:px-10">
        <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/40">
          Testimonios
        </p>

        <figure key={activeTestimonial} className="animate-[gallery-lightbox-fade_0.6s_ease]">
          <span className="block font-[Cormorant_Garamond] text-[80px] leading-[0.5] text-white/20">
            “
          </span>
          <blockquote className="mx-auto mt-4 max-w-3xl font-[Cormorant_Garamond] text-[26px] font-light italic leading-snug text-white md:text-[36px]">
            {testimonial.quote}
          </blockquote>
          <figcaption className="mt-8 text-[12px] uppercase tracking-[0.24em] text-white/60">
            {testimonial.name}
            <span className="mt-1 block text-[11px] tracking-[0.2em] text-white/35">
              {testimonial.role}
            </span>
          </figcaption>
        </figure>

        <div className="mt-12 flex justify-center gap-3">
          {testimonials.map(({ name }, i) => (
            <button
              key={name}
              onClick={() => setActiveTestimonial(i)}
              aria-label={`Ver testimonio de ${name}`}
              className="group py-3"
            >
              <span
                className={[
                  "block h-px transition-all duration-300",
                  activeTestimonial === i ? "w-12 bg-white" : "w-6 bg-white/30 group-hover:bg-white/60",
                ].join(" ")}
              />
            </button>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="preguntas" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/40">
              Preguntas frecuentes
            </p>
            <h2 className="font-[Cormorant_Garamond] text-[34px] font-light leading-tight text-white md:text-[42px]">
              Lo que suelen
              <br />
              preguntarme.
            </h2>
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-white/55">
              ¿Tienes otra duda? Escríbeme y te respondo personalmente.
            </p>
          </div>

          <div className="border-t border-white/10">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group border-b border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[15px] text-white/85 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
                  {question}
                  <span className="relative h-3 w-3 shrink-0">
                    <span className="absolute left-0 top-1/2 h-px w-3 bg-white/60" />
                    <span className="absolute left-1/2 top-0 h-3 w-px bg-white/60 transition-transform duration-300 group-open:rotate-90" />
                  </span>
                </summary>
                <p className="max-w-xl pb-6 text-[14px] leading-relaxed text-white/55">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="relative overflow-hidden">
        <img
          src={ctaBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover brightness-[0.2] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />

        <div className="relative z-[1] mx-auto grid max-w-7xl gap-14 px-6 py-28 md:grid-cols-[1fr_1.4fr] md:px-10">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/40">
              Contacto
            </p>
            <h2 className="font-[Cormorant_Garamond] text-[36px] font-light uppercase leading-[1.1] text-white md:text-[50px]">
              Hagamos algo
              <br />
              extraordinario
            </h2>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-white/55">
              Cuéntame qué tienes en mente. Respondo todos los mensajes en
              menos de 48 horas.
            </p>
            <ul className="mt-10 space-y-3 text-[12px] uppercase tracking-[0.2em] text-white/50">
              <li>
                <a href="mailto:hola@daylanifallas.com" className="transition-colors hover:text-white">
                  hola@daylanifallas.com
                </a>
              </li>
              <li>San José, Costa Rica</li>
            </ul>
          </div>

          <BookingForm />
        </div>
      </section>

      {/* Instagram */}
      <section className="py-20">
        <div className="mx-auto mb-8 flex max-w-7xl items-end justify-between px-6 md:px-10">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/40">
              Detrás de cámara
            </p>
            <h2 className="font-[Cormorant_Garamond] text-[28px] font-light text-white md:text-[34px]">
              @daylanifallas
            </h2>
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/60 transition-colors hover:text-white"
          >
            <FaInstagram className="h-4 w-4" />
            <span className="hidden sm:inline">Seguir en Instagram</span>
          </a>
        </div>

        <div className="grid grid-cols-3 gap-1 md:grid-cols-6">
          {instagramShots.map(({ src, alt }) => (
            <a
              key={src}
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square overflow-hidden"
            >
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <FaInstagram className="h-5 w-5 text-white" />
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Landing;
