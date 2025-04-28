
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Documentation from "./pages/Documentation";
import Components from "./pages/Components";
import NavBar from "./components/design-system/NavBar";
import Footer from "./components/design-system/Footer";
import ColorSystem from "./components/design-system/ColorSystem";

// Create component pages for the demonstration
const AccordionPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Accordion Component</h1>
    <p className="mb-8 text-muted-foreground">
      Accordion components allow users to expand and collapse sections of content.
    </p>
    {/* Accordion component demonstration would go here */}
  </div>
);

const BadgePage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Badge Component</h1>
    <p className="mb-8 text-muted-foreground">
      Badges are small status descriptors for UI elements.
    </p>
    {/* Badge component demonstration would go here */}
  </div>
);

const TabsPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Tabs Component</h1>
    <p className="mb-8 text-muted-foreground">
      Tabs organize content into separate views where only one view is visible at a time.
    </p>
    {/* Tabs component demonstration would go here */}
  </div>
);

const ColorsPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Color System</h1>
    <p className="mb-8 text-muted-foreground">
      Our comprehensive color system with light and dark mode support.
    </p>
    <ColorSystem />
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/components" element={<Components />} />
              <Route path="/components/colors" element={<ColorsPage />} />
              <Route path="/components/accordion" element={<AccordionPage />} />
              <Route path="/components/badge" element={<BadgePage />} />
              <Route path="/components/tabs" element={<TabsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
