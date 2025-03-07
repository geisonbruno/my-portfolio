
import React from 'react';
import { User, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 min-h-screen flex items-center dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Sobre <span className="text-primary dark:text-blue-400">Mim</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-full aspect-square bg-muted dark:bg-gray-800 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay"></div>
                {/* Placeholder para imagem de perfil */}
                <div className="w-full h-full flex items-center justify-center text-muted-foreground dark:text-gray-400">
                  <User size={60} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold dark:text-white">Desenvolvedor Java/Kotlin</h3>
            <p className="text-muted-foreground dark:text-gray-300">
              Sou um desenvolvedor de software focado em Java/Kotlin, apaixonado por criar soluções eficientes e robustas.
              Com experiência no desenvolvimento de aplicações backend, trabalho para implementar sistemas escaláveis e de alta performance.
            </p>
            
            <div className="flex gap-4 mt-4">
              <Button className="flex items-center gap-2" onClick={() => window.open('https://github.com/seu-usuario', '_blank')}>
                <Github size={20} />
                GitHub
              </Button>
              <Button variant="outline" className="flex items-center gap-2 dark:text-white dark:border-gray-600" onClick={() => window.open('https://linkedin.com/in/seu-usuario', '_blank')}>
                <Linkedin size={20} />
                LinkedIn
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-4 flex items-center space-x-3">
                  <User className="text-primary dark:text-blue-400 h-5 w-5" />
                  <span className="dark:text-gray-300">Nome: João Silva</span>
                </CardContent>
              </Card>
              
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-4 flex items-center space-x-3">
                  <Mail className="text-primary dark:text-blue-400 h-5 w-5" />
                  <span className="dark:text-gray-300">Email: contato@exemplo.com</span>
                </CardContent>
              </Card>
              
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-4 flex items-center space-x-3">
                  <MapPin className="text-primary dark:text-blue-400 h-5 w-5" />
                  <span className="dark:text-gray-300">Localização: São Paulo, Brasil</span>
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
