import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

interface ProductGridProps {
  products?: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products = defaultProducts,
}) => {
  const [filter, setFilter] = useState<string>("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter(
          (product) => product.category.toLowerCase() === filter.toLowerCase(),
        );

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category.toLowerCase())),
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Unsere Produkte
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 text-sm uppercase tracking-wider transition-colors ${filter === category ? "bg-[#5ec5ec] text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
            >
              {category === "all" ? "Alle Produkte" : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
            >
              <ProductCard
                name={product.name}
                category={product.category}
                description={product.description}
                imageUrl={product.imageUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Default products data
const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Eichen Parkett",
    category: "Parkett",
    description: "Premium Eichenparkett mit natürlicher Oberfläche",
    imageUrl:
      "/src/assets/Morina-Parkett-Klosbachstrasse-3-1440px-1200x800.jpg",
  },
  {
    id: "2",
    name: "Nussbaum Parkett",
    category: "Parkett",
    description: "Elegantes Nussbaumparkett mit reichen, dunklen Tönen",
    imageUrl:
      "/src/assets/Morina-Parkett-Schulhausstrasse-2-1440px-768x1152.jpg",
  },
  {
    id: "3",
    name: "Wollteppich",
    category: "Teppich",
    description: "Weicher Wollteppich für maximalen Komfort",
    imageUrl: "/src/assets/MorinaParkett_Showroom2017_07_MidRes-768x444.jpeg",
  },
  {
    id: "4",
    name: "Natürliches Linoleum",
    category: "Linoleum",
    description: "Umweltfreundlicher Linoleumboden in neutralen Tönen",
    imageUrl: "/src/assets/MorinaParkett_Showroom2017_08_MidRes-1349x800.jpeg",
  },
  {
    id: "5",
    name: "Luxus Vinyl",
    category: "Vinyl",
    description: "Wasserfester Vinylboden mit holzähnlichem Aussehen",
    imageUrl: "/src/assets/MorinaParkett_Showroom2017_11_MidRes-1349x800.jpeg",
  },
  {
    id: "6",
    name: "Korkboden",
    category: "Kork",
    description: "Nachhaltiger Korkboden mit natürlicher Isolierung",
    imageUrl: "/src/assets/MorinaParkett_Showroom2017_12_LowRes-768x512.jpg",
  },
  {
    id: "7",
    name: "Terrassendielen",
    category: "Terrasse",
    description: "Witterungsbeständige Holzdielen für Außenbereiche",
    imageUrl:
      "/src/assets/Morina-Parkett-In-der-Waesseri-1-1-1440px-768x512.jpg",
  },
  {
    id: "8",
    name: "Designer Teppich",
    category: "Teppich",
    description: "Zeitgenössischer gemusterter Teppich für moderne Innenräume",
    imageUrl: "/src/assets/showroom-768x456.jpeg",
  },
];

export default ProductGrid;
