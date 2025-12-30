import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Menu,
  Phone,
  Mail,
  Check,
  Star,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

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

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Top Bar - Exact Brand Match */}
      <div className="bg-[#1e293b] text-white text-[13px] font-medium py-3 border-b border-slate-700">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">New</span>
            <span>Get a Professional Website in 24 Hours</span>
          </div>
          <div className="flex items-center gap-6 text-slate-300">
             <a href="mailto:contact@twentyonesolutions.com" className="hover:text-white transition-colors flex items-center gap-2">
               <Mail className="w-3.5 h-3.5" />
               contact@twentyonesolutions.com
             </a>
             <a href="tel:+16265241059" className="hover:text-white transition-colors flex items-center gap-2">
               <Phone className="w-3.5 h-3.5" />
               +1 (626) 524-1059
             </a>
          </div>
        </div>
      </div>

      {/* Navigation - Clean Corporate */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Approximation */}
            <div className="w-10 h-10 bg-[#1e293b] rounded-lg flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg shadow-slate-900/20">
              21
            </div>
            <div className="font-heading font-bold text-lg tracking-tight text-slate-900 leading-tight">
              Twenty One <br/>
              <span className="text-blue-600">Solutions</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-slate-600">
            <a href="#" className="text-blue-600 font-semibold">Home</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Services</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Case Studies</a>
            <a href="#" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 shadow-md shadow-blue-600/20 transition-all hover:-translate-y-0.5">
              Get Free Audit
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - High Conversion Layout */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 translate-x-1/3 -z-10" />
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
                <Star className="w-4 h-4 fill-current" />
                Google Marketing Experts
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-4xl lg:text-6xl font-bold font-heading text-slate-900 leading-[1.15]">
                Dominate Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Local Market.</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Stop losing customers to competitors. We optimize your online presence to ensure you rank #1 on Google for the services you offer.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                   <div className="flex -space-x-2">
                     <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                     <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white" />
                     <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white" />
                   </div>
                   <span className="ml-2">Trusted by 500+ Local Businesses</span>
                </div>
              </motion.div>

              <motion.ul variants={fadeIn} className="space-y-3 text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Check className="w-4 h-4" />
                  </div>
                  Get found by high-intent customers ready to buy
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Check className="w-4 h-4" />
                  </div>
                  Outrank competitors in the Google Map Pack
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Check className="w-4 h-4" />
                  </div>
                  Build long-term authority and trust
                </li>
              </motion.ul>
            </motion.div>

            {/* Embedded Form - "Get Professional Website" style */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <Card className="border-0 shadow-2xl bg-white overflow-hidden relative z-10">
                <div className="h-2 bg-blue-600 w-full absolute top-0 left-0" />
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold font-heading text-slate-900">Get Your Free Strategy Audit</h3>
                    <p className="text-slate-500 mt-2">See exactly what's holding your website back from ranking #1.</p>
                  </div>
                  
                  <form className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="hero-name" className="text-slate-700">Full Name</Label>
                        <Input id="hero-name" placeholder="John Doe" className="bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500" data-testid="input-name" />
                      </div>
                      <div className="space-y-2">
                         <Label htmlFor="hero-phone" className="text-slate-700">Phone</Label>
                         <Input id="hero-phone" placeholder="(555) 000-0000" className="bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500" data-testid="input-phone" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="hero-email" className="text-slate-700">Email Address</Label>
                      <Input id="hero-email" type="email" placeholder="john@company.com" className="bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500" data-testid="input-email" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hero-website" className="text-slate-700">Business Website</Label>
                      <Input id="hero-website" placeholder="https://example.com" className="bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500" data-testid="input-website" />
                    </div>

                    <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5" data-testid="button-audit">
                      Get My Free Audit
                    </Button>
                    
                    <p className="text-xs text-center text-slate-400 mt-4">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                </CardContent>
              </Card>
              
              {/* Decorative elements behind form */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-slate-200 rounded-xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Credibility */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="p-4">
               <div className="text-4xl font-bold text-blue-600 font-heading mb-2">39.8%</div>
               <p className="text-slate-600 font-medium">Click-through rate for the #1 organic result</p>
            </div>
            <div className="p-4">
               <div className="text-4xl font-bold text-blue-600 font-heading mb-2">44%</div>
               <p className="text-slate-600 font-medium">Traffic share for the Local Map Pack</p>
            </div>
            <div className="p-4">
               <div className="text-4xl font-bold text-blue-600 font-heading mb-2">10x</div>
               <p className="text-slate-600 font-medium">ROI on long-term SEO investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Process</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-heading">How We Secure Your Top Spot</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Ranking #1 isn't luck. It's engineering. We use a proven, data-driven approach to signal to Google that your business is the authority in your area.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">Keyword Targeting</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We identify the exact "money keywords" your customers are typing into Google right now (e.g., "emergency plumber near me").
                </p>
                <a href="#" className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">Map Pack Optimization</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We optimize your Google Business Profile, photos, and citations to ensure you dominate the local 3-pack map results.
                </p>
                <a href="#" className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">Authority Building</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We build high-quality backlinks and publish authoritative content that tells Google your business is the market leader.
                </p>
                <a href="#" className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Footer - Corporate Style */}
      <footer className="bg-[#1e293b] text-slate-300 pt-20 pb-10 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#1e293b] font-heading font-bold text-xl">
                  21
                </div>
                <div className="font-heading font-bold text-lg tracking-tight text-white leading-tight">
                  Twenty One <br/>
                  <span className="text-blue-400">Solutions</span>
                </div>
              </div>
              <p className="max-w-sm text-slate-400 leading-relaxed">
                We help local service businesses grow their revenue through strategic Google Marketing and high-performance web design.
              </p>
              <div className="flex gap-4 pt-2">
                 {/* Social placeholders */}
                 <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"><Mail className="w-5 h-5"/></div>
                 <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"><Phone className="w-5 h-5"/></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">Local SEO</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Paid Advertising</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Content Marketing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-500 mt-0.5" /> 
                  <a href="mailto:contact@twentyonesolutions.com" className="hover:text-white transition-colors">contact@twentyonesolutions.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-500 mt-0.5" /> 
                  <a href="tel:+16265241059" className="hover:text-white transition-colors">+1 (626) 524-1059</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 mt-0.5" /> 
                  <span>234 Avenida Rosa<br/>San Clemente, CA 92672</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-500 mt-0.5" /> 
                  <span>Mon-Sun 24/7</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; 2025 Twenty One Solutions. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
