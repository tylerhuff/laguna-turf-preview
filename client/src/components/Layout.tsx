import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MapPin, Mail, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QuoteRequestModal } from '@/components/QuoteRequestModal';
import { BusinessMap } from '@/components/BusinessMap';
import { m, AnimatePresence } from 'framer-motion';
import { businessConfig } from '@/config/business';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Get a Quote");
  const [location] = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle CTA clicks
  const handleQuoteClick = () => {
    setModalTitle("Get a Quote");
    setQuoteModalOpen(true);
  };

  const handleEstimateClick = () => {
    setModalTitle("Get a Free Estimate");
    setQuoteModalOpen(true);
  };

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      {/* Top Bar (Desktop) */}
      <div className="bg-primary text-primary-foreground text-xs md:text-sm font-medium py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="opacity-90">{businessConfig.tagline}</span>
          <div className="flex items-center gap-6">
            <a href={`mailto:${businessConfig.primaryEmail}`} className="hover:opacity-80 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              {businessConfig.primaryEmail}
            </a>
            <div className="w-px h-3 bg-primary-foreground/20"></div>
            <a href={`tel:${businessConfig.primaryPhone}`} className="hover:opacity-80 flex items-center gap-1.5 font-bold">
              <Phone className="w-3.5 h-3.5" />
              {businessConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl tracking-tight text-gray-900">
            {businessConfig.logoPath ? (
              <img src={businessConfig.logoPath} alt={businessConfig.businessName} className="h-8 md:h-10 w-auto" />
            ) : (
              <span>{businessConfig.businessName}</span>
            )}
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-600">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className={`transition-colors hover:text-primary ${location === link.href ? 'text-primary font-semibold' : ''}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href={`tel:${businessConfig.primaryPhone}`} className="hidden md:flex items-center gap-2 text-gray-600 hover:text-primary font-bold mr-2">
              <Phone className="w-5 h-5" />
              {businessConfig.phoneDisplay}
            </a>
            <Button 
              className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6"
              onClick={handleQuoteClick}
            >
              Get a Quote
            </Button>
            
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <m.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-gray-100 shadow-lg overflow-hidden"
            >
              <nav className="flex flex-col p-4 gap-4">
                {navLinks.map(link => (
                  <Link key={link.href} href={link.href} className={`text-lg font-medium py-2 border-b border-gray-50 ${location === link.href ? 'text-primary' : 'text-gray-600'}`}>
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-2">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleQuoteClick();
                    }}
                  >
                    Get a Quote
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full h-12 border-2"
                    asChild
                  >
                    <a href={`tel:${businessConfig.primaryPhone}`}>
                      Call Now: {businessConfig.phoneDisplay}
                    </a>
                  </Button>
                </div>
              </nav>
            </m.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Persistent CTA Footer Block */}
      <div className="bg-gray-50 border-t border-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to start your project?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Contact {businessConfig.businessName} today for a free estimate. We are ready to help with your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14 px-8"
                  onClick={handleEstimateClick}
                >
                  Get Estimate
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white border-2 hover:bg-gray-50 text-lg h-14 px-8"
                  asChild
                >
                  <a href={`tel:${businessConfig.primaryPhone}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call {businessConfig.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block h-64 rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-200">
               {/* Mini Map Preview */}
               <BusinessMap className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Real Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">{businessConfig.businessName}</h3>
              <p className="text-sm leading-relaxed mb-6 opacity-80">
                {businessConfig.tagline}
              </p>
              <div className="flex flex-col gap-2 text-sm">
                 {businessConfig.licenseNumber && (
                   <p>License: {businessConfig.licenseNumber}</p>
                 )}
                 {businessConfig.insuredBonded && (
                   <p>Fully Insured & Bonded</p>
                 )}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                {businessConfig.services.slice(0, 5).map(service => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Service Area</h4>
              <ul className="space-y-2 text-sm">
                {businessConfig.areasServedCities.slice(0, 5).map(city => (
                   <li key={city}>
                     <Link href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary transition-colors">
                       {city}
                     </Link>
                   </li>
                ))}
                <li>
                  <Link href="/service-areas" className="text-primary hover:underline">View All Areas</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>
                    {businessConfig.streetAddress}<br/>
                    {businessConfig.city}, {businessConfig.state} {businessConfig.postalCode}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href={`tel:${businessConfig.primaryPhone}`} className="hover:text-white transition-colors">
                    {businessConfig.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <a href={`mailto:${businessConfig.primaryEmail}`} className="hover:text-white transition-colors">
                    {businessConfig.primaryEmail}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-60">
            <p>&copy; {new Date().getFullYear()} {businessConfig.businessName}. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Fixed Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 shadow-negative flex gap-3 pb-safe">
        <Button 
          variant="outline" 
          className="flex-1 h-11 border-primary text-primary font-bold hover:bg-primary/5"
          asChild
        >
          <a href={`tel:${businessConfig.primaryPhone}`}>Call Now</a>
        </Button>
        <Button 
          className="flex-1 h-11 bg-primary text-primary-foreground font-bold hover:bg-primary/90"
          onClick={handleQuoteClick}
        >
          Get a Quote
        </Button>
      </div>

      {/* Modals */}
      <QuoteRequestModal 
        isOpen={quoteModalOpen} 
        onOpenChange={setQuoteModalOpen}
        title={modalTitle}
      />
    </div>
  );
}
