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
    imageUrl: "/assets/clean_green_natural-1-247x296.jpg",
    price: 19.9,
    inStock: true,
  },
  {
    id: "care-2",
    name: "Parkett Pflege",
    category: "Pflegeprodukte",
    description:
      "Pflegemittel für versiegelte Parkettböden, verleiht neuen Glanz.",
    imageUrl: "/assets/clean_green_active_407634-1-247x296.jpg",
    price: 24.9,
    inStock: true,
  },
  {
    id: "care-3",
    name: "Parkett Öl",
    category: "Pflegeprodukte",
    description:
      "Hochwertiges Öl zur Pflege und Auffrischung geölter Parkettböden.",
    imageUrl: "/assets/woca-pflegeoel-247x296.png",
    price: 29.9,
    inStock: true,
  },
  {
    id: "care-4",
    name: "Teppich Reiniger",
    category: "Pflegeprodukte",
    description:
      "Effektiver Reiniger für alle Arten von Teppichen und Teppichböden.",
    imageUrl: "/assets/woca-holzbodenseife-ph-neutral-247x296.png",
    price: 18.9,
    inStock: true,
  },
  {
    id: "care-5",
    name: "Fleckenentferner",
    category: "Pflegeprodukte",
    description:
      "Spezialmittel zur Entfernung hartnäckiger Flecken auf allen Bodenbelägen.",
    imageUrl: "/assets/woca-holzbodenseife-spray-natur-247x296.png",
    price: 15.9,
    inStock: true,
  },
  {
    id: "care-6",
    name: "Korkboden Pflege",
    category: "Pflegeprodukte",
    description:
      "Spezielle Pflege für Korkböden, schützt und erhält die natürliche Schönheit.",
    imageUrl: "/assets/woca-intensivreiniger-247x296.png",
    price: 22.9,
    inStock: true,
  },
  {
    id: "care-7",
    name: "Vinyl Reiniger",
    category: "Pflegeprodukte",
    description: "Speziell entwickelter Reiniger für Vinyl- und PVC-Böden.",
    imageUrl: "/assets/woca-fleckenentferner-247x296.jpg",
    price: 17.9,
    inStock: true,
  },
  {
    id: "care-8",
    name: "Pflegeset Komplett",
    category: "Pflegeprodukte",
    description:
      "Komplettes Set mit Reiniger, Pflege und Zubehör für alle Bodenarten.",
    imageUrl: "/assets/clean_green_active_407634-1-247x296.jpg",
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
    imageUrl: "/assets/parkett-1154x800.jpg",
    price: 89.9,
    inStock: true,
  },
  {
    id: "2",
    name: "Nussbaum Parkett",
    category: "Parkett",
    description: "Elegantes Nussbaumparkett mit reichen, dunklen Tönen",
    imageUrl: "/assets/Parkett4-1200x800.jpg",
    price: 99.9,
    inStock: true,
  },
  {
    id: "3",
    name: "Wollteppich",
    category: "Teppich",
    description: "Weicher Wollteppich für maximalen Komfort",
    imageUrl: "/assets/Teppichboden-1400x525.jpg",
    price: 129.9,
    inStock: true,
  },
  {
    id: "4",
    name: "Natürliches Linoleum",
    category: "Linoleum",
    description: "Umweltfreundlicher Linoleumboden in neutralen Tönen",
    imageUrl: "/assets/linoleum.jpg",
    price: 69.9,
    inStock: true,
  },
  {
    id: "5",
    name: "Luxus Vinyl",
    category: "Vinyl",
    description: "Wasserfester Vinylboden mit holzähnlichem Aussehen",
    imageUrl: "/assets/Vinyl-.jpg",
    price: 59.9,
    inStock: true,
  },
  {
    id: "6",
    name: "Korkboden",
    category: "Kork",
    description: "Nachhaltiger Korkboden mit natürlicher Isolierung",
    imageUrl: "/assets/Kork.jpg",
    price: 79.9,
    inStock: true,
  },
  {
    id: "7",
    name: "Terrassendielen",
    category: "Terrasse",
    description: "Witterungsbeständige Holzdielen für Außenbereiche",
    imageUrl: "/assets/terassenbo.jpg",
    price: 109.9,
    inStock: true,
  },
  {
    id: "8",
    name: "Designer Teppich",
    category: "Teppich",
    description: "Zeitgenössischer gemusterter Teppich für moderne Innenräume",
    imageUrl: "/assets/showroom-768x456.jpeg",
    price: 149.9,
    inStock: true,
  },
];

// Combined products for the shop
export const allProducts = [...flooringProducts, ...careProducts];
