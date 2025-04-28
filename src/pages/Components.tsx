
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Components = () => {
  const components = [
    {
      name: "Colors",
      description: "Color system tokens and utilities",
      path: "/"
    },
    {
      name: "Badge",
      description: "Small status descriptors for UI elements",
      path: "/"
    },
    {
      name: "Accordion",
      description: "Vertically stacked interactive headings",
      path: "/"
    },
    {
      name: "Tabs",
      description: "Organize content into separate views",
      path: "/"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Components</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <Link to={component.path} key={component.name}>
            <Card className="h-full hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle>{component.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{component.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Components;
