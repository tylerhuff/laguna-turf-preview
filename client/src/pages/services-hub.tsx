import React from 'react';
import { SEO } from '@/components/seo';
import { WaveSection } from '@/components/ui/wave-section';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Monitor, Search, Shield, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ServicesHub() {
  return (
    <div className="min-h-screen bg-[#fdfaf5] font-sans text-gray-800">
      <SEO 
        title="Web Design & Marketing Services | TwentyOne Solutions"
        description="Comprehensive web design, SEO, and maintenance services for service-based businesses. Everything you need to grow online."
        canonical="/services"
        image="/assets/images/bannertwentyone.webp"
      />
      
      <WaveSection className="pt-20 md:pt-40 pb-20" disableTopWave overlayOpacity={0.8}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Everything you need to build, grow, and maintain your online presence.
          </p>
        </div>
      </WaveSection>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Web Design */}
            <Card className="border-0 shadow-lg h-full bg-white hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-[#FD9800]/10 flex items-center justify-center text-[#FD9800] mb-6">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Web Design</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  A clean modern website that makes it obvious what you do, where you work, and how to contact you.
                </p>
                <Link href="/services/web-design">
                  <Button variant="outline" className="w-full border-[#FD9800] text-[#FD9800] hover:bg-[#FD9800] hover:text-white font-bold group">
                    View Service <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* SEO */}
            <Card className="border-0 shadow-lg h-full bg-white hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-[#FD9800]/10 flex items-center justify-center text-[#FD9800] mb-6">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">SEO & Marketing</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  Ongoing work that improves your visibility across Google and keeps your presence active.
                </p>
                <Link href="/services/search-engine-optimization">
                  <Button variant="outline" className="w-full border-[#FD9800] text-[#FD9800] hover:bg-[#FD9800] hover:text-white font-bold group">
                    View Service <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Maintenance */}
            <Card className="border-0 shadow-lg h-full bg-white hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-[#FD9800]/10 flex items-center justify-center text-[#FD9800] mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Website Care</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  Hosting, updates, backups, and security checks. We handle the tech so you can focus on work.
                </p>
                <Link href="/services/website-care">
                  <Button variant="outline" className="w-full border-[#FD9800] text-[#FD9800] hover:bg-[#FD9800] hover:text-white font-bold group">
                    View Service <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

    </div>
  );
}
