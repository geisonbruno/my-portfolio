
import React from 'react';
import { Code, Database, Server, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skillCategories = [
  {
    title: 'Backend',
    icon: <Server className="h-8 w-8 text-primary dark:text-blue-400" />,
    skills: [
      { name: 'Java', proficiency: 90, logo: <Coffee className="h-10 w-10" /> },
      { name: 'Kotlin', proficiency: 85, logo: <Code className="h-10 w-10" /> },
      { name: 'Spring Boot', proficiency: 85, logo: <Server className="h-10 w-10" /> },
      { name: 'Hibernate', proficiency: 80, logo: <Database className="h-10 w-10" /> },
      { name: 'Maven', proficiency: 85, logo: <Code className="h-10 w-10" /> }
    ]
  },
  {
    title: 'Banco de Dados',
    icon: <Database className="h-8 w-8 text-primary dark:text-blue-400" />,
    skills: [
      { name: 'PostgreSQL', proficiency: 85, logo: <Database className="h-10 w-10" /> },
      { name: 'MySQL', proficiency: 80, logo: <Database className="h-10 w-10" /> },
      { name: 'MongoDB', proficiency: 75, logo: <Database className="h-10 w-10" /> },
      { name: 'Redis', proficiency: 70, logo: <Database className="h-10 w-10" /> },
      { name: 'Oracle', proficiency: 75, logo: <Database className="h-10 w-10" /> }
    ]
  },
  {
    title: 'Ferramentas',
    icon: <Code className="h-8 w-8 text-primary dark:text-blue-400" />,
    skills: [
      { name: 'Git/GitHub', proficiency: 90, logo: <Code className="h-10 w-10" /> },
      { name: 'Docker', proficiency: 85, logo: <Code className="h-10 w-10" /> },
      { name: 'Kubernetes', proficiency: 75, logo: <Code className="h-10 w-10" /> },
      { name: 'CI/CD', proficiency: 80, logo: <Code className="h-10 w-10" /> },
      { name: 'IntelliJ IDEA', proficiency: 90, logo: <Code className="h-10 w-10" /> }
    ]
  },
  {
    title: 'Outros',
    icon: <Server className="h-8 w-8 text-primary dark:text-blue-400" />,
    skills: [
      { name: 'Microservices', proficiency: 85, logo: <Server className="h-10 w-10" /> },
      { name: 'REST APIs', proficiency: 90, logo: <Code className="h-10 w-10" /> },
      { name: 'Testes Unitários', proficiency: 85, logo: <Code className="h-10 w-10" /> },
      { name: 'Segurança', proficiency: 80, logo: <Code className="h-10 w-10" /> },
      { name: 'Clean Code', proficiency: 90, logo: <Code className="h-10 w-10" /> }
    ]
  }
];

const SkillBar = ({ name, proficiency, logo }: { name: string; proficiency: number; logo: React.ReactNode }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-md">
            {logo}
          </div>
          <span className="ml-2 dark:text-gray-200">{name}</span>
        </div>
        <span className="dark:text-gray-300">{proficiency}%</span>
      </div>
      <div className="w-full bg-muted dark:bg-gray-700 rounded-full h-2.5 mt-2">
        <div 
          className="bg-primary dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${proficiency}%` }} 
        />
      </div>
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
        {category.skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} proficiency={skill.proficiency} logo={skill.logo} />
        ))}
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
