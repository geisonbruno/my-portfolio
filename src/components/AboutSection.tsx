import React from "react";
import { User, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="py-16 sm:py-20 min-h-screen flex items-center dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {" "}
          {/* Altera de items-center para items-start */}
          {/* Coluna da esquerda (Imagem) */}
          <div>
            <div className="relative mx-auto max-w-[300px] sm:max-w-[450px] md:max-w-[500px]">
              <div
                className="w-full aspect-square bg-muted dark:bg-gray-800 rounded-lg overflow-hidden 
                border-[2px] border-white dark:border-gray-600 shadow-lg shadow-blue-100/50"
              >
                <div className="absolute inset-0 from-primary/10 to-secondary/20 mix-blend-overlay"></div>
                <img
                  src="/src/img/eu.png"
                  alt="Minha Foto"
                  className="w-full h-full object-cover scale-120"
                />
              </div>
            </div>
          </div>
          {/* Coluna da direita (Texto) */}
          <div className="flex flex-col space-y-4 sm:space-y-6">
            {/* Aqui está o título alinhado com o conteúdo */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 self-start">
              About <span className="text-primary dark:text-blue-400">Me</span>
            </h2>

            <h3 className="text-xl sm:text-2xl font-bold dark:text-white">
              Software Developer
            </h3>
            <div className="text-sm sm:text-base text-muted-foreground dark:text-gray-300 space-y-4">
              <p>• Graduating in Systems Analysis and Development.</p>
              <p>• 2 year experience.</p>
              <p>• Intermediate English.</p>
            </div>

            <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4">
              <Button
                className="flex items-center gap-2 text-xs sm:text-sm"
                onClick={() =>
                  window.open("http://github.com/geisonbruno", "_blank")
                }
              >
                <Github size={18} />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-xs sm:text-sm dark:text-white dark:border-gray-600"
                onClick={() =>
                  window.open("https://linkedin.com/in/seu-usuario", "_blank")
                }
              >
                <Linkedin size={18} />
                LinkedIn
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3">
                  <User className="text-primary dark:text-blue-400 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm dark:text-gray-300">
                    Name: Geison Bruno
                  </span>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3">
                  <Mail className="text-primary dark:text-blue-400 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm dark:text-gray-300">
                    Email: geisonbruno0@gmail.com
                  </span>
                </CardContent>
              </Card>

              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3">
                  <MapPin className="text-primary dark:text-blue-400 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm dark:text-gray-300">
                    Location: Novo Hamburgo - RS
                  </span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
