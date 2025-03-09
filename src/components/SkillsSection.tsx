import React from "react";
import { Code, Database, Server, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Backend",
    icon: <Server className="h-8 w-8 text-primary dark:text-blue-400" />,
    skills: [
      { name: "Java", logo: <Coffee className="h-6 w-6 sm:h-8 sm:w-8" /> },
      { name: "Kotlin", logo: <Code className="h-6 w-6 sm:h-8 sm:w-8" /> },
      {
        name: "Spring Boot",
        logo: <Server className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      {
        name: "Hibernate",
        logo: <Database className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      { name: "Maven", logo: <Code className="h-6 w-6 sm:h-8 sm:w-8" /> },
    ],
  },
  {
    title: "Database",
    icon: <Database className="h-8 w-8 text-primary dark:text-blue-400" />,
    skills: [
      {
        name: "PostgreSQL",
        logo: <Database className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      { name: "MySQL", logo: <Database className="h-6 w-6 sm:h-8 sm:w-8" /> },
      { name: "MongoDB", logo: <Database className="h-6 w-6 sm:h-8 sm:w-8" /> },
      { name: "Redis", logo: <Database className="h-6 w-6 sm:h-8 sm:w-8" /> },
      { name: "NoSQL", logo: <Database className="h-6 w-6 sm:h-8 sm:w-8" /> },
      // { name: 'Oracle', logo: <Database className="h-6 w-6 sm:h-8 sm:w-8" /> }
    ],
  },
  {
    title: "Tools",
    icon: <Code className="h-8 w-8 text-primary dark:text-blue-400" />,
    skills: [
      { name: "Git/GitHub", logo: <Code className="h-6 w-6 sm:h-8 sm:w-8" /> },
      { name: "Docker", logo: <Code className="h-6 w-6 sm:h-8 sm:w-8" /> },
      { name: "Firebase", logo: <Code className="h-6 w-6 sm:h-8 sm:w-8" /> },
      { name: "CI/CD", logo: <Code className="h-6 w-6 sm:h-8 sm:w-8" /> },
      {
        name: "Google play",
        logo: <Code className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
    ],
  },
  {
    title: "Others",
    icon: <Server className="h-8 w-8 text-primary dark:text-blue-400" />,
    skills: [
      {
        name: "Microservices",
        logo: <Server className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      {
        name: "Agile Frameworks (Scrum)",
        logo: <Code className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      {
        name: "Testes Unitários",
        logo: <Code className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      { name: "SOLID", logo: <Code className="h-6 w-6 sm:h-8 sm:w-8" /> },
      {
        name: "Design Patterns",
        logo: <Code className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
    ],
  },
];

const SkillItem = ({ name, logo }: { name: string; logo: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 dark:bg-gray-700 rounded-md mb-2 transition-all hover:scale-110">
        {logo}
      </div>
      <span className="text-xs sm:text-sm dark:text-gray-200">{name}</span>
    </div>
  );
};

const SkillCategory = ({
  category,
}: {
  category: (typeof skillCategories)[0];
}) => {
  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between p-4 sm:p-6 pb-2 space-y-0">
        {category.icon}
        <h3 className="text-lg sm:text-xl font-bold dark:text-white">
          {category.title}
        </h3>
      </div>
      <CardContent className="pt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
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
    <section
      id="skills"
      className="py-16 sm:py-20 min-h-screen dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center dark:text-white">
          My <span className="text-primary dark:text-blue-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
