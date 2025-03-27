import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background dark:bg-gray-900 backdrop-blur-sm z-50 py-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl md:text-3xl font-bold dark:text-white">
          geisonBrunoDev
        </h1>

        {/* Menu para telas médias e grandes */}
        <nav className="hidden md:block">
          <ul className="flex space-x-9">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground font-bold dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-foreground font-bold dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
              >
                About me
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-foreground font-bold dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
              >
                Experiences
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground font-bold dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
              >
                Projetcs
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-foreground font-bold dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("social")}
                className="text-foreground font-bold dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
              >
                Social
              </button>
            </li>
          </ul>
        </nav>

        {/* Botão de menu para dispositivos móveis */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-background dark:bg-gray-900 py-4 px-4 border-b dark:border-gray-800 font-bold">
          <nav>
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="w-full text-left text-foreground dark:text-gray-300 hover:text-primary dark:hover:text-orange-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="w-full text-left text-foreground dark:text-gray-300 hover:text-primary dark:hover:text-orange-500 transition-colors"
                >
                  About me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="w-full text-left text-foreground dark:text-gray-300 hover:text-primary dark:hover:text-orange-500 transition-colors"
                >
                  Experiences
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projetos")}
                  className="w-full text-left text-foreground dark:text-gray-300 hover:text-primary dark:hover:text-orange-500 transition-colors"
                >
                  Projetcs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="w-full text-left text-foreground dark:text-gray-300 hover:text-primary dark:hover:text-orange-500 transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("social")}
                  className="w-full text-left text-foreground dark:text-gray-300 hover:text-primary dark:hover:text-orange-500 transition-colors"
                >
                  Social
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
