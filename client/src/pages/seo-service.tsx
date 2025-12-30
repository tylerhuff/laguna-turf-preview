import React from 'react';
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
  return (
    <div className="min-h-screen bg-[#fdfaf5] text-gray-800 font-sans">
      <Navigation />

      {/* Hero Section */}
      <WaveSection className="py-12 lg:py-20 overflow-hidden">
        {/* Abstract Background Shapes - Kept inside WaveSection */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 -z-10 pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 space-y-8"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#FD9800] text-xs font-bold uppercase tracking-wider border border-orange-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FD9800]"></span>
                </span>
                Google Marketing Partner
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-4xl lg:text-6xl font-bold font-heading text-gray-900 leading-[1.1] tracking-tight">
                Get Found When <br/>Customers <span className="text-[#FD9800]">Search.</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-lg leading-relaxed">
                We help local businesses rank #1 on Google. Stop losing leads to competitors and become the first choice in your market.
              </motion.p>

              <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4 max-w-lg">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">More Traffic</h4>
                    <p className="text-xs text-gray-500 mt-1">Capture high-intent leads searching now.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">More Trust</h4>
                    <p className="text-xs text-gray-500 mt-1">Establish authority in your service area.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <Card className="border-0 shadow-2xl relative z-10 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-[#FD9800]" />
                <CardContent className="p-6 md:p-8 bg-white">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold font-heading text-gray-900">Get Your Free Strategy Audit</h3>
                    <p className="text-sm text-gray-500 mt-1">See how you stack up against competitors.</p>
                  </div>
                  
                  <form className="space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="audit-name" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Full Name</Label>
                      <Input id="audit-name" placeholder="John Doe" className="bg-[#fdfaf5] border-gray-200 focus:bg-white" data-testid="input-name" />
                    </div>
                    
                    <div className="space-y-1.5">
                      <Label htmlFor="audit-email" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Email Address</Label>
                      <Input id="audit-email" type="email" placeholder="john@company.com" className="bg-[#fdfaf5] border-gray-200 focus:bg-white" data-testid="input-email" />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="audit-website" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Website URL</Label>
                      <Input id="audit-website" placeholder="https://example.com" className="bg-[#fdfaf5] border-gray-200 focus:bg-white" data-testid="input-website" />
                    </div>

                    <Button className="w-full h-12 text-base font-bold bg-[#FD9800] hover:bg-[#e08600] text-white shadow-lg mt-2" data-testid="button-audit">
                      Analyze My Website
                    </Button>
                    
                    <p className="text-[10px] text-center text-gray-400 mt-3">
                      100% free. No credit card required. Delivered in 24h.
                    </p>
                  </form>
                </CardContent>
              </Card>
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

      <Footer />
    </div>
  );
}
