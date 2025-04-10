import React from "react";
import Hero from "@/components/Hero";
import heroImage from "@/assets/images/bodenwand2-1400x510.jpg"; // Using this image as a placeholder, replace with actual showroom image

const ShowroomHeroSection = () => {
  return (
    <Hero
      title="Unser Showroom"
      description="Entdecken Sie unsere Produktauswahl in unserem modern gestalteten Showroom"
      imageSrc={heroImage}
      imageAlt="Morina Parkett Showroom"
      primaryButtonText="Besuch planen"
      primaryButtonLink="/contact"
      bgColor="#f8f8f8"
    />
  );
};

export default ShowroomHeroSection; 