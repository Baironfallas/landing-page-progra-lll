import { Link, useParams } from "react-router";
import { useEffect } from "react";
import { TbAperture } from "react-icons/tb";
import { galleryItems, getGalleryBySlug } from "../data/galleryData";

const GalleryCategoryPage = () => {
  const { categorySlug } = useParams();
  const currentCategory = categorySlug
    ? getGalleryBySlug(categorySlug)
    : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [categorySlug]);

  if (!currentCategory) {
    return (
      <section
        className="relative min-h-screen bg-[#050505] text-white overflow-hidden"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-[1] opacity-40"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-[2] mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
          <TbAperture className="h-14 w-14 text-white/60" />
          <h1
            className="mt-6 text-4xl font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Categoria no encontrada
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50">
            Esta categoria no existe o fue removida del catalogo visual.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#050505]"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    );
  }

  const otherCategories = galleryItems.filter(
    (item) => item.slug !== currentCategory.slug,
  );

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-[2] mx-auto max-w-7xl px-6 py-10 md:py-14">
        <header className="mb-12 flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-8 md:flex-row md:items-center">
          <Link to="/" className="group flex items-center gap-3 select-none">
            <TbAperture className="h-8 w-8 stroke-[1.5] text-white/80 transition-transform duration-500 group-hover:rotate-180" />
            <span className="text-2xl font-bold tracking-tight text-white">
              Snapsy
            </span>
          </Link>

          <Link
            to="/#Gallery"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/75 transition-all duration-300 hover:border-white/45 hover:text-white"
          >
            Volver a galeria
          </Link>
        </header>

        <section className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div className="h-px w-10 bg-white/30" />
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-white/40">
                Galeria extendida
              </span>
            </div>

            <h1
              className="text-4xl font-light leading-tight md:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Serie <em className="text-white/70">{currentCategory.label}</em>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/50">
              {currentCategory.description} Explora una coleccion curada con
              nuevas tomas de esta categoria y una direccion visual coherente
              con la identidad de la marca.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <img
              src={currentCategory.src}
              alt={currentCategory.alt}
              className="h-[26rem] w-full object-cover filter grayscale-[18%] contrast-[1.05]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/20 opacity-85" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-6">
              <p className="text-[0.6rem] uppercase tracking-[0.24em] text-white/40">
                Categoria
              </p>
              <p
                className="mt-1 text-2xl font-light text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {currentCategory.label}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2
              className="text-3xl font-light text-white md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Coleccion relacionada
            </h2>
            <div className="h-px w-24 bg-white/20" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentCategory.gallery.map((photo, index) => (
              <figure key={`${photo.src}-${index}`} className="group relative overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover filter grayscale-[12%] contrast-[1.04] transition-all duration-700 group-hover:scale-[1.05] group-hover:grayscale-0"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/20 opacity-80" />
                </div>

                <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/45">
                    Fotografia {index + 1}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-white/70">
                    {photo.alt}
                  </p>
                </figcaption>

                <div className="pointer-events-none absolute inset-0 border border-white/0 transition-all duration-500 group-hover:inset-[-4px] group-hover:border-white/10" />
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-10">
          <h3 className="text-[0.65rem] uppercase tracking-[0.24em] text-white/45">
            Otras categorias
          </h3>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            {otherCategories.map((item) => (
              <Link
                key={item.slug}
                to={`/galeria/${item.slug}`}
                className="group flex items-center justify-between border border-white/10 px-5 py-4 transition-all duration-300 hover:border-white/35 hover:bg-white/[0.02]"
              >
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40">
                    Categoria
                  </p>
                  <p
                    className="mt-1 text-2xl font-light text-white"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.label}
                  </p>
                </div>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-white/55 transition-transform duration-300 group-hover:translate-x-1">
                  Ver serie
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default GalleryCategoryPage;