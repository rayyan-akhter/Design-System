
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ColorSwatch, AccordionHorizontal, Tabs as TabsIcon } from "lucide-react";

const Components = () => {
  const components = [
    {
      name: "Color System",
      description: "Color system tokens and utilities for light and dark themes",
      path: "/components/colors",
      icon: <ColorSwatch className="h-8 w-8 text-primary-500" />,
      bgClass: "bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900"
    },
    {
      name: "Badge",
      description: "Small status descriptors for UI elements",
      path: "/components/badge",
      icon: <div className="flex gap-1">
        <span className="inline-flex bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">Badge</span>
        <span className="inline-flex bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-1 rounded-full">Tag</span>
      </div>,
      bgClass: "bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-950 dark:to-secondary-900"
    },
    {
      name: "Accordion",
      description: "Vertically stacked interactive headings",
      path: "/components/accordion",
      icon: <AccordionHorizontal className="h-8 w-8 text-tertiary-500" />,
      bgClass: "bg-gradient-to-br from-tertiary-50 to-tertiary-100 dark:from-tertiary-950 dark:to-tertiary-900"
    },
    {
      name: "Tabs",
      description: "Organize content into separate views",
      path: "/components/tabs",
      icon: <TabsIcon className="h-8 w-8 text-info-500" />,
      bgClass: "bg-gradient-to-br from-info-50 to-info-100 dark:from-info-950 dark:to-info-900"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Components</h1>
        <p className="text-muted-foreground">
          Explore our professionally designed, accessible components for enterprise applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {components.map((component) => (
          <Card key={component.name} className="overflow-hidden transition-all hover:shadow-md">
            <div className={`p-6 ${component.bgClass}`}>
              <div className="flex justify-center items-center h-24">
                {component.icon}
              </div>
            </div>
            <CardHeader>
              <CardTitle>{component.name}</CardTitle>
              <CardDescription>{component.description}</CardDescription>
            </CardHeader>
            <CardFooter className="border-t pt-4 pb-4 bg-muted/30">
              <Button asChild>
                <Link to={component.path}>View Documentation</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Components;
