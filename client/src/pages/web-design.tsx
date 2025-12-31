import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Zap, MousePointerClick, Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Navigation, Footer } from '@/components/layout';
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
      <Helmet>
        <title>Web Design Services - TwentyOne Solutions</title>
        <meta name="description" content="Professional web design for service businesses. Fast, mobile-friendly, and optimized for Google." />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <Navigation />

      {/* Hero */}
      <WaveSection 
        className="pt-32 md:pt-40 pb-48" 
        disableTopWave
        backgroundImage="/assets/images/web-design-hero.webp"
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
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/06/WCW_mockup_transparent-1024x576.webp" 
                  alt="West Coast Washers Mockup" 
                  className="w-full h-auto"
                />
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
              { step: "01", title: "Site Preview First", desc: "Get a preview before committing." },
              { step: "02", title: "Onboarding", desc: "We just need a single onboarding form from you and that’s it." },
              { step: "03", title: "Launch & Grow", desc: "Once you’re thrilled with the site, we launch it." }
            ].map((item, i) => (
              <Card key={i} className="border-0 shadow-lg bg-[#fdfaf5] relative overflow-hidden">
                <CardContent className="p-8">
                  <span className="text-6xl font-bold text-gray-100 absolute top-4 right-4 z-0">{item.step}</span>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
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
                { q: "Do you own the domain or me?", a: "You own the domain (and assets). We don’t take hostages." }
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
                { q: "Will my website be mobile friendly?", a: "Of course. Every site we build works perfectly on phones, tablets, and desktops." }
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
            <div className="space-y-8">
              <h2 className="text-4xl font-bold font-heading text-gray-900">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600">See what your custom website could look like in 24 hours.</p>
              
              <Card className="border-0 shadow-2xl bg-white overflow-hidden">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Full Name *</Label>
                        <Input id="contact-name" className="bg-[#fdfaf5] border-gray-200" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-phone">Phone *</Label>
                        <Input id="contact-phone" className="bg-[#fdfaf5] border-gray-200" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input id="contact-email" type="email" className="bg-[#fdfaf5] border-gray-200" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-business">Business Name *</Label>
                      <Input id="contact-business" className="bg-[#fdfaf5] border-gray-200" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-desc">What does your business do? *</Label>
                      <Input id="contact-desc" className="bg-[#fdfaf5] border-gray-200" required />
                    </div>

                    <Button className="w-full bg-[#FD9800] hover:bg-[#e08600] text-white font-bold h-14 text-lg mt-4">
                      Submit
                    </Button>
                    <p className="text-xs text-center text-gray-500">
                      I agree to privacy policy & terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

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
