export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryItem = {
  slug: string;
  src: string;
  alt: string;
  label: string;
  description: string;
  gallery: GalleryImage[];
};

export const galleryItems: GalleryItem[] = [
  {
    slug: "retrato-1",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    alt: "Retrato de mujer con sombrero frente al mar",
    label: "Retrato",
    description: "Rostros y miradas que cuentan una historia propia.",
    gallery: [
      { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=80", alt: "Retrato con sombrero junto al mar" },
      { src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1400&q=80", alt: "Retrato natural en exteriores" },
      { src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=80", alt: "Retrato con luz cálida de atardecer" },
      { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80", alt: "Retrato en blanco y negro" },
    ],
  },
  {
    slug: "retrato-2",
    src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=1200&q=80",
    alt: "Retrato de perfil con luz suave",
    label: "Retrato",
    description: "Claroscuro y expresión en primer plano.",
    gallery: [
      { src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=1400&q=80", alt: "Retrato de perfil con luz suave" },
      { src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=1400&q=80", alt: "Retrato espontáneo al aire libre" },
      { src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1400&q=80", alt: "Retrato editorial en estudio" },
      { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=80", alt: "Retrato de mujer con mirada intensa" },
    ],
  },
  {
    slug: "viajes-1",
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
    alt: "Pueblo costero visto desde lo alto",
    label: "Viajes",
    description: "Lugares y caminos recorridos con la cámara en mano.",
    gallery: [
      { src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80", alt: "Vista aérea de pueblo costero" },
      { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=80", alt: "Camino de montaña al atardecer" },
      { src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80", alt: "Furgoneta en carretera desértica" },
      { src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80", alt: "Costa rocosa al amanecer" },
    ],
  },
  {
    slug: "viajes-2",
    src: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    alt: "Figura solitaria caminando en el desierto",
    label: "Viajes",
    description: "Escenarios vastos, un mundo, muchas perspectivas.",
    gallery: [
      { src: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1400&q=80", alt: "Figura solitaria en el desierto" },
      { src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1400&q=80", alt: "Vista panorámica de valle" },
      { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80", alt: "Callejón de pueblo mediterráneo" },
      { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=80", alt: "Sendero de montaña al atardecer" },
    ],
  },
  {
    slug: "bodas-1",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    alt: "Pareja de recién casados abrazándose",
    label: "Bodas",
    description: "Instantes íntimos de una de las historias más bonitas.",
    gallery: [
      { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80", alt: "Pareja abrazada el día de su boda" },
      { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1400&q=80", alt: "Novios caminando de la mano" },
      { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=80", alt: "Detalle de manos con anillos" },
      { src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1400&q=80", alt: "Beso de los novios al atardecer" },
    ],
  },
  {
    slug: "bodas-2",
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    alt: "Pareja bailando en la recepción",
    label: "Bodas",
    description: "Momentos de celebración en blanco y negro.",
    gallery: [
      { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=80", alt: "Pareja bailando en la recepción" },
      { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80", alt: "Retrato de la pareja de novios" },
      { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1400&q=80", alt: "Novios caminando de la mano" },
      { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80", alt: "Pareja abrazada el día de su boda" },
    ],
  },
  {
    slug: "editorial-1",
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80",
    alt: "Retrato editorial en claroscuro",
    label: "Editorial",
    description: "Composiciones de alto contraste y actitud.",
    gallery: [
      { src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1400&q=80", alt: "Retrato editorial en claroscuro" },
      { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=80", alt: "Retrato de mujer con mirada intensa" },
      { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80", alt: "Retrato en blanco y negro" },
      { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=80", alt: "Retrato con sombrero junto al mar" },
    ],
  },
  {
    slug: "editorial-2",
    src: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    alt: "Silueta solitaria en paisaje árido",
    label: "Editorial",
    description: "Un mundo, muchas perspectivas.",
    gallery: [
      { src: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1400&q=80", alt: "Silueta solitaria en paisaje árido" },
      { src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80", alt: "Costa rocosa al amanecer" },
      { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80", alt: "Callejón de pueblo mediterráneo" },
      { src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80", alt: "Vista aérea de pueblo costero" },
    ],
  },
];

export const getGalleryBySlug = (slug: string) =>
  galleryItems.find((item) => item.slug === slug);
