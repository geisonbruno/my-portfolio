
import React from 'react';
import { Briefcase, Calendar, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    title: 'Desenvolvedor Frontend Senior',
    company: 'Tech Solutions',
    period: 'Janeiro 2021 - Presente',
    description: 'Responsável pelo desenvolvimento de interfaces de usuário para aplicações web e mobile, utilizando React, TypeScript e Tailwind CSS. Liderança de equipe e implementação de melhores práticas.'
  },
  {
    title: 'Desenvolvedor Web',
    company: 'Digital Creators',
    period: 'Março 2018 - Dezembro 2020',
    description: 'Desenvolvimento de websites responsivos e aplicações web utilizando JavaScript, HTML5 e CSS3. Implementação de APIs RESTful e integração com sistemas de terceiros.'
  },
  {
    title: 'Designer UI/UX',
    company: 'Creative Studio',
    period: 'Julho 2016 - Fevereiro 2018',
    description: 'Criação de interfaces de usuário para websites e aplicativos. Desenvolvimento de protótipos interativos e testes de usabilidade.'
  },
  {
    title: 'Estágio em Desenvolvimento Web',
    company: 'Web Innovations',
    period: 'Janeiro 2015 - Junho 2016',
    description: 'Assistência no desenvolvimento de websites e aplicações web, utilizando HTML, CSS e JavaScript. Participação em projetos de e-commerce e sites institucionais.'
  }
];

const ExperienceCard = ({ experience }: { experience: typeof experiences[0] }) => {
  return (
    <Card className="mb-6 border-l-4 border-l-primary">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold">{experience.title}</h3>
            <div className="flex items-center text-muted-foreground mt-1">
              <Building className="h-4 w-4 mr-2" />
              {experience.company}
            </div>
          </div>
          <div className="flex items-center mt-2 md:mt-0">
            <Calendar className="h-4 w-4 mr-2 text-primary" />
            <span className="text-sm">{experience.period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{experience.description}</p>
      </CardContent>
    </Card>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Minha <span className="text-primary">Experiência</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="p-4 rounded-full bg-primary/10 mr-4">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Experiência Profissional</h3>
          </div>
          
          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
