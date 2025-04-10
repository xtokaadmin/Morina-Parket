import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Hammer, Paintbrush } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = (
  { title, description, icon }: ServiceCardProps = {
    title: "Dienstleistungstitel",
    description:
      "Dienstleistungsbeschreibung, die die Details dieser speziellen Dienstleistung erklärt.",
    icon: <MessageSquare size={32} />,
  },
) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full overflow-hidden border-2 border-transparent hover:border-[#5ec5ec] transition-colors bg-white">
        <CardContent className="p-6 flex flex-col h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-4 text-[#5ec5ec]"
          >
            {icon}
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-xl font-bold mb-2"
          >
            {title}
          </motion.h3>
          <Separator className="mb-4 bg-[#5ec5ec]" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-gray-600 flex-grow"
          >
            {description}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Beraten",
      description:
        "Professionelle Beratung zur Auswahl der besten Bodenbeläge für Ihre Bedürfnisse. Wir helfen Ihnen, die perfekte Lösung zu finden.",
      icon: <MessageSquare size={32} />,
    },
    {
      title: "Verlegen",
      description:
        "Fachgerechte Installation aller Arten von Bodenbelägen durch unser erfahrenes Team. Präzise Arbeit für langlebige Ergebnisse.",
      icon: <Hammer size={32} />,
    },
    {
      title: "Pflege",
      description:
        "Umfassende Pflegedienste zur Erhaltung der Schönheit und Langlebigkeit Ihrer Böden. Regelmäßige Wartung für optimale Ergebnisse.",
      icon: <Paintbrush size={32} />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
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
            Unsere Dienstleistungen
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-16 h-1 bg-[#5ec5ec] mx-auto"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            Wir bieten umfassende Lösungen für alle Ihre Bodenbelagsbedürfnisse,
            von der ersten Beratung bis zur langfristigen Pflege.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
