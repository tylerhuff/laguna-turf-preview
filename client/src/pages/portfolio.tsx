import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navigation, Footer } from '@/components/layout';
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

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  subtitle?: string;
}

const PortfolioCard = ({ title, description, image, link, subtitle }: PortfolioCardProps) => (
  <motion.div variants={fadeIn} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-all">
    <div className="overflow-hidden">
      <AspectRatio ratio={16/10}>
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
        />
      </AspectRatio>
    </div>
    <div className="p-6">
      <div className="mb-2">
        {subtitle && <span className="text-xs font-bold text-[#FD9800] uppercase tracking-wide">{subtitle}</span>}
        <h3 className="text-2xl font-bold font-heading text-gray-900 mt-1 group-hover:text-[#FD9800] transition-colors">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="w-full border-gray-200 hover:border-[#FD9800] hover:text-[#FD9800] group-hover:bg-[#fdfaf5]">
          Visit Website <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </a>
    </div>
  </motion.div>
);

import { WaveSection } from '@/components/ui/wave-section';

export default function PortfolioPage() {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "TwentyOne Solutions Portfolio",
    "description": "Our work with home builders, contractors, trades, and professional services businesses.",
    "url": "https://twentyonesolutions.com/portfolio",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "CreativeWork",
          "name": "Wrangler Painting",
          "description": "Residential Painting Website"
        },
        {
          "@type": "CreativeWork",
          "name": "Diamond Construction",
          "description": "Construction Website"
        },
        {
          "@type": "CreativeWork",
          "name": "Fan Fusion Ventures",
          "description": "Sports Entertainment Website"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-gray-800 font-sans">
      <Helmet>
        <title>Our Portfolio - TwentyOne Solutions</title>
        <meta name="description" content="View our web design work for contractors, trades, and professional service businesses." />
        <script type="application/ld+json">
          {JSON.stringify(portfolioSchema)}
        </script>
      </Helmet>
      <Navigation />

      {/* Hero */}
      <WaveSection 
        className="pt-32 md:pt-40 pb-48" 
        disableTopWave
        backgroundImage="/assets/images/portfolio-hero.webp"
        overlayOpacity={0.75}
      >
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.h1  
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6"
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-xl text-gray-600 font-light max-w-2xl mx-auto"
          >
            We work with home builders, contractors, trades, and professional services businesses.
          </motion.p>
        </div>
      </WaveSection>

      {/* Intro */}
      <section className="py-16 bg-[#fdfaf5]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Some of our Work</h2>
          <p className="text-lg text-gray-600">
            Just as we’ve crafted exceptional websites for our clients, we can do the same for you. Our team will understand your unique needs to create stunning websites that resonate with your audience.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24 bg-[#fdfaf5]">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <PortfolioCard 
              title="Wrangler Painting"
              subtitle="Residential Painting"
              description="Located in Los Angeles, California, this company focuses on residential painting and power washing services."
              image="/assets/images/WranglerPaintingMockup.webp"
              link="https://wranglerpainting.com/"
            />
            <PortfolioCard 
              title="Diamond Construction"
              subtitle="Construction"
              description="Established in 2013, specializes in waterproofing solutions and gypsum concrete services."
              image="/assets/images/DiamondConstructionMockup.png"
              link="https://diamondconstructionandgypsum.com/"
            />
            <PortfolioCard 
              title="Fan Fusion Ventures"
              subtitle="Sports Entertainment"
              description="Fan Fusion provides exciting daily fantasy sports experiences tailored for passionate sports fans."
              image="/assets/images/FanFusionMockup.png"
              link="https://fanfusionventures.com/"
            />
            <PortfolioCard 
              title="Luxury Tahoe Properties"
              subtitle="Real Estate"
              description="Led by real estate professional Samantha Bass, focuses on high-end properties in the Lake Tahoe area."
              image="/assets/images/LuxuryTahoePropertiesMockup.png"
              link="https://luxurytahoeproperties.com/"
            />
            <PortfolioCard 
              title="Case Whittemore, LMFT"
              subtitle="Healthcare"
              description="A licensed Marriage and Family Therapist with a certification in perinatal mental health, she helps women navigate various challenges."
              image="/assets/images/CaseWhitteMoreMockUp.png"
              link="https://caseywhittemorelmft.com/"
            />
            <PortfolioCard 
              title="Huff Painting Co"
              subtitle="Commercial Painting"
              description="With over 40 years of experience, this family-owned business serves the San Gabriel Valley with residential and commercial painting."
              image="/assets/images/HuffPaintingCoMockup.png"
              link="https://huffpainting.co/"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="border-0 shadow-xl bg-[#fdfaf5] p-8 md:p-12 relative">
            <div className="flex text-[#FD9800] mb-6 text-xl">★★★★★</div>
            <blockquote className="text-xl md:text-2xl text-gray-700 italic font-light leading-relaxed mb-8">
              "I wholeheartedly recommend TwentyOne for their exceptional talent and professionalism. They consistently deliver outstanding, high-quality products with creativity and precision."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img 
                  src="/assets/images/DrKennedy-thumb.jpg" 
                  alt="John M. Kennedy, MD" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">John M. Kennedy, MD</h4>
                <p className="text-gray-600">Founder & Creator, B.R.E.A.T.H.E</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#fdfaf5]">
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
