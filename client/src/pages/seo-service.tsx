import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  BarChart, 
  Globe, 
  MapPin, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  Menu,
  CheckCircle2,
  Phone,
  Mail
} from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import generatedHeroImage from '@assets/generated_images/abstract_digital_data_flow_and_growth_chart_for_seo_service.png';

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
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden dark">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">21</span>
            </div>
            <span>Twenty One Solutions</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Services</a>
            <a href="#" className="hover:text-primary transition-colors">Case Studies</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          <Button className="hidden md:flex">Get Free Audit</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full translate-x-1/2" />
        <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-blue-600/10 blur-[100px] rounded-full -translate-x-1/2" />

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                #1 Investment for Long-Term Growth
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-bold font-heading leading-tight tracking-tight">
                Dominate Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  Local Market.
                </span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Stop losing customers to competitors. We help you rank #1 on Google so you become the first choice for ready-to-buy customers.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 text-base">
                  Get Your Free Audit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-background/50 backdrop-blur-sm">
                  View Case Studies
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60 z-10 group-hover:opacity-40 transition-opacity" />
                <img 
                  src={generatedHeroImage} 
                  alt="SEO Data Visualization" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Floating Stat Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-xl shadow-lg z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Growth</p>
                    <p className="text-xl font-bold text-foreground">+145% Leads</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stat Card 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-6 -right-6 bg-card border border-border p-4 rounded-xl shadow-lg z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Visibility</p>
                    <p className="text-xl font-bold text-foreground">Top 3 Ranking</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-4xl font-bold font-heading">39.8%</h3>
                <p className="text-muted-foreground">Of all clicks go to the top organic search result.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-4xl font-bold font-heading">44%</h3>
                <p className="text-muted-foreground">Of local search traffic goes to the Google Map Pack.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-4xl font-bold font-heading">10x</h3>
                <p className="text-muted-foreground">ROI when ranking #1 for high-intent keywords.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold font-heading">Ranking higher isn't just vanity.<br/>It's revenue.</h2>
            <p className="text-lg text-muted-foreground">
              Customers trust businesses they see first. If you aren't visible, you don't exist to them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2">Local SEO Dominance</h3>
                  <p className="text-muted-foreground">We optimize your Google Business Profile and local citations to ensure you own the Map Pack for your service area.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <BarChart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2">High-Intent Keywords</h3>
                  <p className="text-muted-foreground">We target specific terms like "emergency plumber near me" that signal a customer is ready to buy right now.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2">Authority Building</h3>
                  <p className="text-muted-foreground">Through strategic content and high-quality backlinks, we signal to Google that you are the market leader.</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold font-heading mb-6">Get Your Free Strategy Audit</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" data-testid="input-firstname" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" data-testid="input-lastname" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" data-testid="input-email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website URL</Label>
                  <Input id="website" placeholder="https://yourwebsite.com" data-testid="input-website" />
                </div>
                <Button className="w-full text-lg h-12 mt-2" data-testid="button-submit">
                  Analyze My Site
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  No credit card required. Free 24-hour turnaround.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Social Proof */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">Trusted by growing businesses</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
             {/* Simple text placeholders for logos as per mockup guidelines */}
             <span className="text-2xl font-bold font-heading">Acme Corp</span>
             <span className="text-2xl font-bold font-heading">GlobalTech</span>
             <span className="text-2xl font-bold font-heading">RiverFlow</span>
             <span className="text-2xl font-bold font-heading">Starlight</span>
             <span className="text-2xl font-bold font-heading">Nexus</span>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-card border-t border-border pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2 font-heading font-bold text-2xl tracking-tight">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">21</span>
                </div>
                <span>Twenty One Solutions</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                We build digital experiences that drive real revenue. Stop guessing with your marketing and start growing.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Local SEO</a></li>
                <li><a href="#" className="hover:text-primary">Paid Advertising</a></li>
                <li><a href="#" className="hover:text-primary">Web Design</a></li>
                <li><a href="#" className="hover:text-primary">Content Marketing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> contact@twentyonesolutions.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +1 (626) 524-1059
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> San Clemente, CA 92672
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 Twenty One Solutions. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground">Privacy Policy</a>
              <a href="#" className="hover:text-foreground">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
