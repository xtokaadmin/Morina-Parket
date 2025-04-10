import React from "react";
import { Separator } from "@/components/ui/separator";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import ShopGrid from "./ShopGrid";

const products = [
  {
    id: "care-1",
    name: "Parkett- & Intensivreiniger",
    category: "Pflegeprodukte",
    description: "clean & green Parkettreiniger natural",
    imageUrl: "/assets/clean_green_natural-1-247x296.jpg",
    price: 14.0,
    inStock: true,
  },
  {
    id: "care-2",
    name: "Parkett- & Intensivreiniger",
    category: "Pflegeprodukte",
    description: "clean & green Intensivreiniger active",
    imageUrl: "/assets/clean_green_active_407634-1-247x296.jpg",
    price: 14.0,
    inStock: true,
  },
  {
    id: "care-3",
    name: "Parkettpflege",
    category: "Pflegeprodukte",
    description: "WOCA Pflegeöl",
    imageUrl: "/assets/woca-pflegeoel-247x296.png",
    price: 43.0,
    inStock: true,
  },
  {
    id: "care-4",
    name: "Parkettpflege",
    category: "Pflegeprodukte",
    description: "WOCA Holzbodenseife ph-Neutral",
    imageUrl: "/assets/woca-holzbodenseife-ph-neutral-247x296.png",
    price: 29.0,
    inStock: true,
  },
  {
    id: "care-5",
    name: "Parkettpflege",
    category: "Pflegeprodukte",
    description: "WOCA Holzbodenseife in Sprühflasche",
    imageUrl: "/assets/woca-holzbodenseife-spray-natur-247x296.png",
    price: 32.0,
    inStock: true,
  },
  {
    id: "care-6",
    name: "Woca Parkett- & Intensivreiniger",
    category: "Pflegeprodukte",
    description: "WOCA Intensivreiniger",
    imageUrl: "/assets/woca-intensivreiniger-247x296.png",
    price: 39.0,
    inStock: true,
  },
  {
    id: "care-7",
    name: "Woca Parkett- & Intensivreiniger",
    category: "Pflegeprodukte",
    description: "WOCA Fleckenentferner-Spray",
    imageUrl: "/assets/woca-fleckenentferner-247x296.jpg",
    price: 38.0,
    inStock: true,
  },
];

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <Hero
        title="Pflegeprodukte Shop"
        description="Entdecken Sie unsere hochwertigen Pflegeprodukte für Ihre Bodenbeläge. Qualität von WOCA und clean & green."
        imageSrc="/assets/woca-pflegeoel-247x296.png"
        imageAlt="Morina Parkett Pflegeprodukte"
        primaryButtonText="Alle Produkte"
        primaryButtonLink="#products"
        bgColor="#f8f8f8"
      />

      {/* Shop Section */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unsere Pflegeprodukte</h2>
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hochwertige Pflegeprodukte von WOCA und clean & green für die
              optimale Pflege Ihrer Bodenbeläge
            </p>
          </div>

          <div id="products">
            <ShopGrid products={products} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ShopPage;
