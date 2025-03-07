
import React from 'react';
import { Briefcase, Calendar, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    title: 'Desenvolvedor Backend Senior',
    company: 'Tech Solutions',
    period: 'Janeiro 2021 - Presente',
    description: 'Desenvolvimento de APIs RESTful com Java/Kotlin e Spring Boot. Implementação de microserviços, autenticação OAuth2 e integração com sistemas de terceiros. Liderança de equipe e implementação de melhores práticas.'
  },
  {
    title: 'Desenvolvedor Java',
    company: 'Digital Systems',
    period: 'Março 2018 - Dezembro 2020',
    description: 'Desenvolvimento de aplicações backend em Java. Implementação de serviços web, integração com bancos de dados PostgreSQL e Oracle. Manutenção e melhoria de sistemas existentes.'
  },
  {
    title: 'Desenvolvedor Java Junior',
    company: 'Code Studio',
    period: 'Julho 2016 - Fevereiro 2018',
    description: 'Desenvolvimento de serviços backend utilizando Java e Spring Framework. Implementação de testes unitários e de integração. Participação em projetos ágeis com Scrum.'
  },
  {
    title: 'Estágio em Desenvolvimento',
    company: 'Software Innovations',
    period: 'Janeiro 2015 - Junho 2016',
    description: 'Assistência no desenvolvimento de aplicações Java. Implementação de funcionalidades básicas, correção de bugs e realização de testes.'
  }
];

const ExperienceCard = ({ experience }: { experience: typeof experiences[0] }) => {
  return (
    <Card className="mb-6 border-l-4 border-l-primary dark:border-l-blue-500 dark:bg-gray-800 dark:border-gray-700">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold dark:text-white">{experience.title}</h3>
            <div className="flex items-center text-muted-foreground dark:text-gray-400 mt-1">
              <Building className="h-4 w-4 mr-2" />
              {experience.company}
            </div>
          </div>
          <div className="flex items-center mt-2 md:mt-0">
            <Calendar className="h-4 w-4 mr-2 text-primary dark:text-blue-400" />
            <span className="text-sm dark:text-gray-300">{experience.period}</span>
          </div>
        </div>
        <p className="text-muted-foreground dark:text-gray-300">{experience.description}</p>
      </CardContent>
    </Card>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 min-h-screen dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center dark:text-white">
          Minha <span className="text-primary dark:text-blue-400">Experiência</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="p-4 rounded-full bg-primary/10 dark:bg-blue-900/20 mr-4">
              <Briefcase className="h-6 w-6 text-primary dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold dark:text-white">Experiência Profissional</h3>
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
