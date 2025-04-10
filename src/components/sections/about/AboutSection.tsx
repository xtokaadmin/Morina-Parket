import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

interface AboutSectionProps {
  title?: string;
  description?: string;
  companyHistory?: string;
  companyImage?: string;
  valueTitle?: string;
  values?: Array<{
    title: string;
    description: string;
    icon?: React.ReactNode;
  }>;
  teamTitle?: string;
  teamDescription?: string;
  team?: TeamMember[];
}

const AboutSection = ({
  title = "Über uns",
  description = "Seit mehr als 20 Jahren ist Morina Parkett Ihr verlässlicher Partner für hochwertige Bodenbeläge in Zürich und Umgebung.",
  companyHistory = "Gegründet im Jahr 2001, hat sich Morina Parkett als Spezialist für Bodenbeläge etabliert. Unser Familienunternehmen steht für Qualität, Handwerkskunst und persönlichen Service. Durch jahrelange Erfahrung und kontinuierliche Weiterbildung garantieren wir Ihnen beste Ergebnisse bei Beratung, Verkauf und Verlegung von Bodenbelägen.",
  companyImage = "/assets/showroom.jpg",
  valueTitle = "Unsere Werte",
  values = [
    {
      title: "Qualität",
      description: "Wir verwenden nur hochwertige Materialien und arbeiten mit präzisen Techniken für langlebige Ergebnisse."
    },
    {
      title: "Zuverlässigkeit",
      description: "Wir halten Termine ein und stehen zu unseren Versprechen. Sie können sich auf uns verlassen."
    },
    {
      title: "Nachhaltigkeit",
      description: "Wir setzen auf umweltfreundliche Materialien und ressourcenschonende Arbeitsweisen."
    },
  ],
  teamTitle = "Unser Team",
  teamDescription = "Lernen Sie unser erfahrenes Team kennen, das mit Leidenschaft und Expertise für Ihre Bodenbelagswünsche da ist.",
  team = [],
}: AboutSectionProps) => {
  return (
    <div className="bg-white">
      {/* Company History Section */}
      <section className="py-16 px-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Unsere Geschichte</h3>
              <p className="text-gray-700 mb-6">{companyHistory}</p>
              <div className="flex gap-2 mb-6">
                <Badge className="bg-[#5ec5ec]">Parkettarbeiten</Badge>
                <Badge className="bg-[#5ec5ec]">Bodenbeläge</Badge>
                <Badge className="bg-[#5ec5ec]">Fachberatung</Badge>
              </div>
              <Button asChild className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white">
                <Link to="/contact">Kontaktieren Sie uns</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={companyImage}
                alt="Morina Parkett Geschichte"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{valueTitle}</h2>
            <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                {value.icon && <div className="text-[#5ec5ec] mb-4">{value.icon}</div>}
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {team.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">{teamTitle}</h2>
              <Separator className="mx-auto w-24 bg-[#5ec5ec] h-1 mb-6" />
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{teamDescription}</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-[#5ec5ec] mb-4">{member.position}</p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AboutSection; 