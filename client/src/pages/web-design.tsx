import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Zap, MousePointerClick, Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
  return (
    <div className="min-h-screen bg-[#fdfaf5] text-gray-800 font-sans">
      <Navigation />

      {/* Hero */}
      <WaveSection 
        className="pt-32 md:pt-40 pb-48" 
        disableTopWave
        backgroundImage="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/02/pexels-photo-355328-355328-scaled.avif"
        overlayOpacity={0.75}
      >
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.h1  
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-4xl md:text-6xl font-bold font-heading text-gray-900 leading-[1.1] mb-6"
          >
            Web Design
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto mb-10"
          >
            Websites that clearly explain what you do, build trust, and make it easy to reach you.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Button size="lg" className="h-14 px-10 text-lg bg-[#FD9800] hover:bg-[#e08600] text-white rounded-lg shadow-lg">
              Get a Free Preview
            </Button>
          </motion.div>
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
          
          <div className="text-center mt-12">
            <Button size="lg" className="h-14 px-10 text-lg bg-[#FD9800] hover:bg-[#e08600] text-white rounded-lg shadow-lg">
              Get a Free Preview
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold font-heading text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "What should my website include?", a: "A website needs to clearly show what you do, where you do it, and make it easy for a potential customer to reach out. Typically, that includes a home, about, services, portfolio, and contact page with clear call to actions." },
              { q: "What about marketing?", a: "We do Google marketing, or Search Engine Optimization (SEO). SEO is the best long term investment you can make for your business." },
              { q: "Do you own the domain or me?", a: "You own the domain (and assets). We don’t take hostages." },
              { q: "What’s the turnaround time for a website?", a: "We can deliver a website preview in 24 hours! A 3-4 page website can deliver within 7 days." },
              { q: "How much does a website cost?", a: "Business websites are a one time fee with a 30% deposit and the rest due upon website completion. Website hosting and domain is $39/month." },
              { q: "Will my website be mobile friendly?", a: "Of course. Every site we build works perfectly on phones, tablets, and desktops." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-gray-100 rounded-lg px-6 bg-white shadow-sm">
                <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FD9800] text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
}
