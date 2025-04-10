import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import ImageWithFallback from "./ImageWithFallback";

interface HeroProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  reversed?: boolean;
  bgColor?: string;
}

const Hero = ({
  title,
  description,
  imageSrc,
  imageAlt,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  reversed = false,
  bgColor = "#f8f8f8",
}: HeroProps) => {
  const contentOrder = reversed ? "md:order-2" : "";
  const imageOrder = reversed ? "md:order-1" : "";

  return (
    <section className="relative bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div
          className={`${bgColor} p-8 md:p-16 flex flex-col justify-center ${contentOrder}`}
          style={{ backgroundColor: bgColor }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-700 mb-8"
            >
              {description}
            </motion.p>
            {(primaryButtonText || secondaryButtonText) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                {primaryButtonText && primaryButtonLink && (
                  <Button
                    className="bg-[#5ec5ec] hover:bg-[#4db5dc] text-white"
                    asChild
                  >
                    <Link to={primaryButtonLink}>{primaryButtonText}</Link>
                  </Button>
                )}
                {secondaryButtonText && secondaryButtonLink && (
                  <Button variant="outline" asChild>
                    <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
                  </Button>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className={`aspect-square overflow-hidden ${imageOrder}`}
        >
          <ImageWithFallback
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
