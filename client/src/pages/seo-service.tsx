import React from 'react';
import { Helmet } from 'react-helmet';
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
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Navigation, Footer } from '@/components/layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
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

import { WaveSection } from '@/components/ui/wave-section';

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
      <Helmet>
        <title>SEO & Google Marketing - TwentyOne Solutions</title>
        <meta name="description" content="Get found when customers search. Professional SEO services for local businesses." />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <WaveSection 
        className="py-20 lg:py-32 pb-48 overflow-hidden" 
        disableTopWave
        backgroundImage="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/12/pexels-photo-3825873-3825873-scaled.webp"
        overlayOpacity={0.75}
      >
        {/* Abstract Background Shapes - Kept inside WaveSection */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 -z-10 pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            {/* Content - Centered */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#FD9800] text-xs font-bold uppercase tracking-wider border border-orange-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FD9800]"></span>
                </span>
                Google Marketing Partner
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-4xl lg:text-7xl font-bold font-heading text-gray-900 leading-[1.1] tracking-tight">
                Get Found When <br/>Customers <span className="text-[#FD9800]">Search.</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We help local businesses rank #1 on Google. Stop losing leads to competitors and become the first choice in your market.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 text-sm">More Traffic</h4>
                    <p className="text-xs text-gray-500">Capture high-intent leads.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 text-sm">More Trust</h4>
                    <p className="text-xs text-gray-500">Establish authority.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <Button size="lg" className="h-14 px-10 text-lg bg-[#FD9800] hover:bg-[#e08600] text-white rounded-lg shadow-lg">
                  Get Your Free Audit
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </WaveSection>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-around items-center gap-8 text-center">
            <div className="space-y-1">
              <div className="text-4xl font-bold font-heading text-[#FD9800]">39.8%</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Organic Click Share</div>
            </div>
            <div className="w-px h-12 bg-gray-100 hidden md:block" />
            <div className="space-y-1">
              <div className="text-4xl font-bold font-heading text-[#FD9800]">44%</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Map Pack Traffic</div>
            </div>
            <div className="w-px h-12 bg-gray-100 hidden md:block" />
            <div className="space-y-1">
              <div className="text-4xl font-bold font-heading text-[#FD9800]">10x</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">ROI Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Our Proven Framework</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We don't rely on guesswork. Our SEO strategy is built on data, technical precision, and user experience principles that drive real revenue.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Technical Foundation",
                    desc: "We fix site speed, mobile usability, and crawl errors first.",
                    icon: Zap
                  },
                  {
                    title: "Content Strategy",
                    desc: "We create content that answers the questions your customers are asking.",
                    icon: Layout
                  },
                  {
                    title: "Local Signals",
                    desc: "We build citations and optimize your profile for local relevance.",
                    icon: Globe
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#fdfaf5] flex items-center justify-center text-gray-900 flex-shrink-0 mt-1 border border-gray-100">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-[#1e293b] rounded-2xl p-8 text-white relative z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FD9800]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <h3 className="text-2xl font-bold font-heading mb-6">Ready to grow?</h3>
                <p className="text-gray-300 mb-8">
                  Get a comprehensive audit of your current digital presence and a roadmap to #1.
                </p>
                <Button className="w-full bg-[#FD9800] hover:bg-[#e08600] text-white font-bold h-12">
                  Schedule Strategy Call
                </Button>
                
                <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-[#1e293b] flex items-center justify-center text-[10px]">
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-400">
                    <strong className="text-white">500+</strong> businesses optimized
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 border-2 border-gray-100 rounded-2xl transform translate-x-4 translate-y-4 -z-10 bg-[#fdfaf5]" />
            </div>
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

      <Footer />
    </div>
  );
}
