import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check,
  CheckCircle2,
  Menu,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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

interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
  logoAlt?: string; // Optional since it's not always used
}

const PortfolioItem = ({ title, description, image, link, logoAlt }: PortfolioItemProps) => (
  <motion.div variants={fadeIn} className="group cursor-pointer">
    <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-white mb-6 transition-all hover:shadow-xl hover:-translate-y-1">
      <AspectRatio ratio={16/9}>
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
        />
      </AspectRatio>
    </div>
    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2 group-hover:text-[#FD9800] transition-colors">{title}</h3>
    <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
    <a href={link} className="inline-flex items-center text-[#FD9800] font-semibold hover:gap-2 transition-all group-hover:underline">
      Visit Website <ExternalLink className="w-4 h-4 ml-1" />
    </a>
  </motion.div>
);

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  items: string[];
}

const ServiceCard = ({ title, description, link, items }: ServiceCardProps) => (
  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-shadow bg-white">
    <CardContent className="p-8 flex flex-col h-full">
      <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <ul className="space-y-3 mb-8">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-700">
             <CheckCircle2 className="w-5 h-5 text-[#FD9800] shrink-0 mt-0.5" />
             <span>{item}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full bg-[#FD9800] hover:bg-[#e08600] text-white font-bold h-12 text-lg">
        Learn More
      </Button>
    </CardContent>
  </Card>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fdfaf5] text-gray-800 font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#fdfaf5]/95 backdrop-blur-sm py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 font-heading font-bold text-2xl tracking-tight text-gray-800">
            <span className="text-[#FD9800]">TwentyOne</span>
            <span className="text-gray-600 text-xl">solutions</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8 text-[16px] font-medium text-gray-600">
            <a href="#" className="hover:text-[#FD9800] transition-colors">About</a>
            <a href="#" className="hover:text-[#FD9800] transition-colors">Web Design</a>
            <a href="#" className="hover:text-[#FD9800] transition-colors">Marketing</a>
            <a href="#" className="hover:text-[#FD9800] transition-colors">Portfolio</a>
            <a href="#" className="hover:text-[#FD9800] transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-[#FD9800] hover:bg-[#e08600] text-white font-semibold px-6 py-5 rounded-lg shadow-md transition-all hover:-translate-y-0.5 text-base">
              Strategy Call
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-8 h-8 text-gray-800" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-wave-header">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-6"
          >
            <motion.h1 variants={fadeIn} className="text-4xl md:text-[64px] font-bold font-heading text-gray-900 leading-[1.1]">
              Websites and Marketing for Service Businesses
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
              We help service businesses look professional online and get found when people search.
            </motion.p>
            
            <motion.div variants={fadeIn} className="pt-8">
              <Button size="lg" className="h-14 px-10 text-lg bg-[#FD9800] hover:bg-[#e08600] text-white rounded-lg shadow-lg hover:shadow-xl transition-all font-bold">
                Free Site Preview
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl font-bold font-heading text-gray-900">Why TwentyOne Solutions?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A strong online presence should make it easy for customers to understand what you do, trust you, and reach out. That is what we build. We work with contractors, trades, home builders, and professional services. We keep the process simple, so you always know what is happening and what the next step is.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                 <img 
                   src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                   alt="Tyler Huff" 
                   className="w-full h-auto object-cover"
                 />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                 <h4 className="font-bold text-xl font-heading text-gray-900">Tyler Huff</h4>
                 <p className="text-[#FD9800] font-medium">Owner, Developer</p>
              </div>
            </div>
            
            <div className="space-y-8">
               {[
                 { title: "Try Before you Buy", desc: "See a site preview before you commit." },
                 { title: "Easy Onboarding", desc: "We make the process as easy as possible for you." },
                 { title: "Marketing Too", desc: "A website turns visitors into customers. Marketing gets visitors to your website." },
                 { title: "Ongoing Support", desc: "Support to keep your website up to date with content and the trends." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-[#FD9800] flex items-center justify-center shrink-0 mt-1">
                     <Check className="w-5 h-5 text-white" />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold font-heading text-gray-900 mb-1">{item.title}</h3>
                     <p className="text-gray-600">{item.desc}</p>
                   </div>
                 </div>
               ))}
               
               <div className="pt-4">
                 <Button size="lg" className="h-12 px-8 bg-[#FD9800] hover:bg-[#e08600] text-white font-bold rounded-lg shadow-md">
                    Build my Preview
                 </Button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold font-heading text-gray-900">Our Work</h2>
            <p className="text-lg text-gray-600">
              We serve contractors, construction companies, trades, and more. See all our work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioItem 
              title="Filger Manufacturing"
              description="Specializes in high-precision machining for aerospace and defense. Site highlights equipment and quality processes."
              image="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/08/Filger-Manufacturing-png.webp"
              link="#"
            />
            <PortfolioItem 
              title="West Coast Washers"
              description="Professional exterior cleaning for homes and businesses in Southern California featuring a modern site."
              image="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/08/WCW_mockup_transparent-png.webp"
              link="#"
            />
            <PortfolioItem 
              title="TSA Group Ltd"
              description="Transmission line siting and right-of-way consulting. Highlights current and past projects."
              image="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/08/TSA-Group-Limited-png.webp"
              link="#"
            />
            <PortfolioItem 
              title="Luxury Tahoe Properties"
              description="High-end properties in the Lake Tahoe area. Integrates MLS listings giving buyers real-time access."
              image="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/08/LuxuryTahoeProperties-png.webp"
              link="#"
            />
            <PortfolioItem 
              title="Diamond Construction"
              description="Specializes in waterproofing solutions and gypsum concrete services for contractors."
              image="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/08/DiamondConstruction-png.webp"
              link="#"
            />
            <PortfolioItem 
              title="Fan Fusion Ventures"
              description="Thrilling daily fantasy sports experiences for passionate fans with a custom website."
              image="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/08/FanFusion-png.webp"
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">More than Websites</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Web Design"
              description="Websites tailored to your brand. We create sites that turn visitors into customers."
              items={["Fully responsive", "Clear Call-to-Actions", "Content Included"]}
              link="#"
            />
            <ServiceCard 
              title="Google Marketing"
              description="Climb to the top of search results for high-value searches your customers use."
              items={["Content Creation", "Google Business Profile Posting", "Backlinks and citations"]}
              link="#"
            />
            <ServiceCard 
              title="Web Maintenance"
              description="Web hosting, email, maintenance, backups, unlimited content updates and more."
              items={["Monthly Reporting", "On-demand Backups", "Daily security scans"]}
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold font-heading text-gray-900">What Clients Say</h2>
            <p className="text-lg text-gray-600">We’ve helped dozens of small businesses get found online.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white p-8">
               <div className="flex text-[#FD9800] mb-4">★★★★★</div>
               <p className="text-gray-600 italic mb-6">"Tyler was great to work with and created a website for me which exceeded my expectations. He is efficient, communicates well, quick to respond and has a good eye for design."</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                     <img src="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/01/IMG_8771.jpg" alt="Casey" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-900">Casey Whittemore</h4>
                     <p className="text-sm text-gray-500">LMFT, PMH-C</p>
                  </div>
               </div>
            </Card>
            <Card className="border-0 shadow-lg bg-white p-8">
               <div className="flex text-[#FD9800] mb-4">★★★★★</div>
               <p className="text-gray-600 italic mb-6">"Great experience working with TwentyOne Solutions. Their team delivered a stunning website with ease. I regularly get new customers calling from my website."</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                     <img src="https://staging44.twentyonesolutions.com/wp-content/uploads/2024/03/9f9defeb7d7dae86d70250e2588f711d-150x150-1.jpeg" alt="Csaba" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-900">Csaba Duzy</h4>
                     <p className="text-sm text-gray-500">S n' J Automotive</p>
                  </div>
               </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold font-heading text-gray-900 text-center mb-16">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-gray-100 rounded-lg px-6 bg-[#fdfaf5]">
              <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FD9800]">What should my website include?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                A website needs to clearly show what you do, where you do it, and make it easy for a potential customer to reach out. Typically, that includes a home, about, services, portfolio, and contact page with clear call to actions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-gray-100 rounded-lg px-6 bg-[#fdfaf5]">
              <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FD9800]">What about marketing?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                We do Google marketing, or Search Engine Optimization (SEO). SEO is the best long term investment you can make for your business. Once you rank on the top for searches customers use to find services like yours, you stay there.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-gray-100 rounded-lg px-6 bg-[#fdfaf5]">
              <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FD9800]">Do you own the domain or me?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                You own the domain (and assets). We don’t take hostages. Even if we bought the domain for you, if you cancel with us we transfer the domain for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-gray-100 rounded-lg px-6 bg-[#fdfaf5]">
              <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FD9800]">What’s the turnaround time?</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                We can deliver a website preview in 24 hours! A 3-4 page website can deliver within 7 days.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Form / CTA Section */}
      <section className="py-24 bg-[#fdfaf5]">
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
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-6">Contact</h4>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#FD9800]" /> 
                    <a href="mailto:contact@twentyonesolutions.com" className="hover:text-[#FD9800]">contact@twentyonesolutions.com</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#FD9800]" /> 
                    <a href="tel:+16265241059" className="hover:text-[#FD9800]">+1 (626) 524-1059</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FD9800] mt-1" /> 
                    <span>234 Avenida Rosa<br/>San Clemente, CA 92672</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-6">Services</h4>
                <ul className="space-y-2 text-lg text-gray-600">
                  <li><a href="#" className="hover:text-[#FD9800]">Web Design</a></li>
                  <li><a href="#" className="hover:text-[#FD9800]">Google Marketing</a></li>
                  <li><a href="#" className="hover:text-[#FD9800]">Web Maintenance</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Twenty One Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
