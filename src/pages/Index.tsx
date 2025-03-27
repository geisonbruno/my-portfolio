import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Home";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import SocialSection from "../components/SocialSection";
import Footer from "../components/Footer";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isButtonOverlapping, setIsButtonOverlapping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Define se é mobile
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Detectar se o botão está sobrepondo elementos visíveis
  useEffect(() => {
    if (!isMobile) return; // Só ativa em telas menores

    const observer = new IntersectionObserver(
      (entries) => {
        let isOverlapping = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isOverlapping = true;
          }
        });
        setIsButtonOverlapping(isOverlapping);
      },
      { threshold: 0.2 } // Ajuste para sensibilidade da detecção
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isMobile]);

  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Botão de Tema (Dark/Light) */}
      <div
        className={`fixed right-7 top-[110px] z-50 transition-opacity duration-300 ease-in-out ${
          isMobile && isButtonOverlapping ? "opacity-30" : "opacity-100"
        }`}
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-10 h-10 dark:bg-gray-800 dark:text-white transform active:scale-90 transition-transform duration-150"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </div>

      <Header />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Index;
