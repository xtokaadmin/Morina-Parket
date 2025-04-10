import React from "react";
import HeroSection from "../components/sections/home/HeroSection";
import ServicesSection from "../components/sections/services/ServicesSection";
import ContactSection from "../components/sections/contact/ContactSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default HomePage;
