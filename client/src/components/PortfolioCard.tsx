import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  subtitle?: string;
  category?: string;
}

export const PortfolioCard = ({ title, description, image, link, subtitle, category }: PortfolioCardProps) => (
  <motion.div 
    variants={fadeIn} 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true }}
    className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-all h-full flex flex-col"
  >
    <div className="overflow-hidden relative">
      <AspectRatio ratio={16/10}>
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
        />
      </AspectRatio>
      {category && (
        <div className="absolute top-3 left-3">
          <span className="bg-[#FD9800] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
            {category}
          </span>
        </div>
      )}
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
