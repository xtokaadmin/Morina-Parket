import React from "react";
import { Separator } from "@/components/ui/separator";
import Header from "@/layouts/MainLayout/Header";
import Footer from "@/layouts/MainLayout/Footer";
import { useCartStore } from "@/features/cart/store/cartStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } =
    useCartStore();

  const handleUpdateQuantity = (
    id: string,
    currentQuantity: number,
    change: number,
  ) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold mb-4">Warenkorb</h1>
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
          </div>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="mx-auto h-16 w-16 text-gray-300 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">
                Ihr Warenkorb ist leer
              </h2>
              <p className="text-gray-600 mb-8">
                Fügen Sie Produkte hinzu, um mit dem Einkauf zu beginnen
              </p>
              <Button
                className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white"
                asChild
              >
                <Link to="/shop">Zum Shop</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col sm:flex-row gap-4 pb-6 border-b border-gray-100"
                        >
                          <div className="w-24 h-24 flex-shrink-0">
                            <img
                              src={item.imageUrl}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between">
                              <h3 className="font-semibold">{item.name}</h3>
                              <p className="font-bold">
                                CHF {(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                            <p className="text-sm text-gray-500 mb-2">
                              {item.category}
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center border border-gray-200 rounded-sm">
                                <button
                                  onClick={() =>
                                    handleUpdateQuantity(
                                      item.id,
                                      item.quantity,
                                      -1,
                                    )
                                  }
                                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="px-4 py-1">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    handleUpdateQuantity(
                                      item.id,
                                      item.quantity,
                                      1,
                                    )
                                  }
                                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex justify-between">
                      <Button
                        variant="outline"
                        onClick={clearCart}
                        className="text-gray-600"
                      >
                        Warenkorb leeren
                      </Button>
                      <Button
                        className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white"
                        asChild
                      >
                        <Link to="/shop">Weiter einkaufen</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <Card className="border-0 shadow-sm sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Zusammenfassung</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Zwischensumme</span>
                        <span>CHF {getTotalPrice().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Versand</span>
                        <span>CHF 0.00</span>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex justify-between font-bold">
                        <span>Gesamtsumme</span>
                        <span>CHF {getTotalPrice().toFixed(2)}</span>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-[#5ec5ec] hover:bg-[#4db5dc] text-white"
                      asChild
                    >
                      <Link to="/checkout">
                        Zur Kasse <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CartPage;
