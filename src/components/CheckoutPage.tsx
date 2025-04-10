import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Header from "./Header";
import Footer from "./Footer";
import { useCartStore } from "@/store/cartStore";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { ArrowRight, CreditCard, Truck, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Schweiz",
    paymentMethod: "card",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order processing
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderComplete(true);
      clearCart();

      // Redirect to confirmation after a delay
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }, 2000);
  };

  if (items.length === 0 && !orderComplete) {
    navigate("/cart");
    return null;
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="py-20 bg-[#f8f8f8]">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-4">
                Bestellung erfolgreich!
              </h1>
              <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
              <p className="text-gray-600 mb-8">
                Vielen Dank für Ihre Bestellung. Eine Bestätigung wurde an Ihre
                E-Mail-Adresse gesendet.
              </p>
              <Button
                className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white"
                asChild
              >
                <Link to="/">Zurück zur Startseite</Link>
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold mb-4">Checkout</h1>
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-xl font-bold mb-4">Lieferadresse</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Vorname *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nachname *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Adresse *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Ort *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">PLZ *</Label>
                        <Input
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Land *</Label>
                        <Input
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4">Zahlungsmethode</h3>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={handleRadioChange}
                      className="mb-6"
                    >
                      <div className="flex items-center space-x-2 border p-4 rounded-sm mb-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label
                          htmlFor="card"
                          className="flex items-center cursor-pointer"
                        >
                          <CreditCard className="mr-2 h-5 w-5 text-[#5ec5ec]" />
                          Kreditkarte
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-4 rounded-sm mb-2">
                        <RadioGroupItem value="invoice" id="invoice" />
                        <Label
                          htmlFor="invoice"
                          className="flex items-center cursor-pointer"
                        >
                          <Truck className="mr-2 h-5 w-5 text-[#5ec5ec]" />
                          Rechnung
                        </Label>
                      </div>
                    </RadioGroup>

                    <div className="space-y-2 mb-6">
                      <Label htmlFor="notes">Anmerkungen zur Bestellung</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Spezielle Anweisungen für die Lieferung oder andere Hinweise"
                      />
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" type="button" asChild>
                        <Link to="/cart">Zurück zum Warenkorb</Link>
                      </Button>
                      <Button
                        className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting
                          ? "Wird bearbeitet..."
                          : "Bestellung abschließen"}
                        {!isSubmitting && (
                          <ArrowRight className="ml-2 h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="border-0 shadow-sm sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Bestellübersicht</h3>
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <div>
                          <span className="font-medium">{item.name}</span>
                          <span className="text-gray-500 ml-2">
                            x{item.quantity}
                          </span>
                        </div>
                        <span>
                          CHF {(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Separator className="my-4" />
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
