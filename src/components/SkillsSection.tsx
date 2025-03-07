
import React from 'react';
import { Code, Database, Server, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skillCategories = [
  {
    title: 'Backend',
    icon: <Server className="h-8 w-8 text-primary dark:text-blue-400" />,
    skills: [
      { name: 'Java', logo: <Coffee className="h-10 w-10" /> },
      { name: 'Kotlin', logo: <Code className="h-10 w-10" /> },
      { name: 'Spring Boot', logo: <Server className="h-10 w-10" /> },
      { name: 'Hibernate', logo: <Database className="h-10 w-10" /> },
      { name: 'Maven', logo: <Code className="h-10 w-10" /> }
    ]
  },
  {
    title: 'Banco de Dados',
    icon: <Database className="h-8 w-8 text-primary dark:text-blue-400" />,
    skills: [
      { name: 'PostgreSQL', logo: <Database className="h-10 w-10" /> },
      { name: 'MySQL', logo: <Database className="h-10 w-10" /> },
      { name: 'MongoDB', logo: <Database className="h-10 w-10" /> },
      { name: 'Redis', logo: <Database className="h-10 w-10" /> },
      { name: 'Oracle', logo: <Database className="h-10 w-10" /> }
    ]
  },
  {
    title: 'Ferramentas',
    icon: <Code className="h-8 w-8 text-primary dark:text-blue-400" />,
    skills: [
      { name: 'Git/GitHub', logo: <Code className="h-10 w-10" /> },
      { name: 'Docker', logo: <Code className="h-10 w-10" /> },
      { name: 'Kubernetes', logo: <Code className="h-10 w-10" /> },
      { name: 'CI/CD', logo: <Code className="h-10 w-10" /> },
      { name: 'IntelliJ IDEA', logo: <Code className="h-10 w-10" /> }
    ]
  },
  {
    title: 'Outros',
    icon: <Server className="h-8 w-8 text-primary dark:text-blue-400" />,
    skills: [
      { name: 'Microservices', logo: <Server className="h-10 w-10" /> },
      { name: 'REST APIs', logo: <Code className="h-10 w-10" /> },
      { name: 'Testes Unitários', logo: <Code className="h-10 w-10" /> },
      { name: 'Segurança', logo: <Code className="h-10 w-10" /> },
      { name: 'Clean Code', logo: <Code className="h-10 w-10" /> }
    ]
  }
];

const SkillItem = ({ name, logo }: { name: string; logo: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-md mb-2 transition-all hover:scale-110">
        {logo}
      </div>
      <span className="text-sm dark:text-gray-200">{name}</span>
    </div>
  );
};

const SkillCategory = ({ category }: { category: typeof skillCategories[0] }) => {
  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-row items-center justify-between p-6 pb-2 space-y-0">
        {category.icon}
        <h3 className="text-xl font-bold dark:text-white">{category.title}</h3>
      </div>
      <CardContent>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {category.skills.map((skill, index) => (
            <SkillItem key={index} name={skill.name} logo={skill.logo} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 min-h-screen dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center dark:text-white">
          Minhas <span className="text-primary dark:text-blue-400">Habilidades</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
