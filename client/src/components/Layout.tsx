import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { m, AnimatePresence } from 'framer-motion';
import { businessConfig } from '@/config/business';

// Lazy load the modal to reduce initial bundle size
const LeadFormModal = lazy(() => import('@/components/LeadFormModal').then(module => ({ default: module.LeadFormModal })));

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [strategyOpen, setStrategyOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
      document.body.style.removeProperty('--scrollbar-width');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
      document.body.style.removeProperty('--scrollbar-width');
    };
  }, [isOpen]);

  const links = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <div className="text-white text-xs font-medium py-2.5" style={{ backgroundColor: 'var(--brand-top-bar, #5D4037)' }}>
        <div className="container mx-auto px-6 flex flex-row justify-between items-center">
          <span className="opacity-90 tracking-wide sm:hidden font-bold">{businessConfig.tagline}</span>
          <span className="opacity-90 tracking-wide hidden sm:inline">{businessConfig.tagline}</span>
          
          <div className="flex items-center gap-6">
             <a href={`mailto:${businessConfig.primaryEmail}`} className="hover:opacity-80 transition-opacity hidden sm:flex items-center gap-1.5">
               <Mail className="w-3.5 h-3.5" />
               <span>{businessConfig.primaryEmail}</span>
             </a>
             <div className="w-px h-3 bg-white/20 hidden sm:block"></div>
             <a href={`tel:${businessConfig.primaryPhone}`} className="hover:opacity-80 transition-opacity flex items-center gap-1.5 font-semibold">
               <Phone className="w-3.5 h-3.5" />
               {businessConfig.phoneDisplay}
             </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm relative">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight text-gray-800">
            {businessConfig.logoPath ? (
              <img src={businessConfig.logoPath} alt={businessConfig.businessName} className="h-16 md:h-20 w-auto" />
            ) : (
              <span>{businessConfig.businessName}</span>
            )}
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-600">
            {links.map(link => (
              <Link key={link.href} href={link.href} className={`transition-colors ${location === link.href ? 'text-primary' : 'hover:text-primary'}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-lg shadow-sm transition-all hover:-translate-y-0.5"
              onClick={() => setStrategyOpen(true)}
            >
              Get a Quote
            </Button>
            
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <m.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full inset-x-0 bg-white border-b border-gray-100 shadow-lg z-50 p-6"
            >
            <nav className="flex flex-col gap-4">
              {links.map(link => (
                <Link key={link.href} href={link.href} className={`text-lg font-medium ${location === link.href ? 'text-primary' : 'text-gray-600'}`} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12"
                  onClick={() => {
                    setIsOpen(false);
                    setStrategyOpen(true);
                  }}
                >
                  Get a Quote
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-gray-200 text-gray-700 font-bold h-12 hover:border-primary hover:text-primary"
                  asChild
                >
                  <a href={`tel:${businessConfig.primaryPhone}`}>
                    Call {businessConfig.phoneDisplay}
                  </a>
                </Button>
              </div>
            </nav>
            </m.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      
      {/* Lazy Loaded Modals */}
      <Suspense fallback={null}>
        {strategyOpen && (
          <LeadFormModal 
            open={strategyOpen}
            onOpenChange={setStrategyOpen}
            title="Get a Free Quote"
            description="Let's discuss your project goals. Fill out the form below and we'll reach out to provide an estimate."
            type="strategy"
          />
        )}
      </Suspense>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-800 mb-4">
              {businessConfig.logoPath ? (
                <img src={businessConfig.logoPath} alt={businessConfig.businessName} className="h-8 w-auto" />
              ) : (
                <span>{businessConfig.businessName}</span>
              )}
            </Link>
            <p className="text-gray-500 text-sm">
              {businessConfig.tagline}. Based in <Link href={`/locations/${businessConfig.city.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary font-medium hover:underline">{businessConfig.city}, {businessConfig.state}</Link>.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary">Our Work</Link></li>
              <li><Link href="/services" className="hover:text-primary">Services</Link></li>
              <li><Link href="/resources" className="hover:text-primary">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {businessConfig.services.slice(0, 4).map(service => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-primary">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /> 
                <span>
                  {businessConfig.businessName}<br/>
                  {businessConfig.streetAddress}<br/>
                  {businessConfig.city}, {businessConfig.state} {businessConfig.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" /> 
                <a href={`tel:${businessConfig.primaryPhone}`}>{businessConfig.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" /> 
                <a href={`mailto:${businessConfig.primaryEmail}`}>{businessConfig.primaryEmail}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {businessConfig.businessName}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
