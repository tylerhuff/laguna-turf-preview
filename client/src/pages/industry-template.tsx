import React from 'react';
import { SEO } from '@/components/seo';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { WaveSection } from '@/components/ui/wave-section';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { PortfolioCard } from '@/pages/portfolio';

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  link: string;
  subtitle?: string;
}

interface IndustryPageProps {
  industryName: string;
  heroImage: string;
  portfolioItems: PortfolioItem[];
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function IndustryPage({ industryName, heroImage, portfolioItems }: IndustryPageProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Web Design & Marketing for ${industryName}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "TwentyOne Solutions"
    },
    "description": `Professional web design and SEO services specifically for ${industryName.toLowerCase()}.`,
    "areaServed": "USA"
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-gray-800 font-sans">
      <SEO 
        title={`Web Design for ${industryName} - TwentyOne Solutions`}
        description={`Custom web design and marketing for ${industryName.toLowerCase()}. Get found online and book more jobs.`}
        image={heroImage}
        schema={serviceSchema}
      />
      <Navigation />

      {/* Hero */}
      <WaveSection 
        className="pt-32 md:pt-40 pb-48" 
        disableTopWave
        backgroundImage={heroImage}
        overlayOpacity={0.8}
      >
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6"
          >
            Web Design & Local SEO Marketing for <span className="text-[#FD9800]">{industryName}</span>
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-xl text-gray-600 font-light"
          >
            Get more calls and booked jobs with a professional website built for {industryName.toLowerCase()}.
          </motion.p>
        </div>
      </WaveSection>

      {/* Main Content */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Design Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-heading text-gray-900">
                Custom Web Design for {industryName}
              </h2>
              <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                <p>
                  As a {industryName.toLowerCase().slice(0, -1)}, your reputation is everything. You need a website that reflects the quality of your work and builds trust instantly. We build custom websites that showcase your projects, highlight your services, and make it incredibly easy for potential clients to contact you.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FD9800]" />
                    Design Features That Convert
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Mobile-optimized for clients on the go",
                      "Portfolio galleries to showcase work",
                      "Trust signals & testimonial integration",
                      "Fast loading speeds for better retention"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FD9800]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* SEO Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-heading text-gray-900">
                Local SEO Marketing for {industryName}
              </h2>
              <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                <p>
                  Having a website is only half the battle. You need to be found when people in your area search for "{industryName} near me". Our Local SEO services help you climb the Google rankings and get in front of customers exactly when they are looking for your services.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FD9800]" />
                    Dominate Your Local Market
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Google Business Profile Optimization",
                      "Local Citation Building",
                      "Service Area Targeted Content",
                      "Review Generation Strategy"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FD9800]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Featured {industryName} Projects</h2>
            <p className="text-lg text-gray-600">See how we've helped other businesses like yours.</p>
          </div>

          <motion.div 
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioItems.map((item, index) => (
              <PortfolioCard 
                key={index}
                {...item}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form / CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />

            <div className="space-y-12 lg:pt-20">
              <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-500">
                <iframe 
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=TwentyOne%20Solutions%20234%20Avenida%20Rosa%20San%20Clemente%20CA&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TwentyOne Solutions Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}