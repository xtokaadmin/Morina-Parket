import {
  wocaPflegeoel,
  wocaHolzbodenseifePHNeutral,
  wocaHolzbodenseifeSpray,
  wocaIntensivreiniger,
  wocaFleckenentferner,
  cleanGreenNatural,
  cleanGreenActive,
} from "@/assets";

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  price: number;
  inStock: boolean;
}

export const wocaCareProducts: Product[] = [
  {
    id: "woca-1",
    name: "WOCA Pflegeöl",
    category: "Parkettpflege",
    description:
      "Hochwertiges Öl zur Pflege und Auffrischung geölter Parkettböden.",
    imageUrl: wocaPflegeoel,
    price: 43.0,
    inStock: true,
  },
  {
    id: "woca-2",
    name: "WOCA Holzbodenseife ph-Neutral",
    category: "Parkettpflege",
    description:
      "Schonende Reinigung für alle Holzböden mit neutralem pH-Wert.",
    imageUrl: wocaHolzbodenseifePHNeutral,
    price: 29.0,
    inStock: true,
  },
  {
    id: "woca-3",
    name: "WOCA Holzbodenseife in Sprühflasche",
    category: "Parkettpflege",
    description:
      "Praktische Sprühflasche für einfache Anwendung der Holzbodenseife.",
    imageUrl: wocaHolzbodenseifeSpray,
    price: 32.0,
    inStock: true,
  },
  {
    id: "woca-4",
    name: "WOCA Intensivreiniger",
    category: "Woca Parkett- & Intensivreiniger",
    description: "Kraftvoller Reiniger für stark verschmutzte Holzböden.",
    imageUrl: wocaIntensivreiniger,
    price: 39.0,
    inStock: true,
  },
  {
    id: "woca-5",
    name: "WOCA Fleckenentferner-Spray",
    category: "Woca Parkett- & Intensivreiniger",
    description: "Effektiver Fleckenentferner für hartnäckige Verschmutzungen.",
    imageUrl: wocaFleckenentferner,
    price: 38.0,
    inStock: true,
  },
  {
    id: "clean-green-1",
    name: "clean & green Parkettreiniger natural",
    category: "Parkett- & Intensivreiniger",
    description: "Umweltfreundlicher Reiniger für versiegelte Parkettböden.",
    imageUrl: cleanGreenNatural,
    price: 14.0,
    inStock: true,
  },
  {
    id: "clean-green-2",
    name: "clean & green Intensivreiniger active",
    category: "Parkett- & Intensivreiniger",
    description: "Kraftvoller Intensivreiniger für stark beanspruchte Böden.",
    imageUrl: cleanGreenActive,
    price: 14.0,
    inStock: true,
  },
];

// For backward compatibility, keeping these arrays but they won't be used in the shop
export const careProducts: Product[] = [];
export const flooringProducts: Product[] = [];

// Only use wocaCareProducts for the shop
export const allProducts = wocaCareProducts;
