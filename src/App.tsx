import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import ColorSystem from "@/components/design-system/ColorSystem";
import AccordionPage from "@/pages/components/AccordionPage";
import TabsPage from "@/pages/components/TabsPage";
import PaginationPage from "@/pages/components/PaginationPage";
import Documentation from "@/pages/Documentation";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/components/colors" element={<ColorSystem />} />
              <Route path="/components/accordion" element={<AccordionPage />} />
              <Route path="/components/tabs" element={<TabsPage />} />
              <Route
                path="/components/pagination"
                element={<PaginationPage />}
              />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
