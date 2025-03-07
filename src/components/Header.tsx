
import React from 'react';

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4 border-b dark:border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Meu Portfólio</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('sobre')} 
                className="text-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
              >
                Sobre
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="text-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
              >
                Experiência
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projetos')} 
                className="text-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
              >
                Projetos
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="text-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('social')} 
                className="text-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
              >
                Social
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
