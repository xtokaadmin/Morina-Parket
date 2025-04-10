import React from "react";
import Hero from "@/components/Hero";
import heroImage from "@/assets/images/Parkett4-1200x800.jpg"; // Using this image as a placeholder, replace with actual gallery image

const GalleryHeroSection = () => {
  return (
    <Hero
      title="Unsere Galerie"
      description="Entdecken Sie unsere erfolgreich abgeschlossenen Projekte und lassen Sie sich für Ihr eigenes Projekt inspirieren"
      imageSrc={heroImage}
      imageAlt="Morina Parkett Projektgalerie"
      primaryButtonText="Projekte ansehen"
      primaryButtonLink="#gallery"
      bgColor="#f8f8f8"
    />
  );
};

export default GalleryHeroSection; 