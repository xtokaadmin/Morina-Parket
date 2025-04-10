import React from "react";
import GalleryHeroSection from "../components/sections/gallery/GalleryHeroSection";
import GallerySection from "../components/sections/gallery/GallerySection";

// Sample gallery items - in a real app these would come from a CMS or API
const galleryItems = [
  {
    id: "1",
    title: "Parkettboden in Eiche",
    description: "Hochwertiger Parkettboden in Eiche für ein modernes Wohnzimmer.",
    imageUrl: "/assets/gallery/project1.jpg",
    category: "Parkett"
  },
  {
    id: "2",
    title: "Vinylboden im Badezimmer",
    description: "Wasserfester Vinylboden für ein elegantes Badezimmer.",
    imageUrl: "/assets/gallery/project2.jpg",
    category: "Vinyl"
  },
  {
    id: "3",
    title: "Teppichboden im Schlafzimmer",
    description: "Weicher und komfortabler Teppichboden für ein gemütliches Schlafzimmer.",
    imageUrl: "/assets/gallery/project3.jpg",
    category: "Teppich"
  },
  {
    id: "4",
    title: "Linoleum in Büroräumen",
    description: "Robuster Linoleumboden für stark frequentierte Büroflächen.",
    imageUrl: "/assets/gallery/project4.jpg",
    category: "Linoleum"
  },
  {
    id: "5",
    title: "Korkboden im Kinderzimmer",
    description: "Warmer und schadstofffreier Korkboden für ein gesundes Kinderzimmer.",
    imageUrl: "/assets/gallery/project5.jpg",
    category: "Kork"
  },
  {
    id: "6",
    title: "Terrassenboden aus WPC",
    description: "Pflegeleichter und langlebiger WPC-Terrassenboden für den Außenbereich.",
    imageUrl: "/assets/gallery/project6.jpg",
    category: "Terrasse"
  }
];

const GalleryPage = () => {
  return (
    <div className="bg-white">
      <GalleryHeroSection />
      <div id="gallery">
        <GallerySection 
          title="Unsere Projekte"
          description="Hier sehen Sie eine Auswahl unserer erfolgreich abgeschlossenen Projekte. Von eleganten Parkettböden bis hin zu modernen Designbelägen - wir setzen Ihre Wünsche mit Präzision und Leidenschaft um."
          items={galleryItems}
        />
      </div>
    </div>
  );
};

export default GalleryPage; 