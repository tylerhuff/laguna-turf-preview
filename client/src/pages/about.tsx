import React from 'react';
import { SEO } from '@/components/seo';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navigation, Footer } from '@/components/layout';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { WaveSection } from '@/components/ui/wave-section';
import { toast } from 'sonner';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "TwentyOne Solutions",
      "description": "Web design & marketing agency for service businesses located in San Clemente, CA",
      "url": "https://twentyonesolutions.com/about-us",
      "logo": "/assets/images/logo.png"
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Request received!", {
      description: "We'll start building your preview and email you shortly.",
      duration: 5000,
    });
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-gray-800 font-sans">
      <SEO 
        title="About TwentyOne Solutions - Web Design San Clemente"
        description="Web design & marketing agency for service businesses located in San Clemente, CA. Focused on getting you more calls."
        canonical="/about-us"
        schema={aboutSchema}
      />
      <Navigation />

      {/* Hero */}
      <WaveSection 
        className="pt-32 md:pt-40 pb-48" 
        disableTopWave
        backgroundImage="/assets/images/whitewater_sanclemente.webp"
        overlayOpacity={0.75}
      >
        <div className="container mx-auto px-6 flex flex-col justify-center items-center text-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-5xl md:text-7xl font-bold font-heading mb-6 text-gray-900"
          >
            About TwentyOne
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-xl md:text-2xl font-light max-w-2xl text-gray-700"
          >
            Web design & marketing agency for service businesses located in San Clemente, CA
          </motion.p>
        </div>
      </WaveSection>

      {/* Intro */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-heading text-gray-900">Focused on Local Service Businesses</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-600 leading-relaxed">
              <p>
                We work with contractors and local service businesses that want more calls. When someone lands on your site, it should be obvious what you do, where you work, and how to reach you.
              </p>
              <p>
                We handle your website, hosting, support, and online marketing so you never have to think about it. Everything stays consistent, dialed in, and pointed at one thing, getting you more calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why TwentyOne */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">Why TwentyOne?</h2>
            <p className="text-lg text-gray-600">A few reasons clients stick with us.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Quick launch", desc: "Clear steps, quick turnaround, and you are live without weeks of back and forth." },
              { num: "02", title: "Proven Results", desc: "Built to get you more calls. Clear message, strong trust, and a simple path to contact you." },
              { num: "03", title: "Future Proof", desc: "We stay on top of the trends so you never have to worry about falling behind." }
            ].map((item, i) => (
              <div key={i} className="bg-[#fdfaf5] p-8 rounded-xl shadow-lg border-t-4 border-[#FD9800] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <span className="text-6xl font-bold text-[#FD9800]/20 absolute top-4 right-4">{item.num}</span>
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-2 relative z-10">{item.title}</h3>
                <p className="text-gray-600 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">Client Feedback</h2>
            <p className="text-lg text-gray-600">Don't just take our word for it.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl bg-white p-8 relative h-full flex flex-col">
              <div className="flex text-[#FD9800] mb-6 text-xl">★★★★★</div>
              <blockquote className="text-lg text-gray-600 italic font-light leading-relaxed mb-8 flex-grow">
                "I wholeheartedly recommend TwentyOne for their exceptional talent and professionalism. They consistently deliver outstanding, high-quality products."
              </blockquote>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 shadow-sm flex-shrink-0">
                  <img 
                    src="/assets/images/DrKennedy-thumb.jpg" 
                    alt="John M. Kennedy, MD" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">John M. Kennedy, MD</h4>
                  <p className="text-xs text-gray-500">Creator, BREATHE</p>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-xl bg-white p-8 relative h-full flex flex-col">
              <div className="flex text-[#FD9800] mb-6 text-xl">★★★★★</div>
              <blockquote className="text-lg text-gray-600 italic font-light leading-relaxed mb-8 flex-grow">
                "Tyler was great to work with and created a website for me which exceeded my expectations. He is efficient and has a good eye for design."
              </blockquote>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 shadow-sm flex-shrink-0">
                  <img 
                    src="/assets/images/Casey.jpg" 
                    alt="Casey Whittemore" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Casey Whittemore</h4>
                  <p className="text-xs text-gray-500">LMFT</p>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-xl bg-white p-8 relative h-full flex flex-col">
              <div className="flex text-[#FD9800] mb-6 text-xl">★★★★★</div>
              <blockquote className="text-lg text-gray-600 italic font-light leading-relaxed mb-8 flex-grow">
                "Great experience working with TwentyOne Solutions. Their team delivered a stunning website with ease. I regularly get new customers calling."
              </blockquote>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 shadow-sm flex-shrink-0">
                  <img 
                    src="/assets/images/Csaba.jpeg" 
                    alt="Csaba Duzy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Csaba Duzy</h4>
                  <p className="text-xs text-gray-500">S n' J Automotive</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Some of our Work */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">Some of our Work</h2>
            <p className="text-lg text-gray-600">
              We have worked with clients all across California and US. We serve custom home builders, contractors, trades, and business professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Filger Manufacturing",
                subtitle: "Manufacturing",
                description: "Figler Manufacturing specializes in high-precision machining for aerospace and defense. Their site highlights equipment and quality processes.",
                image: "/assets/images/Filger-Manufacturing.webp",
                link: "https://filger.com/"
              },
              {
                title: "Luxury Tahoe Properties",
                subtitle: "Real Estate",
                description: "Led by real estate professional Samantha Bass, focuses on high-end properties in the Lake Tahoe area.",
                image: "/assets/images/LuxuryTahoePropertiesMockup.png",
                link: "https://luxurytahoeproperties.com/"
              },
              {
                title: "West Coast Washers",
                subtitle: "Cleaning Services",
                description: "Specializes in commercial building exterior cleaning and pressure washing services across Southern California.",
                image: "/assets/images/WCW_mockup_transparent.webp",
                link: "https://westcoastwashersllc.com/"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-all h-full flex flex-col">
                <div className="overflow-hidden">
                  <AspectRatio ratio={16/10}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-xs font-bold text-[#FD9800] uppercase tracking-wide">{item.subtitle}</span>
                    <h3 className="text-2xl font-bold font-heading text-gray-900 mt-1 group-hover:text-[#FD9800] transition-colors">{item.title}</h3>
                  </div>
                  {/* Note: I added description to the data above to match the design. The original about.tsx didn't have descriptions visible in the simplified view? No, it did not have descriptions in the simplified grid view I replaced. Wait, let me check the previous read. */}
                  {/* The previous read showed no descriptions in the 'Some of our Work' section in about.tsx. The user wants the CARD style. The CARD style includes a description. I should probably add descriptions or leave them empty? The user said "Change the portfolio cards on every other page to match the ones on the portfolio page." This implies full card content. I've added descriptions based on portfolio.tsx data for these items. */}
                  {/* Wait, the previous read of about.tsx lines 190-247 did NOT have descriptions. Just image, badge, title, arrow. */}
                  {/* I should add the descriptions to make it look correct. I sourced them from portfolio.tsx. */}
                  {/* Re-checking about.tsx content to be sure. */}
                  {/* about.tsx lines 190-247: It has image, badge (absolute), Title + Arrow. No description. */}
                  {/* I will include the description as I did in the data array above. */}
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{item.description}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <Button variant="outline" className="w-full border-gray-200 hover:border-[#FD9800] hover:text-[#FD9800] group-hover:bg-[#fdfaf5]">
                      Visit Website <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
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
                  <form className="space-y-6" onSubmit={handleSubmit}>
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
