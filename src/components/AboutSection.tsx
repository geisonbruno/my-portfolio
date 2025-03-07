
import React from 'react';
import { User, Mail, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Sobre <span className="text-primary">Mim</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-full aspect-square bg-muted rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay"></div>
                {/* Placeholder para imagem de perfil */}
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <User size={60} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Desenvolvedor Web & Designer</h3>
            <p className="text-muted-foreground">
              Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras e intuitivas. 
              Com experiência em design e desenvolvimento front-end, trabalho para transformar conceitos em 
              interfaces funcionais e atraentes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Card>
                <CardContent className="p-4 flex items-center space-x-3">
                  <User className="text-primary h-5 w-5" />
                  <span>Nome: João Silva</span>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-center space-x-3">
                  <Mail className="text-primary h-5 w-5" />
                  <span>Email: contato@exemplo.com</span>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-center space-x-3">
                  <MapPin className="text-primary h-5 w-5" />
                  <span>Localização: São Paulo, Brasil</span>
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
