import React from "react";
import Hero from "@/components/Hero";
import heroImage from "@/assets/images/bodenwand2-1400x510.jpg"; // Using this image as a placeholder

const ServicesHeroSection = () => {
  return (
    <Hero
      title="Unsere Dienstleistungen"
      description="Wir bieten Ihnen umfassende Dienstleistungen rund um Bodenbeläge – von der Beratung über die Verlegung bis zur Pflege"
      imageSrc={heroImage}
      imageAlt="Morina Parkett Dienstleistungen"
      primaryButtonText="Mehr erfahren"
      primaryButtonLink="#services"
      bgColor="#f8f8f8"
    />
  );
};

export default ServicesHeroSection; 