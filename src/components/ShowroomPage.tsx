import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import { Link } from "react-router-dom";

const ShowroomPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <Hero
        title="Unser Showroom"
        description="Besuchen Sie unseren Showroom und erleben Sie unsere Bodenbelagslösungen hautnah. Lassen Sie sich von der Vielfalt und Qualität inspirieren."
        imageSrc="/assets/MorinaParkett_Showroom2017_07_MidRes-768x444.jpeg"
        imageAlt="Morina Parkett Showroom"
        primaryButtonText="Termin vereinbaren"
        primaryButtonLink="/contact"
        reversed={true}
        bgColor="#f8f8f8"
      />
      {/* Showroom Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Besuchen Sie unseren Showroom, um unsere Bodenbelagslösungen
              hautnah zu erleben
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-square overflow-hidden">
              <img
                src="/assets/showroom-768x456.jpeg"
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
      <Footer />
    </div>
  );
};

export default ShowroomPage;
