
import React from 'react';
import { Code, Palette, Database, Globe, Cpu, LineChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'HTML/CSS', proficiency: 90 },
      { name: 'JavaScript', proficiency: 85 },
      { name: 'React', proficiency: 80 },
      { name: 'TypeScript', proficiency: 75 },
      { name: 'Tailwind CSS', proficiency: 85 }
    ]
  },
  {
    title: 'Design',
    icon: <Palette className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'Figma', proficiency: 80 },
      { name: 'Adobe XD', proficiency: 75 },
      { name: 'Photoshop', proficiency: 70 },
      { name: 'Ilustrator', proficiency: 65 },
      { name: 'UI/UX', proficiency: 85 }
    ]
  },
  {
    title: 'Backend',
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'Node.js', proficiency: 75 },
      { name: 'Express', proficiency: 70 },
      { name: 'MongoDB', proficiency: 65 },
      { name: 'PostgreSQL', proficiency: 60 },
      { name: 'Firebase', proficiency: 80 }
    ]
  },
  {
    title: 'Outros',
    icon: <Globe className="h-8 w-8 text-primary" />,
    skills: [
      { name: 'Git/GitHub', proficiency: 85 },
      { name: 'Responsividade', proficiency: 90 },
      { name: 'SEO', proficiency: 70 },
      { name: 'Performance', proficiency: 75 },
      { name: 'Acessibilidade', proficiency: 80 }
    ]
  }
];

const SkillBar = ({ name, proficiency }: { name: string; proficiency: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span>{proficiency}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2.5">
        <div 
          className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${proficiency}%` }} 
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ category }: { category: typeof skillCategories[0] }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        {category.icon}
        <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {category.skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} proficiency={skill.proficiency} />
        ))}
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Minhas <span className="text-primary">Habilidades</span>
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
