import React from 'react';
import { Navigation, Footer } from '@/components/layout';
import { WaveSection } from '@/components/ui/wave-section';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#fdfaf5] font-sans text-gray-800">
      <Navigation />
      <WaveSection className="pt-32 pb-20" disableTopWave overlayOpacity={0.8}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6">Privacy Policy</h1>
        </div>
      </WaveSection>
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="mb-4">Content for Privacy Policy goes here...</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
