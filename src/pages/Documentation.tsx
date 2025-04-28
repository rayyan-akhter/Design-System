import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Palette, ChevronDown, LayoutGrid, List } from "lucide-react";

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Learn how to use our design system effectively
            </p>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Getting Started
            </h2>
            <p className="mb-4 text-muted-foreground">
              Welcome to our design system! This guide will help you get started
              with using our components and understanding our design principles.
            </p>
            <p className="mb-4 text-muted-foreground">
              Our components are built with accessibility in mind and follow
              Material Design guidelines for consistency and usability.
            </p>
          </div>
        </section>

        {/* Components Overview */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold mb-8 text-primary">Components</h2>
            <p className="mb-8 text-muted-foreground">
              Our design system includes a variety of components to help you
              build beautiful and functional user interfaces.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/components/colors">
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4">
                      <Palette className="h-8 w-8 text-primary-500" />
                    </div>
                    <CardTitle>Colors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      A comprehensive color system with semantic tokens
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/components/accordion">
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4">
                      <ChevronDown className="h-8 w-8 text-secondary-500" />
                    </div>
                    <CardTitle>Accordion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Collapsible content panels for organizing information
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/components/tabs">
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4">
                      <LayoutGrid className="h-8 w-8 text-tertiary-500" />
                    </div>
                    <CardTitle>Tabs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Organize content into separate views
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/components/pagination">
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4">
                      <List className="h-8 w-8 text-info-500" />
                    </div>
                    <CardTitle>Pagination</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Navigate through large sets of data
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Theming Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4 text-primary">Theming</h2>
            <p className="mb-4 text-muted-foreground">
              Our design system is built with theming in mind. You can customize
              the look and feel of components to match your brand.
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4">
              <li>
                <strong>Color System:</strong> Primary, secondary, and semantic
                colors
              </li>
              <li>
                <strong>Typography:</strong> Consistent text styles and
                hierarchy
              </li>
              <li>
                <strong>Spacing:</strong> Standardized spacing units
              </li>
            </ul>
          </div>
        </section>

        {/* Accessibility Section */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Accessibility
            </h2>
            <p className="mb-4 text-muted-foreground">
              Accessibility is a core principle of our design system. All
              components are built with accessibility in mind and follow WCAG
              2.1 guidelines.
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4">
              <li>
                <strong>Keyboard Navigation:</strong> All components support
                keyboard interaction
              </li>
              <li>
                <strong>Screen Reader Support:</strong> Proper ARIA roles and
                labels
              </li>
              <li>
                <strong>Color Contrast:</strong> WCAG 2.1 AA compliant contrast
                ratios
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Documentation;
