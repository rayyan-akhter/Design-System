import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Documentation = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Documentation</h1>
      <p className="text-muted-foreground mb-8">
        Explore our component system documentation, installation guides, and best practices.
      </p>

      <Tabs defaultValue="getting-started" className="mb-8">
        <TabsList>
          <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
          <TabsTrigger value="installation">Installation</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
        </TabsList>
        <TabsContent value="getting-started" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Learn about our design system</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our design system provides a comprehensive set of reusable components built with React, TypeScript, and Tailwind CSS.
                It follows modern design principles and accessibility standards for enterprise applications.
              </p>
              <p className="text-muted-foreground">
                The components are designed to be modular, customizable, and easy to use in any React application.
                All components support light and dark modes, responsive layouts, and accessibility features.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="installation" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Installation</CardTitle>
              <CardDescription>Set up the design system in your project</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">To get started with our design system, follow these steps:</p>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
                <pre><code>npm install @design-system/components</code></pre>
              </div>
              
              <p className="text-muted-foreground mb-4">
                After installation, import our CSS variables and configure your tailwind.config.js:
              </p>
              
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre><code>{`// tailwind.config.js
module.exports = {
  content: [...],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        // ... other color variables
      }
    }
  },
  plugins: [],
}`}</code></pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="usage" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
              <CardDescription>Learn how to use the components</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Each component can be imported directly from our package:
              </p>
              
              <div className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
                <pre><code>{`import { Button, Card, Tabs } from '@design-system/components';

function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}`}</code></pre>
              </div>
              
              <p className="text-muted-foreground">
                Check individual component documentation for detailed usage examples,
                available props, and customization options.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Browser Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our components are tested and supported in all modern browsers (Chrome, Firefox, Safari, Edge).
              We recommend using the latest version of your preferred browser for the best experience.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Accessibility</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              All components are built with accessibility in mind, following WCAG guidelines.
              We use semantic HTML, proper ARIA attributes, and keyboard navigation support
              to ensure our components are usable by everyone.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Documentation;
