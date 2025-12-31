import React from 'react';
import { SEO } from '@/components/seo';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { WaveSection } from '@/components/ui/wave-section';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface IndustryPageProps {
  industryName: string;
  heroImage: string;
  portfolioItem: PortfolioItem;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function IndustryPage({ industryName, heroImage, portfolioItem }: IndustryPageProps) {
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
            Web Design & Marketing for <span className="text-[#FD9800]">{industryName}</span>
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-heading text-gray-900">
                Custom Web Design for {industryName}
              </h2>
              <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  As a {industryName.toLowerCase().slice(0, -1)}, your reputation is everything. You need a website that reflects the quality of your work and builds trust instantly. We build custom websites that showcase your projects, highlight your services, and make it incredibly easy for potential clients to contact you.
                </p>
                <p>
                  We don't just build pretty sites; we build sites that convert visitors into leads. From clear call-to-actions to mobile-friendly layouts, every element is designed to grow your business.
                </p>
              </div>
              <ul className="space-y-3 pt-4">
                {[
                  "Mobile-optimized for clients on the go",
                  "Portfolio galleries to showcase your work",
                  "Trust signals and testimonial integration",
                  "Fast loading speeds for better retention"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#FD9800] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#fdfaf5] p-8 rounded-2xl border border-gray-100 shadow-lg">
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Local SEO & Marketing</h3>
              <p className="text-gray-600 mb-6">
                Having a website is only half the battle. You need to be found when people in your area search for "{industryName} near me".
              </p>
              <p className="text-gray-600 mb-6">
                Our Local SEO services help you climb the Google rankings. We optimize your Google Business Profile, build local citations, and create content that targets your specific service area.
              </p>
              <Button className="w-full bg-[#FD9800] hover:bg-[#e08600] text-white font-bold h-12">
                Get Your Free SEO Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Featured {industryName} Project</h2>
            <p className="text-lg text-gray-600">See how we've helped other businesses like yours.</p>
          </div>

          <div className="max-w-4xl mx-auto">
             <div className="group bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 transition-all hover:-translate-y-1">
               <div className="grid md:grid-cols-2 gap-0">
                 <div className="relative h-64 md:h-auto">
                   <img 
                     src={portfolioItem.image} 
                     alt={portfolioItem.title} 
                     className="absolute inset-0 w-full h-full object-cover"
                   />
                 </div>
                 <div className="p-8 flex flex-col justify-center">
                   <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3">{portfolioItem.title}</h3>
                   <p className="text-gray-600 mb-6">{portfolioItem.description}</p>
                   {portfolioItem.link && (
                     <a href={portfolioItem.link} className="inline-flex items-center text-[#FD9800] font-semibold hover:gap-2 transition-all">
                       Visit Live Site <ExternalLink className="w-4 h-4 ml-1" />
                     </a>
                   )}
                 </div>
               </div>
             </div>
          </div>
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
