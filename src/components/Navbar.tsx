import React from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Book,
  Palette,
  ChevronDown as ChevronDownIcon,
  LayoutGrid,
  List,
} from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";

const Navbar = () => {
  const components = [
    {
      name: "Color System",
      path: "/components/colors",
      icon: <Palette className="mr-2 h-4 w-4" />,
    },
    {
      name: "Accordion",
      path: "/components/accordion",
      icon: <ChevronDownIcon className="mr-2 h-4 w-4" />,
    },
    {
      name: "Tabs",
      path: "/components/tabs",
      icon: <LayoutGrid className="mr-2 h-4 w-4" />,
    },
    {
      name: "Pagination",
      path: "/components/pagination",
      icon: <List className="mr-2 h-4 w-4" />,
    },
  ];

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">
          DesignSystem
        </Link>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                Components
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {components.map((component) => (
                <DropdownMenuItem key={component.path} asChild>
                  <Link to={component.path} className="flex items-center">
                    {component.icon}
                    {component.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" asChild>
            <Link to="/docs" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              Documentation
            </Link>
          </Button>

          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
