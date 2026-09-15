import { Link, useParams } from "react-router";
import { useEffect } from "react";
import { galleryItems, getGalleryBySlug } from "../data/galleryData";
import Header from "./Header";
import Footer from "./Footer";

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
      <div className="min-h-screen bg-[#050505] text-white">
        <Header />
        <div className="mx-auto flex min-h-[60vh] max-w-5xl flex-col items-center justify-center px-6 pt-24 text-center">
          <h1 className="font-[Cormorant_Garamond] text-4xl font-light uppercase text-white">
            Categoría no encontrada
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50">
            Esta categoría no existe o fue removida del catálogo.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center border border-white/30 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black"
          >
            Volver al inicio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const otherCategories = galleryItems.filter(
    (item) => item.slug !== currentCategory.slug,
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header />

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 md:px-10">
        <Link
          to="/#portafolio"
          className="mb-10 inline-flex items-center text-[12px] uppercase tracking-[0.2em] text-white/50 hover:text-white"
        >
          ← Volver a portafolio
        </Link>

        <section className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/40">
              Portafolio
            </p>
            <h1 className="font-[Cormorant_Garamond] text-[38px] font-light uppercase leading-tight text-white md:text-[48px]">
              Serie {currentCategory.label}
            </h1>
            <p className="mt-5 max-w-lg text-[14px] leading-relaxed text-white/55">
              {currentCategory.description} Una colección curada con tomas de
              esta categoría, coherente con la mirada del estudio.
            </p>
          </div>

          <img
            src={currentCategory.src}
            alt={currentCategory.alt}
            className="h-[24rem] w-full object-cover grayscale-[15%]"
          />
        </section>

        <section className="mt-20">
          <h2 className="mb-8 font-[Cormorant_Garamond] text-[28px] font-light text-white md:text-[34px]">
            Colección relacionada
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {currentCategory.gallery.map((photo, index) => (
              <figure key={`${photo.src}-${index}`} className="group relative overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[15%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <figcaption className="mt-2 text-[12px] text-white/45">
                  {photo.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-10">
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/40">
            Otras categorías
          </h3>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            {otherCategories.map((item) => (
              <Link
                key={item.slug}
                to={`/galeria/${item.slug}`}
                className="group flex items-center justify-between border border-white/10 px-5 py-4 transition-colors hover:border-white/30"
              >
                <span className="font-[Cormorant_Garamond] text-[22px] font-light text-white">
                  {item.label}
                </span>
                <span className="text-[12px] uppercase tracking-[0.2em] text-white/50 transition-transform group-hover:translate-x-1">
                  Ver serie →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default GalleryCategoryPage;
