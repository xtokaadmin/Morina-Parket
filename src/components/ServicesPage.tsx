import React from "react";
import { Separator } from "@/components/ui/separator";
import ServicesSection from "./ServicesSection";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <Hero
        title="Unsere Dienstleistungen"
        description="Professionelle Bodenbelagsdienstleistungen, maßgeschneidert für Ihre Bedürfnisse. Wir bieten Ihnen Qualität und Expertise für jeden Bodenbelag."
        imageSrc="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80"
        imageAlt="Professionelle Bodenverlegung"
        primaryButtonText="Beratung anfragen"
        primaryButtonLink="/contact"
        reversed={true}
        bgColor="#f8f8f8"
      />
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professionelle Bodenbelagsdienstleistungen, maßgeschneidert für
              Ihre Bedürfnisse
            </p>
          </div>
          <ServicesSection />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;
