import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

type GalleryItem = {
  id: string;
  title: string;
  category: "Portraits" | "Events" | "Commercial" | "Aerial";
  chip: string;
  src: string;
  slot: number;
  aspect: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: "portrait-1",
    title: "Portrait Study",
    category: "Portraits",
    chip: "Portrait",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800",
    slot: 1,
    aspect: "3 / 4",
  },
  {
    id: "event-1",
    title: "Wedding Editorial",
    category: "Events",
    chip: "Event",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    slot: 2,
    aspect: "16 / 9",
  },
  {
    id: "aerial-1",
    title: "Aerial Motion",
    category: "Aerial",
    chip: "Aerial",
    src: "https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?w=800",
    slot: 3,
    aspect: "16 / 9",
  },
  {
    id: "commercial-1",
    title: "Brand Campaign",
    category: "Commercial",
    chip: "Commercial",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
    slot: 4,
    aspect: "1 / 1",
  },
  {
    id: "retouch-1",
    title: "Studio Retouch",
    category: "Commercial",
    chip: "Retouching",
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
    slot: 5,
    aspect: "1 / 1",
  },
  {
    id: "video-1",
    title: "Film Production",
    category: "Commercial",
    chip: "Video",
    src: "https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=800",
    slot: 6,
    aspect: "16 / 9",
  },
  {
    id: "event-2",
    title: "Live Moments",
    category: "Events",
    chip: "Event",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
    slot: 7,
    aspect: "21 / 9",
  },
  {
    id: "portrait-2",
    title: "Portrait in Color",
    category: "Portraits",
    chip: "Portrait",
    src: "https://images.unsplash.com/photo-1520635166053-2b4f84df5ef5?w=800",
    slot: 8,
    aspect: "21 / 9",
  },
];

const filters = ["All", "Portraits", "Events", "Commercial", "Aerial"] as const;
type Filter = (typeof filters)[number];

const GalleryServices = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [isFiltering, setIsFiltering] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [inView, setInView] = useState(false);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    setIsFiltering(true);
    setLightboxIndex(null);
    const timer = window.setTimeout(() => setIsFiltering(false), 300);
    return () => window.clearTimeout(timer);
  }, [activeFilter]);

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

  const itemsLength = filteredItems.length;
  const isLightboxOpen = lightboxIndex !== null && itemsLength > 0;
  const currentItem = isLightboxOpen ? filteredItems[lightboxIndex] : null;

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % itemsLength;
    });
  }, [itemsLength]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return 0;
      return (prev - 1 + itemsLength) % itemsLength;
    });
  }, [itemsLength]);

  useEffect(() => {
    if (!isLightboxOpen) return undefined;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [isLightboxOpen, closeLightbox, goNext, goPrev]);

  return (
    <section
      id="Gallery"
      ref={sectionRef}
      className="vt-section-dark vt-section-divider"
    >
      <div className="vt-noise-overlay" />

      <div className="vt-content-layer mx-auto max-w-7xl px-6 vt-section-pad">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-[Montserrat] text-[10px] uppercase tracking-[0.4em] text-white/40">
              Selected Work
            </p>
            <h2 className="mt-4 vt-title-serif text-[clamp(40px,5vw,64px)] leading-[0.95] text-white">
              The <em className="italic text-white/70">Portfolio.</em>
            </h2>
          </div>
          <button
            type="button"
            className="self-start rounded-[2px] border border-white/20 px-6 py-3 font-[Montserrat] text-[11px] uppercase tracking-[0.2em] text-white/80 transition-colors duration-200 hover:border-white hover:text-white"
          >
            View All Categories →
          </button>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={[
                  "rounded-full border px-4 py-2 font-[Montserrat] text-[10px] uppercase tracking-[0.25em]",
                  "transition-colors duration-200",
                  isActive
                    ? "border-[#F5D08B] text-[#F5D08B]"
                    : "border-white/20 text-white/60 hover:border-white/50 hover:text-white",
                ].join(" ")}
                aria-pressed={isActive}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div
          className={[
            "gallery-mosaic gallery-fade mt-10",
            isFiltering ? "is-fading" : "",
          ].join(" ")}
        >
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openLightbox(index)}
              className={`gallery-mosaic-item gallery-item-${item.slot} gallery-card group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5D08B]/70 ${
                inView ? "is-visible" : ""
              }`}
              style={{
                aspectRatio: item.aspect,
                transitionDelay: inView ? `${index * 80}ms` : "0ms",
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="gallery-image"
              />

              <div className="gallery-overlay">
                <span className="gallery-chip">{item.chip}</span>
                <span className="gallery-expand">
                  <Maximize2 className="h-[18px] w-[18px]" />
                </span>
                <h3 className="gallery-title">{item.title}</h3>
                <span className="gallery-line" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {isLightboxOpen && currentItem && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true">
          <div className="gallery-lightbox-backdrop" onClick={closeLightbox} />
          <div className="gallery-lightbox-panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-prev"
              onClick={goPrev}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <img
              src={currentItem.src}
              alt={currentItem.title}
              className="gallery-lightbox-image"
            />
            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-next"
              onClick={goNext}
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryServices;
