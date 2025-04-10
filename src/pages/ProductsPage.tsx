import React from "react";
import ProductsHeroSection from "../components/sections/products/ProductsHeroSection";
import ProductsSection from "../components/sections/products/ProductsSection";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ProductsHeroSection />

      {/* Products Section */}
      <div id="products">
        <ProductsSection 
          title="Morina Parkett"
          description="Von klassischem Parkett bis zu modernem Vinyl - bei uns finden Sie hochwertige Produkte für Ihr Zuhause oder Geschäft."
        />
      </div>
    </div>
  );
};

export default ProductsPage;
