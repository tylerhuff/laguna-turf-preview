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
import ServicesHub from "@/pages/services-hub";
import AdminDashboard from "@/pages/admin/Dashboard";
import AdminPages from "@/pages/admin/PageList";
import AdminEditPage from "@/pages/admin/EditPage";
import BlogPage from "@/pages/blog";
import BlogPost from "@/pages/blog-post";

import IndustryPage from "@/pages/industry-template";

import SanClementePage from "@/pages/san-clemente";
import PrivacyPolicyPage from "@/pages/privacy-policy";
import TermsOfServicePage from "@/pages/terms-of-service";

function Router() {
  return (
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
            heroImage="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/08/DiamondConstruction-png.webp"
            portfolioItem={{
              title: "Diamond Construction",
              description: "A professional site for a general contractor specializing in waterproofing and gypsum concrete. Highlights services and past projects to build trust with new clients.",
              image: "https://staging44.twentyonesolutions.com/wp-content/uploads/2025/08/DiamondConstruction-png.webp",
              link: "#"
            }}
          />
        )}
      </Route>
      <Route path="/industries/home-builders">
        {() => (
          <IndustryPage 
            industryName="Home Builders"
            heroImage="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/02/LuxuryTahoePropertiesMockup.png"
            portfolioItem={{
              title: "Luxury Tahoe Properties",
              description: "High-end real estate and home showcase website. Features stunning imagery, property listings, and an elegant design that appeals to luxury buyers.",
              image: "https://staging44.twentyonesolutions.com/wp-content/uploads/2025/02/LuxuryTahoePropertiesMockup.png",
              link: "#"
            }}
          />
        )}
      </Route>
      <Route path="/industries/professional-services">
        {() => (
          <IndustryPage 
            industryName="Professional Services"
            heroImage="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/08/TSA-Group-Limited-png.webp"
            portfolioItem={{
              title: "TSA Group Ltd",
              description: "A corporate website for a consulting firm. Focuses on credibility, service clarity, and lead generation for high-value B2B contracts.",
              image: "https://staging44.twentyonesolutions.com/wp-content/uploads/2025/08/TSA-Group-Limited-png.webp",
              link: "#"
            }}
          />
        )}
      </Route>
      <Route path="/industries/painters">
        {() => (
          <IndustryPage 
            industryName="Painters"
            heroImage="https://staging44.twentyonesolutions.com/wp-content/uploads/2024/04/Screenshot-2024-04-18-at-7.26.04%E2%80%AFAM.png"
            portfolioItem={{
              title: "Huff Painting Co",
              description: "A vibrant, visual-first website for a local painting company. showcases before/after transformations and makes booking quotes easy.",
              image: "https://staging44.twentyonesolutions.com/wp-content/uploads/2024/04/Screenshot-2024-04-18-at-7.26.04%E2%80%AFAM.png",
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
      
      <Route path="/services/managed-wordpress-hosting" component={WebDesignPage} />
      <Route path="/services/google-ads" component={SEOPage} />
      <Route path="/services/online-listings-management" component={SEOPage} />
      <Route path="/services/what-is-google-business-profile" component={SEOPage} />
      <Route path="/services/what-is-listings-management" component={SEOPage} />
      
      <Route path="/local-seo-audit" component={SEOPage} />

      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/contact-us" component={ContactPage} />

      <Route path="/resources" component={BlogPage} />
      <Route path="/resources/:slug" component={BlogPost} />
      
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
