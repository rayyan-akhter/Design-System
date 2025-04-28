
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ColorSystem from "@/components/design-system/ColorSystem";

const Index = () => {
  const [activeSection, setActiveSection] = React.useState("overview");

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Enterprise UI Component System</h1>
        <p className="text-xl text-muted-foreground mb-8">
          A comprehensive design system with accessible, responsive components
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link to="/components">Browse Components</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/documentation">Read Documentation</Link>
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Accessible</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Built with accessibility in mind, following WCAG guidelines and best practices.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Responsive</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Fully responsive components that work seamlessly across all device sizes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customizable</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Easily customize components to match your brand's design language.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Color System Preview</h2>
        <ColorSystem />
      </section>
    </div>
  );
};

export default Index;
