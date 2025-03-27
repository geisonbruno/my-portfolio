import React from "react";
import { Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: 1,
    title: "Order System",
    description: `
      RESTFul API developed with Spring Boot, JPA and Hibernate. Applying good architectural practices, it
implements complete CRUD, manages complex relationships and handles custom exceptions.
The database started in H2 for testing and migrated to PostgreSQL in production,
with final deployment on Heroku.
    `,
    category: "backend",
    image: "/img/project1.png",
    repoLink: "https://github.com/geisonbruno/order-system",
  },
  {
    id: 2,
    title: "Softphone App",
    description: `I worked as a developer, providing support for fixes, improvements and new features. We launched App 2.0, with a new UI/UX. Technologies used: Kotlin, Firebase,
     SDK, Fastlane, Flavors, Google play console, Github Actions.`,
    category: "backend",
    image: "/img/project2.png",
    repoLink: "https://fluxvoip.com/softphone",
  },
  {
    id: 5,
    title: "Email Microservice",
    description: `Initially, the microservice was configured to operate with Gmail SMTP, processing requests synchronously through a REST API. In order to expand my knowledge, it was evolved to a more scalable model, using AWS-SES for sending emails and RabbitMQ for asynchronous message processing.

I had hands-on experience in this study project, evolving the email microservice from its initial configuration to its evolution to a scalable, event-driven model.`,
    category: "backend",
    image: "/img/project5.png",
    repoLink: "https://github.com/geisonbruno/email-microservice",
  },
  {
    id: 4,
    title: "Mongodb Spring",
    description: `
      Project demonstrating how to use NoSQL in non-relational databases, focusing on the integration of MongoDB (NoSQL) with Spring Boot, exploring queries and document-oriented database design.`,
    category: "backend",
    image: "/img/project4.png",
    repoLink: "https://github.com/geisonbruno/mongodb-spring",
  },
  {
    id: 3,
    title: "Challenge Columbus",
    description: `Columbus Logistics is a web application developed for delivery and logistics control. This project was carried out as part of a technical test, using HTML, CSS, and JavaScript.

The system has the following features:

Dynamic graphs with delivery status visualization, with a database according to deliveries, in transit and delays.
KPIs updated in real time.
Detailed listing with sorting and filtering options.
Responsive cards allowing editing or deletion.`,
    category: "frontend",
    image: "/img/project3.png",
    repoLink: "https://github.com/geisonbruno/challenge-columbus",
  },
  {
    id: 6,
    title: "Singleton Pattern",
    description:
      "An example of how to implement Singleton Pattern. useful in many applications such as logging, driver objects, caching, thread pools, and database connections.",
    category: "backend",
    image: "/img/project6.png",
    repoLink: "https://github.com/geisonbruno/singleton-pattern",
  },
];
console.log(projects);

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700 shadow-lg">
      {project.image.startsWith("/img/") ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-36 sm:h-48 object-cover"
        />
      ) : (
        <div
          className={`h-36 sm:h-48 ${project.image} flex items-center justify-center`}
        >
          <span className="text-2xl sm:text-3xl font-bold text-primary/40 dark:text-orange-500/40">
            {project.id}
          </span>
        </div>
      )}

      <CardHeader className="p-3 sm:p-4">
        <CardTitle className="text-base sm:text-lg dark:text-white">
          {project.title}
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm dark:text-gray-400">
          {project.category}
        </CardDescription>
      </CardHeader>

      {/* Adicionando flex-grow para empurrar o CardFooter para o final */}
      <CardContent className="p-3 sm:p-4 pt-0 flex-grow">
        <p className="text-xs sm:text-sm text-muted-foreground dark:text-gray-300">
          {project.description}
        </p>
      </CardContent>

      {/* Mantém o botão sempre na parte inferior */}
      <CardFooter className="p-3 sm:p-4 mt-auto">
        <a
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button
            variant="outline"
            size="sm"
            className="w-full text-xs sm:text-sm dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
          >
            <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            See project
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projetos"
      className="py-16 sm:py-20 min-h-screen dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center dark:text-white">
          Latest{" "}
          <span className="text-orange-500 dark:text-orange-500 light:text-orange-500">
            Projects
          </span>
        </h2>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8 sm:mb-12">
            <TabsList className="dark:bg-gray-800 bg-gray-200">
              <TabsTrigger
                value="all"
                className="text-xs sm:text-sm 
                   data-[state=active]:bg-orange-500 
                   data-[state=active]:text-white 
                   dark:data-[state=active]:bg-orange-500 
                   dark:data-[state=active]:text-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="frontend"
                className="text-xs sm:text-sm 
                   data-[state=active]:bg-orange-500 
                   data-[state=active]:text-white 
                   dark:data-[state=active]:bg-orange-500 
                   dark:data-[state=active]:text-white"
              >
                Front-end
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="text-xs sm:text-sm 
                   data-[state=active]:bg-orange-500 
                   data-[state=active]:text-white 
                   dark:data-[state=active]:bg-orange-500 
                   dark:data-[state=active]:text-white"
              >
                Back-end
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="frontend" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects
                .filter((p) => p.category === "frontend")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="backend" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects
                .filter((p) => p.category === "backend")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
