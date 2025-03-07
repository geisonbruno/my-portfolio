
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github className="h-5 w-5 sm:h-6 sm:w-6" />,
    url: 'https://github.com',
    color: 'hover:bg-[#333] hover:text-white'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />,
    url: 'https://linkedin.com',
    color: 'hover:bg-[#0077B5] hover:text-white'
  }
];

const SocialSection = () => {
  return (
    <section id="social" className="py-16 sm:py-20 min-h-screen bg-muted/30 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center dark:text-white">
          Vamos <span className="text-primary dark:text-blue-400">Conectar</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg mb-8 sm:mb-10 text-muted-foreground dark:text-gray-300">
            Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato comigo através das minhas redes sociais ou por e-mail.
          </p>
          
          <div className="flex justify-center gap-4 sm:gap-6 mb-10 sm:mb-12">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 sm:p-4 flex flex-col items-center justify-center rounded-lg border transition-colors ${link.color} w-24 sm:w-32`}
              >
                {link.icon}
                <span className="mt-2 text-xs sm:text-sm font-medium">{link.name}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-8 sm:mt-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 dark:text-white">Entre em contato</h3>
            <p className="text-sm sm:text-base text-muted-foreground dark:text-gray-300 mb-5 sm:mb-6">
              Prefere email? Envie uma mensagem diretamente para mim.
            </p>
            <Button className="mt-2 sm:mt-4 text-sm sm:text-base dark:bg-blue-600 dark:hover:bg-blue-700">
              <Mail className="mr-2 h-4 w-4" />
              contato@exemplo.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
