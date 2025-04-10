import React, { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from "@/components/Hero";
import ShopGrid from "@/features/shop/components/ShopGrid";
import { allProducts, Product } from "@/data/products";
import { wocaPflegeoel } from "@/assets";

const ShopPage = () => {
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(allProducts);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Extract unique categories from products
  const categories = [
    "all",
    ...new Set(allProducts.map((product) => product.category)),
  ];

  // Filter products when category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((product) => product.category === activeCategory),
      );
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Pflegeprodukte"
        description="Unsere Pflegeprodukte von Woca"
        imageSrc={wocaPflegeoel}
        imageAlt="Morina Parkett Pflegeprodukte"
        primaryButtonText="Alle Produkte"
        primaryButtonLink="#products"
        bgColor="#f8f8f8"
      />

      {/* Shop Section */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              WOCA Pflegeproduktsortiment
            </h2>
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Hochwertige Pflegeprodukte für Ihre Bodenbeläge. Filtern Sie nach
              Kategorien, um genau das zu finden, was Sie suchen.
            </p>
          </div>

          <div id="products" className="transition-all duration-300">
            <ShopGrid products={filteredProducts} />

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  Keine Produkte in dieser Kategorie gefunden.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
