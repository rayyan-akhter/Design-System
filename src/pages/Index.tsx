
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ColorSwatch, AccordionHorizontal, Tabs as TabsIcon, Book } from "lucide-react";

const Index = () => {
  const componentCards = [
    {
      title: "Color System",
      description: "Comprehensive color tokens for enterprise applications with light and dark theme support.",
      icon: <ColorSwatch className="h-8 w-8" />,
      path: "/components/colors",
      color: "text-primary-600"
    },
    {
      title: "Accordion",
      description: "Expandable content sections for organizing information in a limited space.",
      icon: <AccordionHorizontal className="h-8 w-8" />,
      path: "/components/accordion",
      color: "text-secondary-600"
    },
    {
      title: "Tabs",
      description: "Content organization with tabbed navigation for easy switching between views.",
      icon: <TabsIcon className="h-8 w-8" />,
      path: "/components/tabs",
      color: "text-tertiary-600"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16 pt-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 bg-clip-text text-transparent">
          Modern Enterprise UI Component System
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A professionally crafted design system with accessible, responsive components
          for building modern enterprise applications
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="font-medium">
            <Link to="/components">Browse Components</Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="font-medium">
            <Link to="/documentation">
              <Book className="mr-2 h-4 w-4" />
              Read Documentation
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Accessible</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Built with accessibility in mind, following WCAG guidelines and best practices
              for inclusive user experiences.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Responsive</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Fully responsive components that work seamlessly across all device sizes,
              from mobile to desktop.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Customizable</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Easily customize components to match your brand's design language
              with our comprehensive theming system.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Components Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Components</h2>
          <Button variant="outline" asChild>
            <Link to="/components">View All</Link>
          </Button>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {componentCards.map((component) => (
            <motion.div key={component.title} variants={item}>
              <Link to={component.path}>
                <Card className="h-full transition-all hover:shadow-md hover:border-primary hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <div className={`mb-2 ${component.color}`}>
                      {component.icon}
                    </div>
                    <CardTitle>{component.title}</CardTitle>
                    <CardDescription>{component.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      Learn more
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
