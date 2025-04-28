
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Book, CircleUser, ColorSwatch, AccordionHorizontal, Tabs as TabsIcon } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const componentLinks = [
    { name: "Colors", path: "/components/colors", icon: <ColorSwatch className="mr-2 h-4 w-4" /> },
    { name: "Accordion", path: "/components/accordion", icon: <AccordionHorizontal className="mr-2 h-4 w-4" /> },
    { name: "Tabs", path: "/components/tabs", icon: <TabsIcon className="mr-2 h-4 w-4" /> },
  ];

  return (
    <nav className="border-b bg-background shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary flex items-center gap-2">
            <CircleUser />
            <span>Design System</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-primary transition-colors font-medium">Home</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors font-medium focus-visible:outline-none">
                Components <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {componentLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link to={link.path} className="flex items-center">
                      {link.icon}
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/documentation" className="hover:text-primary transition-colors font-medium flex items-center gap-1">
              <Book className="h-4 w-4" />
              Documentation
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              onClick={() => document.documentElement.classList.toggle('dark')} 
              variant="outline"
              size="sm"
              className="flex items-center"
            >
              Toggle Theme
            </Button>
            
            <Button 
              className="md:hidden" 
              variant="ghost" 
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-3 space-y-3">
            <Link to="/" className="block hover:text-primary transition-colors font-medium">Home</Link>
            {componentLinks.map((link) => (
              <Link key={link.name} to={link.path} className="block hover:text-primary transition-colors pl-2 border-l-2 border-primary-200">
                <div className="flex items-center">
                  {link.icon}
                  {link.name}
                </div>
              </Link>
            ))}
            <Link to="/documentation" className="block hover:text-primary transition-colors font-medium flex items-center gap-1">
              <Book className="h-4 w-4" />
              Documentation
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
