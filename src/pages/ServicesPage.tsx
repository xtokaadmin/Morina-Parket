import React from "react";
import ServicesHeroSection from "../components/sections/services/ServicesHeroSection";
import ServicesSection from "../components/sections/services/ServicesSection";

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <ServicesHeroSection />

      {/* Services Section */}
      <ServicesSection />
    </div>
  );
};

export default ServicesPage;
