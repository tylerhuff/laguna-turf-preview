import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LeadFormModal } from '@/components/LeadFormModal';
import { m, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/about-us", label: "About" },
    { href: "/services/web-design", label: "Web Design" },
    { href: "/services/search-engine-optimization", label: "Marketing" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/resources", label: "Resources" },
    { href: "/contact-us", label: "Contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div className="bg-[#FD9800] text-white text-xs font-medium py-2.5">
        <div className="container mx-auto px-6 flex flex-row justify-between items-center">
          <span className="opacity-90 tracking-wide sm:hidden font-bold">Get a Website Today</span>
          <span className="opacity-90 tracking-wide hidden sm:inline">Get a Professional Website in 24 Hours</span>
          
          <div className="flex items-center gap-6">
             <a href="mailto:contact@twentyonesolutions.com" className="hover:opacity-80 transition-opacity hidden sm:flex items-center gap-1.5">
               <Mail className="w-3.5 h-3.5" />
               <span>contact@twentyonesolutions.com</span>
             </a>
             <div className="w-px h-3 bg-white/20 hidden sm:block"></div>
             <a href="tel:+16265241059" className="hover:opacity-80 transition-opacity flex items-center gap-1.5 font-semibold">
               <Phone className="w-3.5 h-3.5" />
               +1 (626) 524-1059
             </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-[#fdfaf5] border-b-0 shadow-sm relative">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-heading font-bold text-2xl tracking-tight text-gray-800">
            <span className="text-[#FD9800]">TwentyOne</span>
            <span className="text-gray-600 text-xl">solutions</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-600">
            {links.map(link => (
              <Link key={link.href} href={link.href} className={`transition-colors ${location === link.href ? 'text-[#FD9800]' : 'hover:text-[#FD9800]'}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LeadFormModal 
              title="Schedule a Strategy Call"
              description="Let's discuss your business goals and how we can help you achieve them. Fill out the form below and we'll reach out to schedule a time."
              type="strategy"
              trigger={
                <Button className="hidden md:flex bg-[#FD9800] hover:bg-[#e08600] text-white font-semibold px-6 rounded-lg shadow-md transition-all hover:-translate-y-0.5">
                  Strategy Call
                </Button>
              }
            />
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-full left-0 right-0 h-screen bg-black/50 -z-10 lg:hidden"
                onClick={() => setIsOpen(false)}
              />
              <m.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-40 p-6"
              >
              <nav className="flex flex-col gap-4">
                {links.map(link => (
                  <Link key={link.href} href={link.href} className={`text-lg font-medium ${location === link.href ? 'text-[#FD9800]' : 'text-gray-600'}`} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <LeadFormModal 
                    title="Schedule a Strategy Call"
                    description="Let's discuss your business goals and how we can help you achieve them. Fill out the form below and we'll reach out to schedule a time."
                    type="strategy"
                    onSuccess={() => setIsOpen(false)}
                    trigger={
                      <Button className="w-full bg-[#FD9800] hover:bg-[#e08600] text-white font-bold h-12">
                        Strategy Call
                      </Button>
                    }
                  />
                  <LeadFormModal 
                    title="Get Your Free Site Preview"
                    description="Enter your details and we'll create a custom preview of what your new website could look like. No commitment required."
                    type="preview"
                    onSuccess={() => setIsOpen(false)}
                    trigger={
                      <Button variant="outline" className="w-full border-2 border-gray-200 text-gray-700 font-bold h-12 hover:border-[#FD9800] hover:text-[#FD9800]">
                        Free Site Preview
                      </Button>
                    }
                  />
                </div>
              </nav>
            </m.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight text-gray-800 mb-4">
              <span className="text-[#FD9800]">TwentyOne</span>
              <span className="text-gray-600 text-lg">solutions</span>
            </Link>
            <p className="text-gray-500 text-sm">
              Websites and Marketing for Service Businesses. Based in <Link href="/san-clemente" className="text-[#FD9800] font-medium hover:text-[#e08600]">San Clemente, CA</Link>.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about-us" className="hover:text-[#FD9800]">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#FD9800]">Our Portfolio</Link></li>
              <li><Link href="/services/web-design" className="hover:text-[#FD9800]">Web Design</Link></li>
              <li><Link href="/services/search-engine-optimization" className="hover:text-[#FD9800]">Marketing</Link></li>
              <li><Link href="/resources" className="hover:text-[#FD9800]">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/industries/contractors" className="hover:text-[#FD9800]">Contractors</Link></li>
              <li><Link href="/industries/home-builders" className="hover:text-[#FD9800]">Home Builders</Link></li>
              <li><Link href="/industries/professional-services" className="hover:text-[#FD9800]">Professional Services</Link></li>
              <li><Link href="/industries/painters" className="hover:text-[#FD9800]">Painters</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FD9800] shrink-0 mt-0.5" /> 
                <a href="https://share.google/GwCCMnYsmulVGlOPB" target="_blank" rel="noopener noreferrer" className="hover:text-[#FD9800]">
                  TwentyOne Solutions<br/>
                  234 Avenida Rosa A<br/>
                  San Clemente, CA 92672
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FD9800] shrink-0" /> 
                <a href="tel:+16265241059">+1 (626) 524-1059</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FD9800] shrink-0" /> 
                <a href="mailto:contact@twentyonesolutions.com">contact@twentyonesolutions.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 Twenty One Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-[#FD9800]">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#FD9800]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
