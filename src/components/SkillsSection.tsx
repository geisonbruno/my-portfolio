import React from "react";
import { Code, Database, Server } from "lucide-react";
import {
  SiCoffeescript,
  SiKotlin,
  SiSpringboot,
  SiReact,
  SiJavascript,
  SiHibernate,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiAmazonsimpleemailservice,
  SiGradle,
  SiApachemaven,
  SiLinux,
  SiGoogleplay,
  SiFigma,
  SiJunit5,
  SiHackthebox,
  SiGithubactions,
  SiDocker,
  SiRabbitmq,
} from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Code className="h-8 w-8 text-orange-500 dark:text-orange-500 " />,
    skills: [
      {
        name: "Java",
        logo: <SiCoffeescript className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      { name: "Kotlin", logo: <SiKotlin className="h-6 w-6 sm:h-8 sm:w-8" /> },
      {
        name: "Spring Boot",
        logo: <SiSpringboot className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      { name: "React.js", logo: <SiReact className="h-6 w-6 sm:h-8 sm:w-8" /> },
      {
        name: "JavaScript",
        logo: <SiJavascript className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      {
        name: "Hibernate",
        logo: <SiHibernate className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
    ],
  },
  {
    title: "Database",
    icon: (
      <Database className="h-8 w-8 text-orange-500 dark:text-orange-500 " />
    ),
    skills: [
      { name: "MySQL", logo: <SiMysql className="h-6 w-6 sm:h-8 sm:w-8" /> },
      {
        name: "PostgreSQL",
        logo: <SiPostgresql className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      {
        name: "MongoDB",
        logo: <SiMongodb className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
    ],
  },
  {
    title: "Tools",
    icon: <Server className="h-8 w-8 text-orange-500 dark:text-orange-500" />,
    skills: [
      {
        name: "AWS (SES)",
        logo: <SiAmazonsimpleemailservice className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      { name: "Gradle", logo: <SiGradle className="h-6 w-6 sm:h-8 sm:w-8" /> },
      {
        name: "Maven",
        logo: <SiApachemaven className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      {
        name: "RabbitMQ",
        logo: <SiRabbitmq className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      {
        name: "CI/CD",
        logo: <SiGithubactions className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      { name: "Linux", logo: <SiLinux className="h-6 w-6 sm:h-8 sm:w-8" /> },
      {
        name: "Google Play",
        logo: <SiGoogleplay className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      { name: "Figma", logo: <SiFigma className="h-6 w-6 sm:h-8 sm:w-8" /> },
      { name: "Docker", logo: <SiDocker className="h-6 w-6 sm:h-8 sm:w-8" /> },
    ],
  },
  {
    title: "Others",
    icon: <Server className="h-8 w-8 text-orange-500 dark:text-orange-500" />, // Mantém ícone da categoria
    skills: [
      {
        name: "Microservices",
        logo: <SiHackthebox className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      {
        name: "Agile Frameworks (Scrum)",
        logo: <Server className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      {
        name: "JUnit 5",
        logo: <SiJunit5 className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
      { name: "SOLID", logo: <Code className="h-6 w-6 sm:h-8 sm:w-8" /> },
      {
        name: "Design Patterns",
        logo: <Server className="h-6 w-6 sm:h-8 sm:w-8" />,
      },
    ],
  },
];

const SkillItem = ({ name, logo }: { name: string; logo: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 dark:bg-gray-700 rounded-md mb-2 transition-all hover:scale-110 ">
        {logo}
      </div>
      <span className="text-xs sm:text-sm dark:text-gray-200 ">{name}</span>
    </div>
  );
};

const SkillCategory = ({
  category,
}: {
  category: (typeof skillCategories)[0];
}) => {
  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700 shadow-lg">
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
          My{" "}
          <span className="text-orange-500 dark:text-orange-500">Skills</span>
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
