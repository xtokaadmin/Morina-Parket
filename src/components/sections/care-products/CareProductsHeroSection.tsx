import React from "react";
import Hero from "@/components/Hero";
import heroImage from "@/assets/products/woca-pflegeoel-247x296.png"; // Using care product image for the hero

const CareProductsHeroSection = () => {
  return (
    <Hero
      title="Pflegeprodukte"
      description="Entdecken Sie unsere hochwertigen Pflegeprodukte für Ihre Bodenbeläge"
      imageSrc={heroImage}
      imageAlt="Morina Parkett Pflegeprodukte"
      primaryButtonText="Zum Shop"
      primaryButtonLink="#shop"
      bgColor="#f8f8f8"
    />
  );
};

export default CareProductsHeroSection; 