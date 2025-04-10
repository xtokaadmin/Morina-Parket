import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartStore } from "@/features/cart/store/cartStore";

const CartIcon = () => {
  const itemCount = useCartStore((state) => state.items.length);

  return (
    <Link to="/cart" className="relative inline-flex items-center">
      <ShoppingCart className="h-6 w-6 text-gray-800 hover:text-[#5ec5ec]" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#5ec5ec] text-[10px] font-medium text-white">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
