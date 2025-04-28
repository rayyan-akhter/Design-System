
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Documentation = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Documentation</h1>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our design system provides a comprehensive set of reusable components built with React, TypeScript, and Tailwind CSS.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Installation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">To get started with our design system, follow these steps:</p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>npm install @design-system/components</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Documentation;
