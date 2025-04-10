import React from "react";
import { Separator } from "@/components/ui/separator";
import ContactSection from "./ContactSection";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <Hero
        title="Kontaktieren Sie uns"
        description="Wir sind für Sie da. Nehmen Sie Kontakt mit unserem Team auf für Anfragen oder um einen Termin zu vereinbaren."
        imageSrc="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=1200&q=80"
        imageAlt="Kontakt Morina Parkett"
        bgColor="#f8f8f8"
      />
      {/* Contact Section */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nehmen Sie Kontakt mit unserem Team auf für Anfragen oder um einen
              Termin zu vereinbaren
            </p>
          </div>
          <ContactSection />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
