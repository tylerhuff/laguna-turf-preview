import React from 'react';
import { SEO } from '@/components/seo';
import { Navigation, Footer } from '@/components/layout';
import { Link } from "wouter";
import { WaveSection } from '@/components/ui/wave-section';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, MapPin, FileText, Briefcase, Phone, BookOpen } from 'lucide-react';

export default function SitemapPage() {
  const sitemapLinks = [
    {
      category: "Main",
      icon: MapPin,
      links: [
        { label: "Home", href: "/" },
        { label: "San Clemente (Local)", href: "/san-clemente" },
        { label: "About Us", href: "/about-us" },
        { label: "Contact Us", href: "/contact-us" },
        { label: "Portfolio", href: "/portfolio" },
      ]
    },
    {
      category: "Services",
      icon: Briefcase,
      links: [
        { label: "Web Design", href: "/services/web-design" },
        { label: "Search Engine Optimization (SEO)", href: "/services/search-engine-optimization" },
        { label: "Website Maintenance & Hosting", href: "/services/website-care" },
        { label: "All Services", href: "/services" },
      ]
    },
    {
      category: "Industries",
      icon: Briefcase,
      links: [
        { label: "Contractors", href: "/industries/contractors" },
        { label: "Home Builders", href: "/industries/home-builders" },
        { label: "Painters", href: "/industries/painters" },
        { label: "Professional Services", href: "/industries/professional-services" },
      ]
    },
    {
      category: "Resources",
      icon: BookOpen,
      links: [
        { label: "Blog & Guides", href: "/resources" },
        { label: "How Marketing Works", href: "/resources/how-online-marketing-works" },
        { label: "Google Business Profile Basics", href: "/resources/google-business-profile-basics" },
        { label: "First 30 Days", href: "/resources/first-30-days" },
        { label: "Ongoing Monthly Work", href: "/resources/ongoing-monthly-work" },
      ]
    },
    {
      category: "Legal",
      icon: FileText,
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "XML Sitemap", href: "/sitemap.xml", external: true },
        { label: "KML Locations", href: "/locations.kml", external: true },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-gray-800 font-sans">
      <SEO 
        title="Sitemap - TwentyOne Solutions"
        description="Overview of all pages and services on the TwentyOne Solutions website."
        canonical="/sitemap"
      />
      <Navigation />

      <WaveSection 
        className="pt-32 md:pt-40 pb-20" 
        disableTopWave
        overlayOpacity={0.75}
        backgroundImage="/assets/images/portfolio-hero.webp"
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6">
            Sitemap
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find everything you need on our site.
          </p>
        </div>
      </WaveSection>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapLinks.map((section, idx) => (
              <Card key={idx} className="border border-gray-100 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#FD9800]/10 flex items-center justify-center text-[#FD9800]">
                      <section.icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-bold font-heading text-gray-900">
                      {section.category}
                    </h2>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        {link.external ? (
                          <a 
                            href={link.href} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-600 hover:text-[#FD9800] transition-colors group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3 group-hover:bg-[#FD9800] transition-colors"></span>
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.href}>
                            <a className="flex items-center text-gray-600 hover:text-[#FD9800] transition-colors group">
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3 group-hover:bg-[#FD9800] transition-colors"></span>
                              {link.label}
                            </a>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}