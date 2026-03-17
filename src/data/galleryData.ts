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
    slug: "naturaleza",
    src: "https://i.ibb.co/bQytGp8/pexels-caleb-falkenhagen-216813613-29932984.jpg",
    alt: "Fotografia de naturaleza",
    label: "Naturaleza",
    description: "Flora, fauna y paisajes en su estado mas puro.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1400&q=80",
        alt: "Montanas verdes al amanecer",
      },
      {
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
        alt: "Lago rodeado de bosque",
      },
      {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
        alt: "Bosque con niebla",
      },
      {
        src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1400&q=80",
        alt: "Camino en medio de arboles",
      },
      {
        src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1400&q=80",
        alt: "Atardecer sobre montanas",
      },
      {
        src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1400&q=80",
        alt: "Vista aerea de costa natural",
      },
    ],
  },
  {
    slug: "artistica",
    src: "https://i.ibb.co/5srqMJc/pexels-micotino-126770659-10044631.jpg",
    alt: "Fotografia artistica",
    label: "Artistica",
    description: "Composiciones unicas con vision creativa.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1771749141621-cf9a4d91c14e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Retrato artistico en claroscuro",
      },
      {
        src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1400&q=80",
        alt: "Escena con luces de neón",
      },
      {
        src: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=1400&q=80",
        alt: "Silueta en ambiente urbano",
      },
      {
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80",
        alt: "Texturas y sombras abstractas",
      },
      {
        src: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1400&q=80",
        alt: "Composicion minimalista en estudio",
      },
      {
        src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=80",
        alt: "Retrato editorial artistico",
      },
    ],
  },
  {
    slug: "paisaje",
    src: "https://i.ibb.co/6tBwNsK/pexels-vasilis-karkalas-155349971-17397880.jpg",
    alt: "Fotografia de paisaje",
    label: "Paisaje",
    description: "Horizontes y escenarios que inspiran.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
        alt: "Valle entre montanas",
      },
      {
        src: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1400&q=80",
        alt: "Ruta hacia montanas nevadas",
      },
      {
        src: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1400&q=80",
        alt: "Lago en paisaje alpino",
      },
      {
        src: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?auto=format&fit=crop&w=1400&q=80",
        alt: "Dunas con cielo dramatico",
      },
      {
        src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80",
        alt: "Cascada entre rocas",
      },
      {
        src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1400&q=80",
        alt: "Atardecer sobre cordillera",
      },
    ],
  },
];

export const getGalleryBySlug = (slug: string) =>
  galleryItems.find((item) => item.slug === slug);