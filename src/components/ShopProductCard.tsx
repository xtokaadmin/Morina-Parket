import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { toast } from "@/components/ui/use-toast";
import ImageWithFallback from "./ImageWithFallback";

interface ShopProductCardProps {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  price: number;
  inStock?: boolean;
}

const ShopProductCard = ({
  id,
  name,
  category,
  description,
  imageUrl,
  price,
  inStock = true,
}: ShopProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      imageUrl,
      category,
    });

    toast({
      title: "Produkt hinzugefügt",
      description: `${name} wurde zum Warenkorb hinzugefügt.`,
    });
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-2 border-gray-100 h-full flex flex-col">
      <div className="relative">
        <AspectRatio ratio={1 / 1}>
          <ImageWithFallback
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <div className="absolute top-2 right-2">
          <Badge className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white font-medium">
            {category}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold tracking-tight mb-1 truncate">
          {name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{description}</p>
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xl font-bold">CHF {price.toFixed(2)}</span>
            <span
              className={
                inStock ? "text-green-600 text-sm" : "text-red-600 text-sm"
              }
            >
              {inStock ? "Auf Lager" : "Nicht verfügbar"}
            </span>
          </div>
          <Button
            className="w-full bg-[#5ec5ec] hover:bg-[#4db5dc] text-white"
            onClick={handleAddToCart}
            disabled={!inStock}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> In den Warenkorb
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShopProductCard;
