import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <Hero
        title="Sortiment"
        description="Wir bieten eine breite Palette an Bodenbelägen für jeden Bedarf. Entdecken Sie unsere Qualitätsprodukte und finden Sie den perfekten Boden für Ihr Zuhause oder Geschäft."
        imageSrc="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&q=80"
        imageAlt="Premium Bodenbeläge"
        primaryButtonText="Kontakt aufnehmen"
        primaryButtonLink="/contact"
        bgColor="#f8f8f8"
      />

      {/* Products Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unsere Bodenbeläge</h2>
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wir bieten eine Vielzahl von Bodenbelägen an, die auf Ihre
              individuellen Bedürfnisse zugeschnitten sind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Parkett */}
            <div className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-2 border-gray-100 rounded-lg">
              <div className="relative h-64">
                <img
                  src="/src/assets/parkett-1154x800.jpg"
                  alt="Parkett"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Parkett</h3>
                <p className="text-gray-600 mb-4">
                  Hochwertiges Parkett in verschiedenen Holzarten und
                  Ausführungen für ein natürliches und warmes Ambiente.
                </p>
                <Button
                  className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white w-full"
                  asChild
                >
                  <Link to="/contact">
                    Beratung anfragen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Teppich */}
            <div className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-2 border-gray-100 rounded-lg">
              <div className="relative h-64">
                <img
                  src="/src/assets/Teppichboden-1400x525.jpg"
                  alt="Teppich"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Teppich</h3>
                <p className="text-gray-600 mb-4">
                  Weiche und komfortable Teppichböden in verschiedenen Designs,
                  Farben und Materialien für maximalen Komfort.
                </p>
                <Button
                  className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white w-full"
                  asChild
                >
                  <Link to="/contact">
                    Beratung anfragen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Linoleum */}
            <div className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-2 border-gray-100 rounded-lg">
              <div className="relative h-64">
                <img
                  src="/src/assets/linoleum.jpg"
                  alt="Linoleum"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Linoleum</h3>
                <p className="text-gray-600 mb-4">
                  Umweltfreundlicher und langlebiger Bodenbelag aus natürlichen
                  Materialien in vielen Farben und Mustern.
                </p>
                <Button
                  className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white w-full"
                  asChild
                >
                  <Link to="/contact">
                    Beratung anfragen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Vinyl/PVC/CV */}
            <div className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-2 border-gray-100 rounded-lg">
              <div className="relative h-64">
                <img
                  src="/src/assets/Vinyl-.jpg"
                  alt="Vinyl/PVC/CV"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Vinyl / PVC / CV</h3>
                <p className="text-gray-600 mb-4">
                  Robuste und pflegeleichte Bodenbeläge, ideal für stark
                  frequentierte Bereiche und Feuchträume.
                </p>
                <Button
                  className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white w-full"
                  asChild
                >
                  <Link to="/contact">
                    Beratung anfragen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Kork */}
            <div className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-2 border-gray-100 rounded-lg">
              <div className="relative h-64">
                <img
                  src="/src/assets/Kork.jpg"
                  alt="Kork"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Kork</h3>
                <p className="text-gray-600 mb-4">
                  Natürlich isolierender und schalldämmender Bodenbelag mit
                  hohem Gehkomfort und Wärmedämmung.
                </p>
                <Button
                  className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white w-full"
                  asChild
                >
                  <Link to="/contact">
                    Beratung anfragen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Terrassenboden */}
            <div className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-2 border-gray-100 rounded-lg">
              <div className="relative h-64">
                <img
                  src="/src/assets/terassenbo.jpg"
                  alt="Terrassenboden"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Terrassenboden</h3>
                <p className="text-gray-600 mb-4">
                  Witterungsbeständige Holzdielen und Alternativen für
                  Außenbereiche, die Schönheit und Langlebigkeit verbinden.
                </p>
                <Button
                  className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white w-full"
                  asChild
                >
                  <Link to="/contact">
                    Beratung anfragen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pflegeprodukte Section */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pflegeprodukte</h2>
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unsere Pflegeprodukte von Woca für die optimale Pflege und
              Reinigung Ihrer Bodenbeläge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Parkett- & Intensivreiniger - clean & green natural */}
            <div className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-2 border-gray-100 rounded-lg">
              <div className="relative h-64">
                <img
                  src="/src/assets/clean_green_natural-1-247x296.jpg"
                  alt="Parkett- & Intensivreiniger"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Parkett- & Intensivreiniger
                </h3>
                <p className="text-gray-600 mb-4">
                  clean & green Parkettreiniger natural
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold">14,00 CHF</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-600 hover:text-[#5ec5ec]"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white w-full"
                  asChild
                >
                  <Link to="/contact">
                    Bestellen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Parkett- & Intensivreiniger - clean & green active */}
            <div className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-2 border-gray-100 rounded-lg">
              <div className="relative h-64">
                <img
                  src="/src/assets/clean_green_active_407634-1-247x296.jpg"
                  alt="Parkett- & Intensivreiniger"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Parkett- & Intensivreiniger
                </h3>
                <p className="text-gray-600 mb-4">
                  clean & green Intensivreiniger active
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold">14,00 CHF</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-600 hover:text-[#5ec5ec]"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white w-full"
                  asChild
                >
                  <Link to="/contact">
                    Bestellen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* WOCA Pflegeöl */}
            <div className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-2 border-gray-100 rounded-lg">
              <div className="relative h-64">
                <img
                  src="/src/assets/woca-pflegeoel-247x296.png"
                  alt="WOCA Pflegeöl"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Parkettpflege</h3>
                <p className="text-gray-600 mb-4">WOCA Pflegeöl</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold">43,00 CHF – 84,00 CHF</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-600 hover:text-[#5ec5ec]"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white w-full"
                  asChild
                >
                  <Link to="/contact">
                    Bestellen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* WOCA Holzbodenseife */}
            <div className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-2 border-gray-100 rounded-lg">
              <div className="relative h-64">
                <img
                  src="/src/assets/woca-holzbodenseife-ph-neutral-247x296.png"
                  alt="WOCA Holzbodenseife"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Parkettpflege</h3>
                <p className="text-gray-600 mb-4">
                  WOCA Holzbodenseife ph-Neutral
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold">29,00 CHF – 54,00 CHF</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-600 hover:text-[#5ec5ec]"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white w-full"
                  asChild
                >
                  <Link to="/contact">
                    Bestellen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* WOCA Holzbodenseife in Sprühflasche */}
            <div className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-2 border-gray-100 rounded-lg">
              <div className="relative h-64">
                <img
                  src="/src/assets/woca-holzbodenseife-spray-natur-247x296.png"
                  alt="WOCA Holzbodenseife in Sprühflasche"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Parkettpflege</h3>
                <p className="text-gray-600 mb-4">
                  WOCA Holzbodenseife in Sprühflasche
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold">32,00 CHF</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-600 hover:text-[#5ec5ec]"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white w-full"
                  asChild
                >
                  <Link to="/contact">
                    Bestellen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* WOCA Fleckenentferner-Spray */}
            <div className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-2 border-gray-100 rounded-lg">
              <div className="relative h-64">
                <img
                  src="/src/assets/woca-fleckenentferner-247x296.jpg"
                  alt="WOCA Fleckenentferner-Spray"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Woca Parkett- & Intensivreiniger
                </h3>
                <p className="text-gray-600 mb-4">
                  WOCA Fleckenentferner-Spray
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold">38,00 CHF</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-600 hover:text-[#5ec5ec]"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white w-full"
                  asChild
                >
                  <Link to="/contact">
                    Bestellen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Individuelle Beratung</h2>
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
            <p className="text-gray-600 mb-8">
              Unsere Experten beraten Sie gerne zu allen Fragen rund um
              Bodenbeläge. Vereinbaren Sie einen Termin in unserem Showroom oder
              kontaktieren Sie uns für eine Beratung vor Ort.
            </p>
            <Button
              className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white"
              asChild
            >
              <Link to="/contact">
                Kontakt aufnehmen <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
