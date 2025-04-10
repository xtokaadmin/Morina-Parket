import React from "react";
import Hero from "@/components/Hero";
import heroImage from "@/assets/images/Parkett4-1200x800.jpg"; // Using this image as a placeholder

const AboutHeroSection = () => {
  return (
    <Hero
      title="Über uns"
      description="Lernen Sie Morina Parkett kennen - Ihr verlässlicher Partner für hochwertige Bodenbeläge seit über 20 Jahren"
      imageSrc={heroImage}
      imageAlt="Morina Parkett Team"
      primaryButtonText="Mehr erfahren"
      primaryButtonLink="#about"
      bgColor="#f8f8f8"
    />
  );
};

export default AboutHeroSection; 