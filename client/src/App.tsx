import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import WebDesignPage from "@/pages/web-design";
import PortfolioPage from "@/pages/portfolio";
import ContactPage from "@/pages/contact";
import SEOPage from "@/pages/seo-service";
import AdminDashboard from "@/pages/admin/Dashboard";
import AdminPages from "@/pages/admin/PageList";
import AdminEditPage from "@/pages/admin/EditPage";
import BlogPage from "@/pages/blog";
import BlogPost from "@/pages/blog-post";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about-us" component={AboutPage} />
      <Route path="/services/website-design" component={WebDesignPage} />
      <Route path="/services/search-engine-optimization" component={SEOPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/contact-us" component={ContactPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogPost} />
      
      {/* Admin Routes */}
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin/pages" component={AdminPages} />
      <Route path="/admin/pages/edit" component={AdminEditPage} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
