import React, { useState } from "react";
import { motion } from "framer-motion";
import ShopProductCard from "./ShopProductCard";
import { Product } from "@/data/products";

interface ShopGridProps {
  products: Product[];
}

const ShopGrid: React.FC<ShopGridProps> = ({ products }) => {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category.toLowerCase())),
  ];

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter(
          (product) => product.category.toLowerCase() === filter.toLowerCase(),
        );

  return (
    <div className="w-full bg-white py-8">
      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
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
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
          >
            <ShopProductCard
              id={product.id}
              name={product.name}
              category={product.category}
              description={product.description}
              imageUrl={product.imageUrl}
              price={product.price}
              inStock={product.inStock}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ShopGrid; 