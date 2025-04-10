import React from "react";
import CareProductsHeroSection from "../components/sections/care-products/CareProductsHeroSection";
import CareProductsSection from "../components/sections/care-products/CareProductsSection";

// Sample care products - in a real app these would come from a CMS or API
const careProducts = [
  {
    id: "1",
    name: "Parkett Reiniger",
    description: "Spezieller Reiniger für die schonende Reinigung von Parkettböden. Entfernt effektiv Schmutz ohne die Oberfläche anzugreifen.",
    price: 19.90,
    imageUrl: "/assets/care-products/parkett-cleaner.jpg",
    category: "Reiniger"
  },
  {
    id: "2",
    name: "Parkett Pflegeöl",
    description: "Hochwertiges Pflegeöl für die regelmäßige Auffrischung und Pflege von geölten Parkettböden. Schützt und nährt das Holz.",
    price: 29.90,
    imageUrl: "/assets/care-products/parkett-oil.jpg",
    category: "Pflege"
  },
  {
    id: "3",
    name: "Vinylboden Reiniger",
    description: "Schonender Reiniger für Vinyl- und PVC-Böden. Beseitigt Flecken und Verschmutzungen, ohne die Oberfläche zu beschädigen.",
    price: 15.90,
    imageUrl: "/assets/care-products/vinyl-cleaner.jpg",
    category: "Reiniger"
  },
  {
    id: "4",
    name: "Teppich Fleckenentferner",
    description: "Wirksamer Fleckenentferner für Teppiche und Textilböden. Entfernt selbst hartnäckige Flecken und frischt die Farben auf.",
    price: 12.90,
    imageUrl: "/assets/care-products/carpet-cleaner.jpg",
    category: "Reiniger"
  },
  {
    id: "5",
    name: "Korkboden Schutzwachs",
    description: "Spezialwachs zum Schutz und zur Pflege von Korkböden. Verleiht eine wasserabweisende Oberfläche und schützt vor Verschleiß.",
    price: 24.90,
    imageUrl: "/assets/care-products/cork-wax.jpg",
    category: "Pflege"
  },
  {
    id: "6",
    name: "Linoleum Pflegemittel",
    description: "Pflegemittel für Linoleumböden. Reinigt, pflegt und schützt in einem Arbeitsgang und sorgt für eine langanhaltende Optik.",
    price: 18.90,
    imageUrl: "/assets/care-products/lino-care.jpg",
    category: "Pflege"
  }
];

const CareProductsPage = () => {
  const handleAddToCart = (product: any) => {
    console.log("Added to cart:", product);
    // In a real app, this would dispatch to a cart state manager
  };

  return (
    <div className="bg-white">
      <CareProductsHeroSection />
      <div id="products">
        <CareProductsSection 
          title="Unsere Pflegeprodukte"
          description="Mit den richtigen Pflegeprodukten verlängern Sie die Lebensdauer Ihrer Bodenbeläge und erhalten deren Schönheit über viele Jahre. Wir bieten Ihnen hochwertige Produkte für die optimale Pflege."
          products={careProducts}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default CareProductsPage; 