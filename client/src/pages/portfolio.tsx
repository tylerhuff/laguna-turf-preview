import React from 'react';
import { SEO } from '@/components/seo';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navigation, Footer } from '@/components/layout';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ceilingProImg from '@assets/generated_images/website_mockup_for_ceiling_pro.png';
import sierraElectricImg from '@assets/generated_images/website_mockup_for_sierra_precision_electric.png';
import cleaningSolutionImg from '@assets/generated_images/website_mockup_for_cleaning_solution_building_corp.png';

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
  <motion.div variants={fadeIn} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-all h-full flex flex-col">
    <div className="overflow-hidden">
      <AspectRatio ratio={16/10}>
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
        />
      </AspectRatio>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="mb-2">
        {subtitle && <span className="text-xs font-bold text-[#FD9800] uppercase tracking-wide">{subtitle}</span>}
        <h3 className="text-2xl font-bold font-heading text-gray-900 mt-1 group-hover:text-[#FD9800] transition-colors">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="mt-auto">
        <Button variant="outline" className="w-full border-gray-200 hover:border-[#FD9800] hover:text-[#FD9800] group-hover:bg-[#fdfaf5]">
          Visit Website <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </a>
    </div>
  </motion.div>
);

import { WaveSection } from '@/components/ui/wave-section';

type Category = 'Professional Services' | 'Construction' | 'Painters' | 'Trades';

interface PortfolioItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  category: Category;
}

const portfolioItems: PortfolioItem[] = [
  // Professional Services
  {
    title: "Case Whittemore, LMFT",
    subtitle: "Healthcare",
    description: "A licensed Marriage and Family Therapist with a certification in perinatal mental health, she helps women navigate various challenges.",
    image: "/assets/images/CaseWhitteMoreMockUp.png",
    link: "https://caseywhittemorelmft.com/",
    category: "Professional Services"
  },
  {
    title: "Fan Fusion Ventures",
    subtitle: "Sports Entertainment",
    description: "Fan Fusion provides exciting daily fantasy sports experiences tailored for passionate sports fans.",
    image: "/assets/images/FanFusionMockup.png",
    link: "https://fanfusionventures.com/",
    category: "Professional Services"
  },
  {
    title: "Filger Manufacturing",
    subtitle: "Aerospace",
    description: "Specializes in high-precision machining for aerospace and defense. Site highlights equipment and quality processes.",
    image: "/assets/images/Filger-Manufacturing.webp",
    link: "https://filger.com/",
    category: "Professional Services"
  },
  {
    title: "TSA Group Ltd",
    subtitle: "Consulting",
    description: "Transmission line siting and right-of-way consulting. Highlights current and past projects.",
    image: "/assets/images/TSA-Group-Limited.webp",
    link: "https://tsagroupconsulting.com/",
    category: "Professional Services"
  },
  {
    title: "Luxury Tahoe Properties",
    subtitle: "Real Estate",
    description: "Led by real estate professional Samantha Bass, focuses on high-end properties in the Lake Tahoe area.",
    image: "/assets/images/LuxuryTahoePropertiesMockup.png",
    link: "https://www.tluxp.com/",
    category: "Professional Services"
  },
  {
    title: "Ascend Equities",
    subtitle: "Real Estate Investment",
    description: "Specializing in real estate investment and asset management strategies for high-net-worth individuals.",
    image: "/assets/images/AscendEquities.webp",
    link: "https://ascendequities.com/",
    category: "Professional Services"
  },

  // Construction
  {
    title: "Diamond Construction",
    subtitle: "Construction",
    description: "Established in 2013, specializes in waterproofing solutions and gypsum concrete services.",
    image: "/assets/images/DiamondConstructionMockup.png",
    link: "https://diamondconstructionandgypsum.com/",
    category: "Construction"
  },
  {
    title: "Smith & Eastwood Construction",
    subtitle: "General Contractors",
    description: "Premier construction services delivering quality craftsmanship for residential and commercial projects.",
    image: "/assets/images/SmithandEastWoodConstruction.webp",
    link: "https://smitheastwoodbuild.com/",
    category: "Construction"
  },

  // Painters
  {
    title: "Huff Painting Co",
    subtitle: "Commercial Painting",
    description: "With over 40 years of experience, this family-owned business serves the San Gabriel Valley with residential and commercial painting.",
    image: "/assets/images/HuffPaintingCoMockup.png",
    link: "https://huffpainting.co/",
    category: "Painters"
  },
  {
    title: "Wrangler Painting",
    subtitle: "Residential Painting",
    description: "Located in Los Angeles, California, this company focuses on residential painting and power washing services.",
    image: "/assets/images/WranglerPaintingMockup.webp",
    link: "https://wranglerpainting.com/",
    category: "Painters"
  },

  // Trades
  {
    title: "West Coast Washers",
    subtitle: "Exterior Cleaning",
    description: "Professional exterior cleaning for homes and businesses in Southern California featuring a modern site.",
    image: "/assets/images/WCW_mockup_transparent.webp",
    link: "https://westcoastwashersllc.com/",
    category: "Trades"
  },
  {
    title: "Ceiling Pro",
    subtitle: "Cleaning & Restoration",
    description: "Professional ceiling cleaning and restoration services for commercial and residential properties.",
    image: ceilingProImg,
    link: "https://ceilingprosf.com/",
    category: "Trades"
  },
  {
    title: "Sierra Precision Electric",
    subtitle: "Electrical Contractor",
    description: "Expert electrical services for the Truckee and Tahoe region, specializing in residential and commercial projects.",
    image: sierraElectricImg,
    link: "https://truckeetahoeelectrical.com/",
    category: "Trades"
  },
  {
    title: "Cleaning Solution Building Corp",
    subtitle: "Commercial Cleaning",
    description: "Commercial Cleaning Services in Long Island, Nassau, & Suffolk. Delivering quality cleaning solutions since 2017.",
    image: cleaningSolutionImg,
    link: "https://cleaningsolutionbuildingcorp.com/",
    category: "Trades"
  }
];

export default function PortfolioPage() {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "TwentyOne Solutions Portfolio",
    "description": "Our work with home builders, contractors, trades, and professional services businesses.",
    "url": "https://twentyonesolutions.com/portfolio",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": portfolioItems.map(item => ({
        "@type": "CreativeWork",
        "name": item.title,
        "description": item.description
      }))
    }
  };

  const categories: Category[] = ['Professional Services', 'Construction', 'Painters', 'Trades'];

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-gray-800 font-sans">
      <SEO 
        title="Our Portfolio - TwentyOne Solutions"
        description="View our web design work for contractors, trades, and professional service businesses."
        canonical="/portfolio"
        schema={portfolioSchema}
      />
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

      {/* Portfolio Sections */}
      <div className="space-y-20 pb-24 bg-[#fdfaf5]">
        {categories.map((category) => (
          <section key={category} className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-3xl font-bold font-heading text-gray-900">{category}</h3>
              <div className="h-px bg-gray-200 flex-grow"></div>
            </div>
            
            <motion.div 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {portfolioItems
                .filter(item => item.category === category)
                .map((item, index) => (
                  <PortfolioCard 
                    key={index}
                    {...item}
                  />
                ))}
            </motion.div>
          </section>
        ))}
      </div>

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
