import { Suspense, lazy, useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import { Loader2 } from "lucide-react";
import { LazyMotion, domAnimation } from "framer-motion";
import ReactGA from "react-ga4";

// Initialize Google Analytics with a placeholder ID
// Users should replace this with their actual Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; 

ReactGA.initialize(GA_MEASUREMENT_ID);

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
const SitemapPage = lazy(() => import("@/pages/sitemap"));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfaf5]">
      <Loader2 className="w-10 h-10 animate-spin text-[#FD9800]" />
    </div>
  );
}

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    // Send pageview to Google Analytics on route change
    ReactGA.send({ hitType: "pageview", page: location });
  }, [location]);

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
              heroImage="/assets/images/san-clemente-hero.webp"
              portfolioItems={[
                {
                  title: "West Coast Washers",
                  subtitle: "Exterior Cleaning",
                  description: "Specializes in commercial building exterior cleaning and pressure washing services across Southern California.",
                  image: "/assets/images/WCW_mockup_transparent.webp",
                  link: "https://westcoastwashersllc.com/"
                },
                {
                  title: "Ceiling Pro",
                  subtitle: "Ceiling Installation",
                  description: "Trusted Ceiling Experts in the Bay Area. Providing exceptional ceiling installations for both commercial and residential spaces.",
                  image: "/assets/images/CeilingProMockup.png",
                  link: "https://ceilingprosf.com/"
                },
                {
                  title: "Sierra Precision Electric",
                  subtitle: "Electrical Contractor",
                  description: "Trusted Electrical Solutions for Truckee and Lake Tahoe. Specializing in high-end residential installations.",
                  image: "/assets/images/SierraElectricMockup.png",
                  link: "https://truckeetahoeelectrical.com/"
                }
              ]}
            />
          )}
        </Route>
        <Route path="/industries/home-builders">
          {() => (
            <IndustryPage 
              industryName="Home Builders"
              heroImage="/assets/images/whitewater_sanclemente.webp"
              portfolioItems={[
                {
                  title: "Smith & Eastwood Construction",
                  subtitle: "General Contractors",
                  description: "Premier construction services delivering quality craftsmanship for residential and commercial projects.",
                  image: "/assets/images/SmithandEastWoodConstruction.webp",
                  link: "https://smitheastwoodbuild.com/"
                },
                {
                  title: "Diamond Construction",
                  subtitle: "Construction",
                  description: "Established in 2013, specializes in waterproofing solutions and gypsum concrete services.",
                  image: "/assets/images/DiamondConstructionMockup.png",
                  link: "https://diamondconstructionandgypsum.com/"
                }
              ]}
            />
          )}
        </Route>
        <Route path="/industries/professional-services">
          {() => (
            <IndustryPage 
              industryName="Professional Services"
              heroImage="/assets/images/san-clemente-hero.webp"
              portfolioItems={[
                {
                  title: "TSA Group Ltd",
                  subtitle: "Consulting",
                  description: "A corporate website for a consulting firm. Focuses on credibility, service clarity, and lead generation.",
                  image: "/assets/images/TSA-Group-Limited.webp",
                  link: "https://tsagroupconsulting.com/"
                },
                {
                  title: "Filger Manufacturing",
                  subtitle: "Aerospace",
                  description: "Specializes in high-precision machining for aerospace and defense. Site highlights equipment and quality processes.",
                  image: "/assets/images/Filger-Manufacturing.webp",
                  link: "https://filger.com/"
                },
                {
                  title: "Fan Fusion Ventures",
                  subtitle: "Sports Entertainment",
                  description: "Fan Fusion provides exciting daily fantasy sports experiences tailored for passionate sports fans.",
                  image: "/assets/images/FanFusionMockup.png",
                  link: "https://fanfusionventures.com/"
                },
                {
                  title: "Case Whittemore, LMFT",
                  subtitle: "Healthcare",
                  description: "A licensed Marriage and Family Therapist with a certification in perinatal mental health.",
                  image: "/assets/images/CaseWhitteMoreMockUp.png",
                  link: "https://caseywhittemorelmft.com/"
                },
                {
                  title: "Ascend Equities",
                  subtitle: "Real Estate Investment",
                  description: "Real estate investment firm specializing in developing and operating premier RV parks and commercial real estate.",
                  image: "/assets/images/AscendEquities.webp",
                  link: "https://ascendequities.com/"
                },
                {
                  title: "Luxury Tahoe Properties",
                  subtitle: "Real Estate",
                  description: "Led by real estate professional Samantha Bass, focuses on high-end properties in the Lake Tahoe area.",
                  image: "/assets/images/LuxuryTahoePropertiesMockup.png",
                  link: "https://luxurytahoeproperties.com/"
                }
              ]}
            />
          )}
        </Route>
        <Route path="/industries/painters">
          {() => (
            <IndustryPage 
              industryName="Painters"
              heroImage="/assets/images/whitewater_sanclemente.webp"
              portfolioItems={[
                {
                  title: "Huff Painting Co",
                  subtitle: "Commercial Painting",
                  description: "A vibrant, visual-first website for a local painting company. Showcases before/after transformations.",
                  image: "/assets/images/HuffPaintingCoMockup.png",
                  link: "https://huffpainting.co/"
                },
                {
                  title: "Wrangler Painting",
                  subtitle: "Residential Painting",
                  description: "Located in Los Angeles, California, this company focuses on residential painting and power washing services.",
                  image: "/assets/images/WranglerPaintingMockup.webp",
                  link: "https://wranglerpainting.com/"
                }
              ]}
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
