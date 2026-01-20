import { Suspense, lazy, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { Loader2 } from "lucide-react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Layout } from "@/components/Layout";
import { businessConfig } from "@/config/business";
import ReactGA from "react-ga4";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Lazy load pages for better performance
 * All pages use React.lazy() to split code and reduce initial bundle size
 * On mobile, this is especially important for performance
 * The LazyMotion wrapper below also helps by only loading animation features when needed
 */
const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const ServiceAreas = lazy(() => import("@/pages/ServiceAreas"));
const Location = lazy(() => import("@/pages/Location"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Resources = lazy(() => import("@/pages/Resources"));
const ResourceDetail = lazy(() => import("@/pages/ResourceDetail"));
const ThankYou = lazy(() => import("@/pages/ThankYou"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const AccessibilityStatement = lazy(() => import("@/pages/AccessibilityStatement"));
const NotFound = lazy(() => import("@/pages/not-found"));

function LoadingFallback() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {isMobile ? (
        // Simpler loading indicator for mobile
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-sm text-gray-500">Loading...</p>
        </div>
      ) : (
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      )}
    </div>
  );
}

function Router() {
  useEffect(() => {
    if (businessConfig.ga4MeasurementId) {
       ReactGA.initialize(businessConfig.ga4MeasurementId);
    }
  }, []);

  return (
    <Layout>
      <Suspense fallback={<LoadingFallback />}>
        <Switch>
          <Route path="/" component={Home} />
          
          <Route path="/services" component={Services} />
          <Route path="/services/:slug" component={ServiceDetail} />
          
          <Route path="/service-areas" component={ServiceAreas} />
          <Route path="/locations/:city" component={Location} />
          <Route path="/locations/:city/:service" component={Location} />
          
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          
          <Route path="/resources" component={Resources} />
          <Route path="/resources/:slug" component={ResourceDetail} />
          
          <Route path="/thank-you" component={ThankYou} />
          
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/accessibility" component={AccessibilityStatement} />
          
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ScrollToTop />
          <ScrollToTopButton />
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </LazyMotion>
  );
}

export default App;
