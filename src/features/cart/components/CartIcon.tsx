import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/features/cart/store/cartStore";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <Link to="/cart" className="relative">
      <ShoppingCart className="h-6 w-6 text-gray-800 hover:text-[#5ec5ec] transition-colors duration-200" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#5ec5ec] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartIcon; 