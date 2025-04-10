import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

import ServicesSection from "./ServicesSection";
import ContactSection from "./ContactSection";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <Hero
        title="Ihr Spezialist für Bodenbeläge"
        description="Seit über 20 Jahren bieten wir Ihnen hochwertige Bodenbeläge und professionelle Verlegung. Wir beraten Sie gerne in unserem Showroom in Zürich."
        imageSrc="./src/assets/Parkett4-1200x800.jpg"
        imageAlt="Morina Parkett - Qualitätsböden"
        primaryButtonText="Sortiment entdecken"
        primaryButtonLink="/sortiment"
        secondaryButtonText="Kontakt"
        secondaryButtonLink="/contact"
        bgColor="#f8f8f8"
      />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ServicesSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Kontaktieren Sie uns</h2>
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Haben Sie Fragen zu unseren Produkten oder Dienstleistungen?
              Möchten Sie einen Termin vereinbaren? Kontaktieren Sie uns - wir
              sind gerne für Sie da
            </p>
          </div>
          <ContactSection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
