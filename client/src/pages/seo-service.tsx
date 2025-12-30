import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  TrendingUp, 
  Check,
  Star,
  Menu,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 font-heading font-bold text-2xl tracking-tight text-gray-800">
            <span className="text-[#FD9800]">TwentyOne</span>
            <span className="text-gray-600 text-xl">solutions</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-600">
            <a href="#" className="hover:text-[#FD9800] transition-colors">About</a>
            <a href="#" className="hover:text-[#FD9800] transition-colors">Web Design</a>
            <a href="#" className="text-[#FD9800] transition-colors">Marketing</a>
            <a href="#" className="hover:text-[#FD9800] transition-colors">Portfolio</a>
            <a href="#" className="hover:text-[#FD9800] transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-[#FD9800] hover:bg-[#e08600] text-white font-semibold px-6 rounded-lg shadow-md transition-all hover:-translate-y-0.5">
              Strategy Call
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        {/* Wave Background Element */}
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[#fdfaf5] -z-10" style={{ borderRadius: '0 0 50% 50% / 0 0 20% 20%' }}></div>

        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold font-heading text-gray-900 leading-tight">
              Google Marketing
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
              The best long-term marketing investment for local service businesses.
            </motion.p>
            
            <motion.div variants={fadeIn} className="pt-4">
              <Button size="lg" className="h-14 px-10 text-lg bg-[#FD9800] hover:bg-[#e08600] text-white rounded-lg shadow-lg hover:shadow-xl transition-all">
                Get Your Free Audit
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Copy */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-heading text-gray-900">
                  Are potential customers finding your business?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  If you’re not showing up on Google’s first page or in the Map Pack, you’re missing out on valuable leads and sales.
                  When people search for services like yours, they are usually ready to <strong className="text-gray-900">call and book right away</strong>.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold font-heading text-gray-900">Why Ranking #1 Matters</h3>
                <p className="text-lg text-gray-600">
                  The top organic search result gets <strong className="text-[#FD9800]">39.8% of clicks</strong>. If you aren't there, your competitors are getting those calls.
                </p>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-[#FD9800]">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Map Pack Dominance</h4>
                      <p className="text-sm text-gray-500">44% of local traffic goes here.</p>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FD9800] w-[44%]"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold font-heading text-gray-900">How We Help You Win</h3>
                <ul className="space-y-4">
                  {[
                    "Target Exact Keywords Your Customers Use",
                    "Build Local Authority with Quality Backlinks",
                    "Create Content That Builds Trust",
                    "Optimize for Mobile & Speed"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="lg:sticky lg:top-24"
            >
              <Card className="shadow-xl border-gray-100 overflow-hidden">
                <div className="bg-gray-900 p-6 text-white text-center">
                  <h3 className="text-xl font-bold font-heading mb-2">Get a Free Strategy Audit</h3>
                  <p className="text-gray-400 text-sm">See exactly how to outrank your competitors.</p>
                </div>
                <CardContent className="p-8 space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="audit-name">Full Name *</Label>
                    <Input id="audit-name" className="bg-gray-50 border-gray-200 focus:ring-[#FD9800] focus:border-[#FD9800]" data-testid="input-name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="audit-email">Email Address *</Label>
                    <Input id="audit-email" type="email" className="bg-gray-50 border-gray-200 focus:ring-[#FD9800] focus:border-[#FD9800]" data-testid="input-email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="audit-phone">Phone Number *</Label>
                    <Input id="audit-phone" type="tel" className="bg-gray-50 border-gray-200 focus:ring-[#FD9800] focus:border-[#FD9800]" data-testid="input-phone" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="audit-website">Business Website</Label>
                    <Input id="audit-website" placeholder="https://" className="bg-gray-50 border-gray-200 focus:ring-[#FD9800] focus:border-[#FD9800]" data-testid="input-website" />
                  </div>

                  <Button className="w-full h-12 bg-[#FD9800] hover:bg-[#e08600] text-white font-bold text-lg mt-2" data-testid="button-audit">
                    Get My Free Audit
                  </Button>
                  
                  <p className="text-xs text-center text-gray-400">
                    No commitment required. We respect your privacy.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simple & Direct */}
      <section className="py-20 bg-[#fdfaf5]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            Ready to Dominate Local Search?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Don’t wait until your competitors have taken all the top spots. Invest in your business’s growth today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button size="lg" className="h-14 px-8 bg-[#FD9800] hover:bg-[#e08600] text-white text-lg rounded-lg">
                Contact Us
             </Button>
             <Button size="lg" variant="outline" className="h-14 px-8 border-gray-300 text-gray-700 hover:bg-white text-lg rounded-lg">
                View Pricing
             </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 font-heading font-bold text-2xl tracking-tight text-gray-800 mb-4">
                <span className="text-[#FD9800]">TwentyOne</span>
                <span className="text-gray-600 text-xl">solutions</span>
              </div>
              <p className="text-gray-500 max-w-sm">
                We help service businesses look professional online and get found when people search.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Links</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-[#FD9800]">Home</a></li>
                <li><a href="#" className="hover:text-[#FD9800]">Services</a></li>
                <li><a href="#" className="hover:text-[#FD9800]">Portfolio</a></li>
                <li><a href="#" className="hover:text-[#FD9800]">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FD9800]" /> contact@twentyonesolutions.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#FD9800]" /> +1 (626) 524-1059
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FD9800]" /> San Clemente, CA 92672
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
            &copy; 2025 Twenty One Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
