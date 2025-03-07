
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Facebook, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github className="h-6 w-6" />,
    url: 'https://github.com',
    color: 'hover:bg-[#333] hover:text-white'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="h-6 w-6" />,
    url: 'https://linkedin.com',
    color: 'hover:bg-[#0077B5] hover:text-white'
  },
  {
    name: 'Twitter',
    icon: <Twitter className="h-6 w-6" />,
    url: 'https://twitter.com',
    color: 'hover:bg-[#1DA1F2] hover:text-white'
  },
  {
    name: 'Instagram',
    icon: <Instagram className="h-6 w-6" />,
    url: 'https://instagram.com',
    color: 'hover:bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:text-white'
  },
  {
    name: 'Facebook',
    icon: <Facebook className="h-6 w-6" />,
    url: 'https://facebook.com',
    color: 'hover:bg-[#1877F2] hover:text-white'
  }
];

const SocialSection = () => {
  return (
    <section id="social" className="py-20 min-h-screen bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Vamos <span className="text-primary">Conectar</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-10 text-muted-foreground">
            Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato comigo através das minhas redes sociais ou por e-mail.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-4 flex flex-col items-center justify-center rounded-lg border transition-colors ${link.color}`}
              >
                {link.icon}
                <span className="mt-2 text-sm font-medium">{link.name}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Entre em contato</h3>
            <p className="text-muted-foreground mb-6">
              Prefere email? Envie uma mensagem diretamente para mim.
            </p>
            <Button className="mt-4">
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
