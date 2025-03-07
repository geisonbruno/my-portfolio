
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'Uma plataforma de comércio eletrônico completa com pagamentos integrados e painel administrativo',
    category: 'web',
    image: 'bg-primary/20',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 2,
    title: 'App de Finanças',
    description: 'Aplicativo para gerenciamento de finanças pessoais com dashboard interativo',
    category: 'app',
    image: 'bg-secondary/20',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 3,
    title: 'Portfolio Criativo',
    description: 'Design de portfolio para fotógrafos e artistas visuais',
    category: 'design',
    image: 'bg-muted',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 4,
    title: 'Blog Responsivo',
    description: 'Plataforma de blog com design responsivo e sistema de gerenciamento de conteúdo',
    category: 'web',
    image: 'bg-primary/10',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 5,
    title: 'Design System',
    description: 'Sistema de design completo com componentes reutilizáveis',
    category: 'design',
    image: 'bg-secondary/10',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 6,
    title: 'App de Produtividade',
    description: 'Aplicativo para gerenciamento de tarefas e aumento de produtividade',
    category: 'app',
    image: 'bg-muted/80',
    demoLink: '#',
    repoLink: '#'
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <div className={`h-48 ${project.image} flex items-center justify-center`}>
        <span className="text-3xl font-bold text-primary/40">{project.id}</span>
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <ExternalLink className="mr-2 h-4 w-4" />
          Demo
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <Github className="mr-2 h-4 w-4" />
          Código
        </Button>
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Meus <span className="text-primary">Projetos</span>
        </h2>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="app">App</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="web" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.category === 'web').map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="app" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.category === 'app').map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="design" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.category === 'design').map(project => (
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
