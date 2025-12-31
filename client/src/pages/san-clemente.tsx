import React from 'react';
import { SEO } from '@/components/seo';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ExternalLink } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { WaveSection } from '@/components/ui/wave-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LeadFormModal } from '@/components/LeadFormModal';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function SanClementePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TwentyOne Solutions - San Clemente",
    "description": "Websites and online marketing for service based small businesses in San Clemente.",
    "url": "https://twentyonesolutions.com/san-clemente",
    "telephone": "+16265241059",
    "email": "contact@twentyonesolutions.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "234 Avenida Rosa A",
      "addressLocality": "San Clemente",
      "addressRegion": "CA",
      "postalCode": "92672",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "San Clemente"
    },
    "priceRange": "$$"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a website take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most builds move fast once content and details are in. We will give you a clear timeline after the strategy call."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a new website to improve Google visibility?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not always. Sometimes a rebuild is the fastest path, sometimes we can improve what you already have. We will tell you straight on the call."
        }
      },
      {
        "@type": "Question",
        "name": "What do you need from me to start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basic business info, service list, service area, photos, and any existing logins if you already have a website or Google Business Profile."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with small service businesses or only big companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both, as long as you are serious about getting a professional online presence and consistent lead flow."
        }
      },
      {
        "@type": "Question",
        "name": "Will I own my website and domain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You own your website and your domain. If you ever want to move it, you can."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with service area businesses that do not have a storefront?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most trades and contractors are service area businesses. We set things up so you can show up across your service area without needing a public address."
        }
      },
      {
        "@type": "Question",
        "name": "Do you write the content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if you want. Or you can provide it. Either way, we make sure the final site is clear and matches how customers actually search."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with reviews?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We can set up a review request process and help you get more reviews over time."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-gray-800 font-sans">
      <SEO 
        title="San Clemente Web Design | TwentyOne Solutions"
        description="San Clemente web design and SEO agency. We help local service businesses get more customers online."
        canonical="/san-clemente"
        schema={{
          "@context": "https://schema.org",
          "@graph": [localBusinessSchema, faqSchema]
        }}
      />
      
      <Navigation />

      {/* Hero */}
      <WaveSection 
        className="pt-32 md:pt-40 pb-48" 
        disableTopWave
        backgroundImage="/assets/images/san-clemente-hero.webp"
        overlayOpacity={0.7}
        bottomWaveColor="#ffffff"
        priority={true}
      >
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn}
            className="mb-4 inline-block bg-[#FD9800] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide"
          >
            San Clemente
          </motion.div>
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6"
          >
            Web Design and Online Marketing
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-xl md:text-2xl text-gray-700 font-light mb-8 leading-relaxed"
          >
            Websites and online marketing for service based small businesses in San Clemente. Built to look legit, bring in leads, and stay in good shape over time.
          </motion.p>
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <LeadFormModal 
              title="Book Your Strategy Call"
              description="Schedule a free consultation to discuss your business goals and how we can help you grow online."
              type="strategy"
              trigger={
                <Button size="lg" className="h-14 px-8 text-lg bg-[#FD9800] hover:bg-[#e08600] text-white font-bold rounded-lg shadow-lg">
                  Strategy Call
                </Button>
              }
            />
            
            <LeadFormModal 
              title="Get Your Free Site Preview"
              description="Enter your details and we'll create a custom preview of what your new website could look like. No commitment required."
              type="preview"
              trigger={
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg bg-white/90 hover:bg-white text-gray-800 border-none font-bold rounded-lg shadow-lg">
                  Free Site Preview
                </Button>
              }
            />
          </motion.div>
        </div>
      </WaveSection>

      {/* Intro / Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">TwentyOne Solutions</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Helps local service businesses build a stronger online presence without making it complicated. The goal is simple. When someone searches for what you do in San Clemente, they find you, trust you, and reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#fdfaf5] p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6">We are a good fit for</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/industries/contractors" className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-[#FD9800] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#FD9800]/10 flex items-center justify-center text-[#FD9800]">
                      <Check className="w-5 h-5" />
                    </div>
                    Contractors
                  </Link>
                </li>
                <li>
                  <Link href="/industries/home-builders" className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-[#FD9800] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#FD9800]/10 flex items-center justify-center text-[#FD9800]">
                      <Check className="w-5 h-5" />
                    </div>
                    Home Builders
                  </Link>
                </li>
                <li>
                  <Link href="/industries/painters" className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-[#FD9800] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#FD9800]/10 flex items-center justify-center text-[#FD9800]">
                      <Check className="w-5 h-5" />
                    </div>
                    Trades
                  </Link>
                </li>
                <li>
                  <Link href="/industries/professional-services" className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-[#FD9800] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#FD9800]/10 flex items-center justify-center text-[#FD9800]">
                      <Check className="w-5 h-5" />
                    </div>
                    Professional services
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-left space-y-6">
              <div className="uppercase text-[#FD9800] font-bold tracking-wider text-sm">Based In</div>
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">
                San Clemente & Working with Businesses Nearby
              </h3>
              <p className="text-gray-600 text-lg">
                If you are outside these areas, still reach out. If it is a good fit, we can work together.
              </p>
              <ul className="grid grid-cols-2 gap-3 text-gray-700 font-medium">
                <li>– Dana Point</li>
                <li>– San Juan Capistrano</li>
                <li>– Laguna Niguel</li>
                <li>– Laguna Beach</li>
              </ul>
              <LeadFormModal 
                title="Book Your Strategy Call"
                description="Schedule a free consultation to discuss your business goals and how we can help you grow online."
                type="strategy"
                trigger={
                  <Button className="mt-4 bg-[#FD9800] hover:bg-[#e08600] text-white">
                    Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-gray-900">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg h-full bg-white hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Web Design</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  A clean modern website that makes it obvious what you do, where you work, and how to contact you. Built to load fast and convert visitors into calls and form submissions.
                </p>
                <Link href="/services/website-design">
                  <Button variant="outline" className="w-full border-[#FD9800] text-[#FD9800] hover:bg-[#FD9800] hover:text-white font-bold">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg h-full bg-white hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Online Marketing</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  Ongoing work that improves your visibility across Google, supports your Google Business Profile, and keeps your presence active so you do not disappear after launch.
                </p>
                <Link href="/services/search-engine-optimization">
                  <Button variant="outline" className="w-full border-[#FD9800] text-[#FD9800] hover:bg-[#FD9800] hover:text-white font-bold">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg h-full bg-white hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">Support</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  Hosting, updates, backups, security checks, and help when you need changes. This is for business owners who want it handled without chasing people down.
                </p>
                <Link href="/services/managed-wordpress-hosting">
                  <Button variant="outline" className="w-full border-[#FD9800] text-[#FD9800] hover:bg-[#FD9800] hover:text-white font-bold">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Work Portfolio */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Wave BG element */}
        <div className="absolute top-0 left-0 w-full opacity-5 pointer-events-none">
           <img src="/assets/images/middle_wave.svg" alt="" className="w-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="uppercase text-[#FD9800] font-bold tracking-wider text-sm mb-2 block">Portfolio</span>
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">Our Local Work</h2>
            <Link href="/portfolio" className="text-[#FD9800] font-semibold hover:underline inline-flex items-center gap-1">
              See all work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="group">
              <div className="rounded-xl overflow-hidden shadow-lg mb-6 border border-gray-100">
                <AspectRatio ratio={16/10}>
                  <img 
                    src="/assets/images/Filger-Manufacturing.webp" 
                    alt="Filger Manufacturing" 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Filger Manufacturing</h3>
              <p className="text-gray-600 text-sm mb-4">
                Figler Manufacturing specializes in high-precision machining for aerospace and defense. Their site highlights equipment and quality processes.
              </p>
              <a href="https://filger.com/" target="_blank" rel="noopener noreferrer" className="text-[#FD9800] text-sm font-bold uppercase tracking-wide hover:underline inline-flex items-center gap-1">
                Visit Website <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="group">
              <div className="rounded-xl overflow-hidden shadow-lg mb-6 border border-gray-100">
                <AspectRatio ratio={16/10}>
                  <img 
                    src="/assets/images/SmithandEastWoodConstruction.webp" 
                    alt="Smith & Eastwood Construction" 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smith & Eastwood Construction</h3>
              <p className="text-gray-600 text-sm mb-4">
                Smith and Eastwood Construction has a clean, professional online presence that makes it easy for homeowners to understand their services and get in touch.
              </p>
              <a href="https://smitheastwoodbuild.com/" target="_blank" rel="noopener noreferrer" className="text-[#FD9800] text-sm font-bold uppercase tracking-wide hover:underline inline-flex items-center gap-1">
                Visit Website <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="group">
              <div className="rounded-xl overflow-hidden shadow-lg mb-6 border border-gray-100">
                <AspectRatio ratio={16/10}>
                  <img 
                    src="/assets/images/AscendEquities.webp" 
                    alt="Ascend Equities" 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ascend Equities</h3>
              <p className="text-gray-600 text-sm mb-4">
                Ascend Equities has a sharp, professional online presence that reflects their focus on quality properties and long term value.
              </p>
              <a href="https://ascendequities.com/" target="_blank" rel="noopener noreferrer" className="text-[#FD9800] text-sm font-bold uppercase tracking-wide hover:underline inline-flex items-center gap-1">
                Visit Website <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase text-[#FD9800] font-bold tracking-wider text-sm mb-2 block">Words from Our Clients</span>
            <h2 className="text-4xl font-bold font-heading text-gray-900">Testimonials</h2>
            <p className="text-lg text-gray-600 mt-4">Hear what our satisfied clients have to say about their experiences with us.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg bg-white p-8">
               <div className="flex text-[#FD9800] mb-4">★★★★★</div>
               <p className="text-gray-600 italic mb-6 leading-relaxed">
                 "Couldn’t have asked for a better experience! Tyler made the entire website redesign process simple and stress-free. He’s an excellent communicator, has a strong design sense, and brought great ideas to the table. After our kickoff video call, we handled everything through email and Google Drive, and he delivered our new website quickly and seamlessly."
               </p>
               <div>
                  <h4 className="font-bold text-gray-900">Casandra Robinson</h4>
                  <p className="text-sm text-gray-500">Filger Manufacturing</p>
               </div>
            </Card>

            <Card className="border-0 shadow-lg bg-white p-8">
               <div className="flex text-[#FD9800] mb-4">★★★★★</div>
               <p className="text-gray-600 italic mb-6 leading-relaxed">
                 "My website was not able to be viewed on the internet. Tyler was great at helping solve the behind-the-scenes configuration issues. He was professional, prompt and efficient. I really appreciated how he was very responsive and communicated with me at every step of the process."
               </p>
               <div>
                  <h4 className="font-bold text-gray-900">Heather Forde</h4>
                  <p className="text-sm text-gray-500">Bloom with Me</p>
               </div>
            </Card>

            <Card className="border-0 shadow-lg bg-white p-8 md:col-span-2">
               <div className="flex text-[#FD9800] mb-4">★★★★★</div>
               <p className="text-gray-600 italic mb-6 leading-relaxed">
                 "We have a fairly newer company and did not have a website. Tyler reached out to us at the perfect timing as I was attempting to work with a website creator via a popular app. It went horrible. I lost money and time. Tyler helped us construct our idea and bring it to life. We are thrilled with his skillset and ability to produce. We love and are so proud of our website now."
               </p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#FD9800] flex items-center justify-center text-white font-bold text-xl">
                     BE
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-900">Brittany Eastwood</h4>
                     <p className="text-sm text-gray-500">Smith & Eastwood Construction</p>
                  </div>
               </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold font-heading text-gray-900 text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "How long does a website take?", a: "Most builds move fast once content and details are in. We will give you a clear timeline after the strategy call." },
                { q: "Do I need a new website to improve Google visibility?", a: "Not always. Sometimes a rebuild is the fastest path, sometimes we can improve what you already have. We will tell you straight on the call." },
                { q: "What do you need from me to start?", a: "Basic business info, service list, service area, photos, and any existing logins if you already have a website or Google Business Profile." },
                { q: "Do you work with small service businesses or only big companies?", a: "Both, as long as you are serious about getting a professional online presence and consistent lead flow." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-left-${i}`} className="border border-gray-100 rounded-lg px-6 bg-[#fdfaf5]">
                  <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FD9800] text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed text-base">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "Will I own my website and domain?", a: "Yes. You own your website and your domain. If you ever want to move it, you can." },
                { q: "Do you work with service area businesses that do not have a storefront?", a: "Yes. Most trades and contractors are service area businesses. We set things up so you can show up across your service area without needing a public address." },
                { q: "Do you write the content?", a: "Yes, if you want. Or you can provide it. Either way, we make sure the final site is clear and matches how customers actually search." },
                { q: "Can you help with reviews?", a: "Yes. We can set up a review request process and help you get more reviews over time." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-right-${i}`} className="border border-gray-100 rounded-lg px-6 bg-[#fdfaf5]">
                  <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FD9800] text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed text-base">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#fdfaf5] border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">See what your custom website could look like in 24 hours.</p>
          <Button size="lg" className="h-14 px-10 text-lg bg-[#FD9800] hover:bg-[#e08600] text-white rounded-lg shadow-lg">
            Build Site Preview
          </Button>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="h-[400px] w-full overflow-hidden rounded-2xl shadow-lg border border-gray-100">
            <iframe 
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=TwentyOne%20Solutions%20234%20Avenida%20Rosa%20San%20Clemente%20CA&t=&z=15&ie=UTF8&iwloc=B&output=embed"
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
      </section>

      <Footer />
    </div>
  );
}
