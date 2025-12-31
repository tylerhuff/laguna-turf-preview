import React from 'react';
import { SEO } from '@/components/seo';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, BarChart3, Clock, Lock } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { Navigation, Footer } from '@/components/layout';
import { WaveSection } from '@/components/ui/wave-section';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function MaintenancePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Website Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TwentyOne Solutions"
    },
    "description": "Comprehensive website maintenance, security updates, and performance optimization for business websites.",
    "areaServed": "USA"
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-gray-800 font-sans">
      <SEO 
        title="Website Maintenance & Managed Hosting Plans | TwentyOne Solutions"
        description="Secure hosting, daily backups, and ongoing maintenance. We keep your business website fast, safe, and up-to-date so you don't have to."
        canonical="/services/website-care"
        image="/assets/images/bannertwentyone.webp"
        schema={serviceSchema}
      />
      <Navigation />

      {/* Hero Section */}
      <WaveSection 
        className="pt-32 md:pt-40 pb-48" 
        disableTopWave
        backgroundImage="/assets/images/bannertwentyone.webp"
        overlayOpacity={0.75}
        priority={true}
      >
        <div className="container mx-auto px-6 flex flex-col justify-center items-center text-center">
          <motion.div
            initial="hidden" animate="visible" variants={fadeIn}
            className="mb-4"
          >
            <span className="text-sm font-bold tracking-widest uppercase text-gray-500">Lightning Fast</span>
          </motion.div>
          
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-5xl md:text-7xl font-bold font-heading text-gray-900 mb-6"
          >
            Website Care & Hosting
          </motion.h1>
          
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-xl md:text-2xl font-light max-w-2xl text-gray-700"
          >
            Everything you need to run a blazing fast website with peace of mind.
          </motion.p>
        </div>
      </WaveSection>

      {/* Core Features */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-600">
              To build a beautiful website with peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-[#FD9800] mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900">Robust Security Features</h3>
              <p className="text-gray-600 leading-relaxed">
                Take advantage of free SSL certificates, custom Web Application Firewall, and daily security scans to keep your data safe.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-[#FD9800] mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900">Insightful Monthly Reporting</h3>
              <p className="text-gray-600 leading-relaxed">
                Reports delivered straight to your inbox on traffic, content updates, security status, and everything else happening on your site.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-[#FD9800] mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900">Accelerated Performance</h3>
              <p className="text-gray-600 leading-relaxed">
                Out-of-the-box caching and a free global CDN (Content Delivery Network) to ensure high site speeds for every visitor.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-[#FD9800] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-gray-900">Total Peace of Mind</h3>
              <p className="text-gray-600 leading-relaxed">
                We handle the technical details—backups, updates, and troubleshooting—so you can focus entirely on running your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Everything Included List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold font-heading text-gray-900 mb-6 leading-tight">
                Everything <br/> Included
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
              {[
                "Premium Hosting Included",
                "Domain Branded Email",
                "Free SSL Certificate",
                "Free Global CDN",
                "Monthly Reporting",
                "Regular Content Updates",
                "Cancel Anytime",
                "Automated Daily Backups",
                "On-demand Restore",
                "Staging Environments",
                "Advanced Caching",
                "Free Site Migrations"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#FD9800] shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form / CTA Section */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm 
              description="Let us handle your website so you can handle your business."
            />

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
