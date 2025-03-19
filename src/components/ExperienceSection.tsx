import React from "react";
import { Briefcase, Calendar, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Software Developer",
    company: "Flux Tecnologia",
    period: "Setembro 2023 - Dezembro 2024",
    description:
      "Stack: Kotlin, SDK, Firebase, MySQL, NoSQL, Google play, Fastlane, Flavors, PHP, React.js, C#",
  },
];

const ExperienceCard = ({
  experience,
}: {
  experience: (typeof experiences)[0];
}) => {
  return (
    <Card className="mb-5 sm:mb-6 border-l-4 border-l-primary dark:border-l-orange-500 dark:bg-gray-800 dark:border-gray-700">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 sm:mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold dark:text-white">
              {experience.title}
            </h3>
            <div className="flex items-center text-muted-foreground dark:text-gray-400 mt-1">
              <Building className="h-4 w-4 mr-2" />
              {experience.company}
            </div>
          </div>
          <div className="flex items-center mt-2 md:mt-0">
            <Calendar className="h-4 w-4 mr-2 text-primary dark:text-orange-500" />
            <span className="text-xs sm:text-sm dark:text-gray-300">
              {experience.period}
            </span>
          </div>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground dark:text-gray-300">
          {experience.description}
        </p>
      </CardContent>
    </Card>
  );
};

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 min-h-screen dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center dark:text-white">
          Work{" "}
          <span className="text-orange-500 dark:text-orange-500">
            Experiences
          </span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="p-3 sm:p-4 rounded-full bg-primary/10 mr-3 sm:mr-4">
              <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-primary dark:text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold dark:text-white">
              Professional Experience
            </h3>
          </div>

          <div className="space-y-3 sm:space-y-4">
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
