import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import CartIcon from "@/features/cart/components/CartIcon";
import { logos } from "@/assets";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logos.logo}
              alt="Morina Parkett GmbH Logo"
              className="h-10 md:h-12 transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <div className="relative group">
            <Link
              to="/services"
              className="text-gray-800 hover:text-[#5ec5ec] font-medium transition-colors duration-200 flex items-center"
            >
              Dienstleistungen
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link
                to="/services/beraten"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#5ec5ec]"
              >
                Beraten
              </Link>
              <Link
                to="/services/verlegen"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#5ec5ec]"
              >
                Verlegen
              </Link>
              <Link
                to="/services/pflege"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#5ec5ec]"
              >
                Pflege
              </Link>
            </div>
          </div>
          <Link
            to="/sortiment"
            className="text-gray-800 hover:text-[#5ec5ec] font-medium transition-colors duration-200"
          >
            Sortiment
          </Link>
          <Link
            to="/shop"
            className="text-gray-800 hover:text-[#5ec5ec] font-medium transition-colors duration-200"
          >
            Shop
          </Link>
          <Link
            to="/showroom"
            className="text-gray-800 hover:text-[#5ec5ec] font-medium transition-colors duration-200"
          >
            Showroom
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-[#5ec5ec] font-medium transition-colors duration-200"
          >
            Kontakt
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <CartIcon />
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <CartIcon />
          <Button
            variant="outline"
            className="flex items-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            <span className="ml-2">Menü</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <nav className="flex flex-col container mx-auto px-4 py-2">
            <div className="py-3 border-b border-gray-100">
              <Link
                to="/services"
                className="text-gray-800 hover:text-[#5ec5ec] font-medium"
                onClick={toggleMobileMenu}
              >
                Dienstleistungen
              </Link>
              <div className="pl-4 mt-2 flex flex-col space-y-2">
                <Link
                  to="/services/beraten"
                  className="text-gray-700 hover:text-[#5ec5ec] text-sm"
                  onClick={toggleMobileMenu}
                >
                  Beraten
                </Link>
                <Link
                  to="/services/verlegen"
                  className="text-gray-700 hover:text-[#5ec5ec] text-sm"
                  onClick={toggleMobileMenu}
                >
                  Verlegen
                </Link>
                <Link
                  to="/services/pflege"
                  className="text-gray-700 hover:text-[#5ec5ec] text-sm"
                  onClick={toggleMobileMenu}
                >
                  Pflege
                </Link>
              </div>
            </div>
            <Link
              to="/sortiment"
              className="text-gray-800 hover:text-[#5ec5ec] font-medium py-3 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              Sortiment
            </Link>
            <Link
              to="/shop"
              className="text-gray-800 hover:text-[#5ec5ec] font-medium py-3 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              Shop
            </Link>
            <Link
              to="/showroom"
              className="text-gray-800 hover:text-[#5ec5ec] font-medium py-3 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              Showroom
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-[#5ec5ec] font-medium py-3"
              onClick={toggleMobileMenu}
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
