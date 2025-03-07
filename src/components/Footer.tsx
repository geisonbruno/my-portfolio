
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t dark:border-gray-800 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground dark:text-gray-400">
            &copy; {currentYear} Meu Portfólio. Todos os direitos reservados.
          </p>
          
          <div className="mt-4 md:mt-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-primary dark:text-blue-400 hover:underline"
            >
              Voltar ao topo
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
