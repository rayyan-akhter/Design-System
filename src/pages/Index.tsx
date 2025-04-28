
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, ChevronDown, LayoutGrid, Book } from "lucide-react";

const Index = () => {
  const componentCards = [
    {
      title: "Color System",
      description: "Comprehensive color tokens for enterprise applications with light and dark theme support.",
      icon: <Palette className="h-8 w-8" />,
      path: "/components/colors",
      color: "text-primary-600"
    },
    {
      title: "Accordion",
      description: "Expandable content sections for organizing information in a limited space.",
      icon: <ChevronDown className="h-8 w-8" />,
      path: "/components/accordion",
      color: "text-secondary-600"
    },
    {
      title: "Tabs",
      description: "Content organization with tabbed navigation for easy switching between views.",
      icon: <LayoutGrid className="h-8 w-8" />,
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
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 bg-clip-text text-transparent"
        >
          Modern Enterprise UI Component System
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          A professionally crafted design system with accessible, responsive components
          for building modern enterprise applications
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg" className="font-medium bg-gradient-to-r from-primary-600 to-primary-400 hover:from-primary-500 hover:to-primary-300 transition-all duration-300 transform hover:scale-105">
            <Link to="/components">Browse Components</Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="font-medium border-2 hover:border-primary-400 transition-all duration-300 transform hover:scale-105">
            <Link to="/documentation">
              <Book className="mr-2 h-4 w-4" />
              Read Documentation
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-surface to-surface-elevated border-primary-100">
            <CardHeader>
              <CardTitle className="text-primary-600">Accessible</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Built with accessibility in mind, following WCAG guidelines and best practices
                for inclusive user experiences.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-surface to-surface-elevated border-secondary-100">
            <CardHeader>
              <CardTitle className="text-secondary-600">Responsive</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Fully responsive components that work seamlessly across all device sizes,
                from mobile to desktop.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-surface to-surface-elevated border-tertiary-100">
            <CardHeader>
              <CardTitle className="text-tertiary-600">Customizable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Easily customize components to match your brand's design language
                with our comprehensive theming system.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Components Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-primary-700"
          >
            Components
          </motion.h2>
          <Button variant="outline" asChild className="hover:border-primary-400 transition-all duration-300">
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
                <Card className="h-full transition-all hover:shadow-md hover:border-primary hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-surface to-surface-elevated">
                  <CardHeader>
                    <div className={`mb-2 ${component.color}`}>
                      {component.icon}
                    </div>
                    <CardTitle>{component.title}</CardTitle>
                    <CardDescription>{component.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="ml-auto hover:text-primary-600 transition-colors">
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
