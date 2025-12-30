import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navigation, Footer } from '@/components/layout';
import { Card } from '@/components/ui/card';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { WaveSection } from '@/components/ui/wave-section';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fdfaf5] text-gray-800 font-sans">
      <Navigation />

      {/* Hero */}
      <WaveSection 
        className="pt-32 md:pt-40 pb-32" 
        disableTopWave
        backgroundImage="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/05/whitewater_sanclemente.webp"
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold font-heading text-gray-900">Focused on Local Service Businesses</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We work with contractors and local service businesses that want more calls. When someone lands on your site, it should be obvious what you do, where you work, and how to reach you.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We handle your website, hosting, support, and online marketing so you never have to think about it. Everything stays consistent, dialed in, and pointed at one thing, getting you more calls.
            </p>
          </div>
        </div>
      </section>

      {/* Why TwentyOne */}
      <section className="py-24 bg-[#fdfaf5]">
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
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#FD9800]">
                <span className="text-5xl font-bold text-gray-100 block mb-4">{item.num}</span>
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="border-0 shadow-xl bg-[#fdfaf5] p-8 md:p-12 relative">
            <div className="flex text-[#FD9800] mb-6 text-xl">★★★★★</div>
            <blockquote className="text-xl md:text-2xl text-gray-700 italic font-light leading-relaxed mb-8">
              "I wholeheartedly recommend TwentyOne for their exceptional talent and professionalism. They consistently deliver outstanding, high-quality products with creativity and precision."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img 
                  src="https://staging44.twentyonesolutions.com/wp-content/uploads/2024/03/img-1-1-e1711765153356-150x150.jpg" 
                  alt="John M. Kennedy, MD" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">John M. Kennedy, MD</h4>
                <p className="text-gray-600">Found & Creator, BREATHE</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Some of our Work */}
      <section className="py-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">Some of our Work</h2>
            <p className="text-lg text-gray-600">
              We have worked with clients all across California and US. We serve custom home builders, contractors, trades, and business professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="rounded-xl overflow-hidden shadow-lg mb-4">
                <AspectRatio ratio={16/10}>
                  <img 
                    src="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/08/Filger-Manufacturing-png.webp" 
                    alt="Filger Manufacturing" 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Filger Manufacturing</h3>
            </div>
            <div className="group">
              <div className="rounded-xl overflow-hidden shadow-lg mb-4">
                <AspectRatio ratio={16/10}>
                  <img 
                    src="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/02/LuxuryTahoePropertiesMockup.png" 
                    alt="Luxury Tahoe Properties" 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Diamond Construction</h3>
            </div>
            <div className="group">
              <div className="rounded-xl overflow-hidden shadow-lg mb-4">
                <AspectRatio ratio={16/10}>
                  <img 
                    src="https://staging44.twentyonesolutions.com/wp-content/uploads/2025/08/WCW_mockup_transparent-png.webp" 
                    alt="West Coast Washers" 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
              </div>
              <h3 className="text-xl font-bold text-gray-900">West Coast Washers</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">See what your custom website could look like in 24 hours.</p>
          <Button size="lg" className="h-14 px-10 text-lg bg-[#FD9800] hover:bg-[#e08600] text-white rounded-lg shadow-lg">
            Build Site Preview
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
