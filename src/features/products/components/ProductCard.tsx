import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductCardProps {
  id?: string;
  name?: string;
  category?: string;
  description?: string;
  imageUrl?: string;
  onClick?: () => void;
}

const ProductCard = ({
  id = "1",
  name = "Premium Oak Parquet",
  category = "Parkett",
  description = "High-quality oak parquet flooring with natural finish, perfect for modern interiors.",
  imageUrl = "/assets/parkett-1154x800.jpg",
  onClick = () => console.log("Product card clicked"),
}: ProductCardProps) => {
  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-2 border-gray-100 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <AspectRatio ratio={1 / 1}>
          <img
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
      <CardContent className="p-4">
        <h3 className="text-lg font-bold tracking-tight mb-1 truncate">
          {name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard; 