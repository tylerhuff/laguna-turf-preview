import React from 'react';
import { cn } from '@/lib/utils';

interface WaveSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  disableTopWave?: boolean;
  backgroundImage?: string;
  overlayOpacity?: number;
  bottomWaveColor?: string;
  priority?: boolean;
}

export function WaveSection({ 
  children, 
  className, 
  reverse, 
  disableTopWave = true, // Default to true as requested
  backgroundImage,
  overlayOpacity = 0.75, // Default overlay opacity - letting images shine through more
  bottomWaveColor = "#fdfaf5",
  priority = false,
  ...props 
}: WaveSectionProps) {
  return (
    <section className={cn("relative bg-white", className)} {...props}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="Background" 
            className="w-full h-full object-cover"
            fetchPriority={priority ? "high" : "auto"}
            loading={priority ? "eager" : "lazy"}
          />
          <div 
            data-template="hero-overlay"
            className="absolute inset-0 bg-white" 
            style={{ opacity: overlayOpacity }}
          />
        </div>
      )}

      {/* Top Wave: The White Hero section cutting UP into the Beige Header */}
      {!disableTopWave && (
        <div className="absolute top-0 left-0 right-0 h-16 md:h-24 w-full overflow-hidden leading-[0] z-10">
          <svg 
            viewBox="0 0 1440 120" 
            preserveAspectRatio="none" 
            className="w-full h-full"
          >
            {/* Fill with Beige to match the header above */}
            <path 
              fill="#fdfaf5" 
              fillOpacity="1" 
              d="M0,0 L1440,0 L1440,50 C1000,90 440,10 0,50 Z"
            ></path>
          </svg>
        </div>
      )}

      <div className="relative z-0">
        {children}
      </div>

      {/* Bottom Wave: The White Hero section cutting DOWN into the Beige Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 w-full overflow-hidden leading-[0] z-10">
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          {/* Fill with Beige to match the section below */}
          <path 
            fill={bottomWaveColor}
            fillOpacity="1" 
            d="M0,120 L1440,120 L1440,40 C1100,-20 900,120 720,40 C500,-40 200,80 0,20 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
