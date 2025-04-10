export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  price: number;
  inStock: boolean;
}

export const careProducts: Product[] = [
  {
    id: "care-1",
    name: "Parkett Reiniger",
    category: "Pflegeprodukte",
    description: "Schonender Reiniger für versiegelte und geölte Parkettböden.",
    imageUrl:
      "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=500&q=80",
    price: 19.9,
    inStock: true,
  },
  {
    id: "care-2",
    name: "Parkett Pflege",
    category: "Pflegeprodukte",
    description:
      "Pflegemittel für versiegelte Parkettböden, verleiht neuen Glanz.",
    imageUrl:
      "https://images.unsplash.com/photo-1620733723572-11c53fc1d269?w=500&q=80",
    price: 24.9,
    inStock: true,
  },
  {
    id: "care-3",
    name: "Parkett Öl",
    category: "Pflegeprodukte",
    description:
      "Hochwertiges Öl zur Pflege und Auffrischung geölter Parkettböden.",
    imageUrl:
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=500&q=80",
    price: 29.9,
    inStock: true,
  },
  {
    id: "care-4",
    name: "Teppich Reiniger",
    category: "Pflegeprodukte",
    description:
      "Effektiver Reiniger für alle Arten von Teppichen und Teppichböden.",
    imageUrl:
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=500&q=80",
    price: 18.9,
    inStock: true,
  },
  {
    id: "care-5",
    name: "Fleckenentferner",
    category: "Pflegeprodukte",
    description:
      "Spezialmittel zur Entfernung hartnäckiger Flecken auf allen Bodenbelägen.",
    imageUrl:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&q=80",
    price: 15.9,
    inStock: true,
  },
  {
    id: "care-6",
    name: "Korkboden Pflege",
    category: "Pflegeprodukte",
    description:
      "Spezielle Pflege für Korkböden, schützt und erhält die natürliche Schönheit.",
    imageUrl:
      "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=500&q=80",
    price: 22.9,
    inStock: true,
  },
  {
    id: "care-7",
    name: "Vinyl Reiniger",
    category: "Pflegeprodukte",
    description: "Speziell entwickelter Reiniger für Vinyl- und PVC-Böden.",
    imageUrl:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&q=80",
    price: 17.9,
    inStock: true,
  },
  {
    id: "care-8",
    name: "Pflegeset Komplett",
    category: "Pflegeprodukte",
    description:
      "Komplettes Set mit Reiniger, Pflege und Zubehör für alle Bodenarten.",
    imageUrl:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&q=80",
    price: 49.9,
    inStock: true,
  },
];

// Original flooring products
export const flooringProducts: Product[] = [
  {
    id: "1",
    name: "Eichen Parkett",
    category: "Parkett",
    description: "Premium Eichenparkett mit natürlicher Oberfläche",
    imageUrl: "/src/assets/parkett-1154x800.jpg",
    price: 89.9,
    inStock: true,
  },
  {
    id: "2",
    name: "Nussbaum Parkett",
    category: "Parkett",
    description: "Elegantes Nussbaumparkett mit reichen, dunklen Tönen",
    imageUrl: "/src/assets/Parkett4-1200x800.jpg",
    price: 99.9,
    inStock: true,
  },
  {
    id: "3",
    name: "Wollteppich",
    category: "Teppich",
    description: "Weicher Wollteppich für maximalen Komfort",
    imageUrl: "/src/assets/Teppichboden-1400x525.jpg",
    price: 129.9,
    inStock: true,
  },
  {
    id: "4",
    name: "Natürliches Linoleum",
    category: "Linoleum",
    description: "Umweltfreundlicher Linoleumboden in neutralen Tönen",
    imageUrl: "/src/assets/linoleum.jpg",
    price: 69.9,
    inStock: true,
  },
  {
    id: "5",
    name: "Luxus Vinyl",
    category: "Vinyl",
    description: "Wasserfester Vinylboden mit holzähnlichem Aussehen",
    imageUrl: "/src/assets/Vinyl-.jpg",
    price: 59.9,
    inStock: true,
  },
  {
    id: "6",
    name: "Korkboden",
    category: "Kork",
    description: "Nachhaltiger Korkboden mit natürlicher Isolierung",
    imageUrl: "/src/assets/Kork.jpg",
    price: 79.9,
    inStock: true,
  },
  {
    id: "7",
    name: "Terrassendielen",
    category: "Terrasse",
    description: "Witterungsbeständige Holzdielen für Außenbereiche",
    imageUrl: "/src/assets/terassenbo.jpg",
    price: 109.9,
    inStock: true,
  },
  {
    id: "8",
    name: "Designer Teppich",
    category: "Teppich",
    description: "Zeitgenössischer gemusterter Teppich für moderne Innenräume",
    imageUrl: "/src/assets/showroom-768x456.jpeg",
    price: 149.9,
    inStock: true,
  },
];

// Combined products for the shop
export const allProducts = [...flooringProducts, ...careProducts];
