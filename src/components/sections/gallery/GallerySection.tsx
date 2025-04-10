import React, { useState } from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { 
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface GallerySectionProps {
  title?: string;
  description?: string;
  items: GalleryItem[];
}

const GallerySection = ({
  title = "Unsere Referenzen",
  description = "Entdecken Sie unsere abgeschlossenen Projekte und lassen Sie sich inspirieren.",
  items,
}: GallerySectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Get unique categories
  const categories = ["all", ...new Set(items.map(item => item.category))];
  
  // Filter items by selected category
  const filteredItems = selectedCategory === "all" 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <section className="py-16 px-4 bg-gray-50">
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
          <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${
                selectedCategory === category
                  ? "bg-[#5ec5ec] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category === "all" ? "Alle Projekte" : category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden bg-white rounded-lg shadow-md cursor-pointer aspect-[4/3] relative group"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                    <div className="p-4 w-full text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.category}</p>
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl p-0 bg-transparent border-none">
                <div className="relative bg-white rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 p-1 rounded-full bg-white/80 hover:bg-white z-10"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/3">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/3 p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-4 uppercase">{item.category}</p>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection; 