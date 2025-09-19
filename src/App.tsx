import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// ✅ Import loader
import Loader from "./components/Portfolio/Loader";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200); // 2 sec
    return () => clearTimeout(timer);
  }, []);

  if (loading) return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[100]">
      <Loader />
    </div>
  ); // show loader

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
