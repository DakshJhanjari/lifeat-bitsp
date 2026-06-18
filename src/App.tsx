
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "./nav-items";
import AdminContent from "./pages/AdminContent";
import NotFound from "./pages/NotFound";
import NotificationAdmin from "./components/NotificationAdmin";

const queryClient = new QueryClient();

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

const PageLayout = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        {navItems.map(({ to, page }) => (
          <Route key={to} path={to} element={page} />
        ))}
        <Route path="/admin/content" element={<AdminContent />} />
        <Route path="/admin/notifications" element={<NotificationAdmin />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
