import React from "react";
import Hero from "@/components/Hero";
import heroImage from "@/assets/images/bodenwand2-1400x510.jpg";

const ProductsHeroSection = () => {
  return (
    <Hero
      title="Unser Sortiment"
      description="Entdecken Sie unsere vielfältige Auswahl an hochwertigen Bodenbelägen für jeden Raum und Anspruch"
      imageSrc={heroImage}
      imageAlt="Morina Parkett Sortiment"
      primaryButtonText="Produkte entdecken"
      primaryButtonLink="#products"
      bgColor="#f8f8f8"
    />
  );
};

export default ProductsHeroSection; 