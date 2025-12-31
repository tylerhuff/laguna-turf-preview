import { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import { Loader2 } from "lucide-react";
import { LazyMotion, domAnimation } from "framer-motion";

// Lazy load pages
const NotFound = lazy(() => import("@/pages/not-found"));
const HomePage = lazy(() => import("@/pages/home"));
const AboutPage = lazy(() => import("@/pages/about"));
const WebDesignPage = lazy(() => import("@/pages/web-design"));
const PortfolioPage = lazy(() => import("@/pages/portfolio"));
const ContactPage = lazy(() => import("@/pages/contact"));
const SEOPage = lazy(() => import("@/pages/seo-service"));
const MaintenancePage = lazy(() => import("@/pages/maintenance"));
const ServicesHub = lazy(() => import("@/pages/services-hub"));
const AdminDashboard = lazy(() => import("@/pages/admin/Dashboard"));
const AdminPages = lazy(() => import("@/pages/admin/PageList"));
const AdminEditPage = lazy(() => import("@/pages/admin/EditPage"));
const BlogPage = lazy(() => import("@/pages/blog"));
const BlogPost = lazy(() => import("@/pages/blog-post"));
const HowMarketingWorksPage = lazy(() => import("@/pages/resources/how-online-marketing-works"));
const GoogleBusinessProfilePage = lazy(() => import("@/pages/resources/google-business-profile-basics"));
const First30DaysPage = lazy(() => import("@/pages/resources/first-30-days"));
const OngoingWorkPage = lazy(() => import("@/pages/resources/ongoing-monthly-work"));

const IndustryPage = lazy(() => import("@/pages/industry-template"));

const SanClementePage = lazy(() => import("@/pages/san-clemente"));
const PrivacyPolicyPage = lazy(() => import("@/pages/privacy-policy"));
const TermsOfServicePage = lazy(() => import("@/pages/terms-of-service"));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfaf5]">
      <Loader2 className="w-10 h-10 animate-spin text-[#FD9800]" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<LoadingFallback />}>
        <Switch>
          <Route path="/" component={HomePage} />
        <Route path="/san-clemente" component={SanClementePage} />
        <Route path="/privacy-policy" component={PrivacyPolicyPage} />
        <Route path="/terms-of-service" component={TermsOfServicePage} />
        <Route path="/about-us" component={AboutPage} />
        
        {/* Industry Pages */}
        <Route path="/industries/contractors">
          {() => (
            <IndustryPage 
              industryName="Contractors"
              heroImage="/assets/images/DiamondConstruction.webp"
              portfolioItem={{
                title: "Diamond Construction",
                description: "A professional site for a general contractor specializing in waterproofing and gypsum concrete. Highlights services and past projects to build trust with new clients.",
                image: "/assets/images/DiamondConstruction.webp",
                link: "#"
              }}
            />
          )}
        </Route>
        <Route path="/industries/home-builders">
          {() => (
            <IndustryPage 
              industryName="Home Builders"
              heroImage="/assets/images/LuxuryTahoePropertiesMockup.png"
              portfolioItem={{
                title: "Luxury Tahoe Properties",
                description: "High-end real estate and home showcase website. Features stunning imagery, property listings, and an elegant design that appeals to luxury buyers.",
                image: "/assets/images/LuxuryTahoePropertiesMockup.png",
                link: "#"
              }}
            />
          )}
        </Route>
        <Route path="/industries/professional-services">
          {() => (
            <IndustryPage 
              industryName="Professional Services"
              heroImage="/assets/images/TSA-Group-Limited.webp"
              portfolioItem={{
                title: "TSA Group Ltd",
                description: "A corporate website for a consulting firm. Focuses on credibility, service clarity, and lead generation for high-value B2B contracts.",
                image: "/assets/images/TSA-Group-Limited.webp",
                link: "#"
              }}
            />
          )}
        </Route>
        <Route path="/industries/painters">
          {() => (
            <IndustryPage 
              industryName="Painters"
              heroImage="/assets/images/HuffPaintingCo-screenshot.png"
              portfolioItem={{
                title: "Huff Painting Co",
                description: "A vibrant, visual-first website for a local painting company. showcases before/after transformations and makes booking quotes easy.",
                image: "/assets/images/HuffPaintingCo-screenshot.png",
                link: "#"
              }}
            />
          )}
        </Route>

        {/* Services */}
        <Route path="/services" component={ServicesHub} />
        <Route path="/services/web-design" component={WebDesignPage} />
        <Route path="/services/web-design/san-juan-capistrano" component={WebDesignPage} />
        <Route path="/services/web-design/dana-point" component={WebDesignPage} />
        <Route path="/services/web-design/san-clemente" component={WebDesignPage} />
        <Route path="/services/web-design/laguna-niguel" component={WebDesignPage} />
        
        {/* Note: Sitemap has typo 'optimiziation', supporting both */}
        <Route path="/services/search-engine-optimization" component={SEOPage} />
        <Route path="/services/search-engine-optimiziation" component={SEOPage} />
        
        {/* New Primary Route */}
        <Route path="/services/website-care" component={MaintenancePage} />
        
        {/* Redirects */}
        <Route path="/services/managed-wordpress-hosting">
          <Redirect to="/services/website-care" />
        </Route>
        <Route path="/services/maintenance">
          <Redirect to="/services/website-care" />
        </Route>
        
        <Route path="/services/google-ads" component={SEOPage} />
        <Route path="/services/online-listings-management" component={SEOPage} />
        <Route path="/services/what-is-google-business-profile" component={SEOPage} />
        <Route path="/services/what-is-listings-management" component={SEOPage} />
        
        <Route path="/local-seo-audit" component={SEOPage} />

        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact-us" component={ContactPage} />

        <Route path="/resources" component={BlogPage} />
        <Route path="/resources/how-online-marketing-works" component={HowMarketingWorksPage} />
        <Route path="/resources/google-business-profile-basics" component={GoogleBusinessProfilePage} />
        <Route path="/resources/first-30-days" component={First30DaysPage} />
        <Route path="/resources/ongoing-monthly-work" component={OngoingWorkPage} />
        <Route path="/resources/:slug" component={BlogPost} />
        
        {/* Admin Routes */}
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/admin/pages" component={AdminPages} />
        <Route path="/admin/pages/edit" component={AdminEditPage} />
        
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ScrollToTop />
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </LazyMotion>
  );
}

export default App;
