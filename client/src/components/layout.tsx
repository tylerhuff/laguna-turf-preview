import React, { useState } from 'react';
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/about-us", label: "About" },
    { href: "/services/web-design", label: "Web Design" },
    { href: "/services/search-engine-optimization", label: "Marketing" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Resources" },
    { href: "/contact-us", label: "Contact" },
  ];

  return (
    <>
      <div className="bg-[#FD9800] text-white text-xs font-medium py-2.5">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="opacity-90 tracking-wide hidden sm:inline">Get a Professional Website in 24 Hours</span>
          <div className="flex items-center gap-6 justify-center w-full sm:w-auto">
             <a href="mailto:contact@twentyonesolutions.com" className="hover:opacity-80 transition-opacity flex items-center gap-1.5">
               <Mail className="w-3.5 h-3.5" />
               <span className="hidden sm:inline">contact@twentyonesolutions.com</span>
             </a>
             <div className="w-px h-3 bg-white/20 hidden sm:block"></div>
             <a href="tel:+16265241059" className="hover:opacity-80 transition-opacity flex items-center gap-1.5 font-semibold">
               <Phone className="w-3.5 h-3.5" />
               +1 (626) 524-1059
             </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-[#fdfaf5] border-b-0 shadow-sm">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 font-heading font-bold text-2xl tracking-tight text-gray-800">
              <span className="text-[#FD9800]">TwentyOne</span>
              <span className="text-gray-600 text-xl">solutions</span>
            </a>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-600">
            {links.map(link => (
              <Link key={link.href} href={link.href}>
                <a className={`transition-colors ${location === link.href ? 'text-[#FD9800]' : 'hover:text-[#FD9800]'}`}>
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/contact-us">
              <Button className="hidden md:flex bg-[#FD9800] hover:bg-[#e08600] text-white font-semibold px-6 rounded-lg shadow-md transition-all hover:-translate-y-0.5">
                Strategy Call
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-x-0 top-[116px] bg-white border-b border-gray-100 shadow-lg z-40 p-6"
          >
            <nav className="flex flex-col gap-4">
              {links.map(link => (
                <Link key={link.href} href={link.href}>
                  <a 
                    className={`text-lg font-medium ${location === link.href ? 'text-[#FD9800]' : 'text-gray-600'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <Link href="/contact-us">
                <Button className="w-full bg-[#FD9800] hover:bg-[#e08600] text-white mt-4">
                  Strategy Call
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <Link href="/">
              <a className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight text-gray-800 mb-4">
                <span className="text-[#FD9800]">TwentyOne</span>
                <span className="text-gray-600 text-lg">solutions</span>
              </a>
            </Link>
            <p className="text-gray-500 text-sm">
              Websites and Marketing for Service Businesses.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about-us"><a className="hover:text-[#FD9800]">About Us</a></Link></li>
              <li><Link href="/portfolio"><a className="hover:text-[#FD9800]">Our Portfolio</a></Link></li>
              <li><Link href="/services/web-design"><a className="hover:text-[#FD9800]">Web Design</a></Link></li>
              <li><Link href="/services/search-engine-optimization"><a className="hover:text-[#FD9800]">Marketing</a></Link></li>
              <li><Link href="/blog"><a className="hover:text-[#FD9800]">Resources</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><span className="hover:text-[#FD9800] cursor-pointer">Contractors</span></li>
              <li><span className="hover:text-[#FD9800] cursor-pointer">Home Builders</span></li>
              <li><span className="hover:text-[#FD9800] cursor-pointer">Professional Services</span></li>
              <li><span className="hover:text-[#FD9800] cursor-pointer">Painters</span></li>
              <li><span className="hover:text-[#FD9800] cursor-pointer">Local Business</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FD9800] shrink-0 mt-0.5" /> 
                <span>
                  TwentyOne Solutions<br/>
                  234 Avenida Rosa A<br/>
                  San Clemente, CA 92672
                </span>
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
            <a href="#" className="hover:text-[#FD9800]">Privacy Policy</a>
            <a href="#" className="hover:text-[#FD9800]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
