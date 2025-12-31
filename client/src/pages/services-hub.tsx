import React from 'react';
import { SEO } from '@/components/seo';
import { Navigation, Footer } from '@/components/layout';
import { WaveSection } from '@/components/ui/wave-section';

export default function ServicesHub() {
  return (
    <div className="min-h-screen bg-[#fdfaf5] font-sans text-gray-800">
      <SEO 
        title="Web Design & Marketing Services | TwentyOne Solutions"
        description="Comprehensive web design, SEO, and maintenance services for service-based businesses. Everything you need to grow online."
        canonical="/services"
        image="/assets/images/bannertwentyone.webp"
      />
      <Navigation />
      <WaveSection className="pt-32 pb-20" disableTopWave overlayOpacity={0.8}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6">Our Services</h1>
        </div>
      </WaveSection>
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="mb-4">Overview of all services...</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
