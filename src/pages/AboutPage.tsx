import React from "react";
import AboutHeroSection from "../components/sections/about/AboutHeroSection";
import AboutSection from "../components/sections/about/AboutSection";
import { Award, Users, Heart } from "lucide-react";

// Sample team members - in a real app these would come from a CMS or API
const teamMembers = [
  {
    id: "1",
    name: "Elez Morina",
    position: "Geschäftsführer",
    bio: "Gründer und Geschäftsführer mit über 25 Jahren Erfahrung in der Bodenbelagsbranche. Experte für hochwertige Parkettböden und komplexe Verlegetechniken.",
    imageUrl: "/assets/about/team-1.jpg"
  },
  {
    id: "2",
    name: "Anna Müller",
    position: "Kundenberaterin",
    bio: "Erfahrene Beraterin mit einem ausgeprägten Sinn für Design und Innenraumgestaltung. Sie hilft Kunden, den perfekten Bodenbelag zu finden.",
    imageUrl: "/assets/about/team-2.jpg"
  },
  {
    id: "3",
    name: "Marco Weber",
    position: "Bodenlegemeister",
    bio: "Ausgebildeter Bodenlegemeister mit Spezialisierung auf Parkett und Designbeläge. Bekannt für präzise Arbeit und kreative Verlegemuster.",
    imageUrl: "/assets/about/team-3.jpg"
  }
];

const AboutPage = () => {
  // Custom values with icons
  const values = [
    {
      title: "Qualität",
      description: "Wir verwenden nur hochwertige Materialien und arbeiten mit präzisen Techniken für langlebige Ergebnisse.",
      icon: <Award className="h-8 w-8" />
    },
    {
      title: "Zuverlässigkeit",
      description: "Wir halten Termine ein und stehen zu unseren Versprechen. Sie können sich auf uns verlassen.",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Nachhaltigkeit",
      description: "Wir setzen auf umweltfreundliche Materialien und ressourcenschonende Arbeitsweisen.",
      icon: <Heart className="h-8 w-8" />
    },
  ];

  return (
    <div className="bg-white">
      <AboutHeroSection />
      <div id="about">
        <AboutSection 
          companyHistory="Gegründet im Jahr 2001, hat sich Morina Parkett als Spezialist für Bodenbeläge in Zürich etabliert. Unser Familienunternehmen steht für Qualität, Handwerkskunst und persönlichen Service. Durch jahrelange Erfahrung und kontinuierliche Weiterbildung garantieren wir Ihnen beste Ergebnisse bei Beratung, Verkauf und Verlegung von Bodenbelägen. Mit einem engagierten Team von Fachleuten haben wir in den letzten zwei Jahrzehnten zahlreiche Projekte für Privathaushalte, Unternehmen und öffentliche Einrichtungen erfolgreich umgesetzt."
          companyImage="/assets/about/company.jpg"
          values={values}
          team={teamMembers}
        />
      </div>
    </div>
  );
};

export default AboutPage; 