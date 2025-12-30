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
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      {/* Top Bar - Functional & Utility Focused */}
      <div className="bg-primary text-white text-xs font-medium py-2.5">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="opacity-90 tracking-wide">Get a Professional Website in 24 Hours</span>
          <div className="flex items-center gap-6">
             <a href="mailto:contact@twentyonesolutions.com" className="hover:opacity-80 transition-opacity flex items-center gap-1.5">
               <Mail className="w-3.5 h-3.5" />
               <span className="hidden sm:inline">contact@twentyonesolutions.com</span>
             </a>
             <div className="w-px h-3 bg-white/20 hidden sm:block"></div>
             <a href="tel:+16265241059" className="hover:opacity-80 transition-opacity flex items-center gap-1.5 font-semibold">
               <Phone className="w-3.5 h-3.5" />
               +1 (626) 524-1059
             </a>
          </div>
        </div>
      </div>

      {/* Navigation - Modern & Clean */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white font-heading font-bold text-lg shadow-lg shadow-primary/20">
              21
            </div>
            <div className="font-heading font-bold text-lg tracking-tight leading-none text-foreground">
              Twenty One <br/>
              <span className="text-primary">Solutions</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-muted-foreground">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="hover:text-primary transition-colors">Services</a>
            <a href="#" className="hover:text-primary transition-colors">Process</a>
            <a href="#" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:flex rounded-full px-6 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden text-muted-foreground hover:text-primary">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Split Layout with Modern Form */}
      <section className="relative py-12 lg:py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 -z-10 pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 space-y-8"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Google Marketing Partner
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-4xl lg:text-6xl font-bold font-heading text-slate-900 leading-[1.1] tracking-tight">
                Get Found When <br/>Customers <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Search.</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg text-slate-600 max-w-lg leading-relaxed">
                We help local businesses rank #1 on Google. Stop losing leads to competitors and become the first choice in your market.
              </motion.p>

              <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4 max-w-lg">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">More Traffic</h4>
                    <p className="text-xs text-slate-500 mt-1">Capture high-intent leads searching now.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">More Trust</h4>
                    <p className="text-xs text-slate-500 mt-1">Establish authority in your service area.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Form - Embedded & Accessible */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <Card className="border-0 shadow-2xl relative z-10 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary to-blue-400" />
                <CardContent className="p-6 md:p-8 bg-white">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold font-heading text-slate-900">Get Your Free Strategy Audit</h3>
                    <p className="text-sm text-slate-500 mt-1">See how you stack up against competitors.</p>
                  </div>
                  
                  <form className="space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="audit-name" className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Full Name</Label>
                      <Input id="audit-name" placeholder="John Doe" className="bg-slate-50 border-slate-200 focus:bg-white" data-testid="input-name" />
                    </div>
                    
                    <div className="space-y-1.5">
                      <Label htmlFor="audit-email" className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Email Address</Label>
                      <Input id="audit-email" type="email" placeholder="john@company.com" className="bg-slate-50 border-slate-200 focus:bg-white" data-testid="input-email" />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="audit-website" className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Website URL</Label>
                      <Input id="audit-website" placeholder="https://example.com" className="bg-slate-50 border-slate-200 focus:bg-white" data-testid="input-website" />
                    </div>

                    <Button className="w-full h-12 text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 mt-2" data-testid="button-audit">
                      Analyze My Website
                    </Button>
                    
                    <p className="text-[10px] text-center text-slate-400 mt-3">
                      100% free. No credit card required. Delivered in 24h.
                    </p>
                  </form>
                </CardContent>
              </Card>
              
              {/* Decorative Blur behind form */}
              <div className="absolute inset-0 bg-primary/20 blur-2xl transform translate-y-4 scale-95 -z-10 rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Clean Bar */}
      <section className="py-12 bg-white border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-around items-center gap-8 text-center">
            <div className="space-y-1">
              <div className="text-4xl font-bold font-heading text-primary">39.8%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Organic Click Share</div>
            </div>
            <div className="w-px h-12 bg-slate-100 hidden md:block" />
            <div className="space-y-1">
              <div className="text-4xl font-bold font-heading text-primary">44%</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Map Pack Traffic</div>
            </div>
            <div className="w-px h-12 bg-slate-100 hidden md:block" />
            <div className="space-y-1">
              <div className="text-4xl font-bold font-heading text-primary">10x</div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">ROI Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters - Grid Layout */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">Why First Page Matters</h2>
            <p className="text-slate-600">
              Ranking higher isn't just about vanity metrics. It's about being the first credible option your customer sees when they have a problem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white group cursor-default">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">Organic Visibility</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Most users never scroll past the first 5 results. We optimize your technical SEO and content to claim those top spots.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white group cursor-default">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">Local Dominance</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Win the "near me" searches. We optimize your Google Business Profile to ensure you appear in the coveted Map Pack.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white group cursor-default">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">Brand Authority</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  High rankings equal trust. We build high-quality backlinks that signal to Google (and customers) that you are the expert.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Do It - Minimal List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading text-slate-900 mb-6">Our Proven Framework</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
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
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 flex-shrink-0 mt-1">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-slate-900 rounded-2xl p-8 text-white relative z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <h3 className="text-2xl font-bold font-heading mb-6">Ready to grow?</h3>
                <p className="text-slate-300 mb-8">
                  Get a comprehensive audit of your current digital presence and a roadmap to #1.
                </p>
                <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold h-12">
                  Schedule Strategy Call
                </Button>
                
                <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[10px]">
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-slate-400">
                    <strong className="text-white">500+</strong> businesses optimized
                  </div>
                </div>
              </div>
              
              {/* Offset border effect */}
              <div className="absolute inset-0 border-2 border-slate-100 rounded-2xl transform translate-x-4 translate-y-4 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="bg-white border-t border-border pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold">21</div>
                <span className="font-heading font-bold text-lg text-slate-900">Twenty One Solutions</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Empowering local businesses with high-performance websites and data-driven marketing strategies.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 text-sm">
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Services</h4>
                <ul className="space-y-3 text-slate-600">
                  <li><a href="#" className="hover:text-primary">Local SEO</a></li>
                  <li><a href="#" className="hover:text-primary">Paid Search</a></li>
                  <li><a href="#" className="hover:text-primary">Web Design</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Company</h4>
                <ul className="space-y-3 text-slate-600">
                  <li><a href="#" className="hover:text-primary">About Us</a></li>
                  <li><a href="#" className="hover:text-primary">Contact</a></li>
                  <li><a href="#" className="hover:text-primary">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
            <p>&copy; 2025 Twenty One Solutions. All rights reserved.</p>
            <p>Made with intention in California.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
