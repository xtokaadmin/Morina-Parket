import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({ className = "" }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Formular gesendet:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className={`w-full py-12 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Kontakt
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6 max-w-6xl mx-auto"
        >
          {/* First Row: Contact Info and Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Contact Info */}
            <Card className="border border-gray-200">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-[#5ec5ec] mt-0.5" />
                  <div>
                    <h3 className="font-medium text-sm">Adresse</h3>
                    <p className="text-sm">
                      Grubenstrasse 19, CH – 8045 Zürich
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 text-[#5ec5ec] mt-0.5" />
                  <div>
                    <h3 className="font-medium text-sm">Telefon</h3>
                    <p className="text-sm">+41 44 480 01 75</p>
                    <p className="text-sm">+41 44 480 01 76</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 text-[#5ec5ec] mt-0.5" />
                  <div>
                    <h3 className="font-medium text-sm">E-Mail</h3>
                    <p className="text-sm">info@morina-parkett.ch</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-4 w-4 text-[#5ec5ec] mt-0.5" />
                  <div>
                    <h3 className="font-medium text-sm">Öffnungszeiten</h3>
                    <p className="text-sm">Montag bis Freitag:</p>
                    <p className="text-sm">08:00 – 12:00 und 13:00 – 17:00</p>
                    <p className="text-xs italic mt-1">
                      Bitte rufen Sie vorher an, um die Verfügbarkeit zu
                      bestätigen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="border border-gray-200">
              <CardContent className="p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <Label htmlFor="name" className="text-sm">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="h-8 text-sm border focus:border-[#5ec5ec] focus:ring-[#5ec5ec]"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-sm">
                      E-Mail
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="h-8 text-sm border focus:border-[#5ec5ec] focus:ring-[#5ec5ec]"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="phone" className="text-sm">
                      Telefon
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="h-8 text-sm border focus:border-[#5ec5ec] focus:ring-[#5ec5ec]"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="message" className="text-sm">
                      Nachricht
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      rows={4}
                      className="text-sm border focus:border-[#5ec5ec] focus:ring-[#5ec5ec]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-8 text-sm bg-[#5ec5ec] hover:bg-[#4db5dc] text-white"
                  >
                    Senden
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Second Row: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-full"
          >
            <Card className="overflow-hidden border border-[#5ec5ec] h-full">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.4583377309393!2d8.5142!3d47.3724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a3f64a4f2ff%3A0x9d5a6e1edb0d0da2!2sGrubenstrasse%2019%2C%208045%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1625012345678!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Morina Parkett GmbH Standort"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection; 