import React from 'react';
import { SEO } from '@/components/seo';
import { m } from 'framer-motion';
import { Link } from "wouter";
import { 
  Check,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LeadFormModal } from '@/components/LeadFormModal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Navigation, Footer } from '@/components/layout';

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
  mobileImage?: string;
  link: string;
  logoAlt?: string;
  category?: string;
}

const PortfolioItem = ({ title, description, image, mobileImage, link, category }: PortfolioItemProps) => (
  <m.div variants={fadeIn} className="group cursor-pointer">
    <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-white mb-6 transition-all hover:shadow-xl hover:-translate-y-1 relative">
      <AspectRatio ratio={16/9}>
        <picture className="w-full h-full">
          {mobileImage && <source media="(max-width: 640px)" srcSet={mobileImage} />}
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </picture>
      </AspectRatio>
      {category && (
        <div className="absolute top-3 left-3">
          <span className="bg-[#FD9800] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">{category}</span>
        </div>
      )}
    </div>
    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2 group-hover:text-[#FD9800] transition-colors">{title}</h3>
    <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
    <Link href={link} className="inline-flex items-center text-[#FD9800] font-semibold hover:gap-2 transition-all group-hover:underline">
      Visit Website <ExternalLink className="w-4 h-4 ml-1" />
    </Link>
  </m.div>
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
      <Link href={link} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full bg-[#FD9800] hover:bg-[#e08600] text-white font-bold h-12 text-lg">
        Learn More
      </Link>
    </CardContent>
  </Card>
);

import { WaveSection } from '@/components/ui/wave-section';

export default function HomePage() {
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
          "text": "We do Google marketing, or Search Engine Optimization (SEO). SEO is the best long term investment you can make for your business. Once you rank on the top for searches customers use to find services like yours, you stay there. SEO is a long term strategy and because of that we ask for a 12 month commitment."
        }
      },
      {
        "@type": "Question",
        "name": "Do you own the domain or me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You own the domain (and assets). We don’t take hostages. Even if we bought the domain for you, if you cancel with us we transfer the domain for you."
        }
      },
      {
        "@type": "Question",
        "name": "What’s the turnaround time for a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can deliver a website preview in 24 hours! A 3-4 page website can deliver within 7 days. If we’re building out more pages or you need extra features, it’ll take a bit longer. Either way, timeline depends on how fast you get back to us with content and approvals."
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
      },
      {
        "@type": "Question",
        "name": "Is there a limit to design revisions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nope. We keep refining the design until you’re satisfied."
        }
      },
      {
        "@type": "Question",
        "name": "Who provides the website content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We highly recommend professional photography. If not, we can use professional stock content and write copy for you. It’s no additional charge."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer ongoing maintenance post-launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Maintenance plans start at $279/month depending on scope."
        }
      },
      {
        "@type": "Question",
        "name": "How does the design process work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you like your initial website, great! We will launch it after your edits. If not, we start with a kickoff call and a quick questionnaire. Then we send you three design templates to choose from. Once you pick your favorite, we build the site, send it over for review, make any tweaks you need, and launch. Simple and streamlined."
        }
      }
    ]
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TwentyOne Solutions",
    "image": "/assets/images/logo.png",
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
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.4274,
      "longitude": -117.6120
    },
    "url": "https://twentyonesolutions.com",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-gray-800 font-sans">
      <SEO  
        title="Websites and Marketing for Service Businesses"
        description="We help service businesses look professional online and get found. Web design, SEO, and marketing for contractors, trades, and home builders."
        canonical="/"
        schema={{
          "@context": "https://schema.org",
          "@graph": [faqSchema, businessSchema]
        }}
      />
      <Navigation />

      {/* Hero Section */}
      <WaveSection 
        className="pt-32 md:pt-40 pb-48" 
        disableTopWave
        backgroundImage="/assets/images/bannertwentyone.jpg"
        overlayOpacity={0.75}
        priority={true}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
            <m.h1 
              variants={fadeIn} 
              className="text-5xl md:text-7xl font-bold font-heading text-gray-900 leading-[1.1] tracking-tight"
            >
              Websites and Marketing for <span className="text-[#FD9800] relative inline-block">
                Service Businesses
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FD9800]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </m.h1>
            
            <m.p 
              variants={fadeIn} 
              className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed"
            >
              We help service businesses look professional online and get found when people search.
            </m.p>
            
            <m.div variants={fadeIn} className="pt-4 flex flex-col sm:flex-row gap-4">
              <LeadFormModal 
                title="Get Your Free Site Preview"
                description="Enter your details and we'll create a custom preview of what your new website could look like. No commitment required."
                type="preview"
                trigger={
                  <Button size="lg" className="h-16 px-10 text-xl bg-[#FD9800] hover:bg-[#e08600] text-white rounded-full shadow-xl hover:shadow-2xl transition-all font-bold hover:-translate-y-1">
                    Free Site Preview
                  </Button>
                }
              />
            <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-16 px-10 text-xl border-2 border-gray-200 text-gray-600 hover:border-[#FD9800] hover:text-[#FD9800] rounded-full font-bold bg-transparent hover:bg-white/50 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              View Our Work
            </Link>
            </m.div>
          </div>
        </div>
      </WaveSection>

      {/* Why Us Section */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl font-bold font-heading text-gray-900">Why TwentyOne Solutions?</h2>
            
            {/* Desktop: Single Paragraph */}
            <div className="hidden md:block text-lg text-gray-600 leading-relaxed text-left">
              <p>
                A strong online presence should make it easy for customers to understand what you do, trust you, and reach out. That is what we build. We work with contractors, trades, home builders, and professional services. We keep the process simple, so you always know what is happening and what the next step is.
              </p>
            </div>

            {/* Mobile: Two Paragraphs */}
            <div className="md:hidden text-lg text-gray-600 leading-relaxed space-y-4 text-left">
              <p>
                A strong online presence should make it easy for customers to understand what you do, trust you, and reach out. That is what we build. We work with contractors, trades, home builders, and professional services.
              </p>
              <p>
                We keep the process simple, so you always know what is happening and what the next step is.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative max-w-md mx-auto lg:ml-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                 <img 
                   src="/assets/images/tylerhuff_founder.webp" 
                   alt="Tyler Huff" 
                   className="w-full h-auto object-cover"
                   loading="lazy"
                   width="448"
                   height="560"
                 />
              </div>
              <div className="absolute -bottom-6 right-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs block">
                 <h4 className="font-bold text-lg font-heading text-gray-900">Tyler Huff</h4>
                 <p className="text-[#FD9800] font-medium text-sm">Owner, Developer</p>
              </div>
            </div>
            
            <div className="space-y-10 lg:pl-12">
               {[
                 { title: "Try Before you Buy", desc: "See a site preview before you commit." },
                 { title: "Easy Onboarding", desc: "We make the process as easy as possible for you." },
                 { title: "Marketing Too", desc: "A website turns visitors into customers. Marketing gets visitors to your website." },
                 { title: "Ongoing Support", desc: "Support to keep your website up to date with content and the trends." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6">
                   <div className="w-10 h-10 rounded-full bg-[#FD9800] flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-orange-200">
                     <Check className="w-6 h-6 text-white" />
                   </div>
                   <div className="max-w-md">
                     <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">{item.title}</h3>
                     <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                   </div>
                 </div>
               ))}
               
               <div className="pt-6">
                 <LeadFormModal 
                   title="Build My Preview"
                   description="Ready to see your business online? Fill out the form below and we'll get started on your free preview."
                   type="preview"
                   trigger={
                     <Button size="lg" className="h-14 px-10 text-lg bg-[#FD9800] hover:bg-[#e08600] text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                        Build my Preview
                     </Button>
                   }
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-white">
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
              image="/assets/images/Filger-Manufacturing.webp"
              mobileImage="/assets/images/Filger-Manufacturing-mobile.webp"
              link="#"
              category="Professional Services"
            />
            <PortfolioItem 
              title="West Coast Washers"
              description="Professional exterior cleaning for homes and businesses in Southern California featuring a modern site."
              image="/assets/images/WCW_mockup_transparent.webp"
              mobileImage="/assets/images/WCW_mockup_transparent-mobile.webp"
              link="#"
              category="Professional Services"
            />
            <PortfolioItem 
              title="TSA Group Ltd"
              description="Transmission line siting and right-of-way consulting. Highlights current and past projects."
              image="/assets/images/TSA-Group-Limited.webp"
              mobileImage="/assets/images/TSA-Group-Limited-mobile.webp"
              link="#"
              category="Professional Services"
            />
            <PortfolioItem 
              title="Luxury Tahoe Properties"
              description="High-end properties in the Lake Tahoe area. Integrates MLS listings giving buyers real-time access."
              image="/assets/images/LuxuryTahoeProperties.webp"
              mobileImage="/assets/images/LuxuryTahoeProperties-mobile.webp"
              link="#"
              category="Professional Services"
            />
            <PortfolioItem 
              title="Diamond Construction"
              description="Specializes in waterproofing solutions and gypsum concrete services for contractors."
              image="/assets/images/DiamondConstruction.webp"
              mobileImage="/assets/images/DiamondConstruction-mobile.webp"
              link="#"
              category="Construction"
            />
            <PortfolioItem 
              title="Fan Fusion Ventures"
              description="Thrilling daily fantasy sports experiences for passionate fans with a custom website."
              image="/assets/images/FanFusion.webp"
              mobileImage="/assets/images/FanFusion-mobile.webp"
              link="#"
              category="Professional Services"
            />
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">More than Websites</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Web Design"
              description="Websites tailored to your brand. We create sites that turn visitors into customers."
              items={["Fully responsive", "Clear Call-to-Actions", "Content Included"]}
              link="/services/web-design"
            />
            <ServiceCard 
              title="Google Marketing"
              description="Climb to the top of search results for high-value searches your customers use."
              items={["Content Creation", "Google Business Profile Posting", "Backlinks and citations"]}
              link="/services/search-engine-optimization"
            />
            <ServiceCard 
              title="Web Maintenance"
              description="Web hosting, email, maintenance, backups, unlimited content updates and more."
              items={["Monthly Reporting", "On-demand Backups", "Daily security scans"]}
              link="/services/managed-wordpress-hosting"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold font-heading text-gray-900">What Clients Say</h2>
            <p className="text-lg text-gray-600">We’ve helped dozens of small businesses get found online.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white p-8">
               <div className="flex text-[#FD9800] mb-4">★★★★★</div>
               <p className="text-gray-600 italic mb-6">"I wholeheartedly recommend TwentyOne for their exceptional talent and professionalism. They consistently deliver outstanding, high-quality products with creativity and precision. Their ability to meet deadlines consistently is impressive, making TwentyOne a reliable choice for any project. I highly endorse Tyler and TwentyOne for anyone seeking top-notch web hosting and design services."</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                     <img src="/assets/images/DrKennedy.jpg" alt="Dr. Kennedy" className="w-full h-full object-cover" loading="lazy" width="48" height="48"/>
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-900">John M. Kennedy, MD</h4>
                     <p className="text-sm text-gray-500">Founder & Creator, B.R.E.A.T.H.E</p>
                  </div>
               </div>
            </Card>

            <Card className="border-0 shadow-lg bg-white p-8">
               <div className="flex text-[#FD9800] mb-4">★★★★★</div>
               <p className="text-gray-600 italic mb-6">"Tyler was great to work with and created a website for me which exceeded my expectations. He is efficient, communicates well, quick to respond and has a good eye for design. His pricing is competitive, and he provides high quality work for a fair price."</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                     <img src="/assets/images/Casey.jpg" alt="Casey" className="w-full h-full object-cover" loading="lazy" width="48" height="48"/>
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-900">Casey Whittemore</h4>
                     <p className="text-sm text-gray-500">LMFT, PMH-C</p>
                  </div>
               </div>
            </Card>

            <Card className="border-0 shadow-lg bg-white p-8">
               <div className="flex text-[#FD9800] mb-4">★★★★★</div>
               <p className="text-gray-600 italic mb-6">"Very professional and great customer service, Tyler Huff was a pleasure to work with."</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                     <img src="/assets/images/AlexRangel.jpg" alt="Alex Rangel" className="w-full h-full object-cover" loading="lazy" width="48" height="48"/>
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-900">Alex Rangel</h4>
                     <p className="text-sm text-gray-500">Wrangler Painting</p>
                  </div>
               </div>
            </Card>

            <Card className="border-0 shadow-lg bg-white p-8">
               <div className="flex text-[#FD9800] mb-4">★★★★★</div>
               <p className="text-gray-600 italic mb-6">"Great experience working with TwentyOne Solutions. Their team delivered a stunning website with ease. I regularly get new customers calling from my website."</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                     <img src="/assets/images/Csaba.jpeg" alt="Csaba" className="w-full h-full object-cover" loading="lazy" width="48" height="48"/>
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-900">Csaba Duzy</h4>
                     <p className="text-sm text-gray-500">S n' J Automotive</p>
                  </div>
               </div>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white p-8">
               <div className="flex text-[#FD9800] mb-4">★★★★★</div>
               <p className="text-gray-600 italic mb-6">"Had an amazing experience working with TwentyOne Solutions. Their team created a beautiful website giving us online credibility and more business!"</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                     <img src="/assets/images/HuffPaintingCo-screenshot.png" alt="Cory Huff" className="w-full h-full object-cover" loading="lazy" width="48" height="48"/>
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-900">Cory Huff</h4>
                     <p className="text-sm text-gray-500">Huff Painting Co</p>
                  </div>
               </div>
            </Card>

            <Card className="border-0 shadow-lg bg-white p-8">
               <div className="flex text-[#FD9800] mb-4">★★★★★</div>
               <p className="text-gray-600 italic mb-6">"We have a fairly newer company and did not have a website. Tyler reached out to us at the perfect timing as I was attempting to work with a website creator via a popular app. It went horrible. I lost money and time. Tyler helped us construct our idea and bring it to life. We are thrilled with his skillset and ability to produce. We love and are so proud of our website now."</p>
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

      {/* FAQ Section */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold font-heading text-gray-900 text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
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
                  We do Google marketing, or Search Engine Optimization (SEO). SEO is the best long term investment you can make for your business. Once you rank on the top for searches customers use to find services like yours, you stay there. SEO is a long term strategy and because of that we ask for a 12 month commitment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-gray-100 rounded-lg px-6 bg-[#fdfaf5]">
                <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FD9800]">Do you own the domain or me?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  You own the domain (and assets). We don’t take hostages. Even if we bought the domain for you, if you cancel with us we transfer the domain for you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border border-gray-100 rounded-lg px-6 bg-[#fdfaf5]">
                <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FD9800]">What’s the turnaround time for a website?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  We can deliver a website preview in 24 hours! A 3-4 page website can deliver within 7 days. If we’re building out more pages or you need extra features, it’ll take a bit longer. Either way, timeline depends on how fast you get back to us with content and approvals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border border-gray-100 rounded-lg px-6 bg-[#fdfaf5]">
                <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FD9800]">How much does a website cost?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Business websites are a one time fee with a 30% deposit and the rest due upon website completion. Website hosting and domain is $39/month.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-6" className="border border-gray-100 rounded-lg px-6 bg-[#fdfaf5]">
                <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FD9800]">Will my website be mobile friendly?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Of course. Every site we build works perfectly on phones, tablets, and desktops.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border border-gray-100 rounded-lg px-6 bg-[#fdfaf5]">
                <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FD9800]">Is there a limit to design revisions?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Nope. We keep refining the design until you’re satisfied.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="border border-gray-100 rounded-lg px-6 bg-[#fdfaf5]">
                <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FD9800]">Who provides the website content?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  We highly recommend professional photography. If not, we can use professional stock content and write copy for you. It’s no additional charge.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9" className="border border-gray-100 rounded-lg px-6 bg-[#fdfaf5]">
                <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FD9800]">Do you offer ongoing maintenance post-launch?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes. Maintenance plans start at $279/month depending on scope.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10" className="border border-gray-100 rounded-lg px-6 bg-[#fdfaf5]">
                <AccordionTrigger className="text-lg font-bold text-gray-900 hover:text-[#FD9800]">How does the design process work?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  If you like your initial website, great! We will launch it after your edits. If not, we start with a kickoff call and a quick questionnaire. Then we send you three design templates to choose from. Once you pick your favorite, we build the site, send it over for review, make any tweaks you need, and launch. Simple and streamlined.
                </AccordionContent>
              </AccordionItem>
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
