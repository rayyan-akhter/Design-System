import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { ChevronDown, Book, CircleUser, Palette, LayoutGrid } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const componentLinks = [
    { name: "Colors", path: "/components/colors", icon: <Palette className="mr-2 h-4 w-4" /> },
    { name: "Accordion", path: "/components/accordion", icon: <ChevronDown className="mr-2 h-4 w-4" /> },
    { name: "Tabs", path: "/components/tabs", icon: <LayoutGrid className="mr-2 h-4 w-4" /> },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="border-b bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-10"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-primary flex items-center gap-2"
          >
            <Link to="/" className="flex items-center gap-2">
              <CircleUser className="text-primary-600" />
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                Design System
              </span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-primary transition-colors duration-300 font-medium">Home</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors duration-300 font-medium focus-visible:outline-none">
                Components <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background/80 backdrop-blur-md">
                {componentLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link to={link.path} className="flex items-center hover:text-primary-600 transition-colors duration-300">
                      {link.icon}
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/documentation" className="hover:text-primary transition-colors duration-300 font-medium flex items-center gap-1">
              <Book className="h-4 w-4" />
              Documentation
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              onClick={() => document.documentElement.classList.toggle('dark')} 
              variant="outline"
              size="sm"
              className="flex items-center hover:border-primary-400 transition-all duration-300 transform hover:scale-105"
            >
              Toggle Theme
            </Button>
            
            <Button 
              className="md:hidden hover:bg-primary-100 transition-colors duration-300" 
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
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-3 space-y-3"
          >
            <Link to="/" className="block hover:text-primary transition-colors duration-300 font-medium">Home</Link>
            {componentLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="block hover:text-primary transition-colors duration-300 pl-2 border-l-2 border-primary-200"
              >
                <div className="flex items-center">
                  {link.icon}
                  {link.name}
                </div>
              </Link>
            ))}
            <Link to="/documentation" className="block hover:text-primary transition-colors duration-300 font-medium flex items-center gap-1">
              <Book className="h-4 w-4" />
              Documentation
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default NavBar;
