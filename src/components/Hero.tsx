
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative dark:bg-gray-900">
      <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in dark:text-white">
          Olá, eu sou <span className="text-primary dark:text-blue-400">Desenvolvedor Java/Kotlin</span>
        </h1>
        <p className="text-xl text-muted-foreground dark:text-gray-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Transformando ideias em soluções robustas e escaláveis
        </p>
        <Button
          onClick={scrollToAbout}
          className="mt-8 animate-fade-in group dark:bg-blue-600 dark:hover:bg-blue-700"
          style={{ animationDelay: "0.4s" }}
        >
          Conheça meu trabalho
          <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
        </Button>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary dark:text-blue-400" />
      </div>
    </section>
  );
};

export default Hero;
