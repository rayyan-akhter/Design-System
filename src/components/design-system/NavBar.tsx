
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">Design System</Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/documentation" className="hover:text-primary transition-colors">Documentation</Link>
            <Link to="/components" className="hover:text-primary transition-colors">Components</Link>
          </div>
          <Button onClick={() => document.documentElement.classList.toggle('dark')} variant="outline">
            Toggle Theme
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
