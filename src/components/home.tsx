import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import ProductGrid from "./ProductGrid";
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
        title="Premium Bodenbeläge"
        description="Wir verwandeln Räume mit Qualitätshandwerk seit 2000. Spezialisiert auf Parkett, Teppich, Linoleum und mehr."
        imageSrc="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&q=80"
        imageAlt="Premium Holzböden"
        primaryButtonText="Produkte entdecken"
        primaryButtonLink="/sortiment"
        secondaryButtonText="Online Shop"
        secondaryButtonLink="/shop"
        bgColor="#f8f8f8"
      />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unsere Dienstleistungen</h2>
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professionelle Bodenbelagsdienstleistungen, maßgeschneidert für
              Ihre Bedürfnisse
            </p>
          </div>
          <ServicesSection />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unsere Produkte</h2>
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Entdecken Sie unsere Premium-Bodenbelagslösungen
            </p>
          </div>
          <ProductGrid />
          <div className="text-center mt-12">
            <Button
              className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white"
              asChild
            >
              <Link to="/products">
                Alle Produkte anzeigen <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Showroom Section */}
      <section id="showroom" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unser Showroom</h2>
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Besuchen Sie unseren Showroom, um unsere Bodenbelagslösungen
              hautnah zu erleben
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80"
                alt="Morina Parkett Showroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">
                Erleben Sie Qualitätsböden
              </h3>
              <p className="text-gray-600 mb-6">
                Unser Showroom an der Grubenstrasse 19, 8045 Zürich bietet große
                Parkett-Musterböden und verschiedene andere
                Bodenbelagsausstellungen. Vereinbaren Sie einen Termin, um
                unsere umfangreiche Kollektion zu erkunden und persönliche
                Beratung von unseren Experten zu erhalten.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <Card className="border-0 shadow-sm bg-[#f8f8f8]">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="text-[#5ec5ec] mr-4 h-6 w-6 mt-1" />
                      <div>
                        <h4 className="font-medium mb-2">Standort</h4>
                        <p className="text-sm text-gray-600">
                          Grubenstrasse 19, CH – 8045 Zürich
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm bg-[#f8f8f8]">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Clock className="text-[#5ec5ec] mr-4 h-6 w-6 mt-1" />
                      <div>
                        <h4 className="font-medium mb-2">Öffnungszeiten</h4>
                        <p className="text-sm text-gray-600">
                          Mo-Fr: 08:00–12:00, 13:00–17:00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Button
                className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white self-start"
                asChild
              >
                <Link to="/contact">Showroom-Besuch buchen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Kontaktieren Sie uns</h2>
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nehmen Sie Kontakt mit unserem Team auf für Anfragen oder um einen
              Termin zu vereinbaren
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
