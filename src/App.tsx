
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
import AccordionPage from "./pages/components/AccordionPage";
import TabsPage from "./pages/components/TabsPage";
import PaginationPage from "./pages/components/PaginationPage";

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
              <Route path="/components/colors" element={<ColorSystem />} />
              <Route path="/components/accordion" element={<AccordionPage />} />
              <Route path="/components/tabs" element={<TabsPage />} />
              <Route path="/components/pagination" element={<PaginationPage />} />
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
