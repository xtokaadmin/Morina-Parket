import React from "react";
import Hero from "@/components/Hero";
import heroImage from "@/assets/images/Parkett4-1200x800.jpg";

const HomepageHeroSection = () => {
  return (
    <Hero
      title="Willkommen bei Morina Parkett"
      description="Ihr Spezialist für hochwertigen Bodenbelag in Thun und Umgebung"
      imageSrc={heroImage}
      imageAlt="Morina Parkett Showroom"
      primaryButtonText="Produkte entdecken"
      primaryButtonLink="/products"
      secondaryButtonText="Termin vereinbaren"
      secondaryButtonLink="/contact"
      bgColor="#f8f8f8"
    />
  );
};

export default HomepageHeroSection; 