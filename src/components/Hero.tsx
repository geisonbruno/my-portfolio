import React from "react";
import { ArrowDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/+5551991777814", "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative px-4 dark:bg-gray-900"
    >
      <div className="container mx-auto">
        <div className="text-left space-y-4 sm:space-y-6 max-w-3xl">
          <div className="flex items-center space-x-2">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
              Hello
            </span>
            <span className="text-lg font-medium dark:text-white">I'm</span>
          </div>

          {/* Nome destacado */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight dark:text-white">
            <span className="text-primary dark:text-white">Geison Bruno</span>
          </h1>

          {/* Cargo com parte colorida */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white">
            <span className="text-primary dark:text-white">Software</span>
            <span className="text-blue-600"> Developer</span>
          </h2>
          {/* <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-gray-300 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Transformando ideias em soluções robustas e escaláveis
          </p> */}
          <div
            className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mt-6 sm:mt-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              onClick={scrollToAbout}
              className="group dark:bg-blue-600 dark:hover:bg-blue-700 w-full sm:w-auto text-sm sm:text-base"
            >
              See my work
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button
              onClick={openWhatsApp}
              variant="outline"
              className="group dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white w-full sm:w-auto mt-3 sm:mt-0 text-sm sm:text-base"
            >
              Say hello
              <Phone className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary dark:text-blue-400" />
      </div>
    </section>
  );
};

export default Hero;
