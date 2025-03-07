
import React from 'react';
import { Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const projects = [
  {
    id: 1,
    title: 'API de Microserviços',
    description: 'Sistema de microserviços desenvolvido com Spring Boot e Kotlin',
    category: 'backend',
    image: 'bg-primary/20 dark:bg-blue-900/30',
    repoLink: '#'
  },
  {
    id: 2,
    title: 'Sistema de Autenticação',
    description: 'Implementação de autenticação segura com JWT e OAuth2',
    category: 'backend',
    image: 'bg-secondary/20 dark:bg-blue-800/30',
    repoLink: '#'
  },
  {
    id: 3,
    title: 'Biblioteca de Utilidades',
    description: 'Coleção de extensões e funções de utilidade em Kotlin',
    category: 'frontend',
    image: 'bg-muted dark:bg-gray-800',
    repoLink: '#'
  },
  {
    id: 4,
    title: 'API REST de Pagamentos',
    description: 'Sistema de processamento de pagamentos com Java e Spring',
    category: 'backend',
    image: 'bg-primary/10 dark:bg-blue-900/20',
    repoLink: '#'
  },
  {
    id: 5,
    title: 'Framework de Testes',
    description: 'Framework para testes de integração e unitários em Java',
    category: 'frontend',
    image: 'bg-secondary/10 dark:bg-blue-800/20',
    repoLink: '#'
  },
  {
    id: 6,
    title: 'CLI para DevOps',
    description: 'Ferramenta de linha de comando para automação de tarefas DevOps',
    category: 'backend',
    image: 'bg-muted/80 dark:bg-gray-700',
    repoLink: '#'
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 dark:bg-gray-800 dark:border-gray-700">
      <div className={`h-48 ${project.image} flex items-center justify-center`}>
        <span className="text-3xl font-bold text-primary/40 dark:text-blue-400/40">{project.id}</span>
      </div>
      <CardHeader>
        <CardTitle className="dark:text-white">{project.title}</CardTitle>
        <CardDescription className="dark:text-gray-400">{project.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground dark:text-gray-300">{project.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700">
          <Github className="mr-2 h-4 w-4" />
          Código
        </Button>
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-20 min-h-screen dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center dark:text-white">
          Meus <span className="text-primary dark:text-blue-400">Projetos</span>
        </h2>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="dark:bg-gray-800">
              <TabsTrigger value="all" className="dark:data-[state=active]:bg-blue-600 dark:data-[state=active]:text-white">Todos</TabsTrigger>
              <TabsTrigger value="frontend" className="dark:data-[state=active]:bg-blue-600 dark:data-[state=active]:text-white">Front-end</TabsTrigger>
              <TabsTrigger value="backend" className="dark:data-[state=active]:bg-blue-600 dark:data-[state=active]:text-white">Back-end</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="frontend" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.category === 'frontend').map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="backend" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.category === 'backend').map(project => (
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
