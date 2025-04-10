import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

// Import category images
import parkettImage from "@/assets/images/Parkett4-1200x800.jpg";
import teppichImage from "@/assets/images/Teppichboden-1400x525.jpg";
import linoleumImage from "@/assets/images/linoleum.jpg";
import vinylImage from "@/assets/images/Vinyl-.jpg";
import korkImage from "@/assets/images/Kork.jpg";
import terrassenImage from "@/assets/images/terassenbo.jpg";
import parkettTreppen from "@/assets/images/parkett-1154x800.jpg";
import bodenwandImage from "@/assets/images/bodenwand2-1400x510.jpg";

// Import care product images
import wocaPflegeoel from "@/assets/products/woca-pflegeoel-247x296.png";
import wocaHolzbodenseife from "@/assets/products/woca-holzbodenseife-ph-neutral-247x296.png";
import wocaHolzbodenseifeSpray from "@/assets/products/woca-holzbodenseife-spray-natur-247x296.png";
import wocaIntensivreiniger from "@/assets/products/woca-intensivreiniger-247x296.png";
import wocaFleckenentferner from "@/assets/products/woca-fleckenentferner-247x296.jpg";
import cleanGreenActive from "@/assets/products/clean_green_active_407634-1-247x296.jpg";
import cleanGreenNatural from "@/assets/products/clean_green_natural-1-247x296.jpg";

interface CategoryDescription {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

interface ProductsSectionProps {
  title?: string;
  description?: string;
}

const categories: CategoryDescription[] = [
  {
    id: "parkett",
    title: "Parkett",
    subtitle: "Der Klassiker unter den Bodenbelägen.",
    description: "Parkett ist ein natürlicher, langlebiger und lebendiger Holzbelag, der vielfältige Möglichkeiten zur Gestaltung und Anwendung bietet. Je nach Holzart, Sortierung, Farbe, Format und Oberflächenbehandlung wirkt es immer wieder anders. Wir helfen Ihnen, den Überblick zu behalten und unterstützen Sie in Ihrer Entscheidungsfindung.",
    imageUrl: parkettImage
  },
  {
    id: "teppich",
    title: "Teppich",
    subtitle: "Wohnlich, weich, wärme- und schallisolierend.",
    description: "Teppiche sind vielseitig. Kein anderer Bodenbelag ermöglicht eine derart umfassende und vielfältige Auswahlmöglichkeit in Farbe, Musterung und Struktur. Sie können antistatisch oder geruchsbindend wirken. Der hohe Gehkomfort schont Rücken und Gelenke und reduziert den Tritt- und Raumschall erheblich.",
    imageUrl: teppichImage
  },
  {
    id: "linoleum",
    title: "Linoleum",
    subtitle: "Robust, pflegeleicht und trendy.",
    description: "Linoleum besteht aus natürlichen Rohstoffen, welche als sehr strapazierfähig und extrem langlebig gelten. Dank seinem trendigen Mustern eignet sich der Bodenbelag für Wohnungs-, Verwaltungs-, Sport-, Objekt- und den öffentlichen Bau sowie Krankenhäuser, Heime usw. Der Gestaltung eines jeden Raumes sind keine Grenzen gesetzt.",
    imageUrl: linoleumImage
  },
  {
    id: "vinyl",
    title: "Vinyl/PVC/Novilon",
    subtitle: "Ein Boden, der etwas aushält.",
    description: "Der Vinylboden hat sich in den letzten Jahren als Alternative zum Laminat etabliert. Es gibt Bodenbeläge die täuschend echt aussehen und wo sogar Fachleute zwei Mal hinschauen müssen. Vinyl sowie auch Polyvinylchlorid – kurz PVC genannt ist ein Kunststoffbelag, der sehr beständig und strapazierfähig ist. Durch diese Eigenschaften sowie einem breiten Spektrum an Farben und Designs lassen sich die Beläge in Nutzräumen mit spezifischer Beanspruchung und unterschiedlichstem Nutzungszweck wie zum Beispiel in Spitälern, Pflegheimen und Schulen optimal einsetzen. Zur selben Gruppe gehören auch die mehrschichtigen Beläge, genannt CV-Beläge – noch besser bekannt unter dem Markennamen \"Novilon\".",
    imageUrl: vinylImage
  },
  {
    id: "kork",
    title: "Kork",
    subtitle: "Natur pur.",
    description: "Kork wird aus der Rinde der Korkeiche gewonnen. Die Rinde wächst immer wieder nach und darf alle 9 Jahre geschält werden, somit ein wunderbares Naturmaterial. Korkbeläge sind elastisch, antiallergisch, leise und komfortabel, sie wirken isolierend und schalldämmend und sorgen für einen angenehmen Geh- und Stehkomfort. Korkbeläge können – ausser in Nasszellen – in allen Wohnräumen eingesetzt werden. Zur Auffrischung kann die Oberfläche abgeschliffen und nachbehandelt werden.",
    imageUrl: korkImage
  },
  {
    id: "terrassenboden",
    title: "Terrassenboden",
    subtitle: "Stilvoller Aussenbereich.",
    description: "Ob edle Echtholz Terrassendielen oder moderne WPC Beläge, entscheidend ist, was Ihnen gefällt und Ihren Anforderungen entspricht. Der Terrassenboden aus Holz ist immer eine gute Wahl und erzeugt eine angenehme Atmosphäre. Ob helle oder dunkle Holztöne, wir beraten Sie gerne zu allen Möglichkeiten sowie den passenden Pflegeprodukten, damit Ihr Terrassenboden für viele Jahre im Glanz erstrahlt. WPC steht für Wood Polymer Composites und ist ein industriell gefertigter Werkstoff aus Holzfasern, Kunststoff und weiteren Zusätzen wie UV-Licht-Blockern, Bindern und Farbpigmenten. Das Material hat sich inzwischen als gute Alternative zu Holzdielen etabliert. Wir beraten Sie und zeigen Ihnen die verschiedenen Möglichkeiten gerne auf.",
    imageUrl: terrassenImage
  },
  {
    id: "treppen",
    title: "Treppen",
    subtitle: "Vorsicht Stufe!",
    description: "Treppen führen nicht nur ins nächste Geschoss, sondern können auch attraktive raumgestaltende Elemente sein. Wichtig ist es dabei, dass Boden und Treppen zusammen harmonieren, deswegen bieten wir Ihnen alles aus einer Hand an.",
    imageUrl: parkettTreppen
  },
  {
    id: "raumgestaltung",
    title: "Raumgestaltung",
    subtitle: "Boden an der Wand.",
    description: "Parkett kann nicht nur als Bodenbelag verwendet werden, sondern auch als Gestaltungselement in Wohn- und Büroräumen. Es gibt dem Raum die gewünschte Wärme. Dieser Trend ist nichts neues, nur hat sich die Qualität verbessert und die Montage vereinfacht.",
    imageUrl: bodenwandImage
  }
];

// Care products with proper imports
const careProducts = [
  {
    id: "woca-pflegeoel",
    name: "WOCA Pflegeöl",
    imageUrl: wocaPflegeoel,
  },
  {
    id: "woca-holzbodenseife",
    name: "WOCA Holzbodenseife",
    imageUrl: wocaHolzbodenseife,
  },
  {
    id: "woca-spray",
    name: "WOCA Holzbodenseife Spray",
    imageUrl: wocaHolzbodenseifeSpray,
  },
  {
    id: "woca-intensivreiniger",
    name: "WOCA Intensivreiniger",
    imageUrl: wocaIntensivreiniger,
  },
  {
    id: "woca-fleckenentferner",
    name: "WOCA Fleckenentferner",
    imageUrl: wocaFleckenentferner,
  },
  {
    id: "clean-green-active",
    name: "Clean & Green Active",
    imageUrl: cleanGreenActive,
  },
  {
    id: "clean-green-natural",
    name: "Clean & Green Natural",
    imageUrl: cleanGreenNatural,
  }
];

const ProductsSection = ({
  title = "Unser Sortiment",
  description = "Entdecken Sie unsere hochwertige Auswahl an Bodenbelägen für jeden Anspruch und Geschmack.",
}: ProductsSectionProps) => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold mb-4"
          >
            {title}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-16 h-1 bg-[#5ec5ec] mx-auto"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Categories Menu */}
        <div className="mb-16 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-center">Produkte</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <a 
                key={category.id}
                href={`#${category.id}`}
                className="text-gray-700 hover:text-[#5ec5ec] transition-colors font-medium"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>

        {/* Categories Content */}
        <div className="space-y-24">
          {categories.map((category, index) => (
            <motion.div 
              key={category.id}
              id={category.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2 md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="overflow-hidden rounded-lg shadow-md h-[300px] md:h-[400px] group">
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{category.title}</h2>
                <h3 className="text-lg font-medium text-[#5ec5ec]">{category.subtitle}</h3>
                <Separator className="w-16 bg-[#5ec5ec] h-1" />
                <p className="text-gray-700">{category.description}</p>
                <Button 
                  className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white mt-4"
                  asChild
                >
                  <Link to="/contact">
                    Beratung anfragen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pflegeprodukte Section */}
        <div className="mt-24 bg-gray-50 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Parkett Pflegeprodukte</h2>
            <Separator className="mx-auto w-16 bg-[#5ec5ec] h-1 mb-6" />
            <p className="text-gray-600 mb-8">Unsere Pflegeprodukte von WOCA</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {careProducts.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm transition-transform hover:scale-105 duration-300">
                  <div className="h-44 flex items-center justify-center mb-3">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-center">{product.name}</h3>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white"
              asChild
            >
              <Link to="/pflegeprodukte">
                Zum Shop <ShoppingCart className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection; 