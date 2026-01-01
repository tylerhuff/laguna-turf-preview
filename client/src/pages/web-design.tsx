import React from 'react';
import { SEO } from '@/components/seo';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Zap, MousePointerClick, Search, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

import { WaveSection } from '@/components/ui/wave-section';

export default function WebDesignPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TwentyOne Solutions"
    },
    "description": "Websites that clearly explain what you do, build trust, and make it easy to reach you.",
    "areaServed": "USA"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What should my website include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A website needs to clearly show what you do, where you do it, and make it easy for a potential customer to reach out. Typically, that includes a home, about, services, portfolio, and contact page with clear call to actions."
        }
      },
      {
        "@type": "Question",
        "name": "What about marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We do Google marketing, or Search Engine Optimization (SEO). SEO is the best long term investment you can make for your business."
        }
      },
      {
        "@type": "Question",
        "name": "Do you own the domain or me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You own the domain (and assets). We don’t take hostages."
        }
      },
      {
        "@type": "Question",
        "name": "What’s the turnaround time for a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can deliver a website preview in 24 hours! A 3-4 page website can deliver within 7 days."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a website cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Business websites are a one time fee with a 30% deposit and the rest due upon website completion. Website hosting and domain is $39/month."
        }
      },
      {
        "@type": "Question",
        "name": "Will my website be mobile friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Of course. Every site we build works perfectly on phones, tablets, and desktops."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-gray-800 font-sans">
      <SEO 
        title="Custom Web Design for Service Businesses | TwentyOne Solutions"
        description="Professional web design for service businesses in San Clemente and beyond. Fast, mobile-friendly, and optimized to get you more calls."
        canonical="/services/web-design"
        image="/assets/images/web-design-hero.webp"
        schema={{
          "@context": "https://schema.org",
          "@graph": [serviceSchema, faqSchema]
        }}
      />

      {/* Hero */}
      <WaveSection 
        className="pt-20 md:pt-40 pb-24 md:pb-48" 
        disableTopWave
        backgroundImage="/assets/images/web-design-hero.webp"
        mobileBackgroundImage="/assets/images/bannertwentyone-mobile.webp"
        overlayOpacity={0.75}
      >
        <div className="container mx-auto px-6 flex flex-col justify-center items-center text-center">
          <motion.h1  
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-5xl md:text-7xl font-bold font-heading text-gray-900 mb-6"
          >
            Web Design
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-xl md:text-2xl font-light max-w-2xl text-gray-700"
          >
            Websites that clearly explain what you do, build trust, and make it easy to reach you.
          </motion.p>
        </div>
      </WaveSection>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading text-gray-900 mb-8">Why Choose Us?</h2>
              <div className="space-y-6">
                {[
                  { title: "Try Before you Buy", desc: "Experience our design approach firsthand with a no-obligation preview of your future website." },
                  { title: "Faster Page Load Times", desc: "We optimize every aspect of your site to achieve 90+ PageSpeed scores." },
                  { title: "Clear Calls to Action", desc: "Our designs feature strategically placed and compelling CTAs that guide visitors." },
                  { title: "Fast Onboardings", desc: "We gather all necessary information quickly to launch within 7–10 days." },
                  { title: "Higher Ranking on Google", desc: "Comprehensive on-page SEO strategies to enhance visibility." },
                  { title: "Google Business Profile Help", desc: "We assist in setting up and optimizing your Google Business Profile." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#FD9800] flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative space-y-12 flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 relative z-10 w-full max-w-md">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/assets/images/WCW_mockup_transparent-mobile.webp" />
                  <img 
                    src="/assets/images/WCW_mockup_transparent.webp" 
                    alt="West Coast Washers Mockup" 
                    className="w-full h-auto"
                  />
                </picture>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-1 hover:rotate-0 transition-transform duration-500 relative z-0 w-full max-w-md -mt-8 md:ml-6 md:mt-0">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/assets/images/SmithandEastWoodConstruction-mobile.webp" />
                  <img 
                    src="/assets/images/SmithandEastWoodConstruction.webp" 
                    alt="Smith & Eastwood Construction Mockup" 
                    className="w-full h-auto"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-gray-900">How it Works</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Site Preview First", desc: "Get a preview before committing." },
              { num: "02", title: "Onboarding", desc: "We just need a single onboarding form from you and that’s it." },
              { num: "03", title: "Launch & Grow", desc: "Once you’re thrilled with the site, we launch it." }
            ].map((item, i) => (
              <div key={i} className="bg-[#fdfaf5] p-8 rounded-xl shadow-lg border-t-4 border-[#FD9800] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <span className="text-6xl font-bold text-[#FD9800]/20 absolute top-4 right-4">{item.num}</span>
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-2 relative z-10">{item.title}</h3>
                <p className="text-gray-600 relative z-10">{item.desc}</p>
              </div>
            ))}
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
                { q: "What should my website include?", a: "A website needs to clearly show what you do, where you do it, and make it easy for a potential customer to reach out. Typically, that includes a home, about, services, portfolio, and contact page with clear call to actions." },
                { q: "What about marketing?", a: "We do Google marketing, or Search Engine Optimization (SEO). SEO is the best long term investment you can make for your business." },
                { q: "Do you own the domain or me?", a: "You own the domain (and assets). We don’t take hostages." },
                { q: "Do you write the text?", a: "Yes! We interview you to learn about your business, then our professional copywriters craft compelling text that sells your services and ranks on Google." },
                { q: "Can I update the site myself?", a: "Absolutely. We build on user-friendly platforms and provide training so you can easily update photos, projects, and text whenever you want." }
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
                { q: "What’s the turnaround time for a website?", a: "We can deliver a website preview in 24 hours! A 3-4 page website can deliver within 7 days." },
                { q: "How much does a website cost?", a: "Business websites are a one time fee with a 30% deposit and the rest due upon website completion. Website hosting and domain is $39/month." },
                { q: "Will my website be mobile friendly?", a: "Of course. Every site we build works perfectly on phones, tablets, and desktops." },
                { q: "What platform do you use?", a: "We use modern, fast, and secure web technologies (like React and Next.js) for high performance, but we can also work with WordPress if you prefer." },
                { q: "Do you use templates?", a: "We start with a proven framework to keep costs low and speed high, but we customize every pixel to match your brand, colors, and specific business needs." }
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

    </div>
  );
}
