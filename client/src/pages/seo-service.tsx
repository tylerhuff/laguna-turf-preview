import React from 'react';
import { SEO } from '@/components/seo';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  TrendingUp, 
  Users, 
  Check,
  Star,
  Clock,
  ShieldCheck,
  Zap,
  Layout,
  Globe,
  BarChart3,
  MousePointer2
} from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LeadFormModal } from '@/components/LeadFormModal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WaveSection } from '@/components/ui/wave-section';

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

export default function SEOPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Search Engine Optimization",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TwentyOne Solutions"
    },
    "description": "We help local businesses rank #1 on Google. Stop losing leads to competitors and become the first choice in your market.",
    "areaServed": "USA"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does SEO take to work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO is a long-term strategy. Typically, you start seeing movement in 3-4 months, with significant results in 6-12 months. It builds momentum over time."
        }
      },
      {
        "@type": "Question",
        "name": "Do I really need SEO if I have a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. A website without SEO is like a billboard in the desert. SEO puts your business in front of people who are actively looking for your services."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between SEO and Google Ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Ads (PPC) stops working the moment you stop paying. SEO builds organic authority that lasts, providing a better long-term ROI."
        }
      },
      {
        "@type": "Question",
        "name": "How do you track results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide monthly reports showing your keyword rankings, traffic growth, and most importantly, the calls and leads generated from your website."
        }
      },
      {
        "@type": "Question",
        "name": "Do you guarantee #1 rankings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No ethical SEO agency can guarantee a #1 spot because Google's algorithm is always changing. However, we have a proven track record of getting our clients to the top of the map pack and organic results."
        }
      },
      {
        "@type": "Question",
        "name": "Is Local SEO different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Local SEO focuses on ranking for 'near me' searches and Google Maps. It requires specific strategies like citation building and Google Business Profile optimization."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-gray-800 font-sans">
      <SEO 
        title="Local SEO Services San Clemente | Google Marketing for Business"
        description="Get found when customers search. Professional Local SEO services for businesses in San Clemente. Rank higher and get more leads."
        canonical="/services/search-engine-optimization"
        image="/assets/images/seo-hero.webp"
        schema={{
          "@context": "https://schema.org",
          "@graph": [serviceSchema, faqSchema]
        }}
      />
      <Navigation />

      {/* Hero Section */}
      <WaveSection 
        className="pt-32 md:pt-40 pb-48" 
        disableTopWave
        backgroundImage="/assets/images/seo-hero.webp"
        overlayOpacity={0.75}
        bottomWaveColor="#ffffff"
      >
        <div className="container mx-auto px-6 flex flex-col justify-center items-center text-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn} 
            className="text-5xl md:text-7xl font-bold font-heading text-gray-900 mb-6"
          >
            Get Found When <br/>Customers <span className="text-[#FD9800]">Search.</span>
          </motion.h1>
          
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn} 
            className="text-xl md:text-2xl font-light max-w-2xl text-gray-700"
          >
            When people search for services like yours, they are ready to hire. We make sure you are the first business they see.
          </motion.p>
        </div>
      </WaveSection>

      {/* Why Ranking Matters */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-6">Why Ranking #1 Matters</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              When people are actively searching for services - like painters, electricians, home cleaners, or contractors - they're often ready to call and book right away. Showing up at the top means you're their first choice for the job.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg bg-[#fdfaf5] p-8 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-[#FD9800] mx-auto mb-6">
                <MousePointer2 className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold font-heading text-gray-900 mb-2">39.8%</h3>
              <p className="text-gray-600 font-medium uppercase tracking-wide text-sm mb-4">Organic Click Share</p>
              <p className="text-gray-500">
                Nearly 4 out of 10 people click on the first result they see. If you're not there, your competitors are getting those clicks.
              </p>
            </Card>

            <Card className="border-0 shadow-lg bg-[#fdfaf5] p-8 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold font-heading text-gray-900 mb-2">44%</h3>
              <p className="text-gray-600 font-medium uppercase tracking-wide text-sm mb-4">Map Pack Traffic</p>
              <p className="text-gray-500">
                Almost half of local search traffic goes to the top 3 businesses in the Map Pack. Being here is crucial for local leads.
              </p>
            </Card>

            <Card className="border-0 shadow-lg bg-[#fdfaf5] p-8 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold font-heading text-gray-900 mb-2">High Intent</h3>
              <p className="text-gray-600 font-medium uppercase tracking-wide text-sm mb-4">Ready to Hire</p>
              <p className="text-gray-500">
                Local searches lead to action. People searching are ready to make a purchase or book a service now.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">How This Impacts Your Business</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ranking higher on Google isn't just about visibility - it's about credibility and trust. Customers are more likely to click, call, and visit businesses that show up first.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#FD9800] shadow-sm shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Lead Generation</h4>
                    <p className="text-gray-600">More visibility means more people finding your business when they need you most.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#FD9800] shadow-sm shrink-0">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Sales and Revenue</h4>
                    <p className="text-gray-600">High-intent customers finding you means more conversions and booked jobs.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#FD9800] shadow-sm shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Brand Authority</h4>
                    <p className="text-gray-600">Top-ranking businesses are perceived as the credible, trustworthy market leaders.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-2 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/assets/images/mockup-mobile-search.jpg" 
                  alt="Google Search Results Mockup" 
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FD9800]/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-6">How We Get You to Show Up First</h2>
            <p className="text-lg text-gray-600">
              Local SEO helps your business appear at the top of Google search results when customers search for services in your area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 h-full">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-[#FD9800] mb-6">
                  <Search className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Target Exact Keywords</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We make sure your website matches exactly what your customers are actively searching for in your area.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 h-full">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-[#FD9800] mb-6">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Build Local Authority</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  High-quality backlinks boost your credibility and tell Google you’re the trusted choice in your city.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 h-full">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-[#FD9800] mb-6">
                  <Layout className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Localized Content</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We publish keyword-rich content that engages your local audience and answers their specific questions.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 h-full">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-[#FD9800] mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Site Optimization</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  From titles to meta descriptions and speed, we make sure your site is easy for Google to find and rank.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold font-heading text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "How long does SEO take to work?", a: "SEO is a long-term strategy. Typically, you start seeing movement in 3-4 months, with significant results in 6-12 months. It builds momentum over time." },
                { q: "Do I really need SEO if I have a website?", a: "Yes. A website without SEO is like a billboard in the desert. SEO puts your business in front of people who are actively looking for your services." },
                { q: "What is the difference between SEO and Google Ads?", a: "Google Ads (PPC) stops working the moment you stop paying. SEO builds organic authority that lasts, providing a better long-term ROI." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-left-${i}`} className="border border-gray-100 rounded-lg px-6 bg-white shadow-sm">
                  <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FD9800] text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "How do you track results?", a: "We provide monthly reports showing your keyword rankings, traffic growth, and most importantly, the calls and leads generated from your website." },
                { q: "Do you guarantee #1 rankings?", a: "No ethical SEO agency can guarantee a #1 spot because Google's algorithm is always changing. However, we have a proven track record of getting our clients to the top of the map pack and organic results." },
                { q: "Is Local SEO different?", a: "Yes. Local SEO focuses on ranking for 'near me' searches and Google Maps. It requires specific strategies like citation building and Google Business Profile optimization." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-right-${i}`} className="border border-gray-100 rounded-lg px-6 bg-white shadow-sm">
                  <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FD9800] text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
