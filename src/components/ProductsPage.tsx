import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import ProductGrid from "./ProductGrid";
import { flooringProducts } from "@/data/products";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <Hero
        title="Sortiment"
        description="Entdecken Sie unsere vielfältige Auswahl an hochwertigen Bodenbelägen für jeden Raum und Stil."
        imageSrc="/assets/Parkett4-1200x800.jpg"
        imageAlt="Premium Bodenbeläge"
        primaryButtonText="Kontakt aufnehmen"
        primaryButtonLink="/contact"
        bgColor="#f8f8f8"
      />

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unsere Bodenbeläge</h2>
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wir bieten eine breite Palette an Bodenbelägen für jeden Bedarf
              und Geschmack. Von klassischem Parkett bis zu modernem Vinyl - bei
              uns finden Sie hochwertige Produkte für Ihr Zuhause oder Geschäft.
            </p>
          </div>

          <ProductGrid products={flooringProducts} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unsere Kategorien</h2>
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Entdecken Sie unsere verschiedenen Bodenbelagskategorien und
              finden Sie die perfekte Lösung für Ihre Bedürfnisse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Parkett */}
            <div className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-2 border-gray-100 rounded-lg">
              <div className="relative h-64">
                <img
                  src="/assets/parkett-1154x800.jpg"
                  alt="Parkett"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Parkett</h3>
                <p className="text-gray-600 mb-4">
                  Hochwertiges Parkett in verschiedenen Holzarten und
                  Ausführungen für ein natürliches und elegantes Ambiente.
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
                  src="/assets/Teppichboden-1400x525.jpg"
                  alt="Teppich"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Teppich</h3>
                <p className="text-gray-600 mb-4">
                  Weiche und komfortable Teppichböden in verschiedenen Farben,
                  Mustern und Materialien für ein gemütliches Wohngefühl.
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
                  src="/assets/linoleum.jpg"
                  alt="Linoleum"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Linoleum</h3>
                <p className="text-gray-600 mb-4">
                  Umweltfreundlicher und langlebiger Linoleumboden in vielen
                  Farbvarianten für Wohn- und Geschäftsräume.
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

            {/* Vinyl / PVC / CV */}
            <div className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-2 border-gray-100 rounded-lg">
              <div className="relative h-64">
                <img
                  src="/assets/Vinyl-.jpg"
                  alt="Vinyl / PVC / CV"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Vinyl / PVC / CV</h3>
                <p className="text-gray-600 mb-4">
                  Robuste und pflegeleichte Vinylböden in verschiedenen Designs,
                  ideal für stark beanspruchte Bereiche und Feuchträume.
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
                  src="/assets/Kork.jpg"
                  alt="Kork"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Kork</h3>
                <p className="text-gray-600 mb-4">
                  Natürlicher und wärmeisolierender Korkboden für ein angenehmes
                  Raumklima und hohen Gehkomfort.
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
                  src="/assets/terassenbo.jpg"
                  alt="Terrassenboden"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Terrassenboden</h3>
                <p className="text-gray-600 mb-4">
                  Witterungsbeständige Terrassendielen aus Holz oder WPC für
                  Ihren Außenbereich, langlebig und pflegeleicht.
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

      {/* Raumgestaltung Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Raumgestaltung</h2>
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
            <p className="text-gray-600 mb-8">
              Neben hochwertigen Bodenbelägen bieten wir auch umfassende
              Raumgestaltungslösungen an. Unsere Experten helfen Ihnen, Ihre
              Räume optimal zu gestalten und das Beste aus Ihren Wohn- oder
              Geschäftsräumen herauszuholen.
            </p>
            <Button
              className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white"
              asChild
            >
              <a
                href="https://www.morina-parkett.ch/sortiment/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Mehr zur Raumgestaltung{" "}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
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
