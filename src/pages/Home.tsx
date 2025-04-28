import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Palette, ChevronDown, LayoutGrid, List } from "lucide-react";

const Home = () => {
  const components = [
    {
      title: "Color System",
      description:
        "Comprehensive color tokens and utilities for enterprise applications with light and dark theme support.",
      icon: <Palette className="h-8 w-8 text-primary-500" />,
      path: "/components/colors",
      bgClass:
        "bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900",
    },
    {
      title: "Accordion",
      description:
        "Expandable content sections for organizing information in a limited space.",
      icon: <ChevronDown className="h-8 w-8 text-secondary-500" />,
      path: "/components/accordion",
      bgClass:
        "bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-950 dark:to-secondary-900",
    },
    {
      title: "Tabs",
      description:
        "Content organization with tabbed navigation for easy switching between views.",
      icon: <LayoutGrid className="h-8 w-8 text-tertiary-500" />,
      path: "/components/tabs",
      bgClass:
        "bg-gradient-to-br from-tertiary-50 to-tertiary-100 dark:from-tertiary-950 dark:to-tertiary-900",
    },
    {
      title: "Pagination",
      description: "Navigate through multiple pages of content with ease.",
      icon: <List className="h-8 w-8 text-info-500" />,
      path: "/components/pagination",
      bgClass:
        "bg-gradient-to-br from-info-50 to-info-100 dark:from-info-950 dark:to-info-900",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">DesignForge</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A modern component library for building beautiful and accessible
              user interfaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a
                  href="https://lovely-peony-715cf8.netlify.app/?path=/docs-configure-your-project--docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/docs">Documentation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {components.map((component) => (
                <Link key={component.path} to={component.path}>
                  <Card
                    className={`h-full transition-all hover:shadow-lg ${component.bgClass}`}
                  >
                    <CardHeader>
                      <div className="mb-4">{component.icon}</div>
                      <CardTitle>{component.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{component.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
