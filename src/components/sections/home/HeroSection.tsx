import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";

// We'll use the default props pattern instead of requiring an image prop
const HeroSection = () => {
  return (
    <Hero
      title="Ihr Spezialist für Bodenbeläge"
      description="Seit über 20 Jahren bieten wir Ihnen hochwertige Bodenbeläge und professionelle Verlegung. Wir beraten Sie gerne in unserem Showroom in Zürich."
      imageSrc="/assets/parkett.jpg"
      imageAlt="Morina Parkett - Qualitätsböden"
      primaryButtonText="Sortiment entdecken"
      primaryButtonLink="/sortiment"
      secondaryButtonText="Kontakt"
      secondaryButtonLink="/contact"
      bgColor="#f8f8f8"
    />
  );
};

export default HeroSection; 